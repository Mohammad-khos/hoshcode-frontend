// src/features/ai-mentor/components/ContextPanel.tsx
import React from "react";
import { Info, Clock, BarChart, PlusCircle } from "lucide-react";

export const ContextPanel = () => {
  return (
    <aside className="w-80 hidden xl:flex flex-col border-r border-border bg-card shrink-0 overflow-y-auto h-full">
      <div className="p-6 flex flex-col gap-6">
        <h3 className="text-muted-foreground text-xs font-bold uppercase tracking-wider">زمینه و پیشنهادات</h3>
        
        {/* Suggested Course Card */}
        <div className="flex flex-col gap-0 rounded-xl bg-card border border-border overflow-hidden group hover:border-primary/50 transition-colors">
          <div className="relative h-32 bg-muted overflow-hidden">
             {/* Gradient Overlay simulating image */}
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-blue-900/40"></div>
             
             <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10 z-20">
                پیشنهاد شده
             </div>
          </div>
          
          <div className="p-4 flex flex-col gap-3">
            <div>
              <h4 className="text-foreground font-bold text-sm">مهندسی فرانت‌اند ۱۰۱</h4>
              <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
                تسلط بر HTML, CSS و JS. نقطه شروع عالی برای تغییر مسیر شغلی.
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>۴۰ ساعت</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart className="h-3.5 w-3.5" />
                <span>مبتدی</span>
              </div>
            </div>
            
            <button className="mt-2 w-full py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <PlusCircle className="h-4 w-4" />
              افزودن به مسیر یادگیری
            </button>
          </div>
        </div>

        {/* Skill Impact Graph */}
        <div className="flex flex-col gap-4 rounded-xl bg-muted/20 border border-border p-5">
          <div className="flex items-center justify-between">
            <h4 className="text-foreground font-bold text-sm">رشد مهارت پیش‌بینی شده</h4>
            <Info className="text-muted-foreground h-4 w-4" />
          </div>
          
          <div className="flex flex-col gap-4">
            {/* Skill 1 */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">سواد فنی</span>
                <span className="text-emerald-500 font-mono font-bold">+۴۵٪</span>
              </div>
              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[20%] relative group">
                  <div className="absolute right-full top-0 h-full bg-emerald-500/30 w-[45%]"></div> 
                </div>
              </div>
            </div>
            {/* Skill 2 */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">حل مسئله</span>
                <span className="text-emerald-500 font-mono font-bold">+۲۰٪</span>
              </div>
              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[60%] relative">
                  <div className="absolute right-full top-0 h-full bg-blue-500/30 w-[20%]"></div>
                </div>
              </div>
            </div>
            {/* Skill 3 */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">تفکر طراحی</span>
                <span className="text-emerald-500 font-mono font-bold">+۱۰٪</span>
              </div>
              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 w-[70%] relative">
                  <div className="absolute right-full top-0 h-full bg-purple-500/30 w-[10%]"></div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground italic mt-1 text-center">نوارهای کمرنگ، رشد پس از دوره را نشان می‌دهند.</p>
        </div>

        {/* Upcoming Events */}
        <div className="flex flex-col gap-3">
          <h3 className="text-muted-foreground text-xs font-bold uppercase tracking-wider">رویدادهای زنده مرتبط</h3>
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border cursor-pointer">
            <div className="bg-card border border-border text-foreground rounded px-2 py-1 flex flex-col items-center justify-center shrink-0 w-12 h-12 shadow-sm">
              <span className="text-[10px] font-bold uppercase text-muted-foreground">مهر</span>
              <span className="text-lg font-bold leading-none">۲۴</span>
            </div>
            <div className="flex flex-col">
              <h5 className="text-foreground text-sm font-medium leading-tight">پرسش و پاسخ تغییر شغل</h5>
              <p className="text-muted-foreground text-xs mt-1">با ارشد توسعه‌دهنده @ گوگل</p>
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
};