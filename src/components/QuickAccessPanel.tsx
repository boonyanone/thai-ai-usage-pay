import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, Image, Video, Brain, Zap } from "lucide-react";

const QuickAccessPanel = () => {
  const quickActions = [
    { icon: MessageSquare, label: "แชทบอท", description: "สนทนากับ AI", color: "bg-blue-50 text-blue-600 hover:bg-blue-100" },
    { icon: FileText, label: "เขียนเอกสาร", description: "สร้างเอกสาร", color: "bg-green-50 text-green-600 hover:bg-green-100" },
    { icon: Image, label: "สร้างภาพ", description: "สร้างรูปภาพ", color: "bg-purple-50 text-purple-600 hover:bg-purple-100" },
    { icon: Video, label: "บันทึกประชุม", description: "บันทึกและสรุป", color: "bg-orange-50 text-orange-600 hover:bg-orange-100" },
    { icon: Brain, label: "วิเคราะห์ข้อมูล", description: "วิเคราะห์ข้อมูล", color: "bg-red-50 text-red-600 hover:bg-red-100" },
    { icon: Zap, label: "เครื่องมืออื่นๆ", description: "เครื่องมือเพิ่มเติม", color: "bg-yellow-50 text-yellow-600 hover:bg-yellow-100" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>เครื่องมือด่วน</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              className={`h-auto p-4 flex flex-col items-center gap-2 ${action.color} border-0`}
            >
              <action.icon className="h-6 w-6" />
              <div className="text-center">
                <div className="font-medium text-sm">{action.label}</div>
                <div className="text-xs opacity-70">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickAccessPanel;