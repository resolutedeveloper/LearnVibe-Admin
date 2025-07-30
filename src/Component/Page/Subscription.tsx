import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { deleteSubscription, getSubscription } from "@/lib/api";
import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner"

const Subscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("AdminToken") || ""
  const navigate = useNavigate();
  const GetSubscription = async () => {
    setIsLoading(true);
    try {
      const res = await getSubscription(token);
      if (res?.status === "success") {
        setSubscriptions(res.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Failed to fetch subscriptions", error);
      setIsLoading(false);
    }
  };


  useEffect(() => {
    GetSubscription()
  }, [])

  const handleEdit = (sub: any) => {
    navigate("/addsubscription", { state: { editMode: true, data: sub } });
  };


  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSubscription(id, token);
      if (res?.status == "success") {
        toast.success("Subscription deleted!");
        setSubscriptions(prev => prev.filter((sub: any) => sub.ID !== id));
      } else {
        toast.error(res?.message || "Failed to delete subscription.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Something went wrong while deleting.");
    }
  };
  return (
    <div className="flex w-full bg-white ">
      <div className="max-w-15xl flex-1 ">
        <div className="flex  items-center justify-between mb-5 gap-4">
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold ">Subscription Details</h2>
          </div>
        </div>
        <div className="flex justify-end mb-3">
          <Link to="/addsubscription">
            <Button className="bg-[rgb(134,70,244)]   text-white flex items-center gap-2 font-normal rounded-sm    ">
              <Plus className="w-4 h-4" />
              Add Subscription
            </Button>
          </Link>
        </div>
        <div className="bg-white shadow-sm rounded-sm overflow-hidden ">
          <Table className="text-center text-sm">
            <TableHeader className="bg-gray-200">
              <TableRow className="text-left ">
                <TableHead className="py-5 px-3">#</TableHead>
                <TableHead className="py-5 px-0">
                  Subscription
                  <br />
                  Title
                </TableHead>
                <TableHead className="py-5 px-0">
                  Charges <br />
                  Month
                </TableHead>
                <TableHead className="py-5 px-0">
                  Documents <br />
                  Allowed
                </TableHead>
                <TableHead className="py-5 px-0">
                  Pages <br /> Document
                </TableHead>
                <TableHead className="py-5 px-0">
                  Allowed <br />
                  Formats
                </TableHead>
                <TableHead className="py-5 px-0">
                  Quizzes <br />
                  Allowed
                </TableHead>
                <TableHead className="py-5 px-0">
                  Questions <br />
                  Quiz
                </TableHead>
                <TableHead className="py-5 px-0">
                  Difficulty <br />
                  Level
                </TableHead>
                <TableHead className="py-5 px-0">Action</TableHead>
              </TableRow>
            </TableHeader>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-4">
                  <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-t-[#8646f4] border-gray-200" />
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              <TableBody className="text-left">
                {subscriptions.length > 0 ? (
                  subscriptions.map((sub: any, index: number) => (
                    <TableRow key={sub.ID}>
                      <TableCell className="py-4 px-3">{index + 1}</TableCell>
                      <TableCell className="py-4 px-0">{sub.SubscriptionTitle}</TableCell>
                      <TableCell className="py-4 px-0">${sub.Price}</TableCell>
                      <TableCell className="py-4 px-0">{sub.NumOfDocuments}</TableCell>
                      <TableCell className="py-4 px-0">{sub.NoOfPages}</TableCell>
                      <TableCell className="py-4 px-0">{sub.AllowedFormats}</TableCell>
                      <TableCell className="py-4 px-0">{sub.NumOfQuiz}</TableCell>
                      <TableCell className="py-4 px-0">{sub.NumberOfQuest}</TableCell>
                      <TableCell className="py-4 px-0">{sub.DifficultyLevels}</TableCell>
                      <TableCell className="py-4 px-0">
                        <div className="flex gap-2 items-center">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="text-blue-600 hover:text-blue-800 cursor-pointer"
                            onClick={() => handleEdit(sub)}
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="text-red-600 hover:text-red-800 cursor-pointer"
                            onClick={() => handleDelete(sub.ID)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-4">
                      No subscription data found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            )}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
