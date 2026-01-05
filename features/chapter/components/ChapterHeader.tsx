// src/features/chapter/components/ChapterHeader.tsx
import React from "react";
import Link from "next/link";
import { ChevronRight, List } from "lucide-react";

interface ChapterHeaderProps {
  courseId: string;
  toggleSidebar: () => void;
}

export const ChapterHeader = ({
  courseId,
  toggleSidebar,
}: ChapterHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 mb-6 md:mb-8 border-b border-gray-200 pb-4 md:pb-6">
      
      {/* Container for Title + Separator + Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-center w-full gap-4 md:gap-0">
        
        {/* Title & Mobile Toggle Row */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-lg md:text-2xl font-black text-gray-900 tracking-tight whitespace-nowrap">
            الگوهای پیشرفته React
          </h1>

          {/* Mobile Sidebar Toggle */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-gray-200 text-gray-700"
          >
            <List size={20} />
          </button>
        </div>

        {/* Separator (Visible only on Desktop) */}
        <div className="hidden md:block w-px h-6 bg-gray-300 mx-6"></div>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs md:text-sm font-medium text-gray-500 overflow-x-auto pb-1 md:pb-0 scrollbar-hide whitespace-nowrap">
          <Link
            href="/courses"
            className="hover:text-gray-900 flex items-center gap-1 shrink-0 transition-colors"
          >
            <span>دوره‌ها</span>
          </Link>
          
          <ChevronRight
            size={14}
            className="text-gray-300 rotate-180 shrink-0" // اصلاح جهت آیکون برای RTL
          />
          
          <Link
            href={`/courses/${courseId}`}
            className="hover:text-gray-900 shrink-0 transition-colors"
          >
            معماری ری‌اکت
          </Link>
          
          <ChevronRight
            size={14}
            className="text-gray-300 rotate-180 shrink-0" // اصلاح جهت آیکون برای RTL
          />
          
          <span className="text-action-600 font-boldpx-2 py-0.5  shrink-0">
            هوک‌های سفارشی
          </span>
        </nav>
      </div>
    </div>
  );
};