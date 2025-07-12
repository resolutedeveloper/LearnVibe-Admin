import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import { MdOutlineMailOutline } from "react-icons/md"
import { FaKey } from "react-icons/fa"
import { useState } from "react"

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Reset Password Data:", formData)

    // TODO: Add validation and API call here
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px] shadow-sm rounded-sm">
        <div className="p-6 py-0">
          <h2 className="text-xl font-semibold text-center mb-4">Reset Password</h2>
          <form onSubmit={handleSubmit} className="space-y-6 ">
            {/* New Password */}
            <div>
              <Label htmlFor="password" className="mb-1 block">
                New Password
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
                  placeholder="Enter new password"
                  required
                  className="pl-10 pr-3 border border-gray-300 rounded-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <Label htmlFor="confirmPassword" className="mb-1 block">
                Confirm Password
              </Label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaKey className="text-gray-500 text-lg" />
                </span>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                  required
                  className="pl-10 pr-3 border border-gray-300 rounded-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <Button type="submit" className="w-full rounded-sm bg-[rgb(134,70,244)]">
              Reset Password
            </Button>
          </form>
        </div>
      </Card>
    </div>
  )
}

export default ForgotPasswordForm
