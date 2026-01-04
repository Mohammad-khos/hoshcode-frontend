// src/features/dashboard/components/RecommendedCourses.tsx
import React from 'react';

const RecommendedCourses = () => {
  return (
    <section>
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-foreground text-xl font-bold">پیشنهاد شده برای شما</h2>
            <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors">←</button>
                <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors">→</button>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* آیتم اول */}
            <div className="flex gap-4 p-3 rounded-xl bg-card border border-border items-center hover:bg-muted/50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 rounded-lg bg-indigo-500/20 shrink-0 flex items-center justify-center text-indigo-400">
                    {/* Placeholder Icon */}
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                    <h5 className="text-foreground font-bold text-sm truncate">استادی در Figma Auto-Layout</h5>
                    <p className="text-muted-foreground text-xs truncate mt-1">مدرس: سارا جانسون • ۴س ۳۰د</p>
                    <div className="flex items-center gap-1 mt-1">
                        <span className="text-amber-400 text-xs">★</span>
                        <span className="text-foreground text-xs font-bold">۴.۹</span>
                        <span className="text-muted-foreground text-xs">(۱.۲k نظر)</span>
                    </div>
                </div>
                <button className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all">
                    +
                </button>
            </div>

            {/* آیتم دوم */}
            <div className="flex gap-4 p-3 rounded-xl bg-card border border-border items-center hover:bg-muted/50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 rounded-lg bg-emerald-500/20 shrink-0 flex items-center justify-center text-emerald-400">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                    <h5 className="text-foreground font-bold text-sm truncate">مبانی امنیت سایبری</h5>
                    <p className="text-muted-foreground text-xs truncate mt-1">مدرس: مایک چن • ۶س ۱۵د</p>
                    <div className="flex items-center gap-1 mt-1">
                        <span className="text-amber-400 text-xs">★</span>
                        <span className="text-foreground text-xs font-bold">۴.۸</span>
                        <span className="text-muted-foreground text-xs">(۹۵۰ نظر)</span>
                    </div>
                </div>
                <button className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all">
                    +
                </button>
            </div>
        </div>
    </section>
  );
};

export default RecommendedCourses;