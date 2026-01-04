// src/features/landing/components/CTASection.tsx
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // آیکون‌های اضافی حذف شدند
import Button from "@/components/ui/Button";

// اگر از Next.js استفاده می‌کنید بهتر است از کامپوننت Image استفاده کنید
// import Image from 'next/image';

const CTASection = () => {
  return (
    <section className="relative py-32 bg-brand-50/50 overflow-hidden">
      {/* ==========================================
          1. TOP WAVE (موج بالا)
      ========================================== */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* ==========================================
          2. BACKGROUND DECORATIONS (نقطه‌چین‌ها)
          تغییر: top-1/2 به top-10 تغییر کرد تا بالاتر برود
      ========================================== */}
      <div className="absolute top-65 left-0 w-full pointer-events-none opacity-20 hidden md:block">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            strokeDasharray="12 12"
            d="M0,160 C320,300, 420,0, 720,160 C1020,320, 1120,0, 1440,160"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center relative">
         {/* ==========================================
              3. LEFT IMAGE (کلاژ تصاویر - استایل درهم)
          ========================================== */}
          <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 w-80 h-80">
            {/* کانتینر اصلی که کل مجموعه را شناور می‌کند */}
            <div className="relative w-full h-full animate-[float_6s_ease-in-out_infinite]">
              
              {/* تصویر ۱: Golang (پشت - سمت چپ بالا) */}
              <div className="absolute top-5 left-0 z-10 transform -rotate-22 hover:rotate-0 transition-all duration-500 hover:z-50 hover:scale-110">
                <div className=" p-3 ">
                  <img 
                    src="/golang.png" 
                    alt="GoLang" 
                    className="w-27 h-27 object-contain"
                  />
                </div>
              </div>

              {/* تصویر ۲: Python (وسط - جلوترین لایه) */}
              <div className="absolute top-12 left-35  z-30 transform rotate-6 hover:rotate-0 transition-all duration-500 hover:z-50 hover:scale-110">
                <div className=" p-4 ">
                  <img 
                    src="/python.png" 
                    alt="Python" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* تصویر ۳: CPP (پایین - سمت راست) */}
              <div className="absolute top-40 left-12 z-20 transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:z-50 hover:scale-110">
                <div className=" p-3 ">
                  <img 
                    src="/cpp.png" 
                    alt="C++" 
                    className="w-30 h-30 object-contain"
                  />
                </div>
              </div>

              {/* المان تزئینی: دایره محو پشت تصاویر برای عمق دادن */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-200/30 rounded-full blur-3xl -z-10"></div>

            </div>
          </div>

          {/* ==========================================
              4. CENTER CONTENT (محتوای اصلی)
          ========================================== */}
          <div className="text-center max-w-2xl mx-auto px-4 ">
            <h2 className="text-3xl md:text-5xl/relaxed font-extrabold text-brand-950 mb-6 tracking-tight">
              هنوز برای شروع <br />
              <span className="text-brand-600">شک داری؟</span>
            </h2>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              بیش از ۱۰,۰۰۰ نفر همین الان مشغول یادگیری هستند. فرصت رو از دست
              نده و اولین خط کد آینده‌ت رو بنویس.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button
                  variant="cta"
                  size="lg"
                  className="h-14 px-10 text-lg shadow-xl shadow-emerald-500/20 w-full sm:w-auto"
                >
                  شروع رایگان یادگیری
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
            </div>

      
          </div>

          {/* ==========================================
              5. RIGHT IMAGE (تصویر راست)
              تغییر: جایگزینی ادیتور کد با تگ img
          ========================================== */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 animate-[float_7s_ease-in-out_infinite_1s]">
            {/* آدرس تصویر خود را اینجا قرار دهید */}
            <img
              src="/html.png"
              alt="Right Decoration"
              className="w-76 h-auto object-contain drop-shadow-2xl transform rotate-9 hover:rotate-0 transition-transform duration-500"
            />

            {/* فلش نقطه‌چین (اگر می‌خواهید حذفش کنید، این قسمت را پاک کنید) */}
          </div>
        </div>
      </div>

      {/* ==========================================
          6. BOTTOM WAVE (موج پایین)
      ========================================== */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default React.memo(CTASection);
