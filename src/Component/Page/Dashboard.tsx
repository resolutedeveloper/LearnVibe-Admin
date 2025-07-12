// import React from "react";
import Sidebar from "./Sidebar";
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
import { useState } from "react";
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
    <div className="flex w-full bg-white  ">
      <Sidebar />
      <div className="max-w-7xl flex-1 p-4 ">
        {/* <h2 className="text-2xl mb-5 font-semibold">Dashboard</h2> */}
<div className="flex flex-wrap items-center justify-between mb-5 gap-4">
          {/* Title and New Button */}
          {/* <div className="flex items-center gap-4"> */}
            <h2 className="text-2xl  font-semibold ">Dashboard</h2>
          {/* </div> */}
        </div>

        <div className="grid grid-cols-3 gap-4 ">
          {/* Card 2 */}

          <Card className="relative  rounded-sm  border border-gray-200">
            <CardContent className="flex justify-between items-center p-4">
              <div>
                <p className="text-xl mb-1 font-light">Total Users</p>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="text-green-500 w-4 h-4" />
                  <span className="text-2xl font-bold">234%</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center text-xs font-semibold text-blue-500">
                58
              </div>
            </CardContent>
          </Card>

          {/* TOTAL EXPENSES */}
          <Card className="relative rounded-sm  border border-gray-200">
            <CardContent className="flex justify-between items-center p-4">
              <div>
                <p className="text-xl  mb-1 font-light">Free Users</p>
                <div className="flex items-center gap-2">
                  <ArrowDownRight className="text-red-500 w-4 h-4" />
                  <span className="text-2xl font-bold">71%</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center text-xs font-semibold text-red-500">
                62
              </div>
            </CardContent>
          </Card>

          {/* COMPANY VALUE */}
          <Card className="relative  rounded-sm border border-gray-200">
            <CardContent className="flex justify-between items-center p-4">
              <div>
                <p className="text-xl font-light mb-1">Paid Users</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">$1.45M</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-yellow-500 flex items-center justify-center text-xs font-semibold text-yellow-500">
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

        {/* Count of Documents uploaded so far
        <div>
          
          <h3 className="text-xl   font-semibold mt-4 mb-2  text-black">
            Count of Documents uploaded so far
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {stats.map((stat, i) => (
              <Card key={i} className={`${stat.bg} text-white rounded-sm`}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <span className="text-3xl font-bold">{stat.value}</span>
                  <span className="text-sm mt-1 font-normal leading-5">
                    {stat.label}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardContent className="p-6">
             

              <div className="flex flex-col lg:flex-row gap-6 font-normal">
                <div className="w-full lg:w-1/2 h-[300px] ">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={4}
                      >
                        {chartData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

              
                <div className="w-full lg:w-1/2 justify-center flex">
                  <ul className="space-y-3  text-sm">
                    {chartData.map((entry, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span
                          className="inline-block w-4 h-4 rounded-full"
                          style={{
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        ></span>
                        <span>{entry.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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
            <Card className=" rounded-sm">
              <CardHeader className="flex flex-row items-center justify-between ">
                <CardTitle>Feedback Analysis</CardTitle>
                <Select>
                  <SelectTrigger className="w-[100px] h-8 text-sm">
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
              <CardContent className="flex flex-col items-center justify-center gap-4">
                <div className="w-[120px] h-[120px] rounded-full border-8 border-t-green-400 border-r-yellow-400 border-b-red-400 border-l-gray-300 relative flex items-center justify-center text-2xl font-bold">
                  116
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    Low
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Medium
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    High
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    None
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="font-semibold leading-6">
          {/* <CardTitle>Unsubscribed Users count</CardTitle> */}
          <h2 className="text-lg font-semibold mt-6 mb-2 text-black">
            Unsubscribed Users count
          </h2>
          <Card className="rounded-sm">
            <CardContent>
              <h2 className="text-center text-xl font-semibold mb-6">
                Unsubscribe Rate
              </h2>

              <div className="flex items-end justify-between h-64 px-2 gap-3">
                {/* Bar 1 */}
                <div className="flex flex-col items-center w-[10%]">
                  <div
                    className="w-full bg-blue-900 rounded-t-md flex justify-center items-end"
                    style={{ height: "30px" }}
                  >
                    <span className="text-white text-sm pb-1">0.12%</span>
                  </div>
                  <p className="text-[12px] text-center mt-1">
                    Cart Abandonment
                  </p>
                </div>

                {/* Bar 2 */}
                <div className="flex flex-col items-center w-[10%]">
                  <div
                    className="w-full bg-blue-900 rounded-t-md flex justify-center items-end"
                    style={{ height: "42.5px" }}
                  >
                    <span className="text-white text-sm pb-1">0.17%</span>
                  </div>
                  <p className="text-[12px] text-center mt-1">
                    Product Abandonment
                  </p>
                </div>

                {/* Bar 3 */}
                <div className="flex flex-col items-center w-[10%]">
                  <div
                    className="w-full bg-blue-900 rounded-t-md flex justify-center items-end"
                    style={{ height: "52.5px" }}
                  >
                    <span className="text-white text-sm pb-1">0.21%</span>
                  </div>
                  <p className="text-[12px] text-center mt-1">
                    Search Abandonment
                  </p>
                </div>

                {/* Bar 4 */}
                <div className="flex flex-col items-center w-[10%]">
                  <div
                    className="w-full bg-blue-900 rounded-t-md flex justify-center items-end"
                    style={{ height: "100px" }}
                  >
                    <span className="text-white text-sm pb-1">0.40%</span>
                  </div>
                  <p className="text-[12px] text-center mt-1">Post Purchase</p>
                </div>

                {/* Bar 5 */}
                <div className="flex flex-col items-center w-[10%]">
                  <div
                    className="w-full bg-blue-900 rounded-t-md flex justify-center items-end"
                    style={{ height: "42.5px" }}
                  >
                    <span className="text-white text-sm pb-1">0.17%</span>
                  </div>
                  <p className="text-[12px] text-center mt-1">New Arrivals</p>
                </div>

                {/* Bar 6 */}
                <div className="flex flex-col items-center w-[10%]">
                  <div
                    className="w-full bg-blue-900 rounded-t-md flex justify-center items-end"
                    style={{ height: "30px" }}
                  >
                    <span className="text-white text-sm pb-1">0.12%</span>
                  </div>
                  <p className="text-[12px] text-center mt-1">Price Decrease</p>
                </div>

                {/* Bar 7 */}
                <div className="flex flex-col items-center w-[10%]">
                  <div
                    className="w-full bg-blue-900 rounded-t-md flex justify-center items-end"
                    style={{ height: "40px" }}
                  >
                    <span className="text-white text-sm pb-1">0.16%</span>
                  </div>
                  <p className="text-[12px] text-center mt-1">Back in Stock</p>
                </div>

                {/* Bar 8 */}
                <div className="flex flex-col items-center w-[10%]">
                  <div
                    className="w-full bg-blue-500 rounded-t-md flex justify-center items-end"
                    style={{ height: "47.5px" }}
                  >
                    <span className="text-white text-sm pb-1">0.19%</span>
                  </div>
                  <p className="text-[12px] text-center mt-1">One Time Sends</p>
                </div>
              </div>

              <div className="text-sm text-center text-gray-600 mt-4">
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
