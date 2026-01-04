// src/features/dashboard/components/tabs/AchievementsTab.tsx
import React from "react";
import { Trophy, Lock, Star, Zap } from "lucide-react";

export const AchievementsTab = () => {
    const badges = [
        { name: "شروع طوفانی", desc: "تکمیل اولین درس", icon: Zap, unlocked: true, color: "text-yellow-500", bg: "bg-yellow-500/10" },
        { name: "کدنویس شبانه", desc: "تمرین بعد از ۱۲ شب", icon: Star, unlocked: true, color: "text-indigo-500", bg: "bg-indigo-500/10" },
        { name: "حل‌کننده", desc: "۵۰ مسئله صحیح", icon: Trophy, unlocked: true, color: "text-emerald-500", bg: "bg-emerald-500/10" },
        { name: "استاد ری‌اکت", desc: "تکمیل مسیر React", icon: Trophy, unlocked: false, color: "text-gray-400", bg: "bg-gray-100 dark:bg-gray-800" },
        { name: "منتور", desc: "کمک به ۱۰ نفر", icon: Star, unlocked: false, color: "text-gray-400", bg: "bg-gray-100 dark:bg-gray-800" },
        { name: "فول‌استک", desc: "تکمیل فرانت و بک", icon: Lock, unlocked: false, color: "text-gray-400", bg: "bg-gray-100 dark:bg-gray-800" },
    ];

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm animate-fade-in">
        <div className="mb-6 flex items-center justify-between">
             <h3 className="text-lg font-bold text-foreground">کلکسیون نشان‌ها</h3>
             <span className="text-sm text-muted-foreground">۳ از ۶ باز شده</span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {badges.map((badge, idx) => (
                <div key={idx} className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${badge.unlocked ? 'border-border bg-card hover:border-primary/50' : 'border-transparent bg-muted/30 opacity-60 grayscale'}`}>
                    <div className={`h-16 w-16 rounded-full flex items-center justify-center ${badge.bg} ${badge.color} shadow-sm`}>
                        <badge.icon className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                        <h4 className="font-bold text-sm text-foreground">{badge.name}</h4>
                        <p className="text-[10px] text-muted-foreground mt-1">{badge.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};