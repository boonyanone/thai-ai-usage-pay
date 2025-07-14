import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, MessageSquare, FileText, Image } from "lucide-react";

const AIUsageStats = () => {
  const todayStats = [
    { label: "ข้อความ", value: "23", icon: MessageSquare, color: "text-blue-500" },
    { label: "เอกสาร", value: "5", icon: FileText, color: "text-green-500" },
    { label: "รูปภาพ", value: "8", icon: Image, color: "text-purple-500" },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          สถิติวันนี้
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {todayStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className={`h-4 w-4 mx-auto mb-1 ${stat.color}`} />
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIUsageStats;