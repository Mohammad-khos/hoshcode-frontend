// src/components/layout/Footer.tsx
import React from "react";
import Link from "next/link";
import {
  Code2,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    // اصلاح ۱: حذف shadow از اینجا (چون خط صاف میندازه روی موج)
    // اصلاح ۲: اضافه کردن -mt-1 برای رفع فاصله مویی احتمالی بین موج و فوتر
    <footer className="bg-white pt-12 pb-8 relative z-20 -mt-1">
      {/* اگر میخوای محتوا داخل باکس باشه، shadow رو به این div بده، نه به footer */}
      <div className="container-custom">
        {/* --- Top Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12 border-b border-gray-100 pb-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              {/* اگر لوگو داری اینو آنکامنت کن */}
              <Image src="/main-logo.png" alt="logo" width={75} height={75} />

            
              <div className="flex flex-col">
                <span className="text-2xl font-black text-brand-950 tracking-tight">
                  هوش‌کد
                </span>
                <span className="text-[10px] text-gray-400 font-medium">
                  پلتفرم آموزش برنامه‌نویسی
                </span>
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed text-sm max-w-sm text-justify">
              هوش‌کد یک شرکت نوآور در زمینه آموزش برنامه‌نویسی و دنیای هوش
              مصنوعی است. ما شکاف بین دانشگاه و بازار کار را با دوره‌های
              پروژه‌محور پر می‌کنیم.
            </p>

            <div className="flex items-center gap-3">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-brand-600 hover:text-white hover:border-brand-600 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-brand-950 font-bold mb-6 text-lg">
              دسترسی سریع
            </h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li>
                <Link
                  href="/courses"
                  className="hover:text-brand-600 hover:pr-1 transition-all"
                >
                  همه دوره‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="/paths"
                  className="hover:text-brand-600 hover:pr-1 transition-all"
                >
                  مسیرهای یادگیری
                </Link>
              </li>
              <li>
                <Link
                  href="/mentorship"
                  className="hover:text-brand-600 hover:pr-1 transition-all"
                >
                  مشاوره شغلی
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-brand-600 hover:pr-1 transition-all"
                >
                  مجله تکنولوژی
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-600 hover:pr-1 transition-all"
                >
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h4 className="text-brand-950 font-bold text-lg">ارتباط با ما</h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                <p className="leading-6">
                  تهران، طرشت، خیابان شهید گلاب، برج فناوری شریف، طبقه ۴، واحد
                  ۴۰۲
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 group cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                    <Phone className="h-4 w-4 text-brand-600" />
                  </div>
                  <span className="font-bold font-mono text-base text-gray-700 group-hover:text-brand-600 transition-colors">
                    ۰۲۱-۸۸۹۹۴۴۵۵
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-500 group cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                    <Mail className="h-4 w-4 text-brand-600" />
                  </div>
                  <span className="font-bold font-mono text-base text-gray-700 group-hover:text-brand-600 transition-colors">
                    info@hoshcode.com
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-2">
              <div className="w-24 h-24 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer group">
                <span className="text-gray-400 text-[10px] font-bold group-hover:text-brand-600 transition-colors">
                  نماد اعتماد
                </span>
              </div>
              <div className="w-24 h-24 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer group">
                <span className="text-gray-400 text-[10px] font-bold group-hover:text-brand-600 transition-colors">
                  ساماندهی
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Copyright (کپسولی و وسط‌چین) --- */}
        <div className="flex justify-center w-full">
          <div className="bg-gray-50 rounded-2xl px-6 py-4 w-full md:w-auto md:min-w-[400px] text-center border border-gray-100">
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-xs font-medium text-gray-500">
                کليه حقوق مادی و معنوی این وب‌سایت متعلق به{" "}
                <span className="text-brand-600 font-bold">شرکت هوش‌کد</span>{" "}
                می‌باشد.
              </p>

              <div className="flex items-center gap-4 text-[10px] text-gray-400">
                <Link
                  href="/terms"
                  className="hover:text-brand-600 transition-colors"
                >
                  قوانین و مقررات
                </Link>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <Link
                  href="/privacy"
                  className="hover:text-brand-600 transition-colors"
                >
                  حریم خصوصی
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
