import {
  Card,
  CardContent,
  CardHeader,
  // CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Sidebar from "./Sidebar"

const AddSubscription = () => {
  return (
<div className="flex min-h-screen bg-white">
  {/* Sidebar */}
  <Sidebar />

  {/* Main Content */}
  <div className="flex-1 p-4">
        {/* <CardTitle className="text-2xl text-gray-800">Add Subscription</CardTitle> */}
           <div className="flex flex-wrap mb-5 gap-4">
          {/* <div className="mb-4"> */}
            <h2 className="text-2xl font-semibold ">
              Add Subscription
            </h2>
          {/* </div > */}
        </div>
    <Card className="w-full  shadow-sm rounded-sm">
      <CardHeader>
      </CardHeader>

      <CardContent>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side Fields */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="title" className="mb-1">Subscription Title</Label>
              <Input id="title" placeholder="Enter title" />
            </div>

            <div>
              <Label htmlFor="charges" className="mb-1">Charges/Month (₹)</Label>
              <Input id="charges" type="number" placeholder="Enter monthly charge" />
            </div>

            <div>
              <Label htmlFor="documents" className="mb-1">Number of Documents Allowed</Label>
              <Input id="documents" type="number" placeholder="Enter limit" />
            </div>

            <div>
              <Label htmlFor="pages" className="mb-1">Pages Per Document</Label>
              <Input id="pages" type="number" placeholder="Allowed pages" />
            </div>
          </div>

          {/* Right Side Fields */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="formats" className="mb-1">Allowed Document Formats</Label>
              <Textarea id="formats" placeholder="e.g. PDF, DOCX, PPTX" />
            </div>

            <div>
              <Label htmlFor="quizzes" className="mb-1">Allowed Number of Quizzes</Label>
              <Input id="quizzes" type="number" placeholder="Enter number" />
            </div>

            <div>
              <Label htmlFor="questions" className="mb-1">Questions Per Quiz</Label>
              <Input id="questions" type="number" placeholder="Enter number" />
            </div>

            <div>
              <Label htmlFor="difficulty" className="mb-1">Allowed Difficulty Level</Label>
              <Textarea id="difficulty" placeholder="e.g. Easy, Medium, Hard" />
            </div>
          </div>

          {/* Checkbox + Buttons */}
          <div className="md:col-span-2 flex flex-col md:flex-row items-start justify-between mt-4 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="active" />
              <Label htmlFor="active">Keep Active</Label>
            </div>

            <div className="flex gap-3">
              <Button type="button" className="bg-[rgb(134,70,244)] rounded-sm">
                Cancel
              </Button>
              <Button type="submit" className="bg-[rgb(134,70,244)] rounded-sm">
                Submit
              </Button>
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
