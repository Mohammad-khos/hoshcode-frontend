import React from "react";
import { cn } from "@/lib/utils";
import { LayoutDashboard, UserCog, GraduationCap, Trophy, Settings } from "lucide-react";

interface DashboardTabsProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export const DashboardTabs = ({ activeTab, setActiveTab }: DashboardTabsProps) => {
  const tabs = [
    { id: "overview", label: "نمای کلی", icon: LayoutDashboard },
    { id: "courses", label: "دوره‌های من", icon: GraduationCap },

  ];

  return (
    <div className="w-full mb-8 font-dana">
      
      {/* Scroll Fade Masks */}
      <div className="relative group/dock">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F8F9FB] to-transparent z-10 md:hidden pointer-events-none transition-opacity duration-300" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F8F9FB] to-transparent z-10 md:hidden pointer-events-none transition-opacity duration-300" />

        {/* Container */}
        <div className="bg-white/80 backdrop-blur-2xl p-1.5 rounded-[1.4rem] border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] inline-flex items-center gap-1.5 max-w-full overflow-x-auto scrollbar-hide">
          
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative flex items-center justify-center gap-2.5 rounded-2xl outline-none select-none overflow-hidden",
                  // تغیر ۱: زمان ۳۰۰ میلی‌ثانیه برای سرعت بیشتر + ترنزیشن همزمان روی همه خواص
                  "transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]", 
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-[0_4px_20px_-2px_rgba(var(--primary),0.3)] ring-4 ring-primary/10 px-5 py-3" 
                    : "text-gray-500 hover:bg-white hover:text-gray-900 bg-transparent px-3 py-3 hover:shadow-sm"
                )}
              >
                
                {/* Icon Animation */}
                <tab.icon 
                  size={20} 
                  className={cn(
                    "shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                    isActive ? "scale-105 fill-current" : "group-hover:scale-105"
                  )} 
                  strokeWidth={isActive ? 2 : 1.5}
                />
                
                {/* Label Animation */}
                <div className={cn(
                    "grid transition-[grid-template-columns,opacity] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                    isActive 
                        ? "grid-cols-[1fr] opacity-100" 
                        : "grid-cols-[0fr] opacity-0 md:grid-cols-[1fr] md:opacity-100"
                )}>
                    {/* تغییر ۲: اضافه کردن transition-colors مستقیم به متن برای هماهنگی کامل */}
                    <span className="overflow-hidden whitespace-nowrap text-sm font-bold transition-colors duration-300">
                        {tab.label}
                    </span>
                </div>

              </button>
            );
          })}

          <div className="w-px h-8 bg-gray-200/60 mx-1 hidden sm:block shrink-0" />
          
          {/* Profile Button */}
          <button 
              onClick={() => setActiveTab("profile")}
              className={cn(
                  "relative flex items-center justify-center w-11 h-11 rounded-2xl border transition-all duration-300 shrink-0",
                  activeTab === "profile" 
                      ? "border-primary/20 bg-primary/5 text-primary shadow-inner" 
                      : "border-transparent hover:bg-white text-gray-400 hover:text-gray-600 hover:shadow-sm"
              )}
          >
              <UserCog size={20} strokeWidth={1.5} />
          </button>

        </div>
      </div>
    </div>
  );
};