import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { addUser } from "@/lib/api";
import { EncryptFE } from "@/lib/encrypt";

const NewUsers = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({
    required: "",
    email: "",
    password: "",
    contact: "",
    general: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors: any = { required: "", email: "", password: "", contact: "" };

    if (!firstName || !email || !password) {
      newErrors.required = "Please fill in all required fields.";
      isValid = false;
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isEmailValid) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    const isStrongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/.test(password);
    if (!isStrongPassword) {
      newErrors.password =
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
      isValid = false;
    }

    // if (!/^\d{10}$/.test(contact)) {
    //   newErrors.contact = "Contact number must be exactly 10 digits.";
    //   isValid = false;
    // }

    setErrors(newErrors);
    return isValid;
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true); // 🔁 Start loading

    const payload: any = {
      FirstName: EncryptFE(firstName),
      EmailID: EncryptFE(email),
      Password: EncryptFE(password),
    };

    const token = localStorage.getItem("AdminToken") || ""
    try {
      const res = await addUser(payload, token);
      const status = res?.response?.data?.status;
      const message = res?.response?.data?.message;

      if (status === "error") {
        setErrors((prev) => ({
          ...prev,
          general: message?.includes("already exists")
            ? "Email already exists."
            : message || "An error occurred.",
        }));
        setSuccessMessage("");
        setIsLoading(false);
        return;
      }

      setSuccessMessage("User added successfully!");
      setErrors({ required: "", email: "", password: "", contact: "", general: "" });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setContact("");
      setAddress("");
    } catch (error: any) {
      const errorMsg =
        error?.response?.data?.message || error?.message || "Something went wrong.";

      setErrors((prev) => ({
        ...prev,
        general: errorMsg.includes("already exists")
          ? "Email already exists."
          : errorMsg,
      }));
      setSuccessMessage("");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex h-screen bg-white">
      {/* <Sidebar /> */}
      <div className="flex-1">
        <div className="flex flex-wrap items-center justify-between mb-5 gap-4">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
        </div>

        <Card className="w-full rounded-sm shadow-sm">
          <CardContent>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={handleAdd}
            >
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input
                    className="mt-3"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    className="mt-3"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  <Label htmlFor="contact">Contact Number</Label>
                  <Input
                    className="mt-3"
                    id="contact"
                    type="tel"
                    value={contact}
                    maxLength={10}
                    onChange={(e) =>
                      setContact(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="Enter 10-digit contact number"
                  />
                  {errors.contact && (
                    <p className="text-sm text-red-600 mt-1">{errors.contact}</p>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email ID*</Label>
                  <Input
                    className="mt-3"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="password">Password*</Label>
                  <Input
                    className="mt-3"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                  />
                  {errors.password && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    className="mt-3"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter address"
                  />
                </div>
              </div>

              {/* Error Message & Buttons */}
              <div className="md:col-span-2 flex flex-col items-center gap-2 mt-4">
                {errors.required && (
                  <p className="text-sm text-red-600">{errors.required}</p>
                )}
                {errors.general && (
                  <p className="text-sm text-red-600">{errors.general}</p>
                )}
                {successMessage && (
                  <p className="text-sm text-green-600">{successMessage}</p>
                )}
                <div className="flex gap-4">
                  <Button
                    type="button"
                    className="bg-[rgb(134,70,244)] rounded-sm text-white px-6"
                    onClick={() => window.history.back()}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-[rgb(134,70,244)] rounded-sm text-white px-6"
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewUsers;
