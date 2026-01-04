// src/app/ai-mentor/page.tsx
"use client";

import React, { useState } from "react";
import { ChatSidebar } from "@/features/ai-mentor/components/ChatSidebar";
import { ChatWindow } from "@/features/ai-mentor/components/ChatWindow";

export default function AIMentorPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50/50 p-4 gap-4 md:gap-6 font-dana" dir="rtl">
      
      {/* 1. Sidebar Container */}
      <aside 
        className={`
          hidden md:flex flex-col bg-white rounded-[1.5rem] border border-gray-200 shadow-sm overflow-hidden 
          transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] relative z-20
          ${isSidebarOpen ? "w-80" : "w-20"}
        `}
      >
        <ChatSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </aside>
      
      {/* 2. Main Chat Area */}
      <main className="flex-1 flex flex-col bg-white rounded-[2rem] border border-gray-200 shadow-xl shadow-gray-200/40 relative z-10 overflow-hidden">
        <ChatWindow isSidebarOpen={isSidebarOpen} />
      </main>

    </div>
  );
}