// src/app/not-found.tsx
import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Header from "@/components/layout/Header"; // فرض بر این است که هدر در این مسیر است
import Footer from "@/components/layout/Footer"; // فرض بر این است که فوتر در این مسیر است
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    // ساختار فلکس برای اینکه فوتر همیشه پایین بچسبد
    <>
      <div className="flex flex-col min-h-screen lg:my-22 font-dana">
        {/* 1. Header */}
        <Header />

        {/* 2. Main Content (وسط‌چین) */}
        <main className="grow flex flex-col items-center justify-center relative w-full overflow-hidden py-20">
          {/* ==========================================
            BACKGROUND DECORATIONS
        ========================================== */}
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#4338ca 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          ></div>

          {/* Colorful Blobs */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-action-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          {/* ==========================================
            CENTER CONTENT
        ========================================== */}
          <div className="container-custom relative z-10 flex flex-col items-center text-center">
            {/* --- A. 404 Graphic --- */}
            <div className="relative mb-12 group cursor-default">
              {/* دایره بزرگ پشت عدد */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full shadow-2xl shadow-brand-900/5 border border-white animate-[pulse_4s_ease-in-out_infinite]"></div>

              {/* عدد 404 پس‌زمینه */}
              <h1 className="relative text-[160px] md:text-[200px] font-black leading-none tracking-tighter text-brand-950/5 select-none">
                404
              </h1>

              {/* --- FLOATING CODE CARD (Left Aligned / LTR) --- */}
              {/* نکته: dir="ltr" و text-left اضافه شد */}
              <div
                dir="ltr"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto min-w-[340px] bg-[#0F172A] text-left rounded-2xl shadow-2xl shadow-brand-900/30 border border-brand-800 p-6 animate-[float_6s_ease-in-out_infinite] rotate-[-3deg] group-hover:rotate-0 transition-transform duration-500"
              >
                {/* Window Controls */}
                <div className="flex items-center gap-1.5 mb-4 border-b border-gray-700/50 pb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  <span className="ml-auto text-[10px] font-mono text-gray-500">
                    error_handler.js
                  </span>
                </div>

                {/* Code Body (Left Aligned) */}
                <div className="font-mono text-sm space-y-2.5">
                  <div className="flex gap-2">
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-400">PageStatus</span>
                    <span className="text-white">=</span>
                    <span className="text-yellow-300">{`{`}</span>
                  </div>
                  <div className="pl-6 flex gap-2">
                    <span className="text-purple-400">code:</span>
                    <span className="text-red-400">404</span>,
                  </div>
                  <div className="pl-6 flex gap-2">
                    <span className="text-purple-400">message:</span>
                    <span className="text-green-400">"NotFound"</span>,
                  </div>
                  <div className="pl-6 flex gap-2">
                    <span className="text-purple-400">suggestion:</span>
                    <span className="text-yellow-300">"GoHome()"</span>
                  </div>
                  <div className="text-yellow-300">{`}`}</div>
                </div>
              </div>
            </div>

            {/* --- B. Text Message --- */}
            <div className="max-w-lg mx-auto space-y-6 mb-10 mt-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-950 tracking-tight">
                مسیر رو اشتباه اومدی!
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                صفحه‌ای که دنبالش می‌گردی پیدا نشد. ممکنه آدرس تغییر کرده باشه
                یا حذف شده باشه.
              </p>
            </div>

            {/* --- C. Action Buttons --- */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full h-12 px-10 bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/20 text-base gap-2"
                >
                  <Home className="w-5 h-5" />
                  بازگشت به خانه
                </Button>
              </Link>
            </div>
          </div>

          {/* Footer Note (Absolute bottom of main) */}
          <div className="absolute bottom-4 text-center w-full">
            <p className="text-[10px] font-mono text-gray-300 dir-ltr opacity-60">
              System.Error: <span className="text-red-400">ROUTE_MISSING</span>
            </p>
          </div>
        </main>

        {/* 3. Footer */}
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
