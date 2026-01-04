// src/features/dashboard/components/ActivityFeed.tsx
import React from "react";

const ActivityFeed = () => {
  return (
    <div className="bg-card border border-border rounded-xl p-5 flex-1">
        <h3 className="text-foreground font-bold text-sm mb-4">فعالیت‌های اخیر</h3>
        
        <div className="flex flex-col gap-5 relative pr-2">
            {/* خط عمودی اتصال دهنده (برای راست‌چین، مکانش را تنظیم کردیم) */}
            <div className="absolute right-[15px] top-2 bottom-2 w-0.5 bg-border"></div>
            
            {/* آیتم ۱ */}
            <div className="flex gap-3 relative items-start">
                <div className="w-8 h-8 rounded-full bg-primary border-4 border-card z-10 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div className="flex flex-col pt-1 mr-2">
                    <p className="text-foreground text-sm font-medium">تکمیل دوره "React Hooks"</p>
                    <p className="text-muted-foreground text-xs mt-0.5">۲ ساعت پیش</p>
                </div>
            </div>

            {/* آیتم ۲ */}
            <div className="flex gap-3 relative items-start">
                <div className="w-8 h-8 rounded-full bg-purple-500 border-4 border-card z-10 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <div className="flex flex-col pt-1 mr-2">
                    <p className="text-foreground text-sm font-medium">کسب نشان "یادگیرنده سریع"</p>
                    <p className="text-muted-foreground text-xs mt-0.5">دیروز</p>
                </div>
            </div>

            {/* آیتم ۳ */}
            <div className="flex gap-3 relative items-start">
                <div className="w-8 h-8 rounded-full bg-blue-400 border-4 border-card z-10 flex items-center justify-center shrink-0">
                     <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                </div>
                <div className="flex flex-col pt-1 mr-2">
                    <p className="text-foreground text-sm font-medium">پاسخ به یک بحث در انجمن</p>
                    <p className="text-muted-foreground text-xs mt-0.5">۲ روز پیش</p>
                </div>
            </div>
        </div>

        <button className="w-full mt-6 py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-muted transition-colors">
            مشاهده تاریخچه کامل
        </button>
    </div>
  );
};

export default ActivityFeed;