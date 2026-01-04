// src/features/dashboard/components/OngoingCourses.tsx
import React from "react";
import { ArrowLeft } from "lucide-react";

const courses = [
    { title: "مبانی طراحی UI/UX", module: "تئوری رنگ‌ها", progress: 45, color: "bg-pink-500", gradient: "from-pink-500/20 to-pink-500/5" },
    { title: "مسیر فول‌استک Node.js", module: "دیتابیس و SQL", progress: 62, color: "bg-emerald-500", gradient: "from-emerald-500/20 to-emerald-500/5" },
    { title: "پایتون برای علم داده", module: "مقدمه‌ای بر Pandas", progress: 12, color: "bg-amber-500", gradient: "from-amber-500/20 to-amber-500/5" },
];

const OngoingCourses = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
            دوره‌های فعال
        </h3>
        <a href="#" className="text-sm text-primary font-medium hover:text-primary/80 flex items-center gap-1 group">
            مشاهده همه
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course, idx) => (
            <div 
                key={idx} 
                className="bg-card border border-border p-1 rounded-2xl hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-black/20"
            >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${course.gradient} h-full flex flex-col border border-transparent`}>
                    
                    {/* Icon/Image Placeholder */}
                    <div className="h-24 w-full bg-background/50 backdrop-blur rounded-lg mb-4 relative overflow-hidden border border-white/5">
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 ${course.color} opacity-30 blur-[40px] rounded-full`}></div>
                    </div>
                    
                    <h4 className="font-bold text-foreground line-clamp-1 text-base group-hover:text-primary transition-colors">{course.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 mb-5">ماژول: {course.module}</p>
                    
                    <div className="mt-auto space-y-2">
                        <div className="flex justify-between text-[11px] font-medium text-muted-foreground">
                            <span>پیشرفت</span>
                            <span className="text-foreground">{course.progress}٪</span>
                        </div>
                        <div className="w-full h-1.5 bg-background/50 rounded-full overflow-hidden border border-white/5">
                            <div 
                                className={`h-full rounded-full ${course.color} shadow-[0_0_8px_currentColor] transition-all duration-1000 ease-out`} 
                                style={{ width: `${course.progress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default OngoingCourses;