// src/app/dashboard/page.tsx
"use client"; // چون از useState استفاده می‌کنیم

import React, { useState } from "react";
import { 
  Edit3, Share2, Mail, Flame, CheckCircle, 
  BadgeCheck, Play, ArrowLeft, 
  LayoutDashboard, UserCog, GraduationCap, Trophy, Settings, Code2
} from "lucide-react";
import { cn } from "@/lib/utils";

// Import Tab Components
// اگر فایل‌ها را جدا نساختید، می‌توانید کدهای بالا را همینجا تعریف کنید.
// اما فرض بر این است که فایل‌ها را ساختید یا محتوایشان را دارید.
import { EditProfileTab } from "@/features/dashboard/components/tabs/EditProfileTab";
import { MyCoursesTab } from "@/features/dashboard/components/tabs/MyCoursesTab";
import { AchievementsTab } from "@/features/dashboard/components/tabs/AchievementsTab";
import { SettingsTab } from "@/features/dashboard/components/tabs/SettingsTab";

export default function DashboardPage() {
  // State برای مدیریت تب فعال
  const [activeTab, setActiveTab] = useState("overview");

  // تعریف تب‌ها
  const tabs = [
    { id: "overview", label: "نمای کلی", icon: LayoutDashboard },
    { id: "profile", label: "ویرایش پروفایل", icon: UserCog },
    { id: "courses", label: "دوره‌های من", icon: GraduationCap },
    { id: "achievements", label: "دستاوردها", icon: Trophy },
    { id: "settings", label: "تنظیمات", icon: Settings },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
      
      {/* --- Right Column: User Card (Sticky) --- */}
      <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6">
        <div className="sticky top-6 flex flex-col items-center rounded-xl border border-border bg-card p-6 shadow-sm">
          {/* ... (User Card Content - همان کد قبلی) ... */}
          <div className="relative mb-4">
            <div className="h-32 w-32 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 p-1 ring-4 ring-background">
                <div className="w-full h-full rounded-full bg-muted overflow-hidden relative flex items-center justify-center bg-slate-100 text-slate-400">
                     <span className="text-4xl font-bold">AJ</span>
                </div>
            </div>
            <button className="absolute bottom-0 right-0 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 border-2 border-card">
              <Edit3 className="h-4 w-4" />
            </button>
          </div>
          
          <h1 className="text-xl font-bold text-foreground">محمدمهدی خسروی </h1>
          <p className="text-sm text-muted-foreground dir-ltr">@alexj_code</p>
          
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-600 border border-amber-500/20">
              <Trophy className="h-3 w-3" />
              عضو ویژه
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-600 border border-blue-500/20">
              سطح ۱۲
            </span>
          </div>

          <div className="mt-6 w-full space-y-4">
            <div className="flex items-center justify-between text-sm border-b border-border pb-3">
              <span className="text-muted-foreground">تاریخ عضویت</span>
              <span className="font-medium text-foreground">شهریور ۱۴۰۲</span>
            </div>
            <div className="flex items-center justify-between text-sm pb-1">
              <span className="text-muted-foreground">موقعیت</span>
              <span className="font-medium text-foreground">تهران، ایران</span>
            </div>
            
            <div className="flex w-full gap-2 pt-2">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-border bg-background py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                <Share2 className="h-4 w-4" />
                اشتراک
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-primary py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors">
                <Mail className="h-4 w-4" />
                تماس
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Left Column: Dynamic Content --- */}
      <div className="flex flex-col gap-6 lg:col-span-8 xl:col-span-9">
        
        {/* Tabs Navigation */}
        <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm scrollbar-hide">
          <nav className="flex min-w-max px-4">
            {tabs.map((tab) => (
                <button 
                    key={tab.id} 
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                        "relative flex items-center gap-2 border-b-2 px-4 py-4 text-sm font-medium transition-all outline-none",
                        activeTab === tab.id 
                            ? "border-primary text-primary" 
                            : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                    )}
                >
                    <tab.icon className={cn("h-5 w-5", activeTab === tab.id && "animate-pulse")} />
                    {tab.label}
                </button>
            ))}
          </nav>
        </div>

        {/* --- Content Area --- */}
        <div className="min-h-100">
            {activeTab === "overview" && <OverviewTabContent />}
            {activeTab === "profile" && <EditProfileTab />}
            {activeTab === "courses" && <MyCoursesTab />}
            {activeTab === "achievements" && <AchievementsTab />}
            {activeTab === "settings" && <SettingsTab />}
        </div>

      </div>
    </div>
  );
}

