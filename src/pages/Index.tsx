import { Button } from "@/components/ui/button";
import CreditDashboard from "@/components/CreditDashboard";
import AIModelSelector from "@/components/AIModelSelector";
import QuickAccessPanel from "@/components/QuickAccessPanel";
import RecentProjects from "@/components/RecentProjects";
import AIUsageStats from "@/components/AIUsageStats";
import { User, Settings, Bell, LogOut } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-primary">Thai AI Hub</h1>
              <div className="hidden md:flex text-sm text-muted-foreground">
                AI Assistant จ่ายตามใช้จริง สำหรับคนไทย
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
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <CreditDashboard />
            <AIUsageStats />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-6 space-y-6">
            <QuickAccessPanel />
            <RecentProjects />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <AIModelSelector />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
