// src/features/dashboard/components/UserProfileCard.tsx
import React from "react";
import { Edit3, Calendar, Activity, Zap, BookOpen, Clock, Crown, TrendingUp, Code2, Hash } from "lucide-react";

export const UserProfileCard = () => {
  return (
    <div className="sticky top-28 group font-dana">
        
        {/* 1. لایه تزئینی زیرین (عمق) */}
        <div className="absolute inset-0 bg-gray-200 rounded-[2.5rem] rotate-3 scale-95 opacity-0 group-hover:opacity-100 transition-all duration-500 origin-bottom-right" />
        <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] -rotate-2 scale-[0.98] opacity-10 transition-transform duration-500" />
        
        {/* 2. کارت اصلی */}
        <div className="relative bg-primary text-primary-foreground rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
            
            {/* هدر کارت */}
            <div className="h-32 bg-black/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-10 -mt-10" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-8 -mb-8" />
            </div>

            {/* محتوای اصلی */}
            <div className="px-6 pb-8 -mt-16 relative">
                
                {/* آواتار */}
                <div className="flex justify-center mb-4">
                    <div className="relative">
                        <div className="w-28 h-28 rounded-[2rem] bg-white p-2 shadow-xl rotate-3 transition-transform duration-500 group-hover:rotate-0">
                            <div className="w-full h-full rounded-[1.6rem] bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center overflow-hidden border border-gray-200 text-primary font-black text-3xl">
                                 MK
                            </div>
                        </div>
                      
                    </div>
                </div>

                {/* مشخصات فردی */}
                <div className="text-center mb-6">
                    <h2 className="text-xl font-black mb-1.5 tracking-tight">محمدمهدی خسروی</h2>
                    
                    {/* Username Pill */}
                    <div className="inline-flex items-center gap-2 bg-black/20 px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-sm border border-white/5 dir-ltr">
                        <span className="opacity-70 font-mono tracking-wide">@mm_khosravi</span>
                    </div>
                </div>

                {/* --- Subscription Badge (FIXED ALIGNMENT) --- */}
                <div className="bg-gradient-to-r from-amber-300/20 to-yellow-500/20 border border-amber-300/30 rounded-2xl p-4 mb-8 flex items-center justify-between backdrop-blur-md relative overflow-hidden group/sub">
                    <div className="absolute inset-0 bg-yellow-400/10 blur-xl group-hover/sub:opacity-100 transition-opacity opacity-0" />
                    
                    {/* Right Side: Icon & Title */}
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-300 to-yellow-500 flex items-center justify-center shadow-lg shadow-amber-500/20 text-yellow-950 shrink-0">
                            <Crown size={20} fill="currentColor" />
                        </div>
                        <div className="flex flex-col text-right">
                            <span className="text-[10px] uppercase tracking-wider font-bold text-amber-200 opacity-90">وضعیت اشتراک</span>
                            <span className="text-sm font-black text-white leading-tight mt-0.5">طرح ویژه (الماس)</span>
                        </div>
                    </div>
                    
                    {/* Left Side: Date */}
                    <div className="text-left relative z-10 pl-1">
                        <span className="block text-[10px] opacity-70 mb-0.5 text-amber-100">انقضا</span>
                        <span className="block text-xs font-bold font-mono text-white">1403/12/29</span>
                    </div>
                </div>

                {/* ویجت آمار (Grid) */}
                <div className="flex divide-x divide-x-reverse divide-white/10 bg-black/20 rounded-3xl p-4 mb-8 backdrop-blur-md border border-white/5">
                    <div className="flex-1 flex flex-col items-center justify-center gap-1.5">
                        <div className="flex items-center gap-1.5 opacity-60">
                            <Clock size={13} />
                            <span className="text-[10px]">ساعت آموزش</span>
                        </div>
                        <span className="text-lg font-black leading-none">148</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center gap-1.5">
                        <div className="flex items-center gap-1.5 opacity-60">
                            <BookOpen size={13} />
                            <span className="text-[10px]">دوره‌ها</span>
                        </div>
                        <span className="text-lg font-black leading-none">4</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center gap-1.5">
                        <div className="flex items-center gap-1.5 opacity-60">
                            <TrendingUp size={13} />
                            <span className="text-[10px]">روز متوالی</span>
                        </div>
                        <div className="flex items-center gap-1 leading-none">
                            <span className="text-lg font-black">14</span>
                            <span className="text-[10px] text-emerald-400">🔥</span>
                        </div>
                    </div>
                </div>

                {/* لیست اطلاعات (Aligned Items) */}
                <div className="space-y-4">
                    
                    {/* Item 1: Skills (English content handled) */}
                    <div className="flex items-center gap-4 group/item">
                        <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 transition-colors group-hover/item:bg-white/20">
                            <Code2 size={18} className="opacity-80" />
                        </div>
                        <div className="flex-1 border-b border-white/10 py-2">
                            <p className="text-[10px] opacity-60 mb-1 text-right">تخصص اصلی</p>
                            {/* dir="ltr" for pure English text to align/render correctly */}
                            <p className="text-sm font-bold text-right dir-ltr" dir="ltr">React & Next.js</p>
                        </div>
                    </div>
                    
                    {/* Item 2: Date */}
                    <div className="flex items-center gap-4 group/item">
                        <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 transition-colors group-hover/item:bg-white/20">
                            <Calendar size={18} className="opacity-80" />
                        </div>
                        <div className="flex-1 border-b border-white/10 py-2">
                            <p className="text-[10px] opacity-60 mb-1 text-right">تاریخ عضویت</p>
                            <p className="text-sm font-bold text-right">۲۰ شهریور ۱۴۰۲</p>
                        </div>
                    </div>

            

                </div>

            </div>
        </div>
    </div>
  );
};