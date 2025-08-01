
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const usageData = [
  { name: "John Doe", lastActivity: "2024-06-10", quizQuota: 10, used: 10, active: true },
  { name: "Jane Smith", lastActivity: "2024-06-29", quizQuota: 10, used: 2, active: true },
  { name: "Alex Johnson", lastActivity: "2024-04-15", quizQuota: 10, used: 0, active: true },
  { name: "Emily Brown", lastActivity: "2024-06-25", quizQuota: 10, used: 8, active: true },
];

const Reportscustomerusagedata = () => {
  const sortedData = [...usageData].sort(
    (a, b) => new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime()
  );

  return (
    <div className="flex h-screen bg-white">
      {/* <Sidebar /> */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="flex items-center mb-5">
            <h2 className="text-2xl  font-semibold">Customer Usage Data</h2>
          </div>
       
        <div className="bg-white p-4 rounded-sm shadow-sm border px-2 py-2">
          <h3 className="text-lg font-semibold  mb-2">Last Activity Date</h3>
          <Table>
            <TableHeader className="bg-gray-200">
              <TableRow>
                <TableHead className="py-4 px-2">No</TableHead>
                <TableHead className="py-4 px-0">Name</TableHead>
                <TableHead className="py-4 px-0">Last Activity</TableHead>
                <TableHead className="py-4 px-0">Quota</TableHead>
                <TableHead className="py-4 px-0">Used</TableHead>
                <TableHead className="py-4 px-0">Status</TableHead>
                <TableHead className="py-4 px-0">Start Quiz</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((user, i) => (
                <TableRow key={i}>
                  <TableCell className="py-4 px-2">{i + 1}</TableCell>
                  <TableCell className="py-4 px-0">{user.name}</TableCell>
                  <TableCell className="py-4 px-0">{user.lastActivity}</TableCell>
                  <TableCell className="py-4 px-0">{user.quizQuota}</TableCell>
                  <TableCell className="py-4 px-0">{user.used}</TableCell>
                  <TableCell className={user.active ? "text-green-600 px-0" : "text-red-600"}>
                    {user.active ? "Active" : "Inactive"}
                  </TableCell>
                  <TableCell>
                    <Button size="sm" className="bg-[rgb(134,70,244)] rounded-sm">Quiz But</Button>
                  </TableCell>
                </TableRow>
              ))}




            </TableBody>
          </Table>


          
        </div>

 <div className="bg-white p-4 rounded-sm shadow-sm border mt-4 px-2 py-2">
          <h3 className="text-lg font-semibold  mb-2"> More aggressive users</h3>
          <Table>
            <TableHeader className="bg-gray-200">
              <TableRow>
                <TableHead className="py-4 px-2">No</TableHead>
                <TableHead className="py-4 px-0">Name</TableHead>
                <TableHead className="py-4 px-0">Last Activity</TableHead>
                <TableHead className="py-4 px-0">Quota</TableHead>
                <TableHead className="py-4 px-0">Used</TableHead>
                <TableHead className="py-4 px-0">Status</TableHead>
                <TableHead className="py-4 px-0">Start Quiz</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((user, i) => (
                <TableRow key={i}>
                  <TableCell className="py-4 px-2">{i + 1}</TableCell>
                  <TableCell className="py-4 px-0">{user.name}</TableCell>
                  <TableCell className="py-4 px-0">{user.lastActivity}</TableCell>
                  <TableCell className="py-4 px-0">{user.quizQuota}</TableCell>
                  <TableCell className="py-4 px-0">{user.used}</TableCell>
                  <TableCell className={user.active ? "text-green-600 px-0" : "text-red-600"}>
                    {user.active ? "Active" : "Inactive"}
                  </TableCell>
                  <TableCell>
                    <Button size="sm" className="bg-[rgb(134,70,244)] rounded-sm">Quiz But</Button>
                  </TableCell>
                </TableRow>
              ))}




            </TableBody>
          </Table>


          
        </div>

         <div className="bg-white p-4 rounded-sm shadow-sm border mt-4 px-2 py-2">
          <h3 className="text-lg font-semibold  mb-2">Those who have quota for using the quiz but are not using
</h3>
          <Table>
            <TableHeader className="bg-gray-200">
              <TableRow>
                <TableHead className="py-4 px-2">No</TableHead>
                <TableHead className="py-4 px-0">Name</TableHead>
                <TableHead className="py-4 px-0">Last Activity</TableHead>
                <TableHead className="py-4 px-0">Quota</TableHead>
                <TableHead className="py-4 px-0">Used</TableHead>
                <TableHead className="py-4 px-0">Status</TableHead>
                <TableHead className="py-4 px-0">Start Quiz</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((user, i) => (
                <TableRow key={i}>
                  <TableCell className="py-4 px-2">{i + 1}</TableCell>
                  <TableCell className="py-4 px-0">{user.name}</TableCell>
                  <TableCell className="py-4 px-0">{user.lastActivity}</TableCell>
                  <TableCell className="py-4 px-0">{user.quizQuota}</TableCell>
                  <TableCell className="py-4 px-0">{user.used}</TableCell>
                  <TableCell className={user.active ? "text-green-600 px-0" : "text-red-600"}>
                    {user.active ? "Active" : "Inactive"}
                  </TableCell>
                  <TableCell>
                    <Button size="sm" className="bg-[rgb(134,70,244)] rounded-sm">Quiz But</Button>
                  </TableCell>
                </TableRow>
              ))}




            </TableBody>
          </Table>


          
        </div>

         <div className="bg-white p-4 rounded-sm shadow-sm border mt-4 px-2 py-2">
          <h3 className="text-lg font-semibold  mb-2">Those who have active subscriptions but have exhausted their Quiz quota</h3>
          <Table>
            <TableHeader className="bg-gray-200">
              <TableRow>
                <TableHead className="py-4 px-2">No</TableHead>
                <TableHead className="py-4 px-0">Name</TableHead>
                <TableHead className="py-4 px-0">Last Activity</TableHead>
                <TableHead className="py-4 px-0">Quota</TableHead>
                <TableHead className="py-4 px-0">Used</TableHead>
                <TableHead className="py-4 px-0">Status</TableHead>
                <TableHead className="py-4 px-0">Start Quiz</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((user, i) => (
                <TableRow key={i}>
                  <TableCell className="py-4 px-2">{i + 1}</TableCell>
                  <TableCell className="py-4 px-0">{user.name}</TableCell>
                  <TableCell className="py-4 px-0">{user.lastActivity}</TableCell>
                  <TableCell className="py-4 px-0">{user.quizQuota}</TableCell>
                  <TableCell className="py-4 px-0">{user.used}</TableCell>
                  <TableCell className={user.active ? "text-green-600 px-0" : "text-red-600"}>
                    {user.active ? "Active" : "Inactive"}
                  </TableCell>
                  <TableCell>
                    <Button size="sm" className="bg-[rgb(134,70,244)] rounded-sm">Quiz But</Button>
                  </TableCell>
                </TableRow>
              ))}




            </TableBody>
          </Table>


          
        </div>

      </div>
    </div>
  );
};

export default Reportscustomerusagedata;

