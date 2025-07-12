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
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
// import Sidebar from "./Sidebar";

const Subscription = () => {
  return (
    <div className="flex w-full bg-white ">
      <Sidebar />

      <div className="max-w-7xl flex-1 p-4 ">
        {/* Header */}
        <div className="flex  items-center justify-between mb-5 gap-4">
          {/* <h2 className="text-2xl font-semibold">Subscription Details</h2> */}
 {/* <div className="flex flex-wrap items-center justify-between mb-5 gap-4"> */}
          {/* Title and New Button */}
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold ">Subscription Details</h2>
          </div>
        {/* </div> */}
        </div>
        <div className="flex justify-end mb-3">
          <Link to="/addsubscription">
            <Button className="bg-[rgb(134,70,244)]   text-white flex items-center gap-2 font-normal rounded-sm    ">
              <Plus className="w-4 h-4" />
              Add Subscription
            </Button>
          </Link>
</div>
        {/* Table */}
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
              </TableRow>
            </TableHeader>

            <TableBody className="text-left">
              <TableRow>
                <TableCell className="py-4 px-3">1</TableCell>
                <TableCell className="py-4 px-0">Basic</TableCell>
                <TableCell className="py-4 px-0">$10</TableCell>
                <TableCell className="py-4 px-0">10</TableCell>
                <TableCell className="py-4 px-0">5</TableCell>
                <TableCell className="py-4 px-0">PDF, DOCX</TableCell>
                <TableCell className="py-4 px-0">5</TableCell>
                <TableCell className="py-4 px-0">10</TableCell>
                <TableCell className="py-4 px-0">Easy</TableCell>
              </TableRow>

              <TableRow>
                <TableCell  className="py-4 px-3">2</TableCell>
                <TableCell className="py-4 px-0">Standard</TableCell>
                <TableCell className="py-4 px-0">$20</TableCell>
                <TableCell className="py-4 px-0">10</TableCell>
                <TableCell className="py-4 px-0">50</TableCell>
                <TableCell className="py-4 px-0">PDF, DOCX, PPT</TableCell>
                <TableCell className="py-4 px-0">10</TableCell>
                <TableCell className="py-4 px-0">20</TableCell>
                <TableCell className="py-4 px-0">Easy, Medium</TableCell>
              </TableRow>

              <TableRow>
                <TableCell  className="py-4 px-3">3</TableCell>
                <TableCell className="py-4 px-0">Premium</TableCell>
                <TableCell className="py-4 px-0">$40</TableCell>
                <TableCell className="py-4 px-0">Unlimited</TableCell>
                <TableCell className="py-4 px-0">50</TableCell>
                <TableCell className="py-4 px-0">PDF, DOCX, PPT, XLS</TableCell>
                <TableCell className="py-4 px-0">Unlimited</TableCell>
                <TableCell className="py-4 px-0">50</TableCell>
                <TableCell className="py-4 px-0">All Levels</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
