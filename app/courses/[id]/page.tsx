// src/app/courses/[id]/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import {
  BookOpen,
  Layers,
  Star,
  Lock,
  CheckCircle2,
  Clock,
  Share2,
  Bookmark,
  ChevronRight,
  Home,
} from "lucide-react";

export default function SingleCoursePage({
  params,
}: {
  params: { id: string };
}) {
  // --- MOCK DATA FOR SINGLE COURSE ---
  const course = {
    id: 1,
    title: "الگوهای پیشرفته React & پرفورمنس",
    description:
      "در این مستندات جامع، با عمیق‌ترین مفاهیم پرفورمنس در ری‌اکت آشنا می‌شوید. یاد می‌گیرید چطور از useMemo و useCallback به شکل صحیح استفاده کنید و چگونه کامپوننت‌های خود را برای مقیاس‌پذیری بالا معماری کنید. این دوره حاصل تجربیات مهندسی در پروژه‌های بزرگ است.",
    image: "/courses/react-js-training-igmguru_1474547454_l.jpg",
    rating: 4.8,
    reviews: 1240,
    chaptersCount: 15,
    readingTime: "۶ ساعت",
    level: "پیشرفته",
    lastUpdated: "۱۴۰۳/۱۰/۱۲",
    whatYouLearn: [
      "معماری صحیح کامپوننت‌ها در مقیاس بالا",
      "تکنیک‌های حرفه‌ای Memoization",
      "مدیریت State با ابزارهای مدرن",
      "بهینه‌سازی رندرینگ و کاهش Re-render ها",
    ],
    chapters: [
      {
        id: 1,
        title: "مقدمه‌ای بر معماری ری‌اکت",
        time: "۱۵ دقیقه",
        isFree: true,
      },
      {
        id: 2,
        title: "درک عمیق چرخه حیات (Lifecycle)",
        time: "۲۰ دقیقه",
        isFree: false,
      },
      {
        id: 3,
        title: "استراتژی‌های Memoization",
        time: "۳۵ دقیقه",
        isFree: false,
      },
      {
        id: 4,
        title: "کار با Server Components",
        time: "۴۰ دقیقه",
        isFree: false,
      },
      {
        id: 5,
        title: "پترن‌های پیشرفته هوک‌ها",
        time: "۳۰ دقیقه",
        isFree: false,
      },
      {
        id: 6,
        title: "مدیریت فرم‌های پیچیده",
        time: "۲۵ دقیقه",
        isFree: false,
      },
    ],
  };

  const [isSaved, setIsSaved] = useState(false);

  return (
    <>
      <Header />

      <div className="min-h-screen text-gray-900 font-dana my-22 md:mt-40 mb-12">
        <main className="container mx-auto px-4 md:px-6">
          
          {/* --- BREADCRUMB (Responsive Scroll) --- */}
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6 md:mb-8 overflow-x-auto whitespace-nowrap pb-2 md:pb-0 scrollbar-hide">
            <Link
              href="/"
              className="hover:text-gray-900 transition-colors flex items-center gap-1.5 shrink-0"
            >
              <Home size={16} />
              <span>خانه</span>
            </Link>
            <ChevronRight size={16} className="text-gray-300 rtl:rotate-180 shrink-0" />
            <Link
              href="/courses"
              className="hover:text-gray-900 transition-colors shrink-0"
            >
              <span>دوره‌های آموزشی</span>
            </Link>
            <ChevronRight size={16} className="text-gray-300 rtl:rotate-180 shrink-0" />
            <span className="text-action-600 font-bold truncate max-w-[200px] shrink-0">
              {course.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
            
            {/* --- LEFT COLUMN: MAIN CONTENT (8 Cols) --- */}
            <div className="lg:col-span-8 space-y-6 md:space-y-8 order-2 lg:order-1">
              
              {/* 1. Course Header Card */}
              <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 border border-gray-100 shadow-sm">
                <div className="flex flex-col gap-6">
                  {/* Title & Meta */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                      <span className="text-[10px] md:text-[11px] font-bold text-gray-500 bg-gray-100 px-2.5 md:px-3 py-1.5 rounded-full">
                        {course.level}
                      </span>
                      <span className="text-[10px] md:text-[11px] font-bold text-gray-500 bg-gray-100 px-2.5 md:px-3 py-1.5 rounded-full">
                        بروزرسانی: {course.lastUpdated}
                      </span>
                    </div>
                    <h1 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight mb-3 md:mb-4">
                      {course.title}
                    </h1>
                    <p className="text-sm md:text-lg text-gray-500 leading-relaxed text-justify">
                      {course.description}
                    </p>
                  </div>

                  {/* Stats Row */}
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 md:w-5 md:h-5 text-amber-400 fill-amber-400" />
                      <span className="font-bold text-gray-900 text-sm md:text-base">
                        {course.rating}
                      </span>
                      <span className="text-[10px] md:text-xs text-gray-400">
                        ({course.reviews} رای)
                      </span>
                    </div>
                    <div className="w-px h-6 md:h-8 bg-gray-100"></div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Layers className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                      <span className="text-xs md:text-sm font-bold">
                        {course.chaptersCount} فصل
                      </span>
                    </div>
                    <div className="w-px h-6 md:h-8 bg-gray-100"></div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                      <span className="text-xs md:text-sm font-bold">
                        {course.readingTime} مطالعه
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. What You'll Learn */}
              <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-action-600 w-5 h-5 md:w-6 md:h-6" />
                  آنچه در این مستندات می‌خوانید
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {course.whatYouLearn.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 mt-2 rounded-full bg-gray-300 shrink-0" />
                      <span className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Course Content (Curriculum) */}
              <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg md:text-xl font-black text-gray-900">
                    سرفصل‌های آموزشی
                  </h3>
                  <span className="text-[10px] md:text-xs font-bold text-gray-400 bg-gray-50 px-2.5 md:px-3 py-1.5 rounded-xl">
                    {course.chapters.length} بخش
                  </span>
                </div>

                <div className="space-y-3">
                  {course.chapters.map((chapter, index) => (
                    <div
                      key={chapter.id}
                      className={`group flex items-center justify-between p-3 md:p-4 rounded-2xl border transition-all duration-300
                        ${
                          chapter.isFree
                            ? "bg-white border-gray-100 hover:border-action-600 hover:shadow-md cursor-pointer"
                            : "bg-gray-50/50 border-transparent opacity-80"
                        }`}
                    >
                      <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                        <span
                          className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold shrink-0
                            ${
                              chapter.isFree
                                ? "bg-action-600/10 text-action-600"
                                : "bg-gray-200 text-gray-500"
                            }`}
                        >
                          {index + 1}
                        </span>
                        <div className="flex flex-col min-w-0">
                          <span
                            className={`font-bold text-xs md:text-base truncate ${
                              chapter.isFree ? "text-gray-900" : "text-gray-500"
                            }`}
                          >
                            {chapter.title}
                          </span>
                          <span className="text-[10px] md:text-xs text-gray-400 mt-0.5 md:mt-1 flex items-center gap-1">
                            <Clock size={12} />
                            {chapter.time} مطالعه
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0 mr-2">
                        {chapter.isFree ? (
                          <button className="text-[10px] md:text-xs font-bold text-action-600 bg-white border border-action-600/20 px-3 py-1.5 md:px-4 md:py-2 rounded-xl group-hover:bg-action-600 group-hover:text-white transition-all">
                            مطالعه <span className="hidden md:inline">رایگان</span>
                          </button>
                        ) : (
                          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                            <Lock size={14} />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- RIGHT COLUMN: WIDGET (4 Cols) --- */}
            {/* Order changed for mobile: Sticky Widget stays on top/bottom or flows naturally */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32 order-1 lg:order-2">
              
              {/* Course Widget Card */}
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-4 border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
                {/* Image */}
                <div className="relative aspect-[16/9] lg:aspect-[4/3] w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-6 bg-gray-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 right-4 text-white">
                    <span className="text-[10px] md:text-xs font-medium opacity-90">
                      شامل
                    </span>
                    <div className="font-bold text-base md:text-lg">
                      {course.chaptersCount} فصل آموزشی
                    </div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="px-2 pb-2">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col">
                      <span className="text-xs md:text-sm text-gray-400 font-medium">
                        هزینه دوره
                      </span>
                      <span className="text-lg md:text-xl font-black text-gray-900">
                        رایگان{" "}
                        <span className="text-[10px] md:text-xs font-normal text-gray-400">
                          (با اشتراک)
                        </span>
                      </span>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-action-600/10 text-action-600 flex items-center justify-center">
                      <Lock className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    className="w-full h-12 md:h-14 rounded-2xl text-base md:text-lg font-bold shadow-lg shadow-primary/25 mb-3"
                  >
                    خرید اشتراک ویژه
                  </Button>
                  <p className="text-[10px] md:text-xs text-center text-gray-400 mb-6">
                    دسترسی نامحدود به تمام ۲۰۰۰+ دوره
                  </p>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setIsSaved(!isSaved)}
                      className={`flex items-center justify-center gap-2 h-11 md:h-12 rounded-2xl border transition-all font-bold text-xs md:text-sm
                        ${
                          isSaved
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                        }`}
                    >
                      <Bookmark
                        size={16}
                        fill={isSaved ? "currentColor" : "none"}
                      />
                      {isSaved ? "ذخیره شد" : "ذخیره"}
                    </button>
                    <button className="flex items-center justify-center gap-2 h-11 md:h-12 rounded-2xl bg-white border border-gray-200 text-gray-600 font-bold text-xs md:text-sm hover:bg-gray-50 transition-all">
                      <Share2 size={16} />
                      اشتراک
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}