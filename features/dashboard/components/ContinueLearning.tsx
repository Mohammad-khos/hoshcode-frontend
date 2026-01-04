// src/features/dashboard/components/ContinueLearning.tsx
import React from "react";
import Button from "@/components/ui/Button";
import { Play, Info } from "lucide-react";

const ContinueLearning = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-8 border border-white/5 shadow-2xl group">
       
       {/* Background Decoration (Glow blobs) */}
       <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-0 animate-pulse-slow"></div>
       <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -z-0"></div>
       
       {/* Image Placeholder with Play Overlay */}
       <div className="w-full md:w-5/12 aspect-video bg-gray-800 rounded-2xl border border-white/10 relative overflow-hidden z-10 shrink-0 shadow-lg cursor-pointer group/image">
          {/* Overlay Darken */}
          <div className="absolute inset-0 bg-black/30 group-hover/image:bg-black/50 transition-colors duration-300"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover/image:scale-110 transition-transform duration-300 shadow-lg">
                <Play className="w-6 h-6 fill-white ml-1" />
             </div>
          </div>
          
          {/* Progress Bar overlay on image bottom */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
             <div className="h-full bg-primary w-[85%] shadow-[0_0_10px_rgba(var(--primary),0.8)]"></div>
          </div>
       </div>

       {/* Content */}
       <div className="flex-1 w-full z-10 text-right space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-extrabold text-black bg-primary px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-[0_0_10px_rgba(132,204,22,0.4)] animate-pulse">
                در حال پخش
            </span>
            <span className="text-xs text-gray-400 font-medium">آخرین بازدید: ۲ ساعت پیش</span>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">الگوهای پیشرفته React</h2>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
                ماژول ۴: کامپوننت‌های مرتبه بالا (HOC) و رندرهای شرطی در مقیاس بالا
            </p>
          </div>
          
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
             <Button variant="primary" className="px-8 shadow-[0_4px_20px_rgba(132,204,22,0.25)] hover:shadow-[0_4px_25px_rgba(132,204,22,0.4)] hover:-translate-y-0.5 transition-all">
                <Play className="w-4 h-4 ml-2 fill-current" />
                ادامه پخش
             </Button>
             <Button variant="outline" className="border-white/10 text-gray-300 hover:bg-white/5 hover:text-white hover:border-white/20">
                <Info className="w-4 h-4 ml-2" />
                جزئیات دوره
             </Button>
          </div>
       </div>
    </div>
  );
};

export default ContinueLearning;