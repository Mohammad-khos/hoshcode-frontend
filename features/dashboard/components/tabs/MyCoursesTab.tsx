// src/features/dashboard/components/tabs/MyCoursesTab.tsx
import React from "react";
import { Play, Clock, CheckCircle2 } from "lucide-react";

export const MyCoursesTab = () => {
  const courses = [
    { title: "الگوهای پیشرفته React", module: "ماژول ۴", progress: 65, status: "active", image: "bg-indigo-500/20", color: "text-indigo-500" },
    { title: "پایتون برای علم داده", module: "ماژول ۲", progress: 30, status: "active", image: "bg-yellow-500/20", color: "text-yellow-500" },
    { title: "مبانی UI/UX", module: "تکمیل شده", progress: 100, status: "completed", image: "bg-pink-500/20", color: "text-pink-500" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
        <div className="flex gap-4 overflow-x-auto pb-2">
            <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-sm">در حال یادگیری</button>
            <button className="px-4 py-2 rounded-full bg-card border border-border text-muted-foreground text-sm font-medium hover:bg-muted">تکمیل شده</button>
            <button className="px-4 py-2 rounded-full bg-card border border-border text-muted-foreground text-sm font-medium hover:bg-muted">نشان‌شده‌ها</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course, idx) => (
                <div key={idx} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                    <div className="flex items-start justify-between">
                         <div className={`h-12 w-12 rounded-lg ${course.image} flex items-center justify-center ${course.color}`}>
                             {course.status === 'completed' ? <CheckCircle2 className="w-6 h-6" /> : <Play className="w-6 h-6 fill-current" />}
                         </div>
                         <span className="text-xs font-medium bg-muted px-2 py-1 rounded text-muted-foreground">{course.status === 'active' ? 'در حال پخش' : 'تکمیل شده'}</span>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-foreground text-lg">{course.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{course.module}</p>
                    </div>

                    <div className="mt-2">
                        <div className="flex justify-between text-xs mb-1.5 font-medium">
                            <span className="text-muted-foreground">پیشرفت دوره</span>
                            <span className="text-primary">{course.progress}٪</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                            <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${course.progress}%` }}></div>
                        </div>
                    </div>
                    
                    <button className="mt-2 w-full py-2 rounded-lg border border-border text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors">
                        {course.status === 'completed' ? 'مشاهده گواهی' : 'ادامه یادگیری'}
                    </button>
                </div>
            ))}
        </div>
    </div>
  );
};