// src/features/dashboard/components/DashboardSidebar.tsx
import React from "react";
import { Home, GraduationCap, Trophy, User, MessageSquare, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const DashboardSidebar = () => {
  const menuItems = [
    { name: "Home", label: "خانه", icon: Home, active: false },
    { name: "My Learning", label: "یادگیری‌های من", icon: GraduationCap, active: false },
    { name: "Achievements", label: "دستاوردها", icon: Trophy, active: false },
    { name: "Profile", label: "پروفایل کاربری", icon: User, active: true }, // Active Item
    { name: "Community", label: "انجمن", icon: MessageSquare, active: false },
  ];

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-l border-border bg-card py-6 lg:flex h-full">
      <div className="flex flex-col gap-1 px-3">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                item.active 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className={cn("h-5 w-5", item.active ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
            {item.label}
          </a>
        ))}
      </div>

      <div className="mt-auto px-4">
        <div className="flex items-center justify-between rounded-xl bg-gradient-to-br from-primary to-blue-600 p-4 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="flex flex-col relative z-10">
                <span className="text-xs font-medium opacity-90">اشتراک حرفه‌ای</span>
                <span className="text-sm font-bold mt-0.5">ارتقاء حساب</span>
            </div>
            <Rocket className="h-6 w-6 relative z-10 opacity-90 group-hover:scale-110 transition-transform" />
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;