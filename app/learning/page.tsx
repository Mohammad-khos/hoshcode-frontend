"use client";

import React, { useState } from "react";
import { LearningHeader } from "@/features/learning/components/LearningHeader";
import { FileSidebar } from "@/features/learning/components/FileSidebar";
import { LessonPanel } from "@/features/learning/components/LessonPanel";
import { CodeWorkspace } from "@/features/learning/components/CodeWorkspace";
import { BookOpen, Code2, FolderOpen, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

type TabView = "files" | "lesson" | "code";

export default function LearningPage() {
  // در موبایل پیش‌فرض روی "درس" هستیم
  const [activeTab, setActiveTab] = useState<TabView>("lesson");

  return (
    <div className="h-screen w-full flex flex-col bg-white overflow-hidden font-dana" dir="rtl">
      
      {/* 1. Header (Fixed Top) */}
      <LearningHeader />

      {/* 2. Main Workspace */}
      <main className="flex-1 flex overflow-hidden relative">
         
         {/* Sidebar: Files
            - دسکتاپ (lg): همیشه نمایش داده شود (flex)
            - موبایل: فقط وقتی تب "files" فعال است نمایش داده شود
         */}
         <div className={cn(
            "lg:flex flex-col border-l border-gray-100 bg-white z-10 transition-all absolute inset-0 lg:static lg:w-64",
            activeTab === "files" ? "flex" : "hidden"
         )}>
            <FileSidebar />
         </div>

         {/* Middle: Lesson Content
            - دسکتاپ (lg): همیشه نمایش داده شود
            - موبایل: فقط وقتی تب "lesson" فعال است
         */}
         <div className={cn(
            "lg:flex flex-1 flex-col bg-white overflow-hidden absolute inset-0 lg:static lg:min-w-[350px] lg:max-w-[500px] border-l border-gray-100 z-0",
            activeTab === "lesson" ? "flex z-10" : "hidden"
         )}>
            <LessonPanel />
         </div>

         {/* Left: Code Editor
            - دسکتاپ (lg): همیشه نمایش داده شود
            - موبایل: فقط وقتی تب "code" فعال است
         */}
         <div className={cn(
            "lg:flex flex-1 flex-col bg-[#1e1e1e] overflow-hidden absolute inset-0 lg:static z-0",
            activeTab === "code" ? "flex z-10" : "hidden"
         )}>
            <CodeWorkspace />
         </div>

      </main>

      {/* 3. Mobile Bottom Navigation (Floating)
        فقط در موبایل و تبلت نمایش داده می‌شود (hidden lg:hidden)
      */}
      <div className="lg:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center bg-gray-900/90 backdrop-blur-md text-white p-1.5 rounded-full shadow-2xl border border-white/10 gap-1">
            
            <button 
                onClick={() => setActiveTab("files")}
                className={cn(
                    "flex items-center gap-2 px-4 py-3 rounded-full text-xs font-bold transition-all",
                    activeTab === "files" ? "bg-primary text-white shadow-lg" : "text-gray-400 hover:text-white"
                )}
            >
                <FolderOpen size={18} />
                {activeTab === "files" && <span>فایل‌ها</span>}
            </button>

            <button 
                onClick={() => setActiveTab("lesson")}
                className={cn(
                    "flex items-center gap-2 px-4 py-3 rounded-full text-xs font-bold transition-all",
                    activeTab === "lesson" ? "bg-primary text-white shadow-lg" : "text-gray-400 hover:text-white"
                )}
            >
                <BookOpen size={18} />
                {activeTab === "lesson" && <span>درس</span>}
            </button>

            <button 
                onClick={() => setActiveTab("code")}
                className={cn(
                    "flex items-center gap-2 px-4 py-3 rounded-full text-xs font-bold transition-all",
                    activeTab === "code" ? "bg-primary text-white shadow-lg" : "text-gray-400 hover:text-white"
                )}
            >
                <Code2 size={18} />
                {activeTab === "code" && <span>کدنویسی</span>}
            </button>

        </div>
      </div>

    </div>
  );
}