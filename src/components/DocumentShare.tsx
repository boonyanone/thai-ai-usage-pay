import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Share2, 
  Copy, 
  Mail, 
  Users, 
  Eye, 
  Edit3,
  Trash2,
  ExternalLink,
  Clock,
  Shield
} from "lucide-react";
import { toast } from "sonner";

const DocumentShare = () => {
  const [shareEmail, setShareEmail] = useState("");

  const sharedDocuments = [
    {
      id: "1",
      title: "รายงานการตลาด Q3 2024",
      sharedWith: "marketing-team@company.com",
      permission: "edit",
      sharedAt: "2024-03-20",
      status: "active"
    },
    {
      id: "2",
      title: "แผนกลยุทธ์ดิจิทัล 2025",
      sharedWith: "management@company.com",
      permission: "view",
      sharedAt: "2024-03-18",
      status: "active"
    },
    {
      id: "3",
      title: "วิเคราะห์คู่แข่งทางธุรกิจ",
      sharedWith: "strategy-team@company.com",
      permission: "edit",
      sharedAt: "2024-03-16",
      status: "expired"
    }
  ];

  const shareLinks = [
    {
      id: "1",
      title: "รายงานการตลาด Q3 2024",
      link: "https://docs.company.com/shared/abc123",
      permission: "view",
      createdAt: "2024-03-20",
      expiresAt: "2024-04-20",
      views: 45
    },
    {
      id: "2",
      title: "แผนกลยุทธ์ดิจิทัล 2025", 
      link: "https://docs.company.com/shared/def456",
      permission: "edit",
      createdAt: "2024-03-18",
      expiresAt: "2024-05-18",
      views: 23
    }
  ];

  const handleShareByEmail = () => {
    if (shareEmail) {
      toast.success(`ส่งคำเชิญไปยัง ${shareEmail} เรียบร้อยแล้ว`);
      setShareEmail("");
    }
  };

  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    toast.success("คัดลอกลิงก์เรียบร้อยแล้ว");
  };

  const getPermissionText = (permission: string) => {
    return permission === "edit" ? "แก้ไขได้" : "ดูอย่างเดียว";
  };

  const getPermissionColor = (permission: string) => {
    return permission === "edit" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "expired": return "bg-red-100 text-red-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Share New Document */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 className="h-5 w-5" />
            แชร์เอกสารใหม่
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3">
            <Input
              placeholder="อีเมลของผู้รับ..."
              value={shareEmail}
              onChange={(e) => setShareEmail(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleShareByEmail}>
              <Mail className="h-4 w-4 mr-2" />
              ส่งคำเชิญ
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              <Eye className="h-3 w-3 mr-1" />
              ดูอย่างเดียว
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              <Edit3 className="h-3 w-3 mr-1" />
              แก้ไขได้
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for different sharing methods */}
      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="documents">เอกสารที่แชร์แล้ว</TabsTrigger>
          <TabsTrigger value="links">ลิงก์แชร์</TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="mt-6">
          <div className="space-y-4">
            {sharedDocuments.map((doc) => (
              <Card key={doc.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{doc.title}</h3>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {doc.sharedWith}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          แชร์เมื่อ {new Date(doc.sharedAt).toLocaleDateString('th-TH')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge className={getPermissionColor(doc.permission)}>
                        <Shield className="h-3 w-3 mr-1" />
                        {getPermissionText(doc.permission)}
                      </Badge>
                      
                      <Badge className={getStatusColor(doc.status)}>
                        {doc.status === "active" ? "ใช้งานได้" : "หมดอายุ"}
                      </Badge>
                      
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="links" className="mt-6">
          <div className="space-y-4">
            {shareLinks.map((link) => (
              <Card key={link.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{link.title}</h3>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          ดู {link.views} ครั้ง
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          หมดอายุ {new Date(link.expiresAt).toLocaleDateString('th-TH')}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="text-xs bg-muted px-2 py-1 rounded flex-1">
                          {link.link}
                        </code>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleCopyLink(link.link)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 ml-4">
                      <Badge className={getPermissionColor(link.permission)}>
                        <Shield className="h-3 w-3 mr-1" />
                        {getPermissionText(link.permission)}
                      </Badge>
                      
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocumentShare;