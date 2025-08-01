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
const RequiredLabel = ({ htmlFor, children }: { htmlFor: string, children: React.ReactNode }) => (
  <Label htmlFor={htmlFor}>
    {children} <span className="text-red-500">*</span>
  </Label>
);

const AddSubscription = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const editMode = location.state?.editMode || false;
  const existingData = location.state?.data || null;
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

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
    setFieldErrors({});
    setLoading(true); // Start loading

    const requiredFields = [
      "SubscriptionTitle",
      "AllowedFormats",
      "NumberOfQuest",
      "DifficultyLevels",
    ];

    const newFieldErrors: { [key: string]: string } = {};
    requiredFields.forEach((field) => {
      if (
        formData[field as keyof typeof formData] === "" ||
        formData[field as keyof typeof formData] === 0
      ) {
        newFieldErrors[field] = "This field is required.";
      }
    });

    if (Object.keys(newFieldErrors).length > 0) {
      setFieldErrors(newFieldErrors);
      setLoading(false);
      return;
    }

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
      const res = editMode
        ? await updateSubscriptionAPI(id, payload, token)
        : await addSubscription(payload, token);

      if (res.status === "success") {
        setSuccess(`Subscription ${editMode ? "updated" : "added"} successfully.`);
      } else {
        setError(res.message || `Failed to ${editMode ? "update" : "add"} subscription.`);
      }

      setTimeout(() => navigate("/subscription"), 1500);
    } catch (err) {
      setError(`Failed to ${editMode ? "update" : "add"} subscription. Please try again.`);
    } finally {
      setLoading(false); // Stop loading
    }
  };


  return (
    <div className="flex ">
      {/* <Sidebar /> */}
      <div className="flex-1">
        <div className="flex flex-wrap mb-5 gap-4">
          <h2 className="text-2xl font-semibold">{editMode ? "Update Subscription" : "Add Subscription"}</h2>
        </div>
        <Card className="w-full shadow-sm rounded-sm">
          <CardHeader />
          <CardContent>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Side */}
              <div className="space-y-4">
                <div>
                  <RequiredLabel htmlFor="SubscriptionTitle">Subscription Title</RequiredLabel>
                  <Input
                    id="SubscriptionTitle"
                    className="mt-3"
                    placeholder="Enter title"
                    value={formData.SubscriptionTitle}
                    onChange={handleChange}
                  />
                  {fieldErrors.SubscriptionTitle && (
                    <p className="text-sm text-red-500">{fieldErrors.SubscriptionTitle}</p>
                  )}
                </div>
                <div>
                  {/* <RequiredLabel htmlFor="Price">Charges/Month (€)</RequiredLabel> */}
                  <Label htmlFor="Price">Charges/Month (€)</Label>
                  <Input
                    id="Price"
                    type="number"
                    className="mt-3"
                    value={formData.Price}
                    onChange={handleChange}
                  />
                  {/* {fieldErrors.Price && (
                    <p className="text-sm text-red-500">{fieldErrors.Price}</p>
                  )} */}
                </div>
                <div>
                  {/* <RequiredLabel htmlFor="NumOfDocuments">Number of Documents Allowed</RequiredLabel> */}
                  <Label htmlFor="NumOfDocuments">Number of Documents Allowed</Label>
                  <Input
                    id="NumOfDocuments"
                    type="number"
                    className="mt-3"
                    value={formData.NumOfDocuments}
                    onChange={handleChange}
                  />
                  {/* {fieldErrors.NumOfDocuments && (
                    <p className="text-sm text-red-500">{fieldErrors.NumOfDocuments}</p>
                  )} */}
                </div>
                <div>
                  <Label htmlFor="NoOfPages">Pages Per Document</Label>
                  {/* <RequiredLabel htmlFor="NoOfPages">Pages Per Document</RequiredLabel> */}
                  <Input
                    id="NoOfPages"
                    type="number"
                    className="mt-3"
                    value={formData.NoOfPages}
                    onChange={handleChange}
                  />
                  {/* {fieldErrors.NoOfPages && (
                    <p className="text-sm text-red-500">{fieldErrors.NoOfPages}</p>
                  )} */}
                </div>
                <div>
                  <Label htmlFor="Duration">Duration (Months)</Label>
                  {/* <RequiredLabel htmlFor="Duration">Duration (Months)</RequiredLabel> */}
                  <Input
                    className="mt-3"
                    id="Duration"
                    type="number"
                    value={formData.Duration}
                    onChange={handleChange}
                  />
                  {/* {fieldErrors.Duration && (
                    <p className="text-sm text-red-500">{fieldErrors.Duration}</p>
                  )} */}
                </div>
              </div>
              {/* Right Side */}
              <div className="space-y-4">
                <div>
                  {/* <Label htmlFor="AllowedFormats">Allowed Document Formats</Label> */}
                  <RequiredLabel htmlFor="AllowedFormats">Allowed Document Formats</RequiredLabel>
                  <Textarea
                    id="AllowedFormats"
                    className="mt-3"
                    placeholder="e.g. PDF, DOCX, PPTX"
                    value={formData.AllowedFormats}
                    onChange={handleChange}
                  />
                  {fieldErrors.AllowedFormats && (
                    <p className="text-sm text-red-500">{fieldErrors.AllowedFormats}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="NumOfQuiz">Allowed Number of Quizzes</Label>
                  {/* <RequiredLabel htmlFor="NumOfQuiz">Allowed Number of Quizzes</RequiredLabel> */}
                  <Input
                    id="NumOfQuiz"
                    className="mt-3"
                    type="number"
                    value={formData.NumOfQuiz}
                    onChange={handleChange}
                  />
                  {/* {fieldErrors.NumOfQuiz && (
                    <p className="text-sm text-red-500">{fieldErrors.NumOfQuiz}</p>
                  )} */}
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
                  {/* <Label htmlFor="NumberOfQuest">Questions Per Quiz</Label> */}
                  <RequiredLabel htmlFor="NumberOfQuest">Questions Per Quiz</RequiredLabel>
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
                  {fieldErrors.NumberOfQuest && (
                    <p className="text-sm text-red-500">{fieldErrors.NumberOfQuest}</p>
                  )}
                </div>

                <div>
                  {/* <Label htmlFor="DifficultyLevels">Allowed Difficulty Level</Label> */}
                  <RequiredLabel htmlFor="DifficultyLevels">Allowed Difficulty Level</RequiredLabel>
                  <Textarea
                    id="DifficultyLevels"
                    className="mt-3"
                    placeholder="e.g. Easy, Medium, Hard"
                    value={formData.DifficultyLevels}
                    onChange={handleChange}
                  />
                  {fieldErrors.DifficultyLevels && (
                    <p className="text-sm text-red-500">{fieldErrors.DifficultyLevels}</p>
                  )}
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
