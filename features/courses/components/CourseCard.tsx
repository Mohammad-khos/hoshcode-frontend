// src/features/courses/components/CourseCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Lock, BookOpen, Layers, Star, ArrowLeft } from "lucide-react";

interface CourseCardProps {
  id: number;
  title: string;
  rating: number;
  reviews: number;
  levelLabel: string;
  image: string;
  chapters?: number;
  readingTime?: string;
}

export const CourseCard = ({
  title,
  rating,
  reviews,
  levelLabel,
  image,
  chapters = 10,
  readingTime = "۳ ساعت",
}: CourseCardProps) => {
  return (
    <div className="group flex flex-col bg-white rounded-[2rem] p-3 border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 h-full">
      
      {/* --- Image Section --- */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-95 group-hover:opacity-100"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      </div>

      {/* --- Content Section --- */}
      <div className="flex flex-col flex-1 px-2 pt-4 pb-2">
        
        {/* Level & Rating */}
        <div className="flex items-center justify-between mb-3">
           
            <div className="flex items-center gap-1">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                <span className="text-xs font-bold text-gray-700">{rating}</span>
                <span className="text-[10px] text-gray-400">({reviews})</span>
            </div>
        </div>

        {/* Title */}
        <h3 className="font-black text-gray-800 text-base leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Stats (Chapters & Time) */}
        <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4 mt-auto">
            <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
                <Layers size={14} />
                <span>{chapters} بخش</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
                <BookOpen size={14} />
                <span>~{readingTime}</span>
            </div>
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-gray-50 flex items-center justify-between group/btn">
            <span className="text-xs font-bold text-gray-400">اشتراک ویژه</span>
            <div className="flex items-center gap-1 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                مشاهده
                <ArrowLeft size={14} />
            </div>
        </div>
      </div>
    </div>
  );
};