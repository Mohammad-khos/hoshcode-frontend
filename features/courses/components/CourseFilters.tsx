// src/features/courses/components/CourseFilters.tsx
"use client";

import React from "react";
import { Filter, RotateCcw } from "lucide-react";

interface CourseFiltersProps {
  selectedTopics: string[];
  setSelectedTopics: (topics: string[]) => void;
  selectedLevels: string[];
  setSelectedLevels: (levels: string[]) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  onClear: () => void;
}

export const CourseFilters = ({
  selectedTopics,
  setSelectedTopics,
  selectedLevels,
  setSelectedLevels,
  minRating,
  setMinRating,
  onClear,
}: CourseFiltersProps) => {

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xs font-extrabold text-gray-900 mb-3 px-1 uppercase tracking-wide opacity-80">{children}</h3>
  );

  const FilterPill = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center justify-between px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-200 border mb-2
        ${active 
          ? 'bg-gray-900 border-gray-900 text-white shadow-lg shadow-gray-900/20' 
          : 'bg-white border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-200'}
      `}
    >
      <span>{label}</span>
      {active && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
    </button>
  );

  const toggleTopic = (topic: string) => {
    selectedTopics.includes(topic)
      ? setSelectedTopics(selectedTopics.filter(t => t !== topic))
      : setSelectedTopics([...selectedTopics, topic]);
  };

  const toggleLevel = (level: string) => {
    selectedLevels.includes(level)
      ? setSelectedLevels(selectedLevels.filter(l => l !== level))
      : setSelectedLevels([...selectedLevels, level]);
  };

  return (
    <div className="bg-gray-50/50 rounded-[2rem] p-6 border border-gray-100/50 space-y-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-900 font-black text-lg">
            <Filter className="w-5 h-5" strokeWidth={3} />
            <span>فیلترها</span>
        </div>
        <button 
            onClick={onClear}
            className="group flex items-center gap-1.5 text-[10px] font-bold text-gray-400 hover:text-red-500 transition-colors bg-white px-3 py-1.5 rounded-full border border-gray-100"
        >
            <RotateCcw className="w-3 h-3 transition-transform group-hover:-rotate-180" />
            <span>بازنشانی</span>
        </button>
      </div>

      {/* Topics */}
      <div>
        <SectionTitle>موضوعات</SectionTitle>
        <div>
            <FilterPill label="توسعه وب" active={selectedTopics.includes('web-dev')} onClick={() => toggleTopic('web-dev')} />
            <FilterPill label="طراحی محصول (UI/UX)" active={selectedTopics.includes('design')} onClick={() => toggleTopic('design')} />
            <FilterPill label="هوش مصنوعی & Data" active={selectedTopics.includes('data-science')} onClick={() => toggleTopic('data-science')} />
            <FilterPill label="برنامه‌نویسی موبایل" active={selectedTopics.includes('mobile')} onClick={() => toggleTopic('mobile')} />
            <FilterPill label="دیجیتال مارکتینگ" active={selectedTopics.includes('marketing')} onClick={() => toggleTopic('marketing')} />
        </div>
      </div>

      {/* Levels */}
      <div>
        <SectionTitle>سطح مهارت</SectionTitle>
        <div className="flex flex-wrap gap-2">
            {['beginner', 'intermediate', 'expert'].map((lvl) => {
                const label = lvl === 'beginner' ? 'مقدماتی' : lvl === 'intermediate' ? 'متوسط' : 'پیشرفته';
                const isActive = selectedLevels.includes(lvl);
                return (
                    <button
                        key={lvl}
                        onClick={() => toggleLevel(lvl)}
                        className={`
                            px-4 py-2 rounded-xl text-xs font-bold border transition-all
                            ${isActive 
                                ? 'bg-primary border-primary text-white shadow-md shadow-primary/20' 
                                : 'bg-white border-gray-200 text-gray-500 hover:border-gray-400'}
                        `}
                    >
                        {label}
                    </button>
                )
            })}
        </div>
      </div>

      {/* Rating */}
      <div>
        <SectionTitle>امتیاز کاربران</SectionTitle>
        <div className="flex bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm">
            {[4, 3, 2, 1].map((star) => (
                <button
                    key={star}
                    onClick={() => setMinRating(star)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                        minRating === star 
                        ? 'bg-gray-100 text-gray-900 shadow-inner' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                    {star}+
                </button>
            ))}
        </div>
      </div>

    </div>
  );
};