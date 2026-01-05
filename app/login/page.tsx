"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, ArrowRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Input Component ---
const AuthInput = ({ label, icon: Icon, type = "text", placeholder, dir = "ltr", ...props }: any) => {
  return (
    <div className="space-y-2 group w-full">
      <label className="block text-xs font-bold text-gray-500 transition-colors group-focus-within:text-primary mr-1 text-right">
        {label}
      </label>
      <div className="relative">
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors pointer-events-none">
          <Icon size={20} strokeWidth={1.5} />
        </div>
        <input 
          type={type}
          dir={dir}
          placeholder={placeholder}
          className={cn(
            "w-full h-14 bg-white border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 placeholder:text-gray-300 outline-none transition-all duration-300",
            "focus:border-primary focus:shadow-[0_4px_20px_-4px_rgba(var(--primary),0.1)]",
            "pr-12 pl-4"
          )}
          {...props}
        />
      </div>
    </div>
  );
};

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center font-dana bg-[#F9FAFB] p-6 relative">
      
      {/* --- دکمه بازگشت به خانه --- */}
      <Link href="/" className="absolute top-6 right-6 lg:top-10 lg:right-10 flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors group">
          <ArrowRight size={18} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold">بازگشت به خانه</span>
      </Link>

      <div className="w-full max-w-[400px] animate-in fade-in zoom-in duration-500">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
            <div className="relative w-50 h-50">
                <Image 
                    src="/main-logo.png" 
                    alt="Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>

        {/* Title */}
        <div className="text-center mb-10 space-y-2">
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">ورود به حساب کاربری</h1>
            <p className="text-gray-400 font-medium text-xs">
                جهت دسترسی به پنل کاربری وارد شوید
            </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
            <AuthInput 
                label="آدرس ایمیل" 
                icon={Mail} 
                type="email" 
                placeholder="example@gmail.com" 
                dir="ltr" 
            />
            
            <div className="space-y-2">
                <AuthInput 
                    label="رمز عبور" 
                    icon={Lock} 
                    type="password" 
                    placeholder="••••••••" 
                    dir="ltr"
                />
                <div className="flex justify-end">
                    <Link href="/forgot-password" class="text-[11px] font-bold text-gray-400 hover:text-gray-700 transition-colors">
                        فراموشی رمز عبور؟
                    </Link>
                </div>
            </div>

            <button 
                disabled={isLoading}
                className="w-full h-14 bg-primary text-primary-foreground rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : "ورود"}
            </button>
        </form>

        <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
            <div className="relative flex justify-center text-xs"><span className="bg-[#F9FAFB] px-3 text-gray-400 font-medium">یا</span></div>
        </div>

        <button className="w-full h-14 bg-white border border-gray-200 rounded-2xl font-bold text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-3">
            <Github size={20} />
            <span>ورود با گیت‌هاب</span>
        </button>

        <div className="mt-10 text-center">
             <Link href="/register" className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-primary transition-colors group">
                <span>هنوز حساب ندارید؟ ثبت‌نام کنید</span>
                <ArrowRight size={14} className="group-hover:-translate-x-1 transition-transform rotate-180" />
            </Link>
        </div>

      </div>
    </div>
  );
}