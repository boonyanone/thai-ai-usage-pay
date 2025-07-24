import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Plus, 
  Search, 
  Filter, 
  Share2, 
  Download, 
  Edit3,
  Clock,
  Users,
  Star,
  Folder,
  ExternalLink
} from "lucide-react";
import DocumentEditor from "@/components/DocumentEditor";
import DocumentTemplates from "@/components/DocumentTemplates";
import DocumentShare from "@/components/DocumentShare";

const Documents = () => {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const documents = [
    {
      id: "1",
      title: "รายงานการตลาด Q3 2024",
      content: "สรุปผลการดำเนินงานด้านการตลาดในไตรมาส 3...",
      type: "รายงาน",
      createdAt: "2024-03-15",
      updatedAt: "2024-03-20",
      author: "หัวหน้าทีมการตลาด",
      status: "draft",
      sharedWith: 5,
      isStarred: true
    },
    {
      id: "2",
      title: "แผนกลยุทธ์ดิจิทัล 2025",
      content: "กลยุทธ์การปรับเปลี่ยนสู่ดิจิทัล transformation...",
      type: "แผนงาน",
      createdAt: "2024-03-10",
      updatedAt: "2024-03-18",
      author: "ผู้อำนวยการ",
      status: "published",
      sharedWith: 12,
      isStarred: false
    },
    {
      id: "3",
      title: "วิเคราะห์คู่แข่งทางธุรกิจ",
      content: "การวิเคราะห์สถานการณ์คู่แข่งในตลาด...",
      type: "วิเคราะห์",
      createdAt: "2024-03-05",
      updatedAt: "2024-03-16",
      author: "ทีมกลยุทธ์",
      status: "review",
      sharedWith: 8,
      isStarred: true
    }
  ];

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "draft": return "bg-muted text-muted-foreground";
      case "published": return "bg-primary text-primary-foreground";
      case "review": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "draft": return "ร่าง";
      case "published": return "เผยแพร่แล้ว";
      case "review": return "รอตรวจสอบ";
      default: return status;
    }
  };

  if (selectedDocument) {
    return <DocumentEditor documentId={selectedDocument} onBack={() => setSelectedDocument(null)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">เอกสาร</h1>
              <p className="text-muted-foreground mt-1">
                จัดการและแชร์เอกสารของคุณ
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                นำเข้า
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                สร้างเอกสารใหม่
              </Button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="ค้นหาเอกสาร..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              ตัวกรอง
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-md">
            <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
            <TabsTrigger value="starred">ติดดาว</TabsTrigger>
            <TabsTrigger value="shared">แชร์แล้ว</TabsTrigger>
            <TabsTrigger value="templates">เทมเพลต</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-4">
              {filteredDocuments.map((doc) => (
                <Card key={doc.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <h3 
                            className="font-semibold text-lg hover:text-primary transition-colors"
                            onClick={() => setSelectedDocument(doc.id)}
                          >
                            {doc.title}
                          </h3>
                          {doc.isStarred && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                          {doc.content}
                        </p>
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Folder className="h-3 w-3" />
                            {doc.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            อัปเดต {new Date(doc.updatedAt).toLocaleDateString('th-TH')}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            แชร์กับ {doc.sharedWith} คน
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-3">
                        <Badge className={getStatusColor(doc.status)}>
                          {getStatusText(doc.status)}
                        </Badge>
                        
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit3 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="starred" className="mt-6">
            <div className="grid gap-4">
              {filteredDocuments.filter(doc => doc.isStarred).map((doc) => (
                <Card key={doc.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <h3 className="font-semibold text-lg">{doc.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{doc.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shared" className="mt-6">
            <DocumentShare />
          </TabsContent>

          <TabsContent value="templates" className="mt-6">
            <DocumentTemplates />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Documents;