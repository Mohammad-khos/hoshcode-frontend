// src/app/dashboard/page.tsx
"use client";

import React, { useState } from "react";
import { UserProfileCard } from "@/features/dashboard/components/UserProfileCard";
import { DashboardTabs } from "@/features/dashboard/components/DashboardTabs";
import { OverviewTab } from "@/features/dashboard/components/tabs/OverviewTab";
// 1. ایمپورت کردن کامپوننت جدید
import { MyCoursesTab } from "@/features/dashboard/components/tabs/MyCoursesTab";
import { EditProfileTab } from "@/features/dashboard/components/tabs/EditProfileTab";



export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-8">
      
      {/* --- Sidebar (Sticky) --- */}
      <div className="lg:col-span-4 xl:col-span-3 order-2 lg:order-1">
         <UserProfileCard />
      </div>

      {/* --- Main Content --- */}
      <div className="flex flex-col gap-8 lg:col-span-8 xl:col-span-9 min-w-0 order-1 lg:order-2">
        
        {/* Navigation Tabs */}
        <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content Area */}
        <div className="min-h-[500px]">
            {/* 2. شرط‌گذاری برای نمایش تب‌ها */}
            {activeTab === "overview" && <OverviewTab />}
            
            {/* اتصال تب دوره‌ها به کامپوننت جدید */}
            {activeTab === "courses" && <MyCoursesTab />}
            
            {/* بقیه تب‌ها هنوز Placeholder هستند */}
            {activeTab === "profile" && <EditProfileTab />}
        </div>

      </div>
    </div>
  );
}