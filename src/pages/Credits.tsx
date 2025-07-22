import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import CreditDashboard from "@/components/CreditDashboard";
import { User, Settings, Bell } from "lucide-react";

const Credits = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="border-b bg-card sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <div className="hidden md:flex text-sm text-muted-foreground">
                  เครดิต - จัดการเครดิต AI ของคุณ
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden md:inline">นาย สมชาย ใจดี</span>
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-auto">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground">จัดการเครดิต</h1>
                <p className="text-muted-foreground">ตรวจสอบและจัดการเครดิต AI ของคุณ</p>
              </div>
              
              {/* Credit Dashboard */}
              <CreditDashboard />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Credits;