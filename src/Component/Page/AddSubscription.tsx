import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { addSubscription, updateSubscriptionAPI } from "@/lib/api"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const AddSubscription = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const editMode = location.state?.editMode || false;
  const existingData = location.state?.data || null;
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [formData, setFormData] = useState(() => {
    if (existingData) return { ...existingData };
    return {
      SubscriptionTitle: "",
      IsFree: false,
      Price: 0,
      Duration: 0,
      NumOfDocuments: 0,
      NoOfPages: 0,
      NumOfQuiz: 0,
      AllowedFormats: "",
      NumberOfQuest: "",
      DifficultyLevels: "",
      IsActive: false,
      IsDefault: true,
      SubscriptionPriority: 1,
    };
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target
    const finalValue = type === "number" ? parseFloat(value) : value
    setFormData((prev: any) => ({
      ...prev,
      [id]: id === "AllowedFormats" ? value.toUpperCase() : finalValue,
    }))
  }

  const token = localStorage.getItem("AdminToken") || ""

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const requiredFields = [
      "SubscriptionTitle",
      "Price",
      "Duration",
      "NumOfDocuments",
      "NoOfPages",
      "NumOfQuiz",
      "AllowedFormats",
      "NumberOfQuest",
      "DifficultyLevels",
    ];
    for (let field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        setError("All fields are required.");
        return;
      }
    }
    // console.log(formData.ID);
    const id = formData.ID;
    const {
      ID,
      CreatedOn,
      ...payload
    } = {
      ...formData,
      Price: parseFloat(formData.Price.toString()),
      NumOfDocuments: parseInt(formData.NumOfDocuments.toString()),
      NoOfPages: parseInt(formData.NoOfPages.toString()),
      NumOfQuiz: parseInt(formData.NumOfQuiz.toString()),
      SubscriptionPriority: parseInt(formData.SubscriptionPriority.toString()),
    };


    try {
      if (editMode) {
        const res = await updateSubscriptionAPI(id, payload, token);
        if (res.status === "success") {
          setSuccess("Subscription updated successfully.");
        } else {
          setError(res.message || "Failed to update subscription.");
        }
      } else {
        const res = await addSubscription(payload, token);
        // setSuccess("Subscription added successfully.");
        if (res.status === "success") {
          setSuccess("Subscription updated successfully.");
        } else {
          setError(res.message || "Failed to update subscription.");
        }
      }
      setTimeout(() => navigate("/subscription"), 1500);
    } catch (err) {
      setError(`Failed to ${editMode ? "update" : "add"} subscription. Please try again.`);
    }
  };


  return (
    <div className="flex ">
      {/* <Sidebar /> */}
      <div className="flex-1">
        <div className="flex flex-wrap mb-5 gap-4">
          <h2 className="text-2xl font-semibold">Add Subscription</h2>
        </div>
        <Card className="w-full shadow-sm rounded-sm">
          <CardHeader />
          <CardContent>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Side */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="SubscriptionTitle">Subscription Title</Label>
                  <Input
                    id="SubscriptionTitle"
                    className="mt-3"
                    placeholder="Enter title"
                    value={formData.SubscriptionTitle}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="Price">Charges/Month (₹)</Label>
                  <Input
                    id="Price"
                    type="number"
                    className="mt-3"
                    value={formData.Price}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="NumOfDocuments">Number of Documents Allowed</Label>
                  <Input
                    id="NumOfDocuments"
                    type="number"
                    className="mt-3"
                    value={formData.NumOfDocuments}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="NoOfPages">Pages Per Document</Label>
                  <Input
                    id="NoOfPages"
                    type="number"
                    className="mt-3"
                    value={formData.NoOfPages}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="Duration">Duration (Months)</Label>
                  <Input
                    className="mt-3"
                    id="Duration"
                    type="number"
                    value={formData.Duration}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* Right Side */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="AllowedFormats">Allowed Document Formats</Label>
                  <Textarea
                    id="AllowedFormats"
                    className="mt-3"
                    placeholder="e.g. PDF, DOCX, PPTX"
                    value={formData.AllowedFormats}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="NumOfQuiz">Allowed Number of Quizzes</Label>
                  <Input
                    id="NumOfQuiz"
                    className="mt-3"
                    type="number"
                    value={formData.NumOfQuiz}
                    onChange={handleChange}
                  />
                </div>
                {/* <div>
                  <Label htmlFor="NumberOfQuest">Questions Per Quiz</Label>
                  <Input
                    id="NumberOfQuest"
                    className="mt-3"
                    placeholder="e.g. 10,20,30"
                    value={formData.NumberOfQuest}
                    onChange={handleChange}
                  />
                </div> */}
                <div>
                  <Label htmlFor="NumberOfQuest">Questions Per Quiz</Label>
                  <Input
                    id="NumberOfQuest"
                    className="mt-3"
                    type="text"
                    min={1}
                    step={1}
                    placeholder="e.g. 10,20,30"
                    value={formData.NumberOfQuest}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="DifficultyLevels">Allowed Difficulty Level</Label>
                  <Textarea
                    id="DifficultyLevels"
                    className="mt-3"
                    placeholder="e.g. Easy, Medium, Hard"
                    value={formData.DifficultyLevels}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="md:col-span-2 flex flex-col md:flex-row items-start justify-between mt-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="IsActive"
                    checked={formData.IsActive}
                    onCheckedChange={(checked) => {
                      setFormData((prev: any) => ({ ...prev, IsActive: Boolean(checked) }))
                    }}
                  />
                  <Label htmlFor="IsActive">Keep Active</Label>
                </div>

                <div className="flex flex-col gap-2 md:items-end">
                  {error && <p className="text-red-600 text-sm">{error}</p>}
                  {success && <p className="text-green-600 text-sm">{success}</p>}
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      className="bg-gray-400 rounded-sm cursor-pointer"
                      onClick={() => {
                        setFormData({
                          SubscriptionTitle: "",
                          IsFree: false,
                          Price: 0,
                          Duration: 0,
                          NumOfDocuments: 0,
                          NoOfPages: 0,
                          NumOfQuiz: 0,
                          AllowedFormats: "",
                          NumberOfQuest: "",
                          DifficultyLevels: "",
                          IsActive: false,
                          IsDefault: true,
                          SubscriptionPriority: 1,
                        })
                        setError("")
                        setSuccess("")
                      }}
                    >
                      Cancel
                    </Button>

                    <Button type="submit" className="bg-[rgb(134,70,244)] rounded-sm cursor-pointer">Submit</Button>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AddSubscription
