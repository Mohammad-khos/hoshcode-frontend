// src/features/ai-mentor/components/ChatWindow.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  MoreVertical, Paperclip, Send, Image as ImageIcon, Code, 
  X, Menu, Sparkles, Terminal, BookOpen, ArrowUp 
} from "lucide-react";
import Image from "next/image";

interface Message {
  id: number;
  role: 'user' | 'ai';
  content: string;
}

interface ChatWindowProps {
  isSidebarOpen?: boolean;
  onOpenMobileSidebar?: () => void;
}

// --- 1. تعریف اینترفیس پراپ‌های اینپوت ---
interface ChatInputProps {
  centered?: boolean;
  inputValue: string;
  setInputValue: (val: string) => void;
  handleSendMessage: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  isAttachOpen: boolean;
  setIsAttachOpen: (val: boolean) => void;
  textareaRef: React.RefObject<HTMLTextAreaElement>; // اصلاح تایپ برای RefObject
}

// --- 2. انتقال کامپوننت ChatInput به بیرون از ChatWindow ---
const ChatInput = ({ 
  centered = false, 
  inputValue, 
  setInputValue, 
  handleSendMessage, 
  handleKeyDown, 
  isAttachOpen, 
  setIsAttachOpen, 
  textareaRef 
}: ChatInputProps) => {
  return (
    <div className={`
        relative flex items-end bg-gray-50 border border-gray-200 rounded-3xl 
        transition-all duration-300 shadow-sm
        focus-within:bg-white focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10
        ${centered ? 'w-full max-w-2xl shadow-md bg-white border-gray-300' : 'max-w-4xl mx-auto'}
    `}>
      {/* Attachment Button */}
      <div className="relative">
        <button 
            onClick={() => setIsAttachOpen(!isAttachOpen)}
            className={`
                p-3 md:p-4 mb-1 text-gray-400 hover:text-primary transition-all duration-300
                ${isAttachOpen ? 'rotate-45 text-primary' : ''}
            `}
        >
            {isAttachOpen ? <X size={20} /> : <Paperclip size={20} />}
        </button>
        
        {/* Attachment Popup */}
        <div className={`
            absolute bottom-16 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 flex flex-col gap-1 transition-all duration-300 origin-bottom-right z-50 w-40
            ${isAttachOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}
        `}>
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-xl text-gray-600 text-xs font-medium transition-colors text-right">
                <div className="p-1.5 bg-blue-50 text-blue-500 rounded-lg"><ImageIcon size={14} /></div>
                آپلود تصویر
            </button>
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-xl text-gray-600 text-xs font-medium transition-colors text-right">
                <div className="p-1.5 bg-purple-50 text-purple-500 rounded-lg"><Code size={14} /></div>
                قطعه کد
            </button>
        </div>
        {/* Close Backdrop */}
        {isAttachOpen && <div className="fixed inset-0 z-40" onClick={() => setIsAttachOpen(false)} />}
      </div>
      
      {/* Text Area */}
      <textarea 
        ref={textareaRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`
            flex-1 bg-transparent border-none text-gray-800 placeholder:text-gray-400 focus:ring-0 text-sm py-4 md:py-5 px-1 md:px-2 resize-none custom-scrollbar leading-6
            ${centered ? 'min-h-[60px]' : 'min-h-[56px] max-h-[200px]'}
        `}
        placeholder={centered ? "هر چه می خواهید بپرسید..." : "پیامی بنویسید..."}
        rows={1}
      />
      
      {/* Send Button */}
      <div className="p-1.5 md:p-2 mb-1 md:mb-1.5">
        <button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className={`
                p-2.5 md:p-3 rounded-2xl transition-all duration-300 flex items-center justify-center
                ${inputValue.trim() 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 active:scale-95' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
            `}
        >
            {centered ? <ArrowUp size={20} /> : <Send size={18} className="rtl:rotate-180" />}
        </button>
      </div>
    </div>
  );
};

