// src/features/ai-mentor/components/ChatSidebar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Plus,
  MessageSquare,
  Search,
  Settings,
  ChevronRight,
  ArrowRight,
  Home,
} from "lucide-react";

interface ChatSidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  onNewChat: () => void; // <--- 1. این خط اضافه شد
}

export const ChatSidebar = ({ isOpen, setIsOpen, onNewChat }: ChatSidebarProps) => { // <--- 2. دریافت پراپ
  const [activeChat, setActiveChat] = useState<number | null>(null); // تغییر برای اینکه وقتی چت جدید میزنیم، اکتیو برداشته شه

  const chatHistory = [
    { id: 1, title: "تحلیل پروژه ری‌اکت", date: "امروز", preview: "بررسی هوک‌ها..." },
    { id: 2, title: "مشاوره تغییر شغل", date: "دیروز", preview: "مسیر فرانت‌اند..." },
    { id: 3, title: "دیباگ پایتون", date: "دیروز", preview: "ارور خط ۵۰..." },
    { id: 4, title: "اپلیکیشن اندرویدی کاتلین", date: "دیشب", preview: "ارور خط ۵۰..." },
    { id: 5, title: "دیباگ جاوا", date: "دیروز", preview: "ارور خط ۵۰..." },
    { id: 6, title: "دیباگ پایتون", date: "دیروز", preview: "ارور خط ۵۰..." },
  ];
  
  return (
    <div className="flex flex-col h-full relative bg-white w-full">
      {/* Header */}
      <div className={`flex flex-col transition-all duration-300 ${isOpen ? "p-5 gap-6" : "p-3 gap-4 items-center"}`}>
        <div className={`flex items-center w-full ${isOpen ? "justify-between" : "justify-center flex-col-reverse gap-4"}`}>
          
          {/* Logo Section */}
          {isOpen ? (
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 shrink-0">
                <Image src="/main-logo.png" alt="HoshCode Logo" fill className="object-contain" />
              </div>
              <span className="font-bold text-gray-800 text-lg tracking-tight">
                هوش‌کد
              </span>
            </div>
          ) : (
          <span></span>
          )}

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-gray-400 hover:bg-gray-50 hover:text-gray-800 transition-colors border border-transparent hover:border-gray-100"
          >
            {isOpen ? <ChevronRight size={20} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Back to Home */}
        <Link
          href="/"
          className={`flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group ${isOpen ? "px-1" : "justify-center"}`}
        >
          <div className={`p-1.5 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors`}>
            {isOpen ? <ArrowRight size={16} /> : <Home size={20} />}
          </div>
          <span className={`text-sm font-medium transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 w-0 hidden"}`}>
            بازگشت به خانه
          </span>
        </Link>
      </div>

      {/* --- New Chat Button --- */}
      <div className={`px-4 mb-2 transition-all duration-300 ${!isOpen && "px-2"}`}>
        <button
          onClick={() => {
            onNewChat(); // <--- 3. فراخوانی تابع ریست
            setActiveChat(null); // برداشتن انتخاب از لیست چت‌ها
          }}
          className={`
            flex items-center justify-center w-full rounded-2xl text-white shadow-lg shadow-action-600/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group bg-action-600/80
            ${isOpen ? "py-3.5 gap-3" : "py-3 gap-0"} 
          `}
        >
          <Plus size={22} className="shrink-0" />
          <span className={`font-bold text-sm whitespace-nowrap transition-all duration-300 ${isOpen ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0 overflow-hidden"}`}>
            چت جدید
          </span>
        </button>
      </div>

      {/* --- Chat List --- */}
      <div className={`flex-1 relative overflow-hidden flex flex-col mt-2 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
        <div className="flex-1 overflow-y-auto px-3 space-y-2 custom-scrollbar pb-20">
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`
                group flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-all duration-200 border
                ${activeChat === chat.id
                    ? "bg-action-600/10 border-action-600/20"
                    : "hover:bg-gray-50 border-transparent"
                }
              `}
            >
              <div className={`shrink-0 p-2.5 rounded-xl transition-colors ${activeChat === chat.id ? "bg-action-600 text-white" : "bg-gray-100 text-gray-500"}`}>
                <MessageSquare size={18} />
              </div>

              <div className="flex flex-col items-start overflow-hidden w-full">
                <span className="text-sm font-bold text-gray-800 truncate w-full">
                  {chat.title}
                </span>
                <span className="text-xs text-gray-500 truncate max-w-[140px] mt-0.5">
                  {chat.preview}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />
      </div>

      {/* Footer */}
      <div className={`mt-auto bg-gray-50/50 border-t border-gray-100 transition-all duration-300 ${isOpen ? "p-4" : "p-2"}`}>
        <div className={`flex items-center gap-3 ${isOpen ? "" : "justify-center"}`}>
          <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0 overflow-hidden relative border-2 border-white shadow-sm">
             <div className="w-full h-full bg-gradient-to-tr from-gray-400 to-gray-600 flex items-center justify-center text-white text-xs font-bold">AJ</div>
          </div>
          <div className={`flex flex-col overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>
            <span className="text-sm font-bold text-gray-800 truncate">کاربر مهمان</span>
            <span className="text-[10px] text-action-600 font-medium">نسخه حرفه‌ای</span>
          </div>
          {isOpen && (
            <button className="mr-auto p-2 text-gray-400 hover:text-action-600 transition-colors rounded-lg hover:bg-action-600/10">
              <Settings size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};