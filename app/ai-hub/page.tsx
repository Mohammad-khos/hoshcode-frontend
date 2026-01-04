// src/app/ai-hub/page.tsx
import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Compass,
  ArrowUpRight,
  Terminal,
  Code,
  Map,
  ChevronRight,
  Bot,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AIHubPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background p-6 md:p-10 text-foreground">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* --- Header Section --- */}

          <header className="flex flex-col gap-4 pt-4 animate-fade-in">
            <div className="flex items-center gap-3"></div>

            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-foreground">
              هاب دستیارهای هوشمند
            </h1>

            <p className="text-muted-foreground text-lg font-normal leading-relaxed max-w-2xl">
              یادگیری خود را با همراهان هوشمند ما متحول کنید. دستیار مناسب برای
              هدف فعلی خود را انتخاب کنید، از برنامه‌ریزی مسیر شغلی تا دیباگ
              کردن کدهای پیچیده.
            </p>
          </header>

          {/* --- Feature Cards (Main Entry Points) --- */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Career Guidance */}
            <div className="group relative flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
              <div className="flex items-start justify-between">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-white/5">
                  <Compass className="text-white w-8 h-8" />
                </div>
                <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors w-6 h-6" />
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <h2 className="text-foreground text-2xl font-bold leading-tight">
                  هوش مصنوعی مشاور شغلی
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  نمی‌دانید از کجا شروع کنید؟ مسیرهای یادگیری شخصی‌سازی شده،
                  مشاوره شغلی و پیشنهادات دوره مخصوص اهداف خود را دریافت کنید.
                </p>
              </div>

              <Link
                href="/ai-mentor"
                className="mt-4 flex w-full items-center justify-center rounded-xl h-12 bg-foreground text-background hover:bg-foreground/90 font-bold text-sm tracking-wide transition-colors"
              >
                برنامه‌ریزی مسیر شغلی
              </Link>
            </div>

            {/* Card 2: Coding Assistant */}
            <div className="group relative flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
              <div className="flex items-start justify-between">
                <div className="p-3 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-xl border border-white/5">
                  <Terminal className="text-white w-8 h-8" />
                </div>
                <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors w-6 h-6" />
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <h2 className="text-foreground text-2xl font-bold leading-tight">
                  دستیار کدنویسی
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  در یک باگ گیر کرده‌اید؟ دیباگ لحظه‌ای کد، توضیح سینتکس و
                  بهینه‌سازی منطق را دریافت کنید. کد خود را پیست کنید و فوراً
                  بازخورد بگیرید.
                </p>
              </div>

              <Link
                href="/ai-mentor" // در آینده می‌تواند به مسیر متفاوتی برود
                className="mt-4 flex w-full items-center justify-center rounded-xl h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm tracking-wide transition-colors shadow-lg shadow-primary/20"
              >
                باز کردن دستیار کد
              </Link>
            </div>
          </section>

          {/* --- Recent Activity Section --- */}
          <section className="flex flex-col gap-4 pb-12">
            <div className="flex items-center justify-between pb-2 border-b border-border">
              <h2 className="text-foreground text-xl font-bold leading-tight">
                فعالیت‌های اخیر
              </h2>
              <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                مشاهده تاریخچه کامل
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {/* Activity Item 1 */}
              <div className="flex items-center gap-4 bg-card/50 hover:bg-card border border-transparent hover:border-border rounded-xl p-4 transition-all duration-200 cursor-pointer group">
                <div className="flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 shrink-0 h-12 w-12 border border-blue-500/20">
                  <Code className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <p className="text-foreground text-base font-medium line-clamp-1 group-hover:text-primary transition-colors">
                    دیباگ کردن حلقه پایتون
                  </p>
                  <p className="text-muted-foreground text-sm">
                    دستیار کدنویسی • ۲ ساعت پیش
                  </p>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                </button>
              </div>

              {/* Activity Item 2 */}
              <div className="flex items-center gap-4 bg-card/50 hover:bg-card border border-transparent hover:border-border rounded-xl p-4 transition-all duration-200 cursor-pointer group">
                <div className="flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-500 shrink-0 h-12 w-12 border border-purple-500/20">
                  <Map className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <p className="text-foreground text-base font-medium line-clamp-1 group-hover:text-primary transition-colors">
                    مسیر شغلی علم داده
                  </p>
                  <p className="text-muted-foreground text-sm">
                    مشاوره شغلی • دیروز
                  </p>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                </button>
              </div>

              {/* Activity Item 3 */}
              <div className="flex items-center gap-4 bg-card/50 hover:bg-card border border-transparent hover:border-border rounded-xl p-4 transition-all duration-200 cursor-pointer group">
                <div className="flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0 h-12 w-12 border border-emerald-500/20">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <p className="text-foreground text-base font-medium line-clamp-1 group-hover:text-primary transition-colors">
                    توضیح هوک‌های React
                  </p>
                  <p className="text-muted-foreground text-sm">
                    دستیار کدنویسی • ۳ روز پیش
                  </p>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
}
