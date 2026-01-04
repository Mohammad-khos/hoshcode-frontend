// src/app/courses/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CourseFilters } from "@/features/courses/components/CourseFilters";
import { CourseCard } from "@/features/courses/components/CourseCard";
import { Search, Grid, List, Frown } from "lucide-react";
import Button from "@/components/ui/Button";

// --- 1. MOCK DATA (With Online Images) ---
const ALL_COURSES = [
  {
    id: 1,
    title: "الگوهای پیشرفته React & پرفورمنس",
    instructor: "سارا دراسنر",
    rating: 4.8,
    reviews: 1240,
    duration: "۱۲س ۳۰د",
    level: "expert",
    levelLabel: "پیشرفته",
    price: 2500000,
    priceLabel: "۲,۵۰۰,۰۰۰ تومان",
    topic: "web-dev",
    // تصویر آنلاین مرتبط با کدنویسی
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop", 
    badge: "bestseller" as const,
  },
  {
    id: 2,
    title: "مبانی طراحی UI/UX برای توسعه‌دهندگان",
    instructor: "مایکل مالویچ",
    rating: 4.6,
    reviews: 850,
    duration: "۸س ۱۵د",
    level: "beginner",
    levelLabel: "مبتدی",
    price: 1200000,
    priceLabel: "۱,۲۰۰,۰۰۰ تومان",
    topic: "design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop",
    badge: "new" as const,
  },
  {
    id: 3,
    title: "پایتون برای تحلیل داده و یادگیری ماشین",
    instructor: "خوزه پورتیلا",
    rating: 4.9,
    reviews: 3105,
    duration: "۲۲س",
    level: "intermediate",
    levelLabel: "متوسط",
    price: 2900000,
    priceLabel: "۲,۹۰۰,۰۰۰ تومان",
    topic: "data-science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "استادی در Tailwind CSS نسخه ۴",
    instructor: "آدام واتان",
    rating: 4.7,
    reviews: 542,
    duration: "۵س ۴۵د",
    level: "intermediate",
    levelLabel: "متوسط",
    price: 1500000,
    priceLabel: "۱,۵۰۰,۰۰۰ تومان",
    topic: "web-dev",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "زبان Go: راهنمای کامل از صفر",
    instructor: "ماکسیمیلیان شوارزمولر",
    rating: 4.5,
    reviews: 210,
    duration: "۹س ۲۰د",
    level: "beginner",
    levelLabel: "مبتدی",
    price: 0,
    priceLabel: "رایگان",
    topic: "web-dev",
    image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "یادگیری ماشین A-Z: پایتون و R",
    instructor: "کریل ارمنکو",
    rating: 4.7,
    reviews: 8942,
    duration: "۴۴س",
    level: "expert",
    levelLabel: "پیشرفته",
    price: 3500000,
    priceLabel: "۳,۵۰۰,۰۰۰ تومان",
    topic: "data-science",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop",
    badge: "updated" as const,
  },
  {
    id: 7,
    title: "دیجیتال مارکتینگ ۲۰۲۵",
    instructor: "ست گودین",
    rating: 4.4,
    reviews: 150,
    duration: "۱۵س",
    level: "beginner",
    levelLabel: "مبتدی",
    price: 900000,
    priceLabel: "۹۰۰,۰۰۰ تومان",
    topic: "marketing",
    image: "https://images.unsplash.com/photo-1533750349088-cd8758174073?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Flutter و Dart: ساخت اپلیکیشن موبایل",
    instructor: "آنجلا یو",
    rating: 4.8,
    reviews: 2200,
    duration: "۲۸س",
    level: "intermediate",
    levelLabel: "متوسط",
    price: 0,
    priceLabel: "رایگان",
    topic: "mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
  },
];

