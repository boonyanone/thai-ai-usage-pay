import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  FileText, 
  Mic, 
  Search, 
  Users, 
  BookOpen,
  Calculator,
  Languages
} from "lucide-react";

const quickActions = [
  { icon: MessageSquare, label: "แชทกับ AI", color: "bg-blue-500" },
  { icon: FileText, label: "วิเคราะห์เอกสาร", color: "bg-green-500" },
  { icon: Mic, label: "บันทึกประชุม", color: "bg-red-500" },
  { icon: Search, label: "ค้นหาข้อมูล", color: "bg-purple-500" },
  { icon: Users, label: "ทำงานร่วมกัน", color: "bg-orange-500" },
  { icon: BookOpen, label: "เขียนรายงาน", color: "bg-teal-500" },
  { icon: Calculator, label: "วิเคราะห์ข้อมูล", color: "bg-indigo-500" },
  { icon: Languages, label: "แปลภาษา", color: "bg-pink-500" }
];

const QuickAccessPanel = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>เครื่องมือ AI</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-20 flex flex-col gap-2 hover:scale-105 transition-transform"
            >
              <div className={`p-2 rounded-lg ${action.color} text-white`}>
                <action.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickAccessPanel;