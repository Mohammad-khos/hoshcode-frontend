// src/features/dashboard/components/StatsOverview.tsx
import React from "react";
import { Clock, Flame, CheckCircle, Star, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
    { label: "ساعات یادگیری", value: "۱۲۴س", change: "+۱۲٪", icon: Clock, color: "text-blue-400", bg: "bg-blue-500/10", border: "hover:border-blue-500/50" },
    { label: "روزهای متوالی", value: "۱۲ روز", change: "+۲", icon: Flame, color: "text-orange-400", bg: "bg-orange-500/10", border: "hover:border-orange-500/50" },
    { label: "دوره‌های تکمیل شده", value: "۸", change: "+۱", icon: CheckCircle, color: "text-purple-400", bg: "bg-purple-500/10", border: "hover:border-purple-500/50" },
    { label: "امتیاز کسب شده", value: "۲.۴k", change: "+۳۵۰", icon: Star, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "hover:border-yellow-500/50" },
];

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-2 gap-4 h-full">
        {stats.map((stat, idx) => (
            <div 
                key={idx} 
                className={cn(
                    "group relative flex flex-col justify-between p-5 rounded-2xl bg-card border border-border transition-all duration-300 ease-out h-full overflow-hidden",
                    "hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20", // افکت بالا آمدن
                    stat.border // تغییر رنگ بوردر هنگام هاور
                )}
            >
                {/* افکت گرادینت محو در پس‌زمینه هنگام هاور */}
                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-white/20 to-transparent pointer-events-none")} />

                <div className="flex items-start justify-between z-10">
                    <div className={cn("p-3 rounded-xl transition-colors duration-300", stat.bg, stat.color)}>
                        <stat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-emerald-400 text-xs font-bold flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                        {stat.change} 
                        <TrendingUp className="w-3 h-3" />
                    </span>
                </div>
                
                <div className="z-10">
                    <p className="text-2xl font-black text-foreground mt-4 tracking-tight group-hover:scale-105 transition-transform origin-right duration-300">
                        {stat.value}
                    </p>
                    <p className="text-muted-foreground text-xs font-medium mt-1 group-hover:text-foreground/80 transition-colors">
                        {stat.label}
                    </p>
                </div>
            </div>
        ))}
    </div>
  );
};

export default StatsOverview;