export default function CoursesPage() {
  // --- 2. STATES ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<'all'|'paid'|'free'>('all');
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("Most Popular");

  // --- 3. FILTER LOGIC ---
  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter(course => {
      // 1. Search Filter
      const matchesSearch = course.title.includes(searchQuery) || course.instructor.includes(searchQuery);
      
      // 2. Topic Filter
      const matchesTopic = selectedTopics.length === 0 || selectedTopics.includes(course.topic);
      
      // 3. Level Filter
      const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level);
      
      // 4. Price Filter
      const matchesPrice = 
          priceFilter === 'all' ? true :
          priceFilter === 'free' ? course.price === 0 :
          course.price > 0;

      // 5. Rating Filter
      const matchesRating = course.rating >= minRating;

      return matchesSearch && matchesTopic && matchesLevel && matchesPrice && matchesRating;
    }).sort((a, b) => {
        // Sorting Logic (Simple)
        if (sortBy === "Price: Low to High") return a.price - b.price;
        if (sortBy === "Highest Rated") return b.rating - a.rating;
        // Default (Most Popular) assumed by array order or mock logic
        return 0; 
    });
  }, [searchQuery, selectedTopics, selectedLevels, priceFilter, minRating, sortBy]);

  // Handler to clear all filters
  const handleClearAll = () => {
    setSelectedTopics([]);
    setSelectedLevels([]);
    setPriceFilter('all');
    setMinRating(0);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      {/* Page Header Area */}
      <div className="bg-card border-b border-border py-10 md:py-16">
        <div className="container-custom">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6">
                <div className="max-w-2xl space-y-4">
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                        کتابخانه ما را <span className="text-primary">کاوش کنید</span>
                    </h1>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        بهترین دوره را برای ارتقای مهارت‌های خود پیدا کنید. از بین بیش از ۲,۰۰۰ دوره آموزشی انتخاب کنید.
                    </p>
                </div>
                
                {/* Search Box */}
                <div className="w-full md:w-auto md:min-w-[400px]">
                    <div className="flex w-full items-center rounded-xl h-12 bg-background border border-border overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all shadow-sm">
                        <div className="px-4 text-muted-foreground">
                            <Search className="w-5 h-5" />
                        </div>
                        <input 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-1 bg-transparent border-none text-foreground placeholder:text-muted-foreground focus:outline-none h-full text-sm" 
                            placeholder="امروز چه چیزی می‌خواهید یاد بگیرید؟" 
                        />
                        <button className="bg-primary hover:bg-primary/90 text-white px-6 h-full font-bold text-sm transition-colors">
                            جستجو
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <main className="container-custom py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Sidebar Filters (Controlled) */}
            <CourseFilters 
                selectedTopics={selectedTopics}
                setSelectedTopics={setSelectedTopics}
                selectedLevels={selectedLevels}
                setSelectedLevels={setSelectedLevels}
                priceFilter={priceFilter}
                setPriceFilter={setPriceFilter}
                minRating={minRating}
                setMinRating={setMinRating}
                onClear={handleClearAll}
            />

            {/* Main Grid */}
            <div className="flex-1 w-full min-w-0">
                
                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
                    <p className="text-sm text-muted-foreground">
                        نمایش <span className="text-foreground font-bold">{filteredCourses.length}</span> دوره
                    </p>
                    
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <label htmlFor="sort" className="text-xs font-medium text-muted-foreground whitespace-nowrap">مرتب‌سازی:</label>
                            <select 
                                id="sort" 
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-card border border-border text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block p-2 py-1.5 outline-none"
                            >
                                <option>Most Popular</option>
                                <option>Highest Rated</option>
                                <option>Price: Low to High</option>
                            </select>
                        </div>
                        
                        <div className="flex bg-card rounded-lg border border-border p-1">
                            <button className="p-1.5 rounded bg-muted text-foreground shadow-sm">
                                <Grid className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 rounded text-muted-foreground hover:text-foreground transition-colors">
                                <List className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Grid Content */}
                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.id} {...course} />
                        ))}
                    </div>
                ) : (
                    // Empty State
                    <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-border rounded-xl bg-card/50">
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                            <Frown className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">نتیجه‌ای یافت نشد</h3>
                        <p className="text-muted-foreground mt-2 max-w-xs mx-auto">
                            هیچ دوره‌ای با فیلترهای انتخاب شده پیدا نشد. لطفاً فیلترها را تغییر دهید یا دکمه "حذف همه" را بزنید.
                        </p>
                        <Button 
                            variant="outline" 
                            className="mt-6 border-border hover:bg-muted"
                            onClick={handleClearAll}
                        >
                            پاک کردن فیلترها
                        </Button>
                    </div>
                )}

                {/* Pagination (Visual Only for now) */}
                {filteredCourses.length > 0 && (
                    <div className="mt-12 flex items-center justify-center gap-2 dir-ltr">
                        <Button variant="outline" className="w-10 h-10 p-0 rounded-lg border-border" disabled>{"<"}</Button>
                        <Button variant="primary" className="w-10 h-10 p-0 rounded-lg font-bold shadow-lg shadow-primary/20">1</Button>
                        <Button variant="outline" className="w-10 h-10 p-0 rounded-lg border-border bg-card text-muted-foreground hover:text-foreground">2</Button>
                        <Button variant="outline" className="w-10 h-10 p-0 rounded-lg border-border bg-card text-muted-foreground hover:text-foreground">{">"}</Button>
                    </div>
                )}

            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}