// کامپوننت محتوای "نمای کلی" (همان کدهای قبلی که الان جدا شده)
const OverviewTabContent = () => (
    <div className="space-y-6 animate-fade-in">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
                { label: "روزهای متوالی", value: "۱۴ روز", icon: Flame, color: "text-orange-500", bg: "bg-orange-500/10" },
                { label: "مسائل حل شده", value: "۱۲۸", icon: CheckCircle, color: "text-blue-500", bg: "bg-blue-500/10" },
                { label: "گواهینامه‌ها", value: "۵", icon: BadgeCheck, color: "text-purple-500", bg: "bg-purple-500/10" },
            ].map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1 rounded-xl border border-border bg-card p-5 shadow-sm hover:border-primary/30 transition-colors">
                    <div className={`mb-2 flex h-10 w-10 items-center justify-center rounded-lg ${stat.bg} ${stat.color}`}>
                        <stat.icon className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
            ))}
        </div>

        {/* Continue Learning */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">ادامه یادگیری</h3>
                <a className="text-sm font-medium text-primary hover:underline flex items-center gap-1" href="#">
                    مشاهده همه
                    <ArrowLeft className="h-4 w-4" />
                </a>
            </div>
            <div className="space-y-4">
                <div className="flex flex-col gap-4 rounded-lg border border-border/50 bg-muted/20 p-4 transition-colors hover:border-primary/30 hover:bg-muted/40 sm:flex-row sm:items-center">
                    <div className="h-16 w-16 shrink-0 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-500">
                            <LayoutDashboard className="h-8 w-8" />
                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                        <h4 className="font-semibold text-foreground">الگوهای پیشرفته React</h4>
                        <p className="text-sm text-muted-foreground">ماژول ۴: کامپوننت‌های مرتبه بالا</p>
                        <div className="mt-2 h-1.5 w-full max-w-xs rounded-full bg-muted">
                            <div className="h-full w-[65%] rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)]"></div>
                        </div>
                    </div>
                    <button className="shrink-0 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 flex items-center gap-2">
                        <Play className="h-4 w-4 fill-current" />
                        ادامه
                    </button>
                </div>
                
                <div className="flex flex-col gap-4 rounded-lg border border-border/50 bg-muted/20 p-4 transition-colors hover:border-primary/30 hover:bg-muted/40 sm:flex-row sm:items-center">
                    <div className="h-16 w-16 shrink-0 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                            <Code2 className="h-8 w-8" />
                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                        <h4 className="font-semibold text-foreground">پایتون برای علم داده</h4>
                        <p className="text-sm text-muted-foreground">ماژول ۲: آرایه‌های NumPy</p>
                        <div className="mt-2 h-1.5 w-full max-w-xs rounded-full bg-muted">
                            <div className="h-full w-[30%] rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)]"></div>
                        </div>
                    </div>
                    <button className="shrink-0 rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted">
                        ادامه
                    </button>
                </div>
            </div>
        </div>
        
        {/* About Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
             <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-foreground">درباره من</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    برنامه‌نویس فول‌استک با علاقه زیاد به ساخت اپلیکیشن‌های مقیاس‌پذیر. در حال حاضر روی یادگیری عمیق و هوش مصنوعی متمرکز هستم.
                </p>
                <div className="mt-6">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">مهارت‌ها</h4>
                    <div className="flex flex-wrap gap-2">
                        {["JavaScript", "React", "Node.js", "Python", "Tailwind"].map(tech => (
                            <span key={tech} className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground dir-ltr">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-foreground">آخرین نشان‌ها</h3>
                    <a className="text-sm font-medium text-primary hover:underline flex items-center gap-1" href="#">
                        همه
                        <ArrowLeft className="h-3 w-3" />
                    </a>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {[
                        { icon: Trophy, color: "text-yellow-500", bg: "bg-yellow-500/10", label: "شروع سریع" },
                        { icon: Code2, color: "text-blue-500", bg: "bg-blue-500/10", label: "۱۰۰ کامیت" },
                        { icon: GraduationCap, color: "text-purple-500", bg: "bg-purple-500/10", label: "حل مسئله" },
                    ].map((badge, idx) => (
                        <div key={idx} className="group flex flex-col items-center gap-2">
                            <div className={`flex h-14 w-14 items-center justify-center rounded-full ${badge.bg} transition-transform group-hover:scale-110`}>
                                <badge.icon className={`h-7 w-7 ${badge.color}`} />
                            </div>
                            <span className="text-center text-[10px] font-medium text-muted-foreground">{badge.label}</span>
                        </div>
                    ))}
                        <div className="group flex flex-col items-center gap-2 opacity-50">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-border bg-muted/30">
                            <Settings className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <span className="text-center text-[10px] font-medium text-muted-foreground">استاد</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);