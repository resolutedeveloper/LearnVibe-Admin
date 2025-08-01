import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaKey } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"
import { CheckCircle, XCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { EncryptFE } from "@/lib/encrypt"
import { verifyOTP } from "@/lib/api"
import { useModal } from "@/components/contaxt/ContaxtModal"

const passwordCriteria = [
  { label: "Minimum 8 Characters", check: (pwd: string) => pwd.length >= 8 },
  { label: "Minimum 1 Capital Letter", check: (pwd: string) => /[A-Z]/.test(pwd) },
  { label: "Minimum 1 Small Letter", check: (pwd: string) => /[a-z]/.test(pwd) },
  { label: "Minimum 1 Special Character", check: (pwd: string) => /[^A-Za-z0-9]/.test(pwd) },
  { label: "Minimum 1 Number", check: (pwd: string) => /[0-9]/.test(pwd) },
]

const ForgotPasswordForm = () => {
  const [errors, setErrors] = useState({ email: "", otp: "", password: "" })
  const [apiError, setApiError] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { otpMail } = useModal();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: "", otp: "", password: "" });

  useEffect(() => { 
    setFormData({
      email: otpMail || "",
      otp: "",
      password: "",
    });

  }, [otpMail]);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
    setApiError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    let hasError = false
    const newErrors = { email: "", otp: "", password: "" }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = !formData.email.trim()
        ? "Email is required"
        : "Please enter a valid email"
      hasError = true
    }

    if (!formData.otp.trim() || !/^\d{6}$/.test(formData.otp)) {
      newErrors.otp = !formData.otp.trim()
        ? "OTP is required"
        : "OTP must be 6 digits"
      hasError = true
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required"
      hasError = true
    }

    setErrors(newErrors)
    if (hasError) return

    try {
      setLoading(true)

      const payload: any = {
        EmailID: EncryptFE(formData.email),
        OTP: EncryptFE(formData.otp),
        Password: EncryptFE(formData.password),
        Status: 1,
      }

      const res: any = await verifyOTP(payload)
      console.log(res);

      if (res.status === "success") {
        setSuccess(true)
        navigate("/")
      } else {
        setApiError(
          res.message?.toLowerCase().includes("invalid")
            ? "Entered OTP is invalid. Please enter a valid OTP."
            : res.message?.toLowerCase().includes("expired")
              ? "Entered OTP has expired. Please generate a new OTP."
              : res.message || "Password reset failed."
        )
      }
    } catch (err: any) {
      const rawMsg =
        err?.response?.data?.message || err?.message || "Something went wrong."

      setApiError(
        rawMsg.toLowerCase().includes("invalid")
          ? "Entered OTP is invalid. Please enter a valid OTP."
          : rawMsg.toLowerCase().includes("expired")
            ? "Entered OTP has expired. Please generate a new OTP."
            : rawMsg
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px] shadow-sm rounded-sm">
        <div className="p-6 py-0">
          <div className="flex flex-col items-center justify-center mb-6">
            <img
              src="https://learnvibe.vercel.app/images/logo%20(2).png"
              alt="Logo"
              className="w-24 h-24"
            />
            <h2 className="text-xl font-semibold text-center mb-4">Reset Password</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Email */}
            <div>
              <Label htmlFor="email" className="mb-1">Email</Label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineMailOutline className="text-gray-500 text-lg" />
                </span>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="pl-10"
                />
              </div>
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>

            {/* OTP */}
            <div>
              <Label htmlFor="otp" className="mb-1">OTP</Label>
              <Input
                type="text"
                id="otp"
                name="otp"
                value={formData.otp}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,6}$/.test(value)) {
                    setFormData((prev) => ({ ...prev, otp: value }));
                  }
                }}

                placeholder="Enter OTP"
              />
              {errors.otp && <p className="text-sm text-red-600 mt-1">{errors.otp}</p>}
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="mb-1">New Password</Label>
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
                  placeholder="Enter new password"
                  className="pl-10"
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">{errors.password}</p>
              )}

              {formData.password && (
                <div className="grid gap-1 text-sm text-gray-600 mt-2">
                  {passwordCriteria.map((criterion, index) => {
                    const passed = criterion.check(formData.password)
                    return (
                      <div key={index} className="flex justify-between items-center">
                        <span>{criterion.label}</span>
                        {passed ? (
                          <CheckCircle className="text-green-500 w-4 h-4" />
                        ) : (
                          <XCircle className="text-red-500 w-4 h-4" />
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {apiError && <p className="text-sm text-red-600">{apiError}</p>}

            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-sm bg-[rgb(134,70,244)]"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
        </div>
      </Card>
    </div>
  )
}

export default ForgotPasswordForm
