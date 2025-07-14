import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderOpen, Plus, Clock } from "lucide-react";

const RecentProjects = () => {
  const recentProjects = [
    { name: "รายงานการตลาด Q3", time: "2 ชั่วโมงที่แล้ว", type: "เอกสาร" },
    { name: "แปลเอกสารภาษาอังกฤษ", time: "1 วันที่แล้ว", type: "แปลภาษา" },
    { name: "สรุปการประชุมทีม", time: "3 วันที่แล้ว", type: "ประชุม" },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <FolderOpen className="h-5 w-5" />
          โปรเจคล่าสุด
        </CardTitle>
        <Button variant="ghost" size="sm">
          <Plus className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentProjects.map((project) => (
            <div key={project.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
              <div>
                <div className="font-medium text-sm">{project.name}</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {project.time} • {project.type}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full mt-4">
          ดูทั้งหมด
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecentProjects;