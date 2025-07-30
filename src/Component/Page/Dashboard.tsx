import React from "react";
import { useEffect, useState } from "react";
import {
  Card,
  // CardAction,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  // PieChart,
  // Pie,
  // Cell,
  Tooltip,
  // Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash2, Upload, Check } from "lucide-react";
const Dashboard = () => {

  const [uploadedFiles, setUploadedFiles] = useState([
    {
      name: "Biodata.pdf",
      size: "1.2KB",
      total: "1.2KB",
      type: "PDF",
      uploaded: true,
    },
    {
      name: "User reports.xls",
      size: "1.5MB",
      total: "1.5MB",
      type: "XLS",
      uploaded: true,
    },
    {
      name: "Drawing.ai",
      size: "1.3MB",
      total: "2.3MB",
      type: "AI",
      uploaded: false,
    },
    {
      name: "Profile.jpg",
      size: "189KB",
      total: "200KB",
      type: "JPG",
      uploaded: false,
    },
    {
      name: "Data.doc",
      size: "1.5MB",
      total: "1.0MB",
      type: "DOC",
      uploaded: false,
    },
    {
      name: "Social Media Banner.png",
      size: "45KB",
      total: "60KB",
      type: "PNG",
      uploaded: false,
    },
  ]);
  const removeFile = (fileName: string) => {
    setUploadedFiles(uploadedFiles.filter((file) => file.name !== fileName));
  };
  const users = [
    { name: "John Doe", email: "john@example.com", password: "••••••••" },
    { name: "Jane Smith", email: "jane@example.com", password: "••••••••" },
    { name: "Alex Johnson", email: "alex@example.com", password: "••••••••" },
  ];




  const data = [
    { day: "M", value: 10 },
    { day: "T", value: 25 },
    { day: "W", value: 35 },
    { day: "T", value: 50 },
    { day: "F", value: 40 },
    { day: "S", value: 20 },
    { day: "S", value: 30 },
  ];

  return (
    <div className="flex max-w-15xl flex-col w-full min-h-screen overflow-x-hidden">
      <div className="flex-1   ">
        <div className="flex flex-wrap items-center justify-between mb-5 gap-4">
          <h2 className="text-2xl  font-semibold ">Dashboard</h2>
          {/* </div> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="">
            <CardContent className="flex justify-between items-center p-4">
              <div>
                <p className="text-lg text-gray-600">Total Users</p>
                <div className="flex items-center gap-2 mt-1">
                  <ArrowUpRight className="text-green-500 w-4 h-4" />
                  <span className="text-xl font-bold">234%</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-sm font-semibold text-blue-500">
                58
              </div>
            </CardContent>
          </Card>
          {/* Card 2 - Free Users */}
          <Card className="w-auto">
            <CardContent className="flex justify-between items-center p-4">
              <div>
                <p className="text-lg text-gray-600">Free Users</p>
                <div className="flex items-center gap-2 mt-1">
                  <ArrowDownRight className="text-red-500 w-4 h-4" />
                  <span className="text-xl font-bold">71%</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center text-sm font-semibold text-red-500">
                62
              </div>
            </CardContent>
          </Card>

          {/* Card 3 - Paid Users */}
          <Card className="w-auto">
            <CardContent className="flex justify-between items-center p-4">
              <div>
                <p className="text-lg text-gray-600">Paid Users</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xl font-bold">$1.45M</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-yellow-500 flex items-center justify-center text-sm font-semibold text-yellow-500">
                72
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-lg font-semibold mt-4 text-black mb-2">
            Subscription wise User Count
          </h2>
          <div className="bg-white rounded-sm overflow-hidden">
            <Table className="text-center text-sm">
              <TableHeader className="bg-gray-200 ">
                <TableRow className="py-4 px-0 text-left ">
                  <TableHead className="py-4 px-2">No</TableHead>
                  <TableHead className="py-4 px-0">Name</TableHead>
                  <TableHead className="py-4 px-0">Email</TableHead>
                  <TableHead className="py-4 px-0">Password</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-left">
                {users.map((user, index) => (
                  <TableRow key={index} className="text-black font-normal ">
                    <TableCell className="py-4 px-2">{index + 1}</TableCell>
                    <TableCell className="py-4 px-0">{user.name}</TableCell>
                    <TableCell className="py-4 px-0">{user.email}</TableCell>
                    <TableCell className="py-4 px-0">
                      {user.password}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>


        <div>
          <h2 className="text-lg font-semibold mt-4 text-black mb-2">
            Documents uploaded
          </h2>
          <div className="flex bg-white border rounded-sm shadow-sm overflow-hidden max-w-4xl mx-auto">
            {/* Left upload section */}
            <div className="w-1/2 bg-white flex flex-col items-center justify-center border-r p-6">
              <Upload className="w-10 h-10 text-blue-500 mb-4" />
              <p className="text-gray-600 mb-1">Drag and Drop file</p>
              <p className="text-gray-400 mb-4">or</p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">
                Browse
              </Button>
            </div>
            {/* Right file list section */}
            <div className="w-1/2 p-6 space-y-4 overflow-y-auto">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs text-blue-600 font-semibold">
                      {file.type}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {file.size} / {file.total}
                      </p>
                    </div>
                  </div>
                  {file.uploaded ? (
                    <Check className="text-green-500 w-4 h-4" />
                  ) : (
                    <Trash2
                      className="text-red-500 w-4 h-4 cursor-pointer"
                      onClick={() => removeFile(file.name)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mt-6 mb-2  text-black">
            Feedback Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Card - Bar Chart */}
            <Card className=" rounded-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Feedback</CardTitle>
                <Select>
                  <SelectTrigger className="w-[100px] h-8 text-sm">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>

              <CardContent className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis hide />
                    <Tooltip />
                    <Bar
                      dataKey="value"
                      fill="#34d399"
                      radius={[4, 4, 0, 0]}
                      barSize={30}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Right Card - Donut Chart */}
            <Card className="rounded-sm w-full">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <CardTitle className="text-base sm:text-lg mb-3">Feedback Analysis</CardTitle>
                <Select>
                  <SelectTrigger className="w-[120px] h-8 text-sm mb-4">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>

              <CardContent className="flex flex-col items-center justify-center gap-4 w-full">
                {/* Circular Indicator */}
                <div className="w-[120px] h-[120px] rounded-full border-8 border-t-green-400 border-r-yellow-400 border-b-red-400 border-l-gray-300 relative flex items-center justify-center text-2xl font-bold">
                  116
                </div>

                {/* Priority Legend */}
                <div className="flex flex-wrap justify-center gap-4 text-sm w-full px-2 text-center">
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    Low
                  </span>
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Medium
                  </span>
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    High
                  </span>
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    None
                  </span>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
        <div className="font-semibold leading-6">
          <h2 className="text-lg font-semibold mt-6 mb-2 text-black">
            Unsubscribed Users count
          </h2>
          <Card className="rounded-sm">
            <CardContent>
              <h2 className="text-center text-xl font-semibold mb-6">
                Unsubscribe Rate
              </h2>
              <div className="flex flex-wrap justify-center items-end gap-4 sm:gap-2 px-2">
                {[
                  { height: "30px", value: "0.12%", label: "Cart Abandonment" },
                  { height: "42.5px", value: "0.17%", label: "Product Abandonment" },
                  { height: "52.5px", value: "0.21%", label: "Search Abandonment" },
                  { height: "100px", value: "0.40%", label: "Post Purchase" },
                  { height: "42.5px", value: "0.17%", label: "New Arrivals" },
                  { height: "30px", value: "0.12%", label: "Price Decrease" },
                  { height: "40px", value: "0.16%", label: "Back in Stock" },
                  { height: "47.5px", value: "0.19%", label: "One Time Sends", light: true },
                ].map((bar, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center flex-1 min-w-[80px] max-w-[120px]"
                  >
                    <div
                      className={`w-full ${bar.light ? "bg-blue-500" : "bg-blue-900"} 
              rounded-t-md flex justify-center items-end`}
                      style={{ height: bar.height }}
                    >
                      <span className="text-white text-[10px] sm:text-sm pb-1">
                        {bar.value}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[12px] text-center mt-1 truncate w-full max-w-[80px]">
                      {bar.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-xs sm:text-sm text-center text-gray-600 mt-4">
                Y-Axis: 0% – 0.5%
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
