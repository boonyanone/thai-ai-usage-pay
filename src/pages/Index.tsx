import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import CreditDashboard from "@/components/CreditDashboard";
import AIModelSelector from "@/components/AIModelSelector";
import QuickAccessPanel from "@/components/QuickAccessPanel";
import RecentProjects from "@/components/RecentProjects";
import AIUsageStats from "@/components/AIUsageStats";
import { User, Settings, Bell, LogOut } from "lucide-react";

const Index = () => {
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
                  แดชบอร์ดหลัก - ยินดีต้อนรับ
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
                <h1 className="text-3xl font-bold text-foreground">ยินดีต้อนรับ</h1>
                <p className="text-muted-foreground">ภาพรวมการใช้งาน AI ของคุณวันนี้</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                <CreditDashboard />
                <AIUsageStats />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <QuickAccessPanel />
                </div>
                <div>
                  <RecentProjects />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
