// src/app/ai-hub/page.tsx
import React from "react";
import Link from "next/link";
import {
  Compass,
  ArrowLeft,
  ShieldCheck,
  Cpu,
  Code2,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function AIHubPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen font-dana mt-22 flex flex-col">
        <main className="flex-1 flex flex-col justify-center py-12 lg:py-20">
          <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6">
            
            {/* --- 1. Top Section: Hero & Image Placeholder --- */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Right: Text Content */}
              <div className="space-y-6  text-center lg:text-right lg:mr-10 order-2 lg:order-1">
                <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight">
                  دستیار هوشمند <br />
                  <span className="text-brand-600">هوش کد</span>
                </h1>
                <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                  اینجا فقط یک ابزار نیست؛ اینجا جایی است که کدهای شما جان
                  می‌گیرند. با هوش مصنوعی، سریع‌تر بسازید، دقیق‌تر دیباگ کنید و
                  مهارت‌های خود را ارتقا دهید.
                </p>
              </div>

              {/* Left: Image Placeholder Area */}
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 blur-3xl rounded-full opacity-50"></div>

                {/* Image Container */}
                <div className="relative w-full aspect-4/3 rounded-full overflow-hidden flex flex-col items-center justify-center group transition-colors">
                  <img
                    src="/ai-agent.png"
                    alt="AI Agent"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              </div>
            </section>

            {/* --- 2. The Main "Coding Assistant" Section --- */}
            <section className="relative rounded-[2.5rem] bg-white border border-gray-100 overflow-hidden shadow-2xl shadow-gray-200/40 mb-16 group">
              
              {/* --- Background Elements --- */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-50/60 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

              {/* FLEX-COL-REVERSE for Mobile (Image Top, Text Bottom), GRID for Desktop */}
              <div className="relative z-10 flex flex-col-reverse lg:grid lg:grid-cols-12 gap-0">
                
                {/* --- Left Column (Text) --- */}
                <div className="lg:col-span-7 p-8 lg:p-14 flex flex-col justify-center relative">
                  
                  {/* Header Area */}
                  <h2 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-6">
                    کدنویسی هوشمند، <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-gray-500 to-gray-900">
                      با سرعتی فراتر
                    </span>
                  </h2>
                  
                  <p className="text-gray-500 text-lg leading-8 max-w-lg font-medium mb-8">
                    دستیار هوشمند ما در کنار شماست تا کدهای تمیزتر بنویسید، باگ‌ها را در لحظه شکار کنید و از فرایند خلق نرم‌افزار لذت ببرید.
                  </p>

                  {/* CTA Button */}
                  <div className="mb-12">
                    <Link
                      href="/ai-mentor/code"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-xl  hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-gray-900/10"
                    >
                      <span>شروع کدنویسی</span>
                    </Link>
                  </div>

                 
                </div>

                {/* --- Right Column (Visual Stack) --- */}
               <div className="lg:col-span-5 relative min-h-[450px] lg:min-h-auto flex items-center justify-center overflow-visible bg-gray-50/30 lg:bg-transparent">
  
  <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
    {/* Scale adjusted to fit 4 layers */}
    <div className="relative w-64 h-96 transform scale-75 sm:scale-90 lg:scale-100 rotate-x-12 rotate-z-[-12deg] skew-y-12 preserve-3d mt-12 lg:mt-0">
      
      {/* Layer 0: GoLang (New Bottom Layer) */}
      <div className="absolute top-[180px] left-[-20px] w-full h-24 bg-white/70 backdrop-blur-md rounded-2xl border border-gray-200 shadow-[0_5px_20px_rgba(0,0,0,0.03)] flex items-center px-6 gap-4 transform transition-all duration-500 hover:translate-x-4 group-hover:translate-y-[30px]">
          <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
            <Image src="/golang.png" alt="GoLang" width={24} height={24} className="object-contain opacity-60" />
          </div>
          <div className="flex-1 h-2 bg-gray-50 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-gray-200"></div>
          </div>
      </div>

      {/* Layer 1: C++ (Moved up) */}
      <div className="absolute top-[120px] left-0 w-full h-24 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center px-6 gap-4 z-10 transform transition-all duration-500 hover:translate-x-4 group-hover:translate-y-[20px]">
          <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
            <Image src="/cpp.png" alt="C++" width={24} height={24} className="object-contain opacity-70" />
          </div>
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-gray-300"></div>
          </div>
      </div>

      {/* Layer 2: Python (Moved up) */}
      <div className="absolute top-[60px] left-[20px] w-full h-24 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex items-center px-6 gap-4 z-20 transform transition-all duration-500 hover:translate-x-4 group-hover:translate-y-[10px]">
          <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
            <Image src="/python.png" alt="Python" width={24} height={24} className="object-contain" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="w-full h-2 bg-gray-100 rounded-full"></div>
            <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
          </div>
      </div>

      {/* Layer 3: JS (Top Layer - Unchanged position relative to top) */}
      <div className="absolute top-0 left-[40px] w-full h-24 bg-white backdrop-blur-xl rounded-2xl border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.12)] flex items-center px-6 gap-4 z-30 transform transition-all duration-500 hover:translate-x-2">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent w-1/2 h-full skew-x-12 animate-shimmer opacity-0 group-hover:opacity-100 block pointer-events-none"></div>
          <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center border border-yellow-100 shadow-sm">
            <Image src="/js.png" alt="JS" width={32} height={32} className="object-contain" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
                <div className="h-2 w-16 bg-gray-800 rounded-full"></div>
                <div className="h-1.5 w-8 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            </div>
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[90%] bg-gray-900 rounded-full"></div>
            </div>
          </div>
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-action-500 rounded-full flex items-center justify-center text-white shadow-xl border-2 border-white">
            <Code2 className="w-4 h-4" />
          </div>
      </div>

    </div>
  </div>
</div>
              </div>
            </section>

            {/* --- 3. Secondary Card: Career Mentor --- */}
            <section className="mb-20">
              <Link
                href="/ai-mentor/career"
                className="relative w-full flex flex-col md:flex-row items-stretch gap-0 rounded-[2.5rem]   shadow-gray-200/50 overflow-hidden  "
              >
                
                {/* ==================== LEFT SIDE: ROADMAP VISUAL ==================== */}
                <div className="relative w-full md:w-2/5 min-h-[240px]  border-b md:border-b-0 md:border-l border-gray-100 overflow-hidden flex items-center justify-center">
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.05]" 
                       style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                  </div>

                  {/* Interactive Road SVG */}
                  <svg 
                    className="w-full h-full absolute inset-0 p-8"
                    viewBox="0 0 300 200" 
                    preserveAspectRatio="none"
                  >
                    <defs>
                       <linearGradient id="activeRoad" x1="0%" y1="100%" x2="100%" y2="0%">
                         {/* Action Gradient */}
                         <stop offset="0%" className="stop-action-300" stopOpacity="0.4" style={{ stopColor: 'var(--color-action-300, #86efac)' }} />
                         <stop offset="100%" className="stop-action-600" style={{ stopColor: 'var(--color-action-600, #16a34a)' }} />
                       </linearGradient>
                       <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                         <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.1"/>
                       </filter>
                    </defs>

                    {/* 1. Base Road */}
                    <path 
                      d="M 20 180 Q 80 180, 120 120 T 220 80 T 280 20" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="24" 
                      strokeLinecap="round"
                      filter="url(#shadow)"
                    />
                    <path 
                      d="M 20 180 Q 80 180, 120 120 T 220 80 T 280 20" 
                      fill="none" 
                      stroke="#e5e7eb" 
                      strokeWidth="20" 
                      strokeLinecap="round"
                    />

                    {/* 2. Active Path */}
                    <path 
                      d="M 20 180 Q 80 180, 120 120 T 220 80 T 280 20" 
                      fill="none" 
                      stroke="url(#activeRoad)" 
                      strokeWidth="6" 
                      strokeLinecap="round"
                    />

                    {/* 3. Checkpoints */}
                    <circle cx="20" cy="180" r="6" fill="white" className="stroke-action-500" strokeWidth="3" />
                    <circle cx="120" cy="120" r="6" fill="white" className="stroke-action-500" strokeWidth="3" />
                    <circle cx="280" cy="20" r="8" className="fill-action-600" />
                  </svg>
                </div>

                {/* ==================== RIGHT SIDE: TEXT & BUTTON ==================== */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center items-center md:items-start text-center md:text-right relative z-10">
                  
                  <div className="space-y-4 mb-8 w-full">
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                      مسیر شغلی خود را <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-l from-action-500 to-action-800">
                        هوشمندانه بسازید
                      </span>
                    </h3>
                    
                    <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-lg">
                      بر اساس مهارت‌های فعلی خود، یک نقشه راه دقیق دریافت کنید و با تمرین‌های عملی، برای استخدام آماده شوید.
                    </p>
                  </div>

                  {/* Simple Button */}
                  <div className="w-full flex justify-center md:justify-start">
                    <div className="inline-flex items-center gap-2 px-8 py-3.5 bg-action-600 text-white font-bold rounded-xl shadow-lg shadow-action-600/30 transition-transform duration-300 hover:-translate-y-0.5">
                      <span>شروع مسیر</span>
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </Link>
            </section>

            {/* --- 4. Enhanced Content Section (With Table) --- */}
            <section className="max-w-4xl mx-auto space-y-16 pb-12">
              
              {/* Block 1 */}
              <div className="text-center md:text-right border-t border-gray-100 pt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
                  کاهش بار ذهنی و تمرکز بر معماری
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-action-200 opacity-50"></span>
                </h3>
                <p className="text-gray-600 leading-9 lg:text-lg text-md text-justify">
                  در دنیای پیچیده توسعه نرم‌افزار امروز، برنامه‌نویسان با حجم
                  عظیمی از اطلاعات، تغییرات مداوم فریم‌ورک‌ها و نیاز به یادگیری
                  ابزارهای جدید روبرو هستند. این «بار ذهنی» (Cognitive Load)
                  می‌تواند مانع بزرگی برای خلاقیت باشد. پلتفرم هوشمند ما دقیقاً
                  برای حل این چالش طراحی شده است؛ با بر عهده گرفتن وظایف تکراری،
                  نوشتن کدهای Boilerplate و جستجوی لحظه‌ای در مستندات، ذهن شما
                  را آزاد می‌کند تا بتوانید روی مسائل مهم‌تری مثل معماری سیستم،
                  منطق تجاری (Business Logic) و تجربه کاربری تمرکز کنید. ما باور
                  داریم که ابزار باید در خدمت توسعه‌دهنده باشد، نه اینکه پیچیدگی
                  جدیدی به کار او اضافه کند.
                </p>
              </div>

              {/* Block 2 */}
              <div className="text-center md:text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
                  مدیریت بدهی فنی و استانداردهای مدرن
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 opacity-50"></span>
                </h3>
                <p className="text-gray-600 leading-9 lg:text-lg text-md text-justify">
                  یکی از بزرگترین چالش‌های تیم‌های نرم‌افزاری، مدیریت کدهای
                  قدیمی (Legacy Code) و بدهی فنی است که به مرور زمان انباشته
                  می‌شود. دستیار هوشمند ما فراتر از یک اصلاح‌کننده ساده عمل
                  می‌کند؛ این ابزار با تحلیل الگوی کدهای شما و مقایسه آن با
                  آخرین استانداردهای جهانی (Best Practices)، پیشنهاداتی برای
                  بازنویسی (Refactoring) ارائه می‌دهد که نه تنها خوانایی کد را
                  بالا می‌برد، بلکه پرفرمنس و امنیت را نیز تضمین می‌کند. این
                  یعنی شما همیشه اطمینان دارید که خروجی نهایی، با کیفیت‌ترین
                  نسخه ممکن است.
                </p>
              </div>

              {/* --- TABLE SECTION --- */}
              <div className="py-8 animate-fade-in-up">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mt-3">
                    تفاوت را احساس کنید
                  </h4>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50">
                  <table className="w-full text-sm text-right min-w-[600px]">
                    <thead className="bg-gray-50 text-gray-600 font-bold border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-5 text-right w-1/3">ویژگی</th>
                        <th className="px-6 py-5 text-center w-1/3 text-gray-400">
                          روش سنتی
                        </th>
                        <th className="px-6 py-5 text-center w-1/3 text-action-700 bg-action-50/50">
                          دستیار هوشمند (AI)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">
                          سرعت دیباگ
                        </td>
                        <td className="px-6 py-4 text-center text-gray-500">
                          کند (جستجو در فروم‌ها)
                        </td>
                        <td className="px-6 py-4 text-center font-bold text-action-700 bg-action-50/30">
                          آنی (تحلیل خودکار)
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">
                          تست‌نویسی
                        </td>
                        <td className="px-6 py-4 text-center text-gray-500">
                          زمان‌بر و خسته‌کننده
                        </td>
                        <td className="px-6 py-4 text-center font-bold text-action-700 bg-action-50/30">
                          تولید خودکار Unit Test
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">
                          امنیت کد
                        </td>
                        <td className="px-6 py-4 text-center text-gray-500">
                          بررسی دستی (خطا بالا)
                        </td>
                        <td className="px-6 py-4 text-center font-bold text-action-700 bg-action-50/30">
                          اسکن لحظه‌ای حفره‌ها
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">
                          داکیومنت
                        </td>
                        <td className="px-6 py-4 text-center text-gray-500">
                          اغلب ناقص یا قدیمی
                        </td>
                        <td className="px-6 py-4 text-center font-bold text-action-700 bg-action-50/30">
                          تولید داک هوشمند
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Block 3 */}
              <div className="text-center md:text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
                  مقیاس‌پذیری و آمادگی برای آینده
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-200 opacity-50"></span>
                </h3>
                <p className="text-gray-600 leading-9 lg:text-lg text-md text-justify">
                  یکی از دغدغه‌های اصلی هر مدیر فنی یا توسعه‌دهنده ارشد، قابلیت
                  مقیاس‌پذیری (Scalability) پروژه است. کدی که امروز نوشته
                  می‌شود، باید توانایی پاسخگویی به میلیون‌ها درخواست در آینده را
                  داشته باشد. دستیار هوشمند ما با در نظر گرفتن الگوهای طراحی
                  مقیاس‌پذیر (Scalable Design Patterns) و پیشنهاد معماری‌های
                  میکروسرویس یا سرورلس در جایی که لازم است، به شما کمک می‌کند
                  زیربنایی مستحکم بسازید. این ابزار نه تنها کدهای شما را برای
                  نیازهای امروز بهینه می‌کند، بلکه با پیش‌بینی گلوگاه‌های
                  احتمالی (Bottlenecks)، پروژه شما را در برابر چالش‌های فنی
                  آینده نیز بیمه می‌کند تا رشد کسب‌وکارتان متوقف نشود.
                </p>
              </div>

              {/* Block 4 */}
              <div className="text-center md:text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
                  همیار هوشمند، نه جایگزین خلاقیت
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-200 opacity-50"></span>
                </h3>
                <p className="text-gray-600 leading-9 lg:text-lg text-md text-justify">
                  ما معتقدیم که هیچ هوش مصنوعی‌ای نمی‌تواند جایگزین شهود، خلاقیت
                  و درک عمیق انسانی یک مهندس نرم‌افزار شود. هدف ما ساختن یک «ذهن
                  دوم» برای شماست؛ دستیاری که همیشه بیدار است، خسته نمی‌شود و به
                  تمام دانش فنی دنیا دسترسی دارد. این هم‌افزایی بین هوش انسانی و
                  ماشینی، پارادایم جدیدی در مهندسی نرم‌افزار است که سرعت توسعه
                  را به طرز چشمگیری افزایش می‌دهد. با استفاده از این ابزارها،
                  شما دیگر نگران فراموش کردن سینتکس یک زبان خاص یا نحوه کانفیگ
                  کردن یک کتابخانه پیچیده نخواهید بود، بلکه تمام انرژی خود را
                  صرف حل مسئله و خلق ارزش می‌کنید.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}