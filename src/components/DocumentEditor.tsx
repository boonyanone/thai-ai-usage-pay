import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Save, 
  Share2, 
  Download, 
  FileText,
  Users,
  Clock,
  ExternalLink,
  Copy,
  Settings
} from "lucide-react";
import { toast } from "sonner";

interface DocumentEditorProps {
  documentId: string;
  onBack: () => void;
}

const DocumentEditor = ({ documentId, onBack }: DocumentEditorProps) => {
  const [title, setTitle] = useState("รายงานการตลาด Q3 2024");
  const [content, setContent] = useState(`# รายงานการตลาด Q3 2024

## สรุปผลการดำเนินงาน

ในไตรมาสที่ 3 ของปี 2024 ทีมการตลาดได้ดำเนินการตามแผนกลยุทธ์ที่วางไว้ และสามารถสร้างผลลัพธ์ที่น่าพอใจ

### ผลการดำเนินงานหลัก

1. **การเติบโตของยอดขาย**: เพิ่มขึ้น 15% เมื่อเทียบกับไตรมาสเดียวกันของปีที่แล้ว
2. **การขยายฐานลูกค้า**: ลูกค้าใหม่เพิ่มขึ้น 200 ราย
3. **อัตราการแปลงลูกค้า**: ปรับปรุงขึ้น 3.2%

### กลยุทธ์ที่ประสบความสำเร็จ

- **Digital Marketing**: การลงทุนในช่องทางดิจิทัลให้ผลตอบแทนที่ดี
- **Customer Experience**: การปรับปรุงประสบการณ์ลูกค้าช่วยเพิ่มความพึงพอใจ
- **Partnership**: การร่วมมือกับพันธมิตรสร้างโอกาสใหม่

### ความท้าทายและแนวทางแก้ไข

1. **ต้นทุนการโฆษณาเพิ่มขึ้น**
   - แนวทางแก้ไข: เพิ่มประสิทธิภาพการโฆษณาและใช้ข้อมูลวิเคราะห์

2. **การแข่งขันที่รุนแรง**
   - แนวทางแก้ไข: เน้นการสร้างจุดเด่นที่แตกต่าง

### แผนไตรมาสหน้า

- เพิ่มการลงทุนใน AI และ Machine Learning
- ขยายตลาดในภูมิภาค
- พัฒนาผลิตภัณฑ์ใหม่`);

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    toast.success("บันทึกเอกสารเรียบร้อยแล้ว");
    setIsEditing(false);
  };

  const handleExportToGoogleDocs = () => {
    toast.success("กำลังส่งออกไป Google Docs...");
    // จำลองการเปิดหน้าต่างใหม่ไป Google Docs
  };

  const handleExportToWord = () => {
    toast.success("กำลังส่งออกไป Microsoft Word...");
    // จำลองการดาวน์โหลดไฟล์ Word
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/documents/shared/${documentId}`);
    toast.success("คัดลอกลิงก์แชร์เรียบร้อยแล้ว");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              กลับ
            </Button>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">เอกสาร</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge variant="secondary">ร่าง</Badge>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              แชร์
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              ส่งออก
            </Button>
            <Button size="sm" onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              บันทึก
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Editor */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-2xl font-bold border-none p-0 h-auto bg-transparent focus-visible:ring-0"
                    placeholder="ชื่อเอกสาร..."
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[600px] border-none p-0 resize-none focus-visible:ring-0"
                  placeholder="เริ่มเขียนเอกสารของคุณ..."
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Document Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">ข้อมูลเอกสาร</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">อัปเดตล่าสุด:</span>
                  <span>20 มี.ค. 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">แชร์กับ:</span>
                  <span>5 คน</span>
                </div>
                <Separator />
                <div className="space-y-2">
                  <p className="text-sm font-medium">คำ: {content.split(' ').length}</p>
                  <p className="text-sm font-medium">ตัวอักษร: {content.length}</p>
                </div>
              </CardContent>
            </Card>

            {/* Export Options */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">ส่งออกและแชร์</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={handleExportToGoogleDocs}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Google Docs
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={handleExportToWord}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Microsoft Word
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={handleShare}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  คัดลอกลิงก์
                </Button>
              </CardContent>
            </Card>

            {/* Team Collaboration */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">ทีมงาน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">
                      ก
                    </div>
                    <div>
                      <p className="text-sm font-medium">หัวหน้าทีม</p>
                      <p className="text-xs text-muted-foreground">เจ้าของเอกสาร</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xs">
                      ข
                    </div>
                    <div>
                      <p className="text-sm font-medium">สมาชิกทีม 1</p>
                      <p className="text-xs text-muted-foreground">สามารถแก้ไข</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xs">
                      ค
                    </div>
                    <div>
                      <p className="text-sm font-medium">สมาชิกทีม 2</p>
                      <p className="text-xs text-muted-foreground">ดูอย่างเดียว</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  เพิ่มสมาชิก
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentEditor;