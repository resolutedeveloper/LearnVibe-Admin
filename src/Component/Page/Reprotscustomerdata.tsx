import  { useState } from "react";  
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

// Static summary data (you can update this with filtered data later)
const summaryData = [
  { label: "Free Tier (Never Upgraded)", value: 2 },
  { label: "Certain Tier", value: 1 },
  { label: "Customers Renewals", value: 1 },
  { label: "Lost Customers", value: 2 },
];

function ReportsCustomerData() {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const handleClear = () => {
    setStartDate(undefined);
    setEndDate(undefined);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* <Sidebar /> */}
      <div className="flex-1 p-4 overflow-auto ">
                     <h2 className="text-2xl  text-black font-semibold mb-5">
          Customer Data
        </h2>
    
        {/* Date Filter Section */}
        <div className="space-y-5">
          <Card className="shadow-sm rounded-sm py-2">
              {/* <CardTitle className="text-xl">Subscription Date Range</CardTitle> */}
               <div className="px-2">
                <h2 className="text-lg font-semibold ">
                  Subscription Date Range
                </h2>
              </div>
            {/* <CardHeader>
            </CardHeader> */}
            <CardContent className="px-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
                {/* Start Date */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 ">
                    Start Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        {startDate ? (
                          format(startDate, "dd/MM/yyyy")
                        ) : (
                          <span className="text-muted-foreground">
                            Pick a date
                          </span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* End Date */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        {endDate ? (
                          format(endDate, "dd/MM/yyyy")
                        ) : (
                          <span className="text-muted-foreground">
                            Pick a date
                          </span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Buttons */}
                <div className="flex items-end gap-2 col-span-2 md:col-span-1">
                  {/* <Button variant="default" className="w-full">
                  Filter
                </Button> */}
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleClear}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {summaryData.map((item, index) => (
              <Card key={index} className="shadow-sm rounded-sm py-2">
                <CardHeader className="px-2">
                  <CardTitle className="text-lg  font-semibold">
                    {item.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-2">
                  <div className="text-2xl font-bold text-indigo-600">
                    {item.value}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportsCustomerData;
