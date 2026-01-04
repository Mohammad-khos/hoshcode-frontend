// src/components/layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Code2, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // تشخیص اسکرول برای تغییر استایل هدر
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "مسیرهای یادگیری", href: "/paths" },
    { name: "دستیار هوشمند", href: "/ai-hub" },
    { name: "درباره ما", href: "/about" },
    { name: "تماس با ما", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        // استفاده از fixed برای قرارگیری روی هیرو
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
        // شرط اسکرول: اگر اسکرول شد سفید شیشه‌ای، اگر نه کاملا شفاف
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 py-5 shadow-sm"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        
        {/* === Logo === */}
        <Link href="/" className="flex items-center gap-2.5 group">
            <Image src="/main-logo.png" alt="logo" width={75} height={75}/>
          {/* <span className={cn(
            "text-xl font-bold tracking-tight transition-colors",
            // رنگ متن لوگو همیشه تیره و خوانا
            "text-brand-950"
          )}>
            هوش‌کد
          </span> */}
        </Link>

        {/* === Desktop Nav === */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[15px] font-medium text-gray-600 hover:text-brand-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* === Desktop Actions === */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="primary" size="md" className="font-medium">
              ورود
            </Button>
          </Link>
          <Link href="/register">
            {/* دکمه اصلی هدر آبی است تا با دکمه سبز هیرو رقابت نکند */}
            <Button variant="cta" size="md" className="shadow-brand-600/20">
             شروع رایگان
            </Button>
          </Link>
        </div>

        {/* === Mobile Toggle === */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* === Mobile Menu === */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 py-2 border-b border-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-2">
              <Button variant="secondary" className="w-full justify-center">ورود</Button>
              <Button variant="cta" className="w-full justify-center">شروع رایگان</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;