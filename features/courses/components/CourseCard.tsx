// src/features/courses/components/CourseCard.tsx
import React from "react";
import { Star, Clock, BarChart, Heart, Users } from "lucide-react";
import Button from "@/components/ui/Button";

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  duration: string;
  level: string;
  levelLabel: string; // برای نمایش فارسی
  price: number; // قیمت عددی برای محاسبات
  priceLabel: string; // قیمت نمایشی
  image: string;
  badge?: "bestseller" | "new" | "updated";
}

export const CourseCard = ({
  title,
  instructor,
  rating,
  reviews,
  duration,
  levelLabel,
  price,
  priceLabel,
  image,
  badge,
}: CourseCardProps) => {
  return (
    <div className="group flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full">
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        {badge && (
          <div className="absolute top-2 right-2 z-10">
            <span
              className={`text-[10px] font-bold px-2 py-1 rounded shadow-sm text-slate-900 ${
                badge === "bestseller"
                  ? "bg-yellow-400"
                  : badge === "new"
                  ? "bg-green-500 text-white"
                  : "bg-primary text-white"
              }`}
            >
              {badge === "bestseller"
                ? "پرفروش"
                : badge === "new"
                ? "جدید"
                : "بروزرسانی"}
            </span>
          </div>
        )}
        
        {/* تصویر آنلاین واقعی */}
        <div 
            className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
            style={{ backgroundImage: `url(${image})` }}
        />
        
        {/* Overlay Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black hover:border-white">
            پیش‌نمایش دوره
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-4">
        <div className="mb-2 min-h-[3rem]">
          <h3 className="text-foreground text-base font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-muted-foreground text-xs mb-3">{instructor}</p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <span className="text-amber-400 font-bold text-sm pt-0.5">{rating}</span>
          <div className="flex text-amber-400 gap-0.5">
             {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? "fill-current" : "text-gray-600 fill-gray-600"}`} />
             ))}
          </div>
          <span className="text-muted-foreground text-xs">({reviews.toLocaleString()})</span>
        </div>

        {/* Metadata */}
        <div className="mt-auto pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart className="w-3.5 h-3.5" />
            <span>{levelLabel}</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="mt-4 flex items-center justify-between">
          <span className={`font-bold text-lg ${price === 0 ? 'text-green-500' : 'text-foreground'}`}>
            {priceLabel}
          </span>
          <button className="text-muted-foreground hover:text-red-500 hover:bg-red-500/10 p-2 rounded-full transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};