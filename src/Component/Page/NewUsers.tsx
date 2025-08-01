import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { addUser } from "@/lib/api";
import { EncryptFE } from "@/lib/encrypt";
import { CheckCircle, XCircle } from "lucide-react";
// import { passwordCriteria } from "@/constants/passwordCriteria";
import { useNavigate } from "react-router-dom";
export const passwordCriteria = [
  { label: "Minimum 8 Characters", check: (pwd: string) => pwd.length >= 8 },
  { label: "Minimum 1 Capital Letter", check: (pwd: string) => /[A-Z]/.test(pwd) },
  { label: "Minimum 1 Small Letter", check: (pwd: string) => /[a-z]/.test(pwd) },
  { label: "Minimum 1 Special Character", check: (pwd: string) => /[^A-Za-z0-9]/.test(pwd) },
  { label: "Minimum 1 Number", check: (pwd: string) => /[0-9]/.test(pwd) },
];
const PasswordStrengthChecker = (password: any) => {
  return (
    <div className="grid gap-1 text-sm text-gray-600 mt-2">
      {passwordCriteria.map((criterion, index) => {
        const passed = criterion.check(password);
        return (
          <div key={index} className="flex justify-between items-center">
            <span>{criterion.label}</span>
            {passed ? (
              <CheckCircle className="text-green-500 w-4 h-4" />
            ) : (
              <XCircle className="text-red-500 w-4 h-4" />
            )}
          </div>
        );
      })}
    </div>
  );
};
const NewUsers = ({ isUpdate = false }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate()
  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    password: "",
    contact: "",
    general: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors: any = {
      firstName: "",
      email: "",
      password: "",
      contact: "",
      general: "",
    };
    let isValid = true;

    if (!firstName.trim()) {
      newErrors.firstName = "Please enter your name";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = " Please enter a valid E-mail";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Please enter your password";
      isValid = false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/.test(password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
      isValid = false;
    }

    // Optional contact number check
    // if (contact && !/^\d{10}$/.test(contact)) {
    //   newErrors.contact = "Contact number must be exactly 10 digits.";
    //   isValid = false;
    // }

    setErrors(newErrors);
    return isValid;
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    const token = localStorage.getItem("AdminToken") || "";
    const payload: any = {
      FirstName: EncryptFE(firstName),
      EmailID: EncryptFE(email),
      Password: EncryptFE(password),
    };

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
      setErrors({ firstName: "", email: "", password: "", contact: "", general: "" });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setContact("");
      setAddress("");
      navigate("/users")

    } catch (error: any) {
      const errorMsg =
        error?.response?.data?.message || error?.message || "Something went wrong.";
      setErrors((prev) => ({
        ...prev,
        general: errorMsg.includes("already exists") ? "Email already exists." : errorMsg,
      }));
      setSuccessMessage("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="flex-1">
        <div className="flex flex-wrap items-center justify-between mb-5 gap-4">
          <h2 className="text-2xl font-semibold">{isUpdate ? "Update User" : "Add User"}</h2>
        </div>

        <Card className="w-full rounded-sm shadow-sm">
          <CardContent>
            <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  {errors.firstName && (
                    <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
                  )}
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
                    maxLength={100}
                    onChange={(e) => setContact(e.target.value.replace(/\D/g, ""))}
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
                    <p className="text-sm text-red-600 mt-1">{errors.password}</p>
                  )}

                  {password && <PasswordStrengthChecker password={password} />}
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

              {/* Footer Section */}
              <div className="md:col-span-2 flex flex-col items-center gap-2 mt-4">
                {errors.general && (
                  <p className="text-sm text-red-600">{errors.general}</p>
                )}
                {successMessage && (
                  <p className="text-sm text-green-600">{successMessage}</p>
                )}
                <div className="flex gap-4">
                  <Button
                    type="button"
                    className="bg-gray-400 text-white rounded-sm px-6"
                    onClick={() => window.history.back()}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-[rgb(134,70,244)] rounded-sm text-white px-6"
                  >
                    {isLoading ? "Submitting..." : isUpdate ? "Update" : "Submit"}
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
