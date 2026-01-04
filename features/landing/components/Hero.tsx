// src/features/landing/components/Hero.tsx
"use client"; // چون از هوک‌های React استفاده می‌کنیم

import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const avatars = [
  { alt: "python-avatar", src: "/python.png" },
  { alt: "cpp-avatar", src: "/cpp.png" },
  { alt: "golang-avatar", src: "/golang.png" },
  { alt: "js-avatar", src: "/js.png" },
];

// لیست خطوط کد برای نمایش با انیمیشن
const codeLines = [
  { id: 1, html: <><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</> },
  { id: 3, html: <><span className="text-blue-400">const</span> <span className="text-yellow-300">LearningPath</span> = () = {">"} {"{"}</> },
  { id: 4, html: <>&nbsp;&nbsp;<span className="text-purple-400">const</span> status = <span className="text-green-400">"Senior Dev"</span>;</> },
  { id: 6, html: <>&nbsp;&nbsp;<span className="text-purple-400">return</span> (</> },
  { id: 8, html: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<"}<span className="text-red-400">h1</span>{">"}</> },
  { id: 9, html: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;به <span className="text-brand-400 font-bold">هوش‌کد</span> خوش آمدید</> },
  { id: 10, html: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</"}<span className="text-red-400">h1</span>{">"}</> },
  { id: 12, html: <>&nbsp;&nbsp;);</> },
  { id: 13, html: <>{"}"};</> },
];

const Hero = () => {
  // State برای کنترل خطوطی که باید نمایش داده شوند
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 300); // سرعت تایپ خط جدید (300 میلی‌ثانیه)
      return () => clearTimeout(timeout);
    }
  }, [visibleLines]);

  return (
    <section className="relative overflow-hidden mb-12 w-full">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-brand-50/80 via-white to-white -z-20"></div>

      {/* Blue Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-500/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

      <div className="container-custom pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* === Text Content (همان کد قبلی) === */}
        <div className="flex flex-col items-start text-right animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight mb-6 text-brand-950">
            با <span className="text-brand-600">هوش‌کد</span>، <br />
            برنامه‌نویسی رو{" "}
            <span className="relative inline-block">
              قورت بده!
              <svg className="absolute -bottom-2 right-0 w-full h-3 text-action-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none"/>
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
            پلتفرم یادگیری تعاملی که شما را با پروژه‌های دنیای واقعی و بازخورد لحظه‌ای هوش مصنوعی، از مبتدی به یک توسعه‌دهنده ارشد تبدیل می‌کند.
          </p>

          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Button variant="cta" size="lg" className="w-full sm:w-auto gap-2">
              شروع یادگیری رایگان
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              مشاهده مسیرها
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm font-medium text-gray-500">
            <div className="flex -space-x-3 space-x-reverse">
              {avatars.map((item, index) => (
                <div key={index} className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-white bg-gray-200 shadow-sm overflow-hidden">
                  <Image src={item.src} alt={item.alt} width={24} height={24} className="object-contain" />
                </div>
              ))}
            </div>
            <div>
              <span className="text-brand-900 font-bold">+۱۰,۰۰۰</span>{" "}
              توسعه‌دهنده فعال
            </div>
          </div>
        </div>

        {/* === Animated Code Mockup === */}
        <div className="relative lg:order-last order-first mx-auto w-full max-w-lg lg:max-w-none" dir="ltr">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-brand-600 blur-[80px] opacity-20 rounded-full -z-10"></div>

          <div className="relative rounded-2xl overflow-hidden border border-brand-100/50 shadow-2xl shadow-brand-900/10 bg-white">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50/80 border-b border-gray-100">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              <span className="ml-auto text-xs font-mono text-gray-400">App.tsx</span>
            </div>

            {/* Code Content with Animation */}
            <div className="p-6 bg-[#0F172A] overflow-x-auto h-[340px]"> {/* ارتفاع ثابت برای جلوگیری از پرش */}
              <pre className="font-mono text-sm leading-7">
                <code className="text-gray-300 block">
                  {codeLines.map((line, index) => (
                    <div 
                      key={line.id} 
                      className={cn(
                        "transition-all duration-300 ease-in-out",
                        index < visibleLines ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      )}
                    >
                      {/* نمایش خط کد */}
                      {line.html}
                      
                      {/* کرسر تایپ در انتهای آخرین خط فعال */}
                      {index === visibleLines - 1 && index < codeLines.length - 1 && (
                        <span className="inline-block w-2 h-4 bg-brand-400 ml-1 align-middle animate-pulse"></span>
                      )}
                    </div>
                  ))}
                  
                  {/* کرسر نهایی وقتی تایپ تمام شد */}
                  {visibleLines === codeLines.length && (
                     <span className="inline-block w-2 h-4 bg-gray-500 ml-1 align-middle animate-pulse"></span>
                  )}
                </code>
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;