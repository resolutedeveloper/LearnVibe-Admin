import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "./Sidebar";
const NewUsers = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Form Container */}
      <div className="flex-1 p-4">
        <div className="flex flex-wrap items-center justify-between mb-5 gap-4">
          {/* Title and New Button */}
        
            <h2 className="text-2xl  font-semibold ">Dashboard</h2>
      
        </div>
        <Card className="w-full  rounded-sm shadow-sm">
    
          <CardContent>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="firstName" className="mb-1">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Enter first name"
                    className="border-gray-300 focus:outline-none focus:ring-1 focus:border-blue-500"
                    autoFocus
                  />
                </div>

                <div>
                  <Label htmlFor="lastName" className="mb-1">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Enter last name"
                    className="border-gray-300 focus:outline-none focus:ring-1 focus:border-blue-500"
                  />
                </div>

                <div>
                  <Label htmlFor="contact" className="mb-1">
                    Contact Number
                  </Label>
                  <Input
                    id="contact"
                    type="tel"
                    placeholder="Enter contact number"
                    className="border-gray-300 focus:outline-none focus:ring-1 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="mb-1">
                    Email ID
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    className="border-gray-300 focus:outline-none focus:ring-1 focus:border-blue-500"
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="mb-1">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    className="border-gray-300 focus:outline-none focus:ring-1 focus:border-blue-500"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="mb-1">
                    Address
                  </Label>
                  <Textarea
                    id="address"
                    placeholder="Enter address"
                    className="border-gray-300 focus:outline-none focus:ring-1 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="md:col-span-2 flex justify-center gap-4 mt-6">
                <Button
                  type="button"
                  // variant="outline"
                  className="bg-[rgb(134,70,244)]  rounded-sm text-white px-6"
                  onClick={() => window.history.back()}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="bg-[rgb(134,70,244)]  rounded-sm text-white px-6"
                >
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewUsers;
