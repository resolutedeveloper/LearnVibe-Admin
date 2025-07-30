import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { deleteUser, getUsers, UpdateUser } from "@/lib/api";
import { DecryptFE, EncryptFE } from "@/lib/encrypt";
import { Pencil, Trash2 } from "lucide-react";

const Users = () => {
  const token = localStorage.getItem("AdminToken") || ""
  const [apiUsers, setApiUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const GetUsers = async (page = currentPage, limit = usersPerPage) => {
    setLoading(true);
    try {
      const res = await getUsers(token, page, limit);
      if (res.status === "success") {
        setApiUsers(res.users || []);
        setTotalPages(res.totalPages || 1);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching users", error);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    GetUsers(currentPage, usersPerPage);
  }, [currentPage, usersPerPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const safeDecrypt = (val: any) => {
    try {
      return val ? DecryptFE(val) : "-";
    } catch {
      return "N/A";
    }
  };

  // If you want search to happen on the frontend
  const filteredUsers = apiUsers.filter((user: any) => {
    const fullText = `${safeDecrypt(user.FirstName)} ${safeDecrypt(
      user.LastName
    )} ${safeDecrypt(user.EmailID)}`.toLowerCase();
    return fullText.includes(searchQuery.toLowerCase());
  });


  const handleDelete = async (id: string) => {
    try {
      const res = await deleteUser(id, token);
      console.log("User deleted:", res.status);
      if (res.status == "success") {
        await GetUsers()
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const handleEditClick = (user: any) => {
    setSelectedUser({
      _id: user._id,
      FirstName: safeDecrypt(user.FirstName),
      LastName: safeDecrypt(user.LastName),
      EmailID: safeDecrypt(user.EmailID),
    });
    setShowModal(true);
  };

  const handleUpdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdateSubmit = async () => {
    const payload: any = {
      // _id: selectedUser._id,
      FirstName: EncryptFE(selectedUser.FirstName),
      LastName: EncryptFE(selectedUser.LastName),
      EmailID: EncryptFE(selectedUser.EmailID),
    };

    const id = selectedUser._id
    console.log("Updated user data:", payload);
    const res = await UpdateUser(payload, id, token)
    // TODO: Call your updateUser API here
    console.log(res);
    // await updateUser(payload, token);
    setShowModal(false);
    await GetUsers();
  };

  return (
    <div className="flex w-full bg-white">
      {/* <Sidebar /> */}
      <div className="max-w-15xl flex-2">
        {/* Title */}
        <div className="flex flex-wrap items-center justify-between mb-5 gap-4">
          <h2 className="text-2xl font-semibold">User Record</h2>
        </div>

        {/* 🔍 Search + New */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-3 mb-3">
          <Input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-white text-black rounded-sm w-full sm:w-64"
          />
          <Link to="/newusers">
            <Button className="bg-[rgb(134,70,244)] font-normal text-white px-6 py-2 rounded-sm">
              New
            </Button>
          </Link>
        </div>

        {/* 📋 Table */}
        <div className="rounded-sm border overflow-hidden shadow-sm">
          <Table className="text-center text-sm">
            <TableHeader className="bg-gray-200">
              <TableRow>
                <TableHead className="py-4 px-2 text-left">Sr. No</TableHead>
                <TableHead className="py-4 px-0">First Name</TableHead>
                <TableHead className="py-4 px-0">Last Name</TableHead>
                {/* <TableHead className="py-4 px-0">Username</TableHead> */}
                <TableHead className="py-4 px-0">Email ID</TableHead>
                <TableHead className="py-4 px-0">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>

              {loading ? (<TableRow>
                <TableCell colSpan={6} className="text-center text-black py-4">
                  <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-t-[#8646f4] border-gray-200" />
                  </div>
                </TableCell>
              </TableRow>) : (
                filteredUsers.length > 0 ? (
                  filteredUsers.map((user: any, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="text-black text-left px-5">
                        {(currentPage - 1) * usersPerPage + idx + 1}
                      </TableCell>

                      <TableCell className="text-black text-left py-4 px-0">
                        {safeDecrypt(user.FirstName)}
                      </TableCell>
                      <TableCell className="text-black text-left py-4 px-0">
                        {safeDecrypt(user.LastName)}
                      </TableCell>
                      {/* <TableCell className="text-black text-left py-4 px-0">
                        {safeDecrypt(user.username)}
                      </TableCell> */}
                      <TableCell className="text-black text-left py-4 px-0">
                        {safeDecrypt(user.EmailID)}
                      </TableCell>
                      <TableCell className="flex gap-3 text-lg text-black py-4 px-0">
                        <button className="" onClick={() => handleEditClick(user)}>
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(user._id)}>
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-black py-4">
                      No users found.
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>

        {/* ⬇️ Pagination + Page Size */}
        <div className="flex flex-col md:flex-row justify-end items-center gap-3 mt-4 mb-4">
          <Pagination className="w-fit items-end mr-2">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  className="text-black bg-gray-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                  }}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === i + 1}
                    className={
                      currentPage === i + 1
                        ? "text-black bg-gray-200 rounded-sm"
                        : ""
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(i + 1);
                    }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  className="text-black bg-gray-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

          <div className="flex items-center gap-2">
            <span className="text-black">Rows per page:</span>
            <Select
              value={usersPerPage.toString()}
              onValueChange={(value) => {
                setUsersPerPage(parseInt(value));
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-20 text-black bg-gray-200">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-gray-200 text-black">
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="15">15</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {
        showModal && selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md w-[90%] max-w-md">
              <h3 className="text-xl font-semibold mb-4">Edit User</h3>

              <div className="space-y-3">
                <Input
                  name="FirstName"
                  placeholder="First Name"
                  value={selectedUser.FirstName}
                  onChange={handleUpdateChange}
                />
                <Input
                  name="LastName"
                  placeholder="Last Name"
                  value={selectedUser.LastName}
                  onChange={handleUpdateChange}
                />
                <Input
                  name="EmailID"
                  placeholder="Email ID"
                  value={selectedUser.EmailID}
                  onChange={handleUpdateChange}
                />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <Button
                  variant="outline"
                  onClick={() => setShowModal(false)}
                  className="rounded-sm"
                >
                  Cancel
                </Button>
                <Button onClick={handleUpdateSubmit} className="bg-[rgb(134,70,244)] rounded-sm">
                  Update
                </Button>
              </div>
            </div>
          </div>
        )
      }

    </div >
  );
};

export default Users;
