// src/features/courses/components/CourseFilters.tsx
import React, { useState } from "react";
import { Filter, ChevronDown, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

// تعریف تایپ‌ها برای ورودی‌های فیلتر
interface FilterProps {
  selectedTopics: string[];
  setSelectedTopics: (topics: string[]) => void;
  selectedLevels: string[];
  setSelectedLevels: (levels: string[]) => void;
  priceFilter: 'all' | 'paid' | 'free';
  setPriceFilter: (price: 'all' | 'paid' | 'free') => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  onClear: () => void;
}

const FilterSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-3 bg-muted/30 hover:bg-muted/50 transition-colors"
      >
        <span className="text-sm font-semibold text-foreground">{title}</span>
        <ChevronDown className={cn("w-4 h-4 text-muted-foreground transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && <div className="p-4 flex flex-col gap-3">{children}</div>}
    </div>
  );
};

export const CourseFilters = ({
  selectedTopics,
  setSelectedTopics,
  selectedLevels,
  setSelectedLevels,
  priceFilter,
  setPriceFilter,
  minRating,
  setMinRating,
  onClear
}: FilterProps) => {

  // تابع کمکی برای مدیریت چک‌باکس‌ها (چندانتخابی)
  const toggleSelection = (item: string, list: string[], setList: (l: string[]) => void) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <aside className="w-full lg:w-72 flex-shrink-0 space-y-4">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-lg font-bold flex items-center gap-2 text-foreground">
          <Filter className="w-5 h-5 text-primary" />
          فیلترها
        </h3>
        <button onClick={onClear} className="text-xs font-medium text-red-400 hover:text-red-500 flex items-center gap-1 transition-colors">
            <X className="w-3 h-3" />
            حذف همه
        </button>
      </div>

      {/* 1. Topics Filter */}
      <FilterSection title="موضوعات">
        {[
            { label: "توسعه وب", value: "web-dev" },
            { label: "علم داده", value: "data-science" },
            { label: "طراحی رابط کاربری", value: "design" },
            { label: "بازاریابی", value: "marketing" },
            { label: "برنامه‌نویسی موبایل", value: "mobile" }
        ].map((item) => {
            const isChecked = selectedTopics.includes(item.value);
            return (
                <label key={item.value} className="flex items-center gap-3 cursor-pointer group select-none">
                    <div className="relative flex items-center">
                        <input 
                            type="checkbox" 
                            className="peer h-4 w-4 rounded border-border bg-muted checked:bg-primary checked:border-primary appearance-none transition-all cursor-pointer"
                            checked={isChecked}
                            onChange={() => toggleSelection(item.value, selectedTopics, setSelectedTopics)}
                        />
                        <Check className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" />
                    </div>
                    <span className={cn("text-sm transition-colors", isChecked ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground")}>
                        {item.label}
                    </span>
                </label>
            );
        })}
      </FilterSection>

      {/* 2. Difficulty Filter */}
      <FilterSection title="سطح دشواری">
         {[
             { label: "مبتدی", value: "beginner" },
             { label: "متوسط", value: "intermediate" },
             { label: "پیشرفته", value: "expert" }
         ].map((level) => {
            const isChecked = selectedLevels.includes(level.value);
            return (
                <label key={level.value} className="flex items-center gap-3 cursor-pointer group select-none">
                    <div className="relative flex items-center">
                        <input 
                            type="checkbox" 
                            className="peer h-4 w-4 rounded border-border bg-muted checked:bg-primary checked:border-primary appearance-none transition-all cursor-pointer"
                            checked={isChecked}
                            onChange={() => toggleSelection(level.value, selectedLevels, setSelectedLevels)}
                        />
                        <Check className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" />
                    </div>
                    <span className={cn("text-sm transition-colors", isChecked ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground")}>
                        {level.label}
                    </span>
                </label>
            );
         })}
      </FilterSection>

      {/* 3. Price Filter */}
      <div className="border border-border rounded-lg bg-card p-4">
         <h4 className="text-sm font-semibold mb-3 text-foreground">قیمت</h4>
         <div className="flex bg-muted rounded-lg p-1">
            <button 
                onClick={() => setPriceFilter('paid')}
                className={cn("flex-1 py-1.5 text-sm font-medium rounded-md transition-all", priceFilter === 'paid' ? "bg-primary text-black shadow-sm" : "text-muted-foreground hover:text-foreground")}
            >
                پولی
            </button>
             <button 
                onClick={() => setPriceFilter('all')}
                className={cn("flex-1 py-1.5 text-sm font-medium rounded-md transition-all", priceFilter === 'all' ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}
            >
                همه
            </button>
            <button 
                onClick={() => setPriceFilter('free')}
                className={cn("flex-1 py-1.5 text-sm font-medium rounded-md transition-all", priceFilter === 'free' ? "bg-primary text-black shadow-sm" : "text-muted-foreground hover:text-foreground")}
            >
                رایگان
            </button>
         </div>
      </div>
      
       {/* 4. Ratings Filter */}
      <FilterSection title="امتیاز">
         {[4.5, 4, 3.5, 3].map((rating) => (
            <label key={rating} className="flex items-center gap-3 cursor-pointer group select-none">
                <input 
                    type="radio" 
                    name="rating" 
                    className="h-4 w-4 border-border bg-muted text-primary focus:ring-primary accent-primary"
                    checked={minRating === rating}
                    onChange={() => setMinRating(rating)}
                />
                <div className="flex text-amber-400 gap-0.5">
                    <span className="text-sm font-bold text-foreground w-4">{rating}</span>
                    <span className="text-xs text-muted-foreground ml-1">و بالاتر</span>
                </div>
            </label>
         ))}
      </FilterSection>

    </aside>
  );
};