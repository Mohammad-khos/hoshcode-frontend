// src/features/landing/components/Stats.tsx
import React from "react";
import { GraduationCap, Video, Crown, FileBadge } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: "+۷۵/۰۰۰",
    label: "دانشجو فعال",
    icon: GraduationCap,
  },
  {
    value: "+۵۰",
    label: "دوره ی آموزشی  ",
    icon: Video,
  },
  {
    value: "+۲۴",
    label: "استاد با تجربه",
    icon: Crown,
  },
  {
    value: "+۳/۰۰۰",
    label: "مدرک ارائه شده",
    icon: FileBadge,
  },
];

const Stats = () => {
  return (
    <section className="relative z-30 px-4 my-12">
      <div className="container-custom">
        {/* Container اصلی که شناور است (مارجین منفی برای قرارگیری روی مرز سکشن‌ها) */}
        <div className="relative -mt-16 md:-mt-20">
          {/* --- 1. Blue Card (باکس اصلی آبی) --- */}
          <div className="bg-primary text-white rounded-[2.5rem] p-8 md:py-10 shadow-2xl shadow-blue-600/30 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col items-center justify-center text-center relative",
                      // خط جداکننده عمودی بین آیتم‌ها (فقط در دسکتاپ و به جز آیتم آخر)
                      index !== stats.length - 1 &&
                        "lg:border-l lg:border-white/20"
                    )}
                  >
                    {/* Number */}
                    <span className="text-3xl md:text-4xl font-black tracking-tight mb-3 dir-ltr">
                      {stat.value}
                    </span>

                    {/* Label & Icon Row */}
                    <div className="flex items-center gap-2 text-blue-100 opacity-90">
                      <span className="text-sm md:text-base font-bold">
                        {stat.label}
                      </span>
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- 2. Dashed Curve SVG (خط نقطه چین زیر باکس) --- */}
          <div className="absolute -bottom-13 left-0 w-full flex justify-center -z-10">
            <svg
              viewBox="0 0 1200 60"
              className="w-[90%] md:w-[95%] h-16 text-primary"
              preserveAspectRatio="none"
            >
              {/* مسیر منحنی (Curve Path):
                        M: شروع از چپ
                        Q: منحنی بزیر (Curve) به سمت پایین
                    */}
              <path
                d="M0,0 Q600,60 1200,0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="12 12" // خاصیت نقطه‌چین
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
