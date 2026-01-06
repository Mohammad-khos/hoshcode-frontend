// src/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // شبیه‌سازی ارسال فرم
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen  text-gray-900 font-dana my-22 overflow-x-hidden">
        <main className="container-custom mx-auto px-6 py-12 md:py-24 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* --- ستون راست: اطلاعات تماس --- */}
            <div className="space-y-12">
              {/* Header Text */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                  با ما در <span></span>
                  <span className="text-primary">تماس </span>
                  باشید
                </h1>
                <p className="text-lg text-gray-500 font-medium leading-loose text-justify">
                  سوالی درباره دوره‌ها دارید؟ نیاز به مشاوره شغلی دارید؟ یا شاید
                  پیشنهادی برای بهبود هوش‌کد؟ تیم ما همیشه آماده شنیدن صدای
                  شماست.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                {/* Item 1: Email */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      ایمیل پشتیبانی
                    </h3>
                    <p className="text-gray-500 font-medium mb-1">
                      پاسخگویی معمولاً زیر ۲ ساعت
                    </p>
                    <a
                      href="mailto:support@hooshcode.com"
                      className="text-primary font-bold dir-ltr block text-right hover:underline"
                    >
                      support@hooshcode.com
                    </a>
                  </div>
                </div>

                {/* Item 2: Phone */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      تماس تلفنی
                    </h3>
                    <p className="text-gray-500 font-medium mb-1">
                      شنبه تا چهارشنبه، ۹ صبح تا ۵ عصر
                    </p>
                    <a
                      href="tel:02112345678"
                      className="text-primary font-bold dir-ltr block text-right hover:underline"
                    >
                      021-12345678
                    </a>
                  </div>
                </div>

                {/* Item 3: Office */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      دفتر مرکزی
                    </h3>
                    <p className="text-gray-500 font-medium leading-relaxed">
                      تهران، خیابان آزادی، ناحیه نوآوری شریف،
                      <br /> برج فناوری هوش‌کد
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- ستون چپ: فرم تماس (Finca Style) --- */}
            <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
              {/* Decorative Blob behind form */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <h2 className="text-2xl font-black text-gray-900 mb-8 relative z-10">
                ارسال پیام مستقیم
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 mr-2">
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    placeholder="مثلا: علی محمدی"
                    className="w-full h-14 bg-white border border-gray-200 rounded-2xl px-5 text-sm font-bold text-gray-900 outline-none focus:border-primary focus:shadow-[0_4px_20px_-4px_rgba(var(--primary),0.1)] transition-all placeholder:text-gray-300"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 mr-2">
                    آدرس ایمیل
                  </label>
                  <input
                    type="email"
                    dir="ltr"
                    placeholder="example@gmail.com"
                    className="w-full h-14 bg-white border border-gray-200 rounded-2xl px-5 text-sm font-bold text-gray-900 outline-none focus:border-primary focus:shadow-[0_4px_20px_-4px_rgba(var(--primary),0.1)] transition-all placeholder:text-gray-300 text-right"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 mr-2">
                    متن پیام
                  </label>
                  <textarea
                    rows={4}
                    placeholder="پیام خود را بنویسید..."
                    className="w-full bg-white border border-gray-200 rounded-2xl p-5 text-sm font-bold text-gray-900 outline-none focus:border-primary focus:shadow-[0_4px_20px_-4px_rgba(var(--primary),0.1)] transition-all placeholder:text-gray-300 resize-none leading-loose"
                  />
                </div>

                {/* Submit Button */}
                <button
                  disabled={isLoading}
                  className="w-full h-14 bg-primary text-white rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      <span>در حال ارسال...</span>
                    </>
                  ) : (
                    <>
                      <span>ارسال پیام</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
