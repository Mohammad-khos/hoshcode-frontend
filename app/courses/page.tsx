// src/app/courses/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CourseFilters } from "@/features/courses/components/CourseFilters";
import { CourseCard } from "@/features/courses/components/CourseCard";
import { Frown, ChevronDown, Filter, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

// --- MOCK DATA ---
const ALL_COURSES = [
  {
    id: 1,
    title: "الگوهای پیشرفته React & پرفورمنس",
    rating: 4.8,
    reviews: 1240,
    chapters: 15,
    readingTime: "۶ ساعت",
    level: "expert",
    levelLabel: "پیشرفته",
    topic: "web-dev",
    image: "/courses/untitlsssssed.png",
  },
  {
    id: 2,
    title: "مبانی طراحی UI/UX مدرن",
    rating: 4.6,
    reviews: 850,
    chapters: 8,
    readingTime: "۴ ساعت",
    level: "beginner",
    levelLabel: "مبتدی",
    topic: "design",
    image: "/courses/react-js-training-igmguru_1474547454_l.jpg",
  },
  {
    id: 3,
    title: "مسیر یادگیری علم داده با پایتون",
    rating: 4.9,
    reviews: 3105,
    chapters: 24,
    readingTime: "۱۲ ساعت",
    level: "intermediate",
    levelLabel: "متوسط",
    topic: "data-science",
    image: "/courses/data-s.jpg",
  },
  {
    id: 4,
    title: "کتابچه جامع Tailwind CSS v4",
    rating: 4.7,
    reviews: 542,
    chapters: 10,
    readingTime: "۵ ساعت",
    level: "intermediate",
    levelLabel: "متوسط",
    topic: "web-dev",
    image: "/courses/introduction_to_python_course_thumbnail.jpg",
  },
  {
    id: 5,
    title: "زبان Go: مستندات کاربردی از صفر",
    rating: 4.5,
    reviews: 210,
    chapters: 18,
    readingTime: "۹ ساعت",
    level: "beginner",
    levelLabel: "مبتدی",
    topic: "web-dev",
    image: "/courses/react-js-training-igmguru_1474547454_l.jpg",
  },
  {
    id: 6,
    title: "یادگیری ماشین: تئوری و پیاده‌سازی",
    rating: 4.7,
    reviews: 8942,
    chapters: 30,
    readingTime: "۲۰ ساعت",
    level: "expert",
    levelLabel: "پیشرفته",
    topic: "data-science",
    image: "/courses/data-s.jpg",
  },
  {
    id: 7,
    title: "استراتژی‌های دیجیتال مارکتینگ ۲۰۲۵",
    rating: 4.4,
    reviews: 150,
    chapters: 12,
    readingTime: "۷ ساعت",
    level: "beginner",
    levelLabel: "مبتدی",
    topic: "marketing",
    image: "/courses/untitlsssssed.png",
  },
];

export default function CoursesPage() {
  // STATES
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("Most Popular");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // FILTER LOGIC
  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      const matchesTopic =
        selectedTopics.length === 0 || selectedTopics.includes(course.topic);
      const matchesLevel =
        selectedLevels.length === 0 || selectedLevels.includes(course.level);
      const matchesRating = course.rating >= minRating;
      return matchesTopic && matchesLevel && matchesRating;
    }).sort((a, b) => {
      if (sortBy === "Highest Rated") return b.rating - a.rating;
      // Default sort logic
      return 0;
    });
  }, [selectedTopics, selectedLevels, minRating, sortBy]);

  const handleClearAll = () => {
    setSelectedTopics([]);
    setSelectedLevels([]);
    setMinRating(0);
  };

  return (
    <>
      <Header />

      {/* Main Container with Margin for Fixed Header */}
      <div className="min-h-screen  text-gray-900 font-dana my-22 md:mt-45 mb-12">
        <main className="container mx-auto px-4 md:px-6">
          {/* --- PAGE HEADER (New Design) --- */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-gray-200">
            {/* RIGHT SIDE: Title + Separator + Breadcrumb */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <h1 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight whitespace-nowrap">
                دوره‌های آموزشی هوش کد
              </h1>

              {/* Minimal Separator (Vertical Line) */}
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>

              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm font-medium text-gray-500">
                <Link
                  href="/"
                  className="hover:text-gray-900 transition-colors flex items-center gap-1.5"
                >
                  <span>خانه</span>
                </Link>

                <ChevronRight
                  size={16}
                  className="text-gray-300 rtl:rotate-180"
                />

                <span className="text-action-600 font-bold px-2 py-0.5 rounded-md">
                  دوره‌ها
                </span>
              </nav>
            </div>

            {/* LEFT SIDE: Stats + Sort */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Results Count Pill */}
              <span className="text-xs font-bold text-gray-500 px-3 py-2 ">
                نمایش{" "}
                <span className="text-gray-900 mx-1">
                  {filteredCourses.length}
                </span>{" "}
                منبع
              </span>

              {/* Sort Dropdown */}
              <div className="relative group">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-xl pl-4 pr-10 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 cursor-pointer shadow-sm min-w-[160px] transition-all hover:border-gray-300"
                >
                  <option>محبوب‌ترین‌ها</option>
                  <option>Highest Rated</option>
                  <option>جدیدترین‌ها</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-gray-600 transition-colors" />
              </div>
            </div>
          </div>

          {/* --- CONTENT LAYOUT --- */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Sidebar Filters */}
            <aside className="hidden lg:block w-72 shrink-0 sticky top-28 self-start space-y-8">
              <CourseFilters
                selectedTopics={selectedTopics}
                setSelectedTopics={setSelectedTopics}
                selectedLevels={selectedLevels}
                setSelectedLevels={setSelectedLevels}
                minRating={minRating}
                setMinRating={setMinRating}
                onClear={handleClearAll}
              />
            </aside>

            {/* Mobile Filter Trigger */}
            <div className="lg:hidden w-full mb-6">
              <button
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl shadow-sm text-gray-700 font-bold transition-all hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-primary" />
                  فیلترهای پیشرفته
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isMobileFiltersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`mt-2 overflow-hidden transition-all duration-300 bg-white rounded-2xl border border-gray-100 shadow-xl ${
                  isMobileFiltersOpen
                    ? "max-h-[1000px] opacity-100 p-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <CourseFilters
                  selectedTopics={selectedTopics}
                  setSelectedTopics={setSelectedTopics}
                  selectedLevels={selectedLevels}
                  setSelectedLevels={setSelectedLevels}
                  minRating={minRating}
                  setMinRating={setMinRating}
                  onClear={handleClearAll}
                />
              </div>
            </div>

            {/* Main Grid */}
            <div className="flex-1 w-full min-w-0">
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed border-gray-200 rounded-[2rem] bg-white">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <Frown className="w-10 h-10 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    نتیجه‌ای یافت نشد!
                  </h3>
                  <Button
                    variant="outline"
                    className="mt-4 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all px-8 py-3 h-auto rounded-xl"
                    onClick={handleClearAll}
                  >
                    پاک کردن فیلترها
                  </Button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
