import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Clock, Users, MoreHorizontal } from "lucide-react";

const recentProjects = [
  {
    title: "รายงานการวิจัยตลาด AI",
    type: "วิจัย",
    collaborators: 3,
    lastModified: "2 ชั่วโมงที่แล้ว",
    status: "กำลังดำเนินการ"
  },
  {
    title: "สรุปการประชุมโครงการ",
    type: "ประชุม", 
    collaborators: 5,
    lastModified: "1 วันที่แล้ว",
    status: "เสร็จสิ้น"
  },
  {
    title: "แปลเอกสารสัญญา",
    type: "แปล",
    collaborators: 1,
    lastModified: "3 วันที่แล้ว", 
    status: "รอตรวจสอบ"
  }
];

const RecentProjects = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          โปรเจคล่าสุด
        </CardTitle>
        <Button variant="ghost" size="sm">ดูทั้งหมด</Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {recentProjects.map((project, index) => (
          <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex-1">
              <div className="font-medium mb-1">{project.title}</div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary" className="text-xs">{project.type}</Badge>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {project.collaborators}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {project.lastModified}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge 
                variant={project.status === "เสร็จสิ้น" ? "default" : "outline"}
                className="text-xs"
              >
                {project.status}
              </Badge>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentProjects;