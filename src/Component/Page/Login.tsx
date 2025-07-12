import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaKey } from "react-icons/fa";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Add API call here
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px] shadow-lg rounded-sm">
     
        <div className="p-6 py-0">
          <div className="flex flex-col items-center justify-center space-y-0 mb-6">
            <img
              src="https://learnvibe.vercel.app/images/logo%20(2).png"
              alt="Logo"
              className="w-24 h-24"
            />
            <h2 className="text-2xl font-semibold text-center">Login</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
        
            </div>
            <div>
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <div className="relative">
                {/* Icon inside input */}
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineMailOutline className="text-gray-500 text-xl" />
                </span>

                {/* Input with left padding to make space for icon */}
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="pl-10 pr-3 rounded-sm" // <-- pl-10 makes space for icon
                />
              </div>
            </div>
            <div className="mb-4">
              <Label htmlFor="password" className="mb-1 block">
                Password
              </Label>

              <div className="relative">
                {/* Icon on left inside input */}
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaKey className="text-gray-500 text-lg" />
                </span>

                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  className="pl-10 pr-3 border border-gray-300 rounded-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="text-right -mt-2">
              <Link
                to="/forgotpassword"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <Button type="submit" className="w-full rounded-sm bg-[rgb(134,70,244)]">
              Login
            </Button>
          </form>
        </div>
    
      </Card>
    </div>
  );
};

export default Login;
