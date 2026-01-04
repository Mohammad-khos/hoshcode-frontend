// src/features/landing/components/Testimonial.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Quote, ArrowRight, ArrowLeft, Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "هوش کد مسیر شغلی من را کاملاً تغییر داد. پروژه‌های تعاملی به من اعتماد به نفس لازم برای موفقیت در مصاحبه‌ها را دادند. من الان یک توسعه‌دهنده ارشد فرانت‌اند هستم!",
    name: "سارا جلالی",
    role: "توسعه‌دهنده ارشد @ TechFlow",
    image: "/avatar.png",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "بهترین پلتفرم برای یادگیری پایتون! من هیچ پیش‌زمینه‌ای نداشتم اما با متد آموزشی اینجا تونستم در عرض ۶ ماه اولین پروژه فریلنسری خودم رو بگیرم.",
    name: "آرمان رحیمی",
    role: "دانشمند داده @ DataCorp",
    image: "/avatar.png",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "پشتیبانی منتورها فوق‌العاده است. هر بار که گیر می‌کردم، در کمتر از چند دقیقه راهنمایی می‌گرفتم. جامعه کاربری اینجا واقعاً زنده و پویاست.",
    name: "مهسا کریمی",
    role: "توسعه‌دهنده فول‌استک",
    image: "/avatar.png",
    rating: 4.5,
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [active]);

  const current = testimonials[active];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Background Decor - Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            نظرات دانشجویان
          </h2>
          <p className="text-gray-600 text-lg">
            ببینید دیگران درباره تجربه یادگیری خود چه می‌گویند
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative Quote Icon (Background) */}
            <div className="absolute top-6 right-8 text-primary/10 select-none">
              <Quote size={120} fill="currentColor" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
              {/* Left: Image (Desktop: Col 4) */}
              <div className="md:col-span-4 flex justify-center md:justify-start">
                <div className="relative w-48 h-48 md:w-full md:h-auto md:aspect-square max-w-[250px] rounded-2xl overflow-hidden border-4 border-background shadow-lg">
                  <div
                    className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${
                      isAnimating ? "opacity-50" : "opacity-0"
                    }`}
                  ></div>
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right: Content (Desktop: Col 8) */}
              <div className="md:col-span-8 flex flex-col gap-6 text-center md:text-right">
                {/* Rating */}
                <div className="flex justify-center md:justify-start gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={
                        i < Math.floor(current.rating) ? "currentColor" : "none"
                      }
                      className={
                        i >= Math.floor(current.rating)
                          ? "text-muted-foreground/30"
                          : ""
                      }
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="min-h-[120px] flex items-center">
                  <p
                    className={cn(
                      "text-xl md:text-2xl font-bold leading-relaxed text-foreground transition-all duration-500 transform",
                      isAnimating
                        ? "opacity-0 translate-y-4"
                        : "opacity-100 translate-y-0"
                    )}
                  >
                    &quot;{current.quote}&quot;
                  </p>
                </div>

                <div className="w-full h-px bg-border/50"></div>

                {/* Author & Controls */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  {/* Author Info */}
                  <div
                    className={cn(
                      "transition-opacity duration-500",
                      isAnimating ? "opacity-50" : "opacity-100"
                    )}
                  >
                    <h4 className="text-lg font-bold text-foreground">
                      {current.name}
                    </h4>
                    <p className="text-primary text-sm font-medium">
                      {current.role}
                    </p>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex gap-3">
                    <button
                      onClick={handleNext} // RTL: Next is Right Arrow visually (Previous logic)
                      className="w-12 h-12 rounded-full border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary flex items-center justify-center transition-all group"
                      aria-label="Previous"
                    >
                      <ArrowRight className="w-5 h-5 rtl:rotate-0" />
                    </button>
                    <button
                      onClick={handlePrev} // RTL: Prev is Left Arrow visually (Next logic)
                      className="w-12 h-12 rounded-full border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary flex items-center justify-center transition-all group"
                      aria-label="Next"
                    >
                      <ArrowLeft className="w-5 h-5 rtl:rotate-0" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isAnimating && active !== idx) {
                    setIsAnimating(true);
                    setActive(idx);
                  }
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  active === idx
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-primary/50"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonial);
