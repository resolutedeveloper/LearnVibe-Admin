import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MdOutlineMailOutline } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useModal } from "@/components/contaxt/ContaxtModal"
import { EncryptFE } from "@/lib/encrypt"
import { sendOtp } from "@/lib/api"

const SendOTP = () => {
    const [formData, setFormData] = useState({ email: "" })
    const [error, setError] = useState(false)
    const [apiError, setApiError] = useState("")
    const [sending, setSending] = useState(false)
    const { setotpMail } = useModal();
    const navigate = useNavigate()

    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setError(false)
        setApiError("")
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setApiError("")

        if (!formData.email.trim() || !validateEmail(formData.email)) {
            setError(true)
            return
        }
        try {
            setSending(true);
            const encryptedEmail = EncryptFE(formData.email);
            await sendOtp({ EMailID: encryptedEmail, Status: 1 });
            setotpMail(formData.email);
            navigate("/forgotpassword")
        } catch (err: any) {
            setApiError(err.message || "Something went wrong. Please try again.")
        } finally {
            setSending(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-[350px] shadow-sm rounded-sm">
                <div className="p-6 py-0">
                    <div className="flex flex-col items-center justify-center space-y-0 mb-6">
                        <img
                            src="https://learnvibe.vercel.app/images/logo%20(2).png"
                            alt="Logo"
                            className="w-24 h-24"
                        />
                        <h2 className="text-xl font-semibold text-center mb-4">Send OTP</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Label htmlFor="email" className="mb-2 block">
                                Email
                            </Label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MdOutlineMailOutline className="text-gray-500 text-lg" />
                                </span>
                                <Input
                                    //   type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="pl-10 pr-3 border border-gray-300 rounded-sm focus:border-blue-500 focus:outline-none"
                                />
                            </div>
                            {error && (
                                <p className="text-sm text-red-500 mt-1">
                                    {formData.email.trim() === ""
                                        ? "Email is required"
                                        : "Please enter a valid E-mail"}
                                </p>
                            )}
                            {apiError && <p className="text-sm text-red-500 mt-1">{apiError}</p>}
                        </div>

                        <Button
                            type="submit"
                            disabled={sending}
                            className="w-full rounded-sm bg-[rgb(134,70,244)]"
                        >
                            {sending ? (
                                <div className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin mr-2 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                                        />
                                    </svg>
                                    Sending...
                                </div>
                            ) : (
                                "Send OTP"
                            )}
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default SendOTP
