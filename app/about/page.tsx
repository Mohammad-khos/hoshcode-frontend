// src/app/about/page.tsx
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Users, Target, Zap, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* گرادینت پس‌زمینه هماهنگ با تم */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
            داستان ما
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-foreground">
            ما در حال ساختن <br />
            <span className="text-primary">آینده آموزش</span> هستیم
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            هوش کد با هدف دموکراتیک کردن آموزش برنامه‌نویسی و توانمندسازی افراد برای ساختن آینده‌ای دیجیتال متولد شد. ما باور داریم یادگیری باید تعاملی، در دسترس و لذت‌بخش باشد.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "دانشجوی فعال", value: "+۵۰ هزار" },
              { label: "دوره آموزشی", value: "+۲۰۰" },
              { label: "مدرس خبره", value: "+۴۰" },
              { label: "ساعت آموزش", value: "+۱۰ هزار" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-foreground mb-2">{stat.value}</div>
                <div className="text-primary text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-3xl rotate-6 opacity-20 blur-xl"></div>
              {/* تصویر آنلاین */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                alt="تیم هوش کد" 
                className="relative rounded-3xl border border-border shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">ماموریت ما توانمندسازی شماست</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                ما تیمی از توسعه‌دهندگان، طراحان و مدرسان عاشق تکنولوژی هستیم که دور هم جمع شده‌ایم تا شکاف بین آموزش دانشگاهی و نیاز بازار کار را پر کنیم.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: "یادگیری هدفمند", desc: "مسیرهای مشخص برای رسیدن به شغل" },
                  { icon: Users, title: "جامعه پویا", desc: "یادگیری در کنار هزاران دانشجوی دیگر" },
                  { icon: Zap, title: "سرعت و کیفیت", desc: "جدیدترین تکنولوژی‌ها با بالاترین کیفیت" },
                  { icon: Award, title: "گواهینامه معتبر", desc: "مدرک قابل ارائه به شرکت‌های معتبر" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-primary shadow-sm">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-12 text-foreground">تیم رهبری ما</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 border border-border bg-card relative">
                   <img 
                     src={`https://images.unsplash.com/photo-${item === 1 ? '1560250097-0b9358e8b3b9' : item === 2 ? '1573496359142-b8d87734a5a2' : item === 3 ? '1580489944761-15a19d654956' : '1535713875002-d1d0cf377fde'}?q=80&w=400&auto=format&fit=crop`} 
                     alt="Member"
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                   />
                </div>
                <h3 className="font-bold text-lg text-foreground">نام عضو تیم</h3>
                <p className="text-primary text-sm">سمت شغلی</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}