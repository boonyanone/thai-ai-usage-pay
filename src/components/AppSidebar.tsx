import {
  LayoutDashboard,
  Bot,
  FolderOpen,
  Users,
  BarChart3,
  Settings,
  CreditCard,
  MessageSquare,
  FileText,
  Video,
  Brain,
  Zap,
  Target,
  TrendingUp
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "แดชบอร์ด",
    items: [
      { title: "หน้าหลัก", url: "/", icon: LayoutDashboard },
      { title: "เครดิต", url: "/credits", icon: CreditCard },
      { title: "สถิติ", url: "/analytics", icon: BarChart3 },
    ]
  },
  {
    title: "เครื่องมือ AI",
    items: [
      { title: "แชทบอท", url: "/chat", icon: MessageSquare },
      { title: "เขียนเอกสาร", url: "/document", icon: FileText },
      { title: "วิเคราะห์ข้อมูล", url: "/analysis", icon: Brain },
      { title: "สร้างภาพ", url: "/image", icon: Zap },
      { title: "ประชุมออนไลน์", url: "/meeting", icon: Video },
    ]
  },
  {
    title: "จัดการ",
    items: [
      { title: "โปรเจค", url: "/projects", icon: FolderOpen },
      { title: "ทีมงาน", url: "/teams", icon: Users },
      { title: "เป้าหมาย", url: "/goals", icon: Target },
    ]
  },
  {
    title: "ระบบ",
    items: [
      { title: "ตั้งค่า", url: "/settings", icon: Settings },
      { title: "ประสิทธิภาพ", url: "/performance", icon: TrendingUp },
    ]
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  const getNavClasses = (isActive: boolean) =>
    isActive 
      ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <Bot className="h-8 w-8 text-primary" />
          {!collapsed && (
            <div>
              <h2 className="text-lg font-bold text-primary">Thai AI Hub</h2>
              <p className="text-xs text-muted-foreground">AI สำหรับคนไทย</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        {menuItems.map((section) => (
          <SidebarGroup key={section.title}>
            {!collapsed && (
              <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider">
                {section.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        className={getNavClasses(isActive(item.url))}
                        title={collapsed ? item.title : undefined}
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}