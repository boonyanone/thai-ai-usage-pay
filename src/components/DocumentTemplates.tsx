import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  BarChart3, 
  Users, 
  Target, 
  Calendar,
  CheckSquare,
  Lightbulb,
  TrendingUp
} from "lucide-react";

const DocumentTemplates = () => {
  const templates = [
    {
      id: "1",
      title: "รายงานการตลาด",
      description: "เทมเพลตสำหรับรายงานผลการดำเนินงานด้านการตลาด",
      icon: <BarChart3 className="h-6 w-6" />,
      category: "รายงาน",
      usage: 156,
      color: "bg-blue-500"
    },
    {
      id: "2", 
      title: "แผนกลยุทธ์",
      description: "เทมเพลตสำหรับจัดทำแผนกลยุทธ์องค์กร",
      icon: <Target className="h-6 w-6" />,
      category: "แผนงาน",
      usage: 89,
      color: "bg-green-500"
    },
    {
      id: "3",
      title: "รายงานการประชุม",
      description: "เทมเพลตสำหรับบันทึกรายงานการประชุม",
      icon: <Users className="h-6 w-6" />,
      category: "ประชุม",
      usage: 234,
      color: "bg-purple-500"
    },
    {
      id: "4",
      title: "แผนการทำงาน",
      description: "เทมเพลตสำหรับวางแผนการทำงานรายเดือน",
      icon: <Calendar className="h-6 w-6" />,
      category: "แผนงาน",
      usage: 67,
      color: "bg-orange-500"
    },
    {
      id: "5",
      title: "checklist โปรเจค",
      description: "เทมเพลตสำหรับติดตามความคืบหน้าโปรเจค",
      icon: <CheckSquare className="h-6 w-6" />,
      category: "จัดการ",
      usage: 123,
      color: "bg-red-500"
    },
    {
      id: "6",
      title: "ข้อเสนอโปรเจค",
      description: "เทมเพลตสำหรับเสนอโปรเจคใหม่",
      icon: <Lightbulb className="h-6 w-6" />,
      category: "ข้อเสนอ",
      usage: 45,
      color: "bg-yellow-500"
    },
    {
      id: "7",
      title: "วิเคราะห์ผลการดำเนินงาน",
      description: "เทมเพลตสำหรับวิเคราะห์ KPI และประสิทธิภาพ",
      icon: <TrendingUp className="h-6 w-6" />,
      category: "วิเคราะห์",
      usage: 78,
      color: "bg-teal-500"
    },
    {
      id: "8",
      title: "เอกสารทั่วไป",
      description: "เทมเพลตเปล่าสำหรับเอกสารทั่วไป",
      icon: <FileText className="h-6 w-6" />,
      category: "ทั่วไป",
      usage: 312,
      color: "bg-gray-500"
    }
  ];

  const categories = ["ทั้งหมด", "รายงาน", "แผนงาน", "ประชุม", "จัดการ", "ข้อเสนอ", "วิเคราะห์", "ทั่วไป"];

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge 
            key={category} 
            variant={category === "ทั้งหมด" ? "default" : "secondary"}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {templates.map((template) => (
          <Card key={template.id} className="hover:shadow-md transition-all cursor-pointer group">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${template.color} text-white`}>
                  {template.icon}
                </div>
                <Badge variant="outline" className="text-xs">
                  ใช้ {template.usage} ครั้ง
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                  {template.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {template.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <Badge variant="secondary" className="text-xs">
                    {template.category}
                  </Badge>
                  <Button size="sm" variant="ghost" className="h-8 px-2 text-xs">
                    ใช้เทมเพลต
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create Custom Template */}
      <Card className="border-dashed border-2 hover:border-primary transition-colors cursor-pointer">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
            <FileText className="h-6 w-6 text-muted-foreground" />
          </div>
          <h3 className="font-semibold mb-2">สร้างเทมเพลตใหม่</h3>
          <p className="text-sm text-muted-foreground text-center mb-4">
            สร้างเทมเพลตของคุณเองเพื่อใช้ในการทำงาน
          </p>
          <Button variant="outline" size="sm">
            สร้างเทมเพลต
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentTemplates;