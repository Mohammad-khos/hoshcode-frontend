// src/app/ai-mentor/page.tsx
"use client";

import React, { useState } from "react";
import { ChatSidebar } from "@/features/ai-mentor/components/ChatSidebar";
import { ChatWindow } from "@/features/ai-mentor/components/ChatWindow";

export default function AIMentorPage() {
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  // کلید برای ریست کردن کامپوننت چت
  const [chatSessionId, setChatSessionId] = useState(0);

  const handleNewChat = () => {
    setChatSessionId(prev => prev + 1);
    setIsMobileSidebarOpen(false); // بستن منو در موبایل
  };

  return (
    <div className="flex h-[100dvh] w-full overflow-hidden bg-white md:bg-gray-50/50 p-0 md:p-4 gap-0 md:gap-6 font-dana relative" dir="rtl">
      
      {/* Mobile Sidebar */}
      <div 
        className={`
          fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${isMobileSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
        onClick={() => setIsMobileSidebarOpen(false)}
      >
        <aside 
          className={`
            absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ease-out
            ${isMobileSidebarOpen ? "translate-x-0" : "translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* پاس دادن تابع handleNewChat */}
          <ChatSidebar 
            isOpen={true} 
            setIsOpen={() => setIsMobileSidebarOpen(false)} 
            onNewChat={handleNewChat}
          />
        </aside>
      </div>

      {/* Desktop Sidebar */}
      <aside 
        className={`
          hidden md:flex flex-col bg-white rounded-[1.5rem] border border-gray-200 shadow-sm overflow-hidden 
          transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] relative z-20
          ${isDesktopSidebarOpen ? "w-80" : "w-20"}
        `}
      >
        <ChatSidebar 
          isOpen={isDesktopSidebarOpen} 
          setIsOpen={setIsDesktopSidebarOpen} 
          onNewChat={handleNewChat}
        />
      </aside>
      
      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col md:rounded-[2rem] bg-white md:bg-gray-50 relative z-10 overflow-hidden shadow-none md:shadow-xl md:shadow-gray-200/40">
        {/* کلید باعث می‌شود با هر بار چت جدید، کامپوننت دوباره ساخته شود و به حالت خوش‌آمدگویی برود */}
        <ChatWindow 
          key={chatSessionId} 
          isSidebarOpen={isDesktopSidebarOpen} 
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
        />
      </main>

    </div>
  );
}