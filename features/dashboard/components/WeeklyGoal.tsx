// src/features/dashboard/components/WeeklyGoal.tsx
import React from 'react';
import { Target } from "lucide-react";

const WeeklyGoal = () => {
    const data = [40, 75, 90, 30, 20, 10, 5];
    const days = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
                <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
                    <Target className="w-4 h-4" />
                </div>
                <h3 className="text-foreground font-bold text-sm">هدف هفتگی</h3>
            </div>
            <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md dir-ltr">
                <span className="text-foreground font-bold">20h</span> / 35h
            </span>
        </div>
        
        <div className="flex items-end justify-between h-32 gap-3">
            {data.map((height, idx) => {
                const isToday = idx === 2; // فرض کنیم امروز دوشنبه است
                return (
                    <div key={idx} className="flex flex-col items-center gap-3 flex-1 group cursor-pointer">
                        <div className="w-full bg-muted/40 rounded-t-lg h-full relative overflow-hidden">
                            <div 
                                className={`absolute bottom-0 w-full transition-all duration-500 ease-out rounded-t-lg
                                    ${isToday 
                                        ? 'bg-primary shadow-[0_0_15px_rgba(132,204,22,0.4)]' 
                                        : 'bg-primary/30 group-hover:bg-primary/60'
                                    }`} 
                                style={{ height: `${height}%` }}
                            ></div>
                        </div>
                        <span className={`text-[10px] font-medium transition-colors ${isToday ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}`}>
                            {days[idx]}
                        </span>
                    </div>
                );
            })}
        </div>
    </div>
  );
};

export default WeeklyGoal;