// src/app/about/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen text-gray-900 font-dana my-22 overflow-x-hidden">
        <main className="container-custom mx-auto px-6 py-12 md:py-24 max-w-7xl">
          {/* --- Section 1: Top Area (Image Right, Text Left) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16items-center mb-24">
            {/* Image Box */}
            <div className="relative w-full aspect-square lg:aspect-[4/3] bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm order-1">
              <Image
                src="/avatar.png" // مطمئن شوید عکس وجود دارد
                alt="درباره هوش‌کد"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Intro Text */}
            <div className="order-2 space-y-8">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                ما <span className="text-primary">پلی میان دانشگاه</span> <br />
                و صنعت هستیم.
              </h1>
              <div className="space-y-6 text-md text-gray-500 font-medium leading-loose text-justify">
                <p>
                  هوش‌کد فراتر از یک پلتفرم آموزشی ساده است؛ ما یک اکوسیستم پویا
                  برای پرورش نسل بعدی توسعه‌دهندگان نرم‌افزار هستیم. داستان ما
                  از یک نیاز ساده شروع شد: فاصله عمیقی که بین آموزش‌های تئوری
                  دانشگاهی و مهارت‌های عملی مورد نیاز در شرکت‌های بزرگ تکنولوژی
                  وجود داشت.
                </p>
                <p>
                  ما تصمیم گرفتیم این خلأ را پر کنیم. نه با ویدیوهای ضبط شده‌ی
                  خسته‌کننده، بلکه با ایجاد محیطی شبیه به دنیای واقعی کار. جایی
                  که شما فقط کد نمی‌خوانید، بلکه با چالش‌های واقعی دست‌وپنج نرم
                  می‌کنید، باگ‌ها را برطرف می‌کنید و یاد می‌گیرید چطور مثل یک
                  مهندس ارشد فکر کنید.
                </p>
              </div>
            </div>
          </div>

          {/* --- Section 2: Bottom Area (Text Right, Graphic Left) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Right Column: Long Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-16">
              {/* Block 1 */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  ماموریت: دموکراتیک کردن آموزش باکیفیت
                </h2>
                <p className="text-gray-500 leading-loose text-justify text-lg">
                  ما عمیقاً باور داریم که استعداد در سراسر کشور به طور یکسان
                  توزیع شده است، اما متأسفانه فرصت‌ها نه. ماموریت اصلی هوش‌کد
                  این است که دسترسی به آموزش‌های سطح جهانی برنامه‌نویسی را برای
                  هر ایرانی، فارغ از موقعیت جغرافیایی، فراهم کند. ما می‌خواهیم
                  ابزاری بسازیم که هر کسی با داشتن یک لپ‌تاپ و اینترنت، بتواند
                  مسیری شفاف و مطمئن به سمت درآمد بالا و جایگاه شغلی حرفه‌ای
                  داشته باشد. کیفیت محتوای ما خط قرمز ماست و در این مسیر هیچ
                  مصالحه‌ای نمی‌کنیم.
                </p>
              </div>

              {/* Block 2 */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  چرا متدولوژی ما متفاوت است؟
                </h2>
                <p className="text-gray-500 leading-loose text-justify text-lg">
                  در سیستم‌های سنتی، شما ماه‌ها صرف یادگیری تئوری می‌کنید بدون
                  اینکه بدانید کجا کاربرد دارند. در هوش‌کد، ما پروسه را معکوس
                  کرده‌ایم. شما از روز اول با مسئله روبرو می‌شوید و برای حل
                  آن، ابزارها (کدها) را یاد می‌گیرید. پلتفرم ما مجهز به
                  سیستم‌های تمرین تعاملی، دستیار هوشمند مبتنی بر AI و سیستم
                  منتورینگ کد-به-کد است. این یعنی شما هرگز در مسیر یادگیری تنها
                  نیستید و همیشه یک راهنما برای عبور از موانع فنی در کنار خود
                  دارید.
                </p>
              </div>

           
            </div>

            {/* Left Column: Abstract Graphic (5 Cols) */}
            <div className="lg:col-span-5 hidden lg:block sticky top-32">
              <div className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100 aspect-[4/5] flex items-center justify-center relative overflow-hidden">
                {/* SVG Graphic: Abstract Code Structure */}
                <svg
                  viewBox="0 0 400 500"
                  className="w-full h-full text-gray-200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background grid lines */}
                  <path
                    d="M50 50 V450"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    className="text-gray-200"
                  />
                  <path
                    d="M150 50 V450"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    className="text-gray-100"
                  />
                  <path
                    d="M250 50 V450"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    className="text-gray-100"
                  />
                  <path
                    d="M350 50 V450"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    className="text-gray-200"
                  />

                  {/* Abstract Blocks (Representing Code/Modules) */}
                  {/* Block 1 (Primary) */}
                  <rect
                    x="80"
                    y="100"
                    width="180"
                    height="60"
                    rx="20"
                    className="fill-primary/10 stroke-primary"
                    strokeWidth="3"
                  />
                  <circle cx="110" cy="130" r="8" className="fill-primary" />
                  <rect
                    x="130"
                    y="125"
                    width="80"
                    height="10"
                    rx="5"
                    className="fill-primary/40"
                  />

                  {/* Connection Line */}
                  <path
                    d="M170 160 V200"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-primary/30"
                  />

                  {/* Block 2 (Gray) */}
                  <rect
                    x="120"
                    y="200"
                    width="200"
                    height="60"
                    rx="20"
                    className="fill-white stroke-gray-300"
                    strokeWidth="3"
                  />
                  <circle cx="150" cy="230" r="8" className="fill-gray-300" />
                  <rect
                    x="170"
                    y="225"
                    width="100"
                    height="10"
                    rx="5"
                    className="fill-gray-200"
                  />

                  {/* Connection Line */}
                  <path
                    d="M220 260 V300"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-gray-300"
                  />

                  {/* Block 3 (Primary Accent) */}
                  <rect
                    x="80"
                    y="300"
                    width="160"
                    height="60"
                    rx="20"
                    className="fill-primary/5 stroke-primary/60"
                    strokeWidth="3"
                  />
                  <circle cx="110" cy="330" r="8" className="fill-primary/60" />
                  <rect
                    x="130"
                    y="325"
                    width="60"
                    height="10"
                    rx="5"
                    className="fill-primary/30"
                  />

                  {/* Floating decorative elements */}
                  <circle
                    cx="320"
                    cy="130"
                    r="40"
                    className="stroke-gray-100"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <circle cx="60" cy="380" r="20" className="fill-primary/10" />
                </svg>

                {/* Gradient Overlay for atmosphere */}
                <div className="absolute inset-0 bg-linear-to-t from-white/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
