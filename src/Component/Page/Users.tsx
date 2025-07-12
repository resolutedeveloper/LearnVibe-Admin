import React from "react";
import Sidebar from "./Sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaEdit, FaTrash } from "react-icons/fa";
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
import { Input } from "@/components/ui/input"; // 🔥 Search Input from shadcn

const Users = () => {
  const users = [
    {
      firstName: "Preet",
      lastName: "Khut",
      username: "PreetK",
      email: "Preet2001@gmail.com",
    },
    {
      firstName: "Nitin",
      lastName: "Kachadiya",
      username: "Nitin.kachadiya",
      email: "Nitin.kachadiya@gmail.com",
    },
    {
      firstName: "Jaimin",
      lastName: "Patel",
      username: "jaimin.patel",
      email: "jaimin.patel@gmail.com",
    },
    {
      firstName: "Raju",
      lastName: "Kanani",
      username: "Raju.K",
      email: "Raju.Kanani@gmail.com",
    },
    {
      firstName: "Mahesh",
      lastName: "Balar",
      username: "mahesh.Balar",
      email: "mahesh.Balar@gmail.com",
    },
    {
      firstName: "Janesh",
      lastName: "Mavani",
      username: "JaneshM",
      email: "Janesh200@gmail.com",
    },
    {
      firstName: "Dhaval",
      lastName: "Patel",
      username: "Dpatel",
      email: "Dhaval.patel@gmail.com",
    },
    {
      firstName: "Ravi",
      lastName: "Parmar",
      username: "RaviP",
      email: "Ravi123@gmail.com",
    },
    {
      firstName: "Vinay",
      lastName: "Patel",
      username: "Vpatel",
      email: "Vinay@gmail.com",
    },
    {
      firstName: "mahi",
      lastName: "Rajput",
      username: "MahiiR",
      email: "mahi224@gmail.com",
    },
  ];

  const [currentPage, setCurrentPage] = React.useState(1);
  const [usersPerPage, setUsersPerPage] = React.useState(5);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.username} ${user.email}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const handlePageChange = (page:number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex  w-full bg-white">
      <Sidebar />
      <div className="max-w-7xl flex-1 p-4 ">
        <div className="flex flex-wrap items-center justify-between mb-5 gap-4">
          {/* Title and New Button */}
          <div className="flex items-center gap-4">
            <h2 className="text-2xl  font-semibold ">User Record</h2>
          </div>
        </div>  

        {/* 🔍 Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-3 mb-3">
          {/* Search Input */}
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
          {/* New User Button */}
          <Link to="/newusers">
            <Button className="bg-[rgb(134,70,244)] font-normal text-white px-6 py-2 rounded-sm">
              New
            </Button>
          </Link>

          
        </div>

        {/* 📋 Table */}
        <div className="rounded-sm border overflow-hidden shadow-sm">
          <Table className="text-center  text-sm">
            <TableHeader className="bg-gray-200 ">
              <TableRow className="text-left ">
                <TableHead className="py-4 px-2">Sr. No</TableHead>
                <TableHead className="py-4 px-0 ">Action</TableHead>
                <TableHead className="py-4 px-0">First Name</TableHead>
                <TableHead className="py-4 px-0">Last Name</TableHead>
                <TableHead className="py-4 px-0">Username</TableHead>
                <TableHead className="py-4 px-0">Email ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user, idx) => (
                  <TableRow key={idx}>
                    <TableCell className=" text-black text-left px-5">
                      {(currentPage - 1) * usersPerPage + idx + 1}
                    </TableCell>
                    <TableCell className="flex gap-3 text-lg  text-black py-4 px-0">
                      <FaEdit className="hover:text-blue-600 cursor-pointer " />
                      <FaTrash className="hover:text-red-600 cursor-pointer" />
                    </TableCell>
                    <TableCell className="text-black text-left py-4 px-0">
                      {user.firstName}
                    </TableCell>
                    <TableCell className="text-black text-left py-4 px-0">
                      {user.lastName}
                    </TableCell>
                    <TableCell className="text-black text-left py-4 px-0">
                      {user.username}
                    </TableCell>
                    <TableCell className="text-black text-left py-4 px-0">
                      {user.email}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center text-black py-4"
                  >
                    No users found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* ⬇️ Pagination + Rows per page */}
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
            <span className=" text-black">Rows per page:</span>
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
                <SelectItem value="5" className="text-black">
                  5
                </SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="15">15</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
