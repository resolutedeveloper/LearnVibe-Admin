
import Sidebar from "./Sidebar";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

const ReportsSubscription = () => {


  const subscriptionData = [
    {
      name: "John Doe",
      tier: "Premium",
      status: "Active",
      renewals: 2,
    },
    {
      name: "Jane Smith",
      tier: "Free",
      status: "Inactive",
      renewals: 0,
    },
  ];

  return (
    <div className="flex h-screen  text-white">
      {/* <Sidebar /> */}
      <div className="p-4 space-y-2 flex-1 overflow-auto">
        <h2 className="text-2xl  text-black font-semibold mb-5">
          Subscription Report
        </h2>

      

        {/* <Sidebar /> */}
        <div className="space-y-5">
          <div className="flex-1">
            <Card className="rounded-sm gap-0 py-2">
              <div className="px-2 pb-2 ">
                <h2 className="text-lg font-semibold ">
                  Subscription Records
                </h2>
              </div>
      
              <CardContent className="px-2">
                <Table>
                  <TableHeader className="bg-gray-200 ">
                    <TableRow>
                      <TableHead className="py-4 px-3 ">#</TableHead>
                      <TableHead className="py-4 px-0">Name</TableHead>
                      <TableHead className="py-4 px-0">Tier</TableHead>
                      <TableHead className="py-4 px-0">Status</TableHead>
                      <TableHead className="py-4 px-0">Renewals</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscriptionData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="py-4 px-3">{index + 1}</TableCell>
                        <TableCell className="py-4 px-0">{item.name}</TableCell>
                        <TableCell className="py-4 px-0">{item.tier}</TableCell>
                        <TableCell className="py-4 px-0">
                          {item.status}
                        </TableCell>
                        <TableCell className="py-4 px-0">
                          {item.renewals}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div className="flex-1 ">
            <Card className="rounded-sm gap-0 py-2">
               <div className="px-2 pb-2">
                <h2 className="text-lg font-semibold ">
                  Upcoming Renewals
                </h2>
              </div>
            
              <CardContent className="px-2">
                <Table>
                  <TableHeader className="bg-gray-200 ">
                    <TableRow>
                      <TableHead className="py-4 px-3 ">#</TableHead>
                      <TableHead className="py-4 px-0 ">Name</TableHead>
                      <TableHead className="py-4 px-0 ">Tier</TableHead>
                      <TableHead className="py-4 px-0">Status</TableHead>
                      <TableHead className="py-4 px-0">Renewals</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscriptionData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="py-4 px-3">{index + 1}</TableCell>
                        <TableCell className="py-4 px-0">{item.name}</TableCell>
                        <TableCell className="py-4 px-0">{item.tier}</TableCell>
                        <TableCell className="py-4 px-0">
                          {item.status}
                        </TableCell>
                        <TableCell className="py-4 px-0">
                          {item.renewals}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-black text-lg mb-1 font-[500]">
            {" "}
            Lost Customers (Customers that had their renewals in the given date
            range but did not Renew)
          </h3>
          <div className="rounded-sm shadow-sm border mt-0">
            <Table className="text-center text-sm">
              <TableHeader className="bg-gray-200  ">
                <TableRow className="text-left text-black">
                  <TableHead className="py-4 px-3">#</TableHead>
                  <TableHead className="py-4 px-0">Customer</TableHead>
                  <TableHead className="py-4 px-0">Renewal Date</TableHead>
                  <TableHead className="py-4 px-0">Status</TableHead>
                  <TableHead className="py-4 px-0">Subscription Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="text-black text-left ">
                  <TableCell className="py-4 px-3">1</TableCell>
                  <TableCell className="py-4 px-0">John Doe</TableCell>
                  <TableCell className="py-4 px-0">01 Jan 2024</TableCell>
                  <TableCell className="py-4 px-0">01 Jan 2025</TableCell>
                  <TableCell className="text-red-400 py-4 px-0">
                    Not Renewed
                  </TableCell>
                </TableRow>
                <TableRow className="text-black text-left">
                  <TableCell className="py-4 px-3">2</TableCell>
                  <TableCell className="py-4 px-0">Jane Smith</TableCell>
                  <TableCell className="py-4 px-0">15 Feb 2024</TableCell>
                  <TableCell className="py-4 px-0">15 Feb 2025</TableCell>
                  <TableCell className="text-red-400 py-4 px-0">
                    Not Renewed
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsSubscription;
