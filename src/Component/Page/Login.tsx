import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { EncryptFE } from "@/lib/encrypt";
import { logIn } from "@/lib/api";
import type { login } from "@/lib/types";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // username: "",
    email: "",
    password: "",
    role: "ADMINUSER"
  });
  const [errors, setErrors] = useState({ email: false, password: false });
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState<boolean>(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(""); // clear previous API error
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
    const newErrors = {
      email: formData.email.trim() === "" || !isEmailValid,
      password: formData.password.trim() === "",
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    setLoading(true); // <-- move this here so it activates regardless

    try {
      const EmailID = EncryptFE(formData.email);
      const Password = EncryptFE(formData.password);
      const Role = formData.role;
      const payload: login = { EmailID, Password, Role };

      const res = await logIn(payload);

      if (res?.status === "success" && Array.isArray(res.data) && res.data.length > 0) {
        const user = res.data[0];
        const token = user.LoginToken;

        const profileData = {
          ID: user.ID,
          FirstName: user.FirstName,
          LastName: user.LastName || "",
          EmailID: user.EmailID,
          ContactNumber: user.ContactNumber || "",
          Grade: user.Grade || "",
          BirthDate: user.BirthDate || "",
        };

        localStorage.setItem("profileData", JSON.stringify(profileData));
        localStorage.setItem("AdminData", JSON.stringify(user));
        localStorage.setItem("AdminToken", token);
        setLoginError("");
        navigate("/dashboard");
      } else if (res?.message === "Subscription plan does not found.") {
        setLoginError(res.message
          ||
          "No active subscription found. Please contact support or choose a plan.");
      } else {
        setLoginError(res?.message || "Login failed. Please try again.");
      }

    } catch (error: any) {
      console.error("Login failed:", error);
      if (error?.response?.data?.message) {
        // If backend sends message in error response
        setLoginError(error.response.data.message);
      } else {
        setLoginError("Something went wrong. Please try again.");
      }
    }
    finally {
      setLoading(false); // <- Always stop loading, even on error
    }
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
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineMailOutline className="text-gray-500 text-xl" />
                </span>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="pl-10 pr-3 rounded-sm"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">Please enter a valid email.</p>
              )}
            </div>

            <div>
              <Label htmlFor="password" className="mb-1 block">
                Password
              </Label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaKey className="text-gray-500 text-lg" />
                </span>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="pl-10 pr-3 border border-gray-300 rounded-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">Password is required.</p>
              )}
            </div>

            <div className="text-right -mt-2">
              <Link
                to="/sendOTP"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* API error shown here */}
            {loginError && (
              <p className="text-sm text-red-600 text-center">{loginError}</p>
            )}

            <Button
              type="submit"
              className="w-full rounded-sm bg-[rgb(134,70,244)]"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </Card>
    </div>


  );
};

export default Login;
