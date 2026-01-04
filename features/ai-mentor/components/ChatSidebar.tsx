// src/features/ai-mentor/components/ChatSidebar.tsx
import React from "react";
import { Plus, MessageSquare, Settings, LogOut, Code2 } from "lucide-react";

export const ChatSidebar = () => {
  return (
    <aside className="hidden w-72 flex-col border-l border-border bg-card shrink-0 md:flex h-full">
      <div className="flex flex-col h-full p-4 justify-between">
        
        {/* Top Section */}
        <div className="flex flex-col gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <Code2 className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-foreground text-base font-bold leading-tight">هوش کد</h1>
              <p className="text-muted-foreground text-xs font-medium">دستیار هوشمند</p>
            </div>
          </div>

          {/* New Chat Button */}
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group cursor-pointer border border-border hover:border-primary/50">
            <Plus className="text-foreground group-hover:text-primary transition-colors h-5 w-5" />
            <p className="text-foreground text-sm font-medium leading-normal">چت جدید</p>
          </button>

          {/* History List */}
          <div className="flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-300px)]">
            <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">اخیر</p>
            {[
                "مسیر شغلی پایتون",
                "بررسی رزومه",
                "مقدمات علم داده",
                "رودمپ فرانت‌اند"
            ].map((item, i) => (
                <a key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors group" href="#">
                    <MessageSquare className="text-muted-foreground group-hover:text-foreground h-5 w-5" />
                    <p className="text-muted-foreground group-hover:text-foreground text-sm font-medium leading-normal truncate">
                        {item}
                    </p>
                </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-1 pt-4 border-t border-border">
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors group" href="#">
            <Settings className="text-muted-foreground group-hover:text-foreground h-5 w-5" />
            <p className="text-muted-foreground group-hover:text-foreground text-sm font-medium leading-normal">تنظیمات</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors group" href="#">
            <LogOut className="text-muted-foreground group-hover:text-red-500 h-5 w-5" />
            <p className="text-muted-foreground group-hover:text-red-500 text-sm font-medium leading-normal">خروج</p>
          </a>
          
          {/* Mini Profile */}
          <div className="mt-2 flex items-center gap-3 p-2 bg-muted/30 rounded-lg border border-border">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">AJ</div>
            <div className="flex flex-col overflow-hidden">
              <p className="text-foreground text-xs font-medium truncate">الکس جانسون</p>
              <p className="text-muted-foreground text-[10px] truncate">کاربر حرفه‌ای</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};