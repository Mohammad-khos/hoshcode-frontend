// src/features/ai-mentor/components/ChatWindow.tsx
"use client";

import React, { useState } from "react";
import { Menu, MoreVertical, Paperclip, Mic, Send, Bot } from "lucide-react";

export const ChatWindow = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <main className="flex-1 flex flex-col min-w-0 bg-background relative h-full">
      
      {/* Header */}
      <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Menu className="md:hidden text-foreground cursor-pointer h-6 w-6" />
          <div className="flex flex-col">
            <h2 className="text-foreground font-bold text-lg leading-tight">هوش مصنوعی مشاور شغلی</h2>
            <div className="flex items-center gap-1.5">
              <span className="block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-500 text-xs font-medium">آنلاین</span>
            </div>
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <MoreVertical className="h-5 w-5" />
        </button>
      </header>

      {/* Messages Stream */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col gap-6">
        
        {/* Date Separator */}
        <div className="flex justify-center">
          <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">امروز، ۱۰:۲۳ صبح</span>
        </div>

        {/* AI Message 1 */}
        <div className="flex items-end gap-3 max-w-3xl">
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md border border-border">
             <Bot className="text-primary-foreground h-5 w-5" />
          </div>
          <div className="flex flex-col gap-1 items-start w-full">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-xs font-medium">هوش کد</span>
              <span className="text-muted-foreground/60 text-[10px]">۱۰:۲۳ صبح</span>
            </div>
            <div className="text-sm md:text-base font-normal leading-relaxed rounded-2xl rounded-tr-none px-5 py-3 bg-card text-foreground shadow-sm border border-border">
                سلام الکس! امروز چطور می‌تونم به پیشرفت شغلیت کمک کنم؟ می‌تونم کمکت کنم مسیر یادگیری بچینی، مهارت‌هات رو بررسی کنم یا دوره‌های خاصی رو پیشنهاد بدم.
            </div>
          </div>
        </div>

        {/* User Message */}
        <div className="flex items-end gap-3 max-w-3xl self-end justify-end">
          <div className="flex flex-col gap-1 items-end">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground/60 text-[10px]">۱۰:۲۵ صبح</span>
              <span className="text-muted-foreground text-xs font-medium">شما</span>
            </div>
            <div className="text-sm md:text-base font-normal leading-relaxed rounded-2xl rounded-tl-none px-5 py-3 bg-primary text-primary-foreground shadow-md shadow-primary/20">
                من می‌خوام از مارکتینگ به مهندسی نرم‌افزار تغییر رشته بدم. می‌تونی کمکم کنی بفهمم از کجا شروع کنم؟
            </div>
          </div>
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shrink-0 border border-border">
            AJ
          </div>
        </div>

        {/* AI Message 2 */}
        <div className="flex items-end gap-3 max-w-3xl">
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md border border-border">
             <Bot className="text-primary-foreground h-5 w-5" />
          </div>
          <div className="flex flex-col gap-1 items-start w-full">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-xs font-medium">هوش کد</span>
              <span className="text-muted-foreground/60 text-[10px]">۱۰:۲۵ صبح</span>
            </div>
            <div className="text-sm md:text-base font-normal leading-relaxed rounded-2xl rounded-tr-none px-5 py-3 bg-card text-foreground shadow-sm border border-border">
              <p className="mb-3">این یک تغییر هیجان‌انگیزه! با توجه به سابقه شما در مارکتینگ، احتمالاً <strong>توسعه فرانت‌اند (Frontend)</strong> یا <strong>مهندسی تجربه کاربری (UX)</strong> برای شما مناسب‌تر باشه، چون درک بصری و همدلی با کاربر در اون‌ها مهمه.</p>
              <p>اینجا یک نقطه شروع پیشنهادی هست:</p>
              <ul className="list-disc pr-5 mt-2 space-y-1 text-muted-foreground marker:text-primary">
                <li>مبانی HTML و CSS</li>
                <li>جاوا اسکریپت (ES6+)</li>
                <li>فریم‌ورک React.js برای ساخت رابط کاربری</li>
              </ul>
              <p className="mt-3">من یک دوره مرتبط رو در پنل سمت چپ برات آوردم. می‌خوای یک رودمپ کامل برات بسازم؟</p>
            </div>
          </div>
        </div>

      </div>

      {/* Input Area */}
      <div className="w-full px-4 md:px-8 pb-6 pt-2 bg-gradient-to-t from-background via-background to-transparent">
        
        {/* Suggestion Chips */}
        <div className="flex gap-2 pb-3 overflow-x-auto no-scrollbar mask-gradient">
          {["ساخت رودمپ کامل", "انتظارات حقوقی؟", "مقایسه با طراحی UX"].map((chip, i) => (
             <button key={i} className="flex shrink-0 items-center justify-center gap-x-2 rounded-full border border-border bg-card hover:bg-muted px-4 py-1.5 transition-colors cursor-pointer text-primary text-xs font-medium whitespace-nowrap shadow-sm">
                {chip}
             </button>
          ))}
        </div>

        {/* Input Box */}
        <div className="relative flex items-center w-full bg-card border border-border rounded-xl shadow-lg focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
          <button className="p-3 text-muted-foreground hover:text-foreground transition-colors" title="Attach file">
            <Paperclip className="h-5 w-5" />
          </button>
          
          <input 
            className="flex-1 bg-transparent border-none text-foreground placeholder:text-muted-foreground focus:ring-0 text-sm py-4" 
            placeholder="پیامی به هوش کد بنویسید..." 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          
          <button className="p-3 text-muted-foreground hover:text-foreground transition-colors" title="Voice Input">
            <Mic className="h-5 w-5" />
          </button>
          
          <button className="p-2 ml-2 bg-primary hover:bg-primary/90 rounded-lg text-primary-foreground transition-colors shadow-md shadow-primary/20" title="Send Message">
            <Send className="h-5 w-5 rtl:rotate-180" />
          </button>
        </div>
        
        <p className="text-center text-[10px] text-muted-foreground mt-2">هوش مصنوعی ممکن است اشتباه کند. لطفاً اطلاعات مهم شغلی را بررسی کنید.</p>
      </div>
    </main>
  );
};