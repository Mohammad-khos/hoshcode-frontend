import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, HelpCircle } from "lucide-react";
import Image from "next/image";

export const LearningHeader = () => {
  return (
    <header className="h-14 md:h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-6 shrink-0 z-20 relative">
      
      {/* Right: Back & Title */}
      <div className="flex items-center gap-3 md:gap-6">
        <Link 
            href="/" 
            className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
        >
            <ArrowRight size={18} />
        </Link>
        
        <div className="flex items-center gap-3">
            {/* لوگو در موبایل مخفی شود تا جا باز شود */}
            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary  items-center justify-center hidden sm:flex">
                <Code2 size={20} />
            </div>
            <div>
                <h1 className="text-xs md:text-sm font-black text-gray-900 truncate max-w-37.5 md:max-w-none">
                    آزمایشگاه هوش‌کد
                </h1>
                <p className="text-[10px] text-gray-400 font-bold truncate max-w-37.5 md:max-w-none">
                    فصل ۳: متغیرها
                </p>
            </div>
        </div>
      </div>

      {/* Middle: Progress (Desktop Only) */}
      <div className="hidden lg:flex flex-col w-1/3 gap-1.5">
         {/* ... کد قبلی ... */}
      </div>

      {/* Left: Actions */}
      <div className="flex items-center gap-2 md:gap-4">
         {/* دکمه‌های تنظیمات در موبایل مخفی شوند */}
         <div className="hidden sm:flex items-center gap-1">
             <button className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-50">
                 <HelpCircle size={18} />
             </button>
         </div>
         
         <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden cursor-pointer relative">
             <Image src="/avatar.png"  fill alt="avatar" className="object-cover"/>
         </div>
      </div>

    </header>
  );
};