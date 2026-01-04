// src/features/dashboard/components/DashboardHeader.tsx
import React from "react";
import { Search, Bell, Settings, Code2 } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-card px-6 transition-colors">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
            <Code2 className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold tracking-tight text-foreground">هوش کد</h2>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:block">
          <div className="relative flex w-64 items-center rounded-lg bg-muted/50 px-3 py-2 border border-transparent focus-within:border-primary/50 transition-colors">
            <Search className="h-4 w-4 text-muted-foreground ml-2" />
            <input 
                className="w-full border-none bg-transparent p-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-0" 
                placeholder="جستجو..." 
                type="text" 
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Top Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#">داشبورد</a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#">دوره‌ها</a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#">منتورشیپ</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <Settings className="h-5 w-5" />
          </button>
          {/* Avatar */}
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 ring-2 ring-background cursor-pointer"></div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;