// --- Main Component ---
export const ChatWindow = ({ isSidebarOpen, onOpenMobileSidebar }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isAttachOpen, setIsAttachOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const hasStarted = messages.length > 0;

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [inputValue]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now(), role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    
    // Simulate AI Response
    setTimeout(() => {
        const aiMsg: Message = { 
            id: Date.now() + 1, 
            role: 'ai', 
            content: "این یک پاسخ نمونه است. سیستم به درستی کار می‌کند و مشکل اینپوت حل شده است." 
        };
        setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestions = [
    { icon: <Terminal size={16} />, text: "کد پایتون برای تحلیل داده" },
    { icon: <BookOpen size={16} />, text: "خلاصه‌سازی مقاله" },
    { icon: <Sparkles size={16} />, text: "ایده برای استارتاپ" },
    { icon: <Code size={16} />, text: "دیباگ کردن کامپوننت React" },
  ];

  // VIEW 1: WELCOME SCREEN
  if (!hasStarted) {
    return (
      <div className="flex-1 flex flex-col h-full relative bg-white overflow-hidden">
        <div className="absolute top-0 right-0 p-4 md:hidden z-20">
             <button onClick={onOpenMobileSidebar} className="p-2 text-gray-500 hover:bg-gray-50 rounded-xl">
                 <Menu size={24} />
             </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-3xl mx-auto space-y-10 animate-in fade-in zoom-in duration-500">
            <div className="flex flex-col items-center gap-6 text-center">
                <div className="w-20 h-20 md:w-24 md:h-24  rounded-3xl shadow-xl shadow-gray-200 border border-gray-100 flex items-center justify-center p-4 relative mb-2">
                    <Image src="/main-logo.png" alt="Logo" fill className="object-contain p-2" />
                </div>
                <div className="space-y-2">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">سلام، به دستیار هوشمند <span className="text-primary">هوش‌کد</span> خوش اومدید</h1>
                    <p className="text-gray-500 font-medium text-sm md:text-base">چطور می‌توانم امروز به شما کمک کنم؟</p>
                </div>
            </div>

            <div className="w-full">
                {/* --- 3. استفاده از کامپوننت اکسترنال با پاس دادن پراپ‌ها --- */}
                <ChatInput 
                  centered 
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  handleSendMessage={handleSendMessage}
                  handleKeyDown={handleKeyDown}
                  isAttachOpen={isAttachOpen}
                  setIsAttachOpen={setIsAttachOpen}
                  textareaRef={textareaRef}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                {suggestions.map((item, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => { setInputValue(item.text); }}
                        className="flex items-center gap-3 p-3.5 rounded-2xl border border-gray-200 bg-white hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-200 text-right group"
                    >
                        <div className="p-2 rounded-lg bg-gray-50 text-gray-500 group-hover:bg-white group-hover:text-primary transition-colors">
                            {item.icon}
                        </div>
                        <span className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">
                            {item.text}
                        </span>
                    </button>
                ))}
            </div>
        </div>
        
        <div className="p-4 text-center">
             <p className="text-[10px] text-gray-400 font-medium">قدرت گرفته از مدل‌های زبانی پیشرفته</p>
        </div>
      </div>
    );
  }

  // VIEW 2: ACTIVE CHAT SCREEN
  return (
    <div className="flex-1 flex flex-col h-full relative animate-in fade-in duration-500">
      
      <header className="h-16 md:h-20 border-b border-gray-100 flex items-center justify-between px-4 md:px-8 sticky top-0  backdrop-blur-md z-10">
        <div className="flex items-center gap-3 md:gap-4">
            <button onClick={onOpenMobileSidebar} className="md:hidden p-2 -mr-2 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors">
              <Menu size={24} />
            </button>

            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gray-50 flex items-center justify-center relative overflow-hidden shadow-sm border border-gray-100 p-2">
                <Image src="/main-logo.png" alt="HoshCode AI" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
                <h2 className="text-gray-900 font-extrabold text-base md:text-lg leading-tight">دستیار هوشمند</h2>
                <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full animate-pulse bg-action-600" />
                    <span className="text-[10px] md:text-xs font-medium text-gray-500">در حال گفتگو</span>
                </div>
            </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-xl hover:bg-gray-50">
          <MoreVertical size={20} />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8">
        {messages.map((msg) => (
             <div 
                key={msg.id} 
                className={`flex items-start gap-2.5 md:gap-4 max-w-[90%] md:max-w-3xl ${msg.role === 'user' ? 'mr-auto flex-row-reverse' : ''}`}
             >
                <div className={`
                    w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shrink-0 border overflow-hidden relative
                    ${msg.role === 'ai' ? 'bg-white shadow-sm border-gray-100 p-1.5' : 'bg-gray-100 border-gray-200'}
                `}>
                    <Image 
                        src={msg.role === 'ai' ? "/main-logo.png" : "/avatar.png"} 
                        alt={msg.role} 
                        fill 
                        className="object-contain" 
                    />
                </div>
                
                <div className={`space-y-1.5 flex flex-col ${msg.role === 'user' ? 'items-end' : ''}`}>
                    <span className="text-xs font-bold text-gray-700 mx-1">{msg.role === 'ai' ? 'هوش‌کد' : 'شما'}</span>
                    <div className={`
                        text-sm md:text-base leading-7 p-4 md:p-5 rounded-3xl shadow-sm
                        ${msg.role === 'ai' 
                            ? 'bg-gray-50 border border-gray-100 text-gray-700 rounded-tr-none' 
                            : 'bg-primary text-white shadow-primary/20 rounded-tl-none'}
                    `}>
                        {msg.content}
                    </div>
                </div>
             </div>
        ))}
      </div>

      <div className="p-3 md:p-6 border-t border-gray-100 relative ">
        {/* --- 3. استفاده مجدد از کامپوننت اکسترنال --- */}
        <ChatInput 
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSendMessage={handleSendMessage}
          handleKeyDown={handleKeyDown}
          isAttachOpen={isAttachOpen}
          setIsAttachOpen={setIsAttachOpen}
          textareaRef={textareaRef}
        />
        <p className="text-center text-[10px] text-gray-400 mt-3 font-medium opacity-60 hidden md:block">
            هوش مصنوعی ممکن است اشتباه کند. لطفاً اطلاعات حساس را به اشتراک نگذارید.
        </p>
      </div>
    </div>
  );
};