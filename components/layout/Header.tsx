// src/components/layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Menu, X, ChevronLeft, User, Search, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // جلوگیری از اسکرول وقتی منو باز است
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "مسیرهای یادگیری", href: "/paths" },
    { name: "دوره‌های آموزشی", href: "/courses" },
    { name: "دستیار هوشمند", href: "/ai-hub" },
    { name: "درباره ما", href: "/about" },
    { name: "تماس با ما", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] font-dana",
          // در حالت اسکرول یا باز بودن منو، هدر سفید و بلور می‌شود
          scrolled || isMobileMenuOpen
            ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 py-3 shadow-sm"
            : "bg-transparent border-transparent py-4 md:py-6"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* === 1. Logo (Right) === */}
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <div className="relative w-14 h-14 md:w-14 md:h-14 transition-transform duration-300 hover:scale-105">
              <Image
                src="/main-logo.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
            {/* متن لوگو فقط در دسکتاپ */}
            <span className="font-black text-xl text-gray-900 tracking-tight  md:hidden">
              هوش‌کد
            </span>
          </Link>

          {/* === 2. Desktop Navigation (Center) === */}
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

          {/* === 3. Desktop Actions (Left) === */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button
                variant="primary"
                size="md"
                className="font-bold text-white hover:bg-gray-100/80 rounded-xl"
              >
                ورود
              </Button>
            </Link>
            <Link href="/register">
              <Button
                variant="cta"
                size="md"
                className="shadow-lg shadow-brand-600/20 rounded-xl px-6"
              >
                شروع رایگان
              </Button>
            </Link>
          </div>

          {/* === 4. MOBILE CREATIVE CONTROLS (The New Part) === */}
          {/* این بخش همان کپسول شیشه‌ای خلاقانه است */}
          <div className="md:hidden flex items-center gap-2 relative z-50">
            {/* Capsule Container */}
            <div
              className={cn(
                "flex items-center p-1 rounded-full border transition-all duration-300",
                scrolled
                  ? "bg-white border-gray-200 shadow-sm"
                  : "bg-white/60 border-gray-100 backdrop-blur-md"
              )}
            >
              {/* Search / User Action (Mini Button) */}
              <Link
                href="/login"
                className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                <User size={18} />
              </Link>

              {/* Divider */}
              <div className="w-px h-4 bg-gray-300 mx-1"></div>

              {/* Menu Toggle (Main Button) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full transition-all active:scale-95"
              >
                <div
                  className={cn(
                    "w-7 h-7 flex items-center justify-center rounded-full bg-primary text-white transition-all duration-300",
                    isMobileMenuOpen ? "rotate-90 bg-red-500" : ""
                  )}
                >
                  {isMobileMenuOpen ? (
                    <X size={14} />
                  ) : (
                    <Menu size={14} />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* === MOBILE MENU OVERLAY (Clean Version) === */}
      {/* همان نسخه تمیز و سفیدی که دوست داشتید */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-28 px-6 md:hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        {/* Navigation Links */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item, idx) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between text-lg font-bold text-gray-800 py-4 border-b border-gray-50 group"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className="group-hover:text-brand-600 transition-colors">
                {item.name}
              </span>
              <ChevronLeft
                size={20}
                className="text-gray-300 group-hover:text-brand-600 transition-colors rtl:rotate-180"
              />
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="mt-auto mb-10 flex flex-col gap-4">
          <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
            <Button
              variant="cta"
              className="w-full justify-center h-14 text-lg rounded-2xl shadow-xl shadow-brand-600/20"
            >
              شروع مسیر یادگیری
            </Button>
          </Link>
          <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
            <Button
              variant="outline"
              className="w-full justify-center h-14 text-lg rounded-2xl border-gray-200 text-gray-600"
            >
              ورود به حساب
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
