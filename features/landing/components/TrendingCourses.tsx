// src/features/landing/components/TrendingCourses.tsx
import React from "react";
import Image from "next/image";
import {
  Clock,
  Star,
  Users,
  Lock,
  ChevronLeft,
  PlayCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const courses = [
  {
    id: 1,
    title: "آموزش جامع پایتون (Python)",
    level: "مبتدی",
    // رنگ سطح‌ها را ثابت نگه می‌داریم چون استاندارد آموزشی هستند
    levelColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    duration: "۴۶ ساعت",
    rating: "۴.۸",
    students: "۱.۲k",
    image: "/courses/introduction_to_python_course_thumbnail.jpg",
  },
  {
    id: 2,
    title: "متخصص React و Next.js 15",
    level: "پیشرفته",
    levelColor: "bg-rose-100 text-rose-700 border-rose-200",
    duration: "۵۵ ساعت",
    rating: "۴.۹",
    students: "۳.۵k",
    image: "/courses/react-js-training-igmguru_1474547454_l.jpg",
  },
  {
    id: 3,
    title: "علم داده و یادگیری ماشین",
    level: "متوسط",
    levelColor: "bg-amber-100 text-amber-700 border-amber-200",
    duration: "۶۰ ساعت",
    rating: "۴.۷",
    students: "۸۰۰",
    image: "/courses/data-s.jpg",
  },
  {
    id: 4,
    title: "بوت‌کمپ فول‌استک وب (MERN)",
    level: "جامع",
    levelColor: "bg-blue-100 text-blue-700 border-blue-200",
    duration: "۱۲۰ ساعت",
    rating: "۵.۰",
    students: "۵k",
    image: "/courses/untitlsssssed.png",
  },
];

const TrendingCourses = () => {
  return (
    <section className="py-24 bg-gray-50/50" id="trending-courses">
      <div className="container-custom">
        {/* Header: Brand Identity (Indigo) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-950 mb-3 tracking-tight">
              محبوب‌ترین <span className="text-brand-600">مسیرهای یادگیری</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl">
              مهارت‌هایی که بازار کار تشنه‌ی آن‌هاست. با پروژه‌های واقعی شروع
              کنید.
            </p>
          </div>

          <a
            href="/courses"          >
            <Button variant="cta" size="md" className="font-medium">
             همه ی دوره ها
            </Button>
          </a>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col bg-white border border-gray-100 rounded-[1.5rem] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] hover:border-emerald-200/60 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Overlay: سبز خیلی محو در هاور برای زنده شدن تصویر */}
                <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Level Badge */}
                <div
                  className={cn(
                    "absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-bold backdrop-blur-md shadow-sm border",
                    course.levelColor
                  )}
                >
                  {course.level}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Meta Data */}
                <div className="flex items-center justify-between text-xs font-medium text-gray-500 mb-3">
                  <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md group-hover:bg-emerald-50/50 transition-colors">
                    <Clock className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Title: در هاور سبز می‌شود (Growth Color) */}
                <h3 className="text-[17px] font-bold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-emerald-700 transition-colors">
                  {course.title}
                </h3>

                {/* Students Count */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
                  <Users className="w-3.5 h-3.5" />
                  <span>{course.students} دانشجوی فعال</span>
                </div>

                {/* Footer (Action) */}
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between group/footer">
                  {/* Text: مشاهده دوره (سبز در هاور) */}
                  <span className="text-sm font-bold text-gray-400 group-hover:text-emerald-600 transition-colors flex items-center gap-1.5">
                    <PlayCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-300 text-emerald-500" />
                    مشاهده دوره
                  </span>

                  {/* Button: طوسی به سبز (Action Color) */}
                  <div className="w-10 h-10 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300">
                    <Lock className="w-4 h-4 group-hover:hidden transition-all" />
                    <ChevronLeft className="w-5 h-5 hidden group-hover:block transition-all" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(TrendingCourses);
