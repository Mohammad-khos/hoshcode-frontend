// src/features/dashboard/components/tabs/MyCoursesTab.tsx
import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
// ایمپورت کردن کامپوننت اصلی کارت دوره
import { CourseCard } from "@/features/courses/components/CourseCard";

// Minimal Filter Tab Component
const FilterTab = ({ label, active, onClick }: any) => (
    <button 
        onClick={onClick}
        className={cn(
            "relative px-4 py-2 text-xs font-bold transition-all duration-300 rounded-full",
            active ? "text-gray-900 bg-white shadow-sm" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
        )}
    >
        {label}
    </button>
);

export const MyCoursesTab = () => {
  const [filter, setFilter] = useState("all");

  // داده‌های ماک متناسب با CourseCard اصلی
  // نکته: چون کامپوننت CourseCard از Image استفاده می‌کند، حتما باید src عکس معتبر باشد.
  // من از تصاویر placeholder استفاده کردم تا ارور نگیرید.
  const courses = [
    {
      id: 1,
      title: "توسعه حرفه‌ای با Next.js 14 و React پیشرفته",
      rating: 4.8,
      reviews: 124,
      levelLabel: "پیشرفته",
      image: "https://placehold.co/600x400/2563eb/ffffff?text=Next.js+14", // لینک موقت برای جلوگیری از کرش
      chapters: 24,
      readingTime: "۱۲ ساعت",
      status: "active"
    },
    {
      id: 2,
      title: "متخصص پایتون: از صفر تا تحلیل داده",
      rating: 4.9,
      reviews: 85,
      levelLabel: "متوسط",
      image: "https://placehold.co/600x400/ca8a04/ffffff?text=Python+Mastery",
      chapters: 18,
      readingTime: "۱۸ ساعت",
      status: "active"
    },
    {
      id: 3,
      title: "امنیت وب و جلوگیری از نفوذ (Web Security)",
      rating: 4.7,
      reviews: 42,
      levelLabel: "متوسط",
      image: "https://placehold.co/600x400/e11d48/ffffff?text=Security",
      chapters: 12,
      readingTime: "۶ ساعت",
      status: "active"
    },
    {
      id: 4,
      title: "جامع‌ترین دوره HTML & CSS مدرن",
      rating: 5.0,
      reviews: 210,
      levelLabel: "مقدماتی",
      image: "https://placehold.co/600x400/0ea5e9/ffffff?text=HTML+CSS",
      chapters: 30,
      readingTime: "۱۰ ساعت",
      status: "completed"
    }
  ];

  const filteredCourses = courses.filter(c => 
    filter === "all" ? true : c.status === filter
  );

  return (
    <div className="space-y-8 font-dana animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[500px]">
      
      {/* --- Header & Filters --- */}
      <div className="flex flex-col sm:flex-row items-end sm:items-center justify-between gap-6">
        <div>
            <h2 className="text-xl font-black text-gray-900">دوره‌های من</h2>
            <p className="text-xs text-gray-400 font-medium mt-1">مدیریت مسیرهای یادگیری شما</p>
        </div>

        <div className="flex items-center gap-1 bg-gray-100/50 p-1 rounded-full">
            <FilterTab label="همه" active={filter === "all"} onClick={() => setFilter("all")} />
            <FilterTab label="در حال یادگیری" active={filter === "active"} onClick={() => setFilter("active")} />
            <FilterTab label="تکمیل شده" active={filter === "completed"} onClick={() => setFilter("completed")} />
        </div>
      </div>

      {/* --- Course Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Render EXISTING CourseCard */}
        {filteredCourses.map((course) => (
            // تمام پراپ‌های مورد نیاز CourseCard را پاس می‌دهیم
            <CourseCard 
                key={course.id}
                id={course.id}
                title={course.title}
                image={course.image}
                rating={course.rating}
                reviews={course.reviews}
                levelLabel={course.levelLabel}
                chapters={course.chapters}
                readingTime={course.readingTime}
            />
        ))}
        
        {/* Add New Ghost Card (همان استایل قبلی برای دکمه افزودن) */}
        <button className="group flex flex-col items-center justify-center gap-4 bg-gray-50/50 border-2 border-dashed border-gray-200 rounded-[2rem] p-3 h-full min-h-[320px] hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-300 group-hover:text-primary group-hover:scale-110 transition-all">
                <Plus size={24} />
            </div>
            <div className="text-center">
                <span className="block font-bold text-sm text-gray-900 mb-1">دوره جدید</span>
                <span className="text-xs text-gray-400">جستجو در کاتالوگ</span>
            </div>
        </button>

      </div>
    </div>
  );
};