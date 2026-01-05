// src/features/career-assistant/components/CareerWindow.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  MoreVertical, UploadCloud, Send, Target, Menu, 
  CheckCircle2, ArrowRight, Paperclip, X, Image as ImageIcon, 
  Code, Rocket, Layout, FileText, AlertCircle 
} from "lucide-react";
import Image from "next/image";
import { SkillRadarChart } from "./SkillRadarChart";

// --- Input Component (Shared logic with AI Mentor) ---
interface ChatInputProps {
    inputValue: string;
    setInputValue: (val: string) => void;
    handleSendMessage: () => void;
    handleKeyDown: (e: React.KeyboardEvent) => void;
    textareaRef: React.RefObject<HTMLTextAreaElement>;
}

const ChatInput = ({ 
    inputValue, setInputValue, handleSendMessage, handleKeyDown, textareaRef 
}: ChatInputProps) => {
    return (
        <div className={`
            max-w-4xl mx-auto relative flex items-end bg-gray-50 border border-gray-200 rounded-3xl 
            transition-all duration-300 shadow-sm
            focus-within:bg-white focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-600/10
        `}>
            {/* Simple Attachment Button */}
            <button className="p-3 md:p-4 mb-1 text-gray-400 hover:text-blue-600 transition-colors">
                <Paperclip size={20} />
            </button>

            <textarea 
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none text-gray-800 placeholder:text-gray-400 focus:ring-0 text-sm py-4 md:py-5 px-1 md:px-2 resize-none max-h-[150px] custom-scrollbar leading-6" 
                placeholder="پیامی بنویسید..."
                rows={1}
                style={{ minHeight: '56px' }}
            />
            
            <div className="p-1.5 md:p-2 mb-1 md:mb-1.5">
                <button 
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className={`
                        p-2.5 md:p-3 rounded-2xl transition-all duration-300 flex items-center justify-center
                        ${inputValue.trim() 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-xl hover:-translate-y-0.5 active:scale-95' 
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
                    `}
                >
                    <Send size={18} className="rtl:rotate-180" />
                </button>
            </div>
        </div>
    );
};

interface CareerWindowProps {
  isSidebarOpen?: boolean;
  onOpenMobileSidebar?: () => void;
}

export const CareerWindow = ({ isSidebarOpen, onOpenMobileSidebar }: CareerWindowProps) => {
  const [step, setStep] = useState<'input' | 'analyzing' | 'result'>('input');
  const [jobTitle, setJobTitle] = useState("");
  const [messages, setMessages] = useState<{role: 'user'|'ai', content: string}[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [inputMessage]);

  const handleAnalyze = () => {
    if (!jobTitle) return;
    setStep('analyzing');
    setTimeout(() => {
      setStep('result');
      setMessages([{
        role: 'ai', 
        content: `بر اساس تحلیل رزومه شما برای موقعیت "${jobTitle}"، دانش فنی شما در React بسیار عالی است اما در زمینه تست‌نویسی و Docker نیاز به تقویت دارید.`
      }]);
    }, 2000);
  };

  const handleSendMessage = () => {
    if(!inputMessage.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: inputMessage }]);
    setInputMessage("");
    setTimeout(() => {
        setMessages(prev => [...prev, { role: 'ai', content: "برای بهبود مهارت Docker پیشنهاد می‌کنم ابتدا با کانتینر‌سازی اپ‌های ساده شروع کنید." }]);
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col h-full relative bg-white">
      


      <div className="flex-1 overflow-y-auto custom-scrollbar bg-white">
        
        {/* --- STEP 1: INPUT --- */}
        {step === 'input' && (
          <div className="flex flex-col items-center justify-center min-h-full p-6 animate-in fade-in zoom-in duration-500">
             <div className="text-center mb-8 max-w-lg space-y-3">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl mx-auto flex items-center justify-center mb-4 shadow-sm">
                    <Rocket size={32} />
                </div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">شکارچی شکاف‌های مهارتی</h1>
                <p className="text-gray-500 text-sm md:text-base">رزومه خود را آپلود کنید و عنوان شغلی هدف را وارد کنید.</p>
             </div>

             <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100">
                {/* File Upload Box */}
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all group">
                    <div className="p-3 bg-gray-50 rounded-full group-hover:bg-white group-hover:shadow-md transition-all">
                        <UploadCloud size={32} className="text-gray-400 group-hover:text-blue-500" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">آپلود رزومه (PDF)</span>
                </div>

                {/* Job Title Input */}
                <div className="mt-6 space-y-4">
                    <div>
                        <label className="text-xs font-bold text-gray-700 mr-1 mb-1.5 block">عنوان شغلی هدف</label>
                        <input 
                            type="text" 
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            placeholder="مثلا: Senior Frontend Developer" 
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        />
                    </div>
                    <button 
                        onClick={handleAnalyze}
                        disabled={!jobTitle}
                        className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                    >
                        شروع تحلیل <ArrowRight size={18} />
                    </button>
                </div>
             </div>
          </div>
        )}

        {/* --- STEP 2: LOADING --- */}
        {step === 'analyzing' && (
             <div className="flex flex-col items-center justify-center h-full space-y-6 animate-in fade-in">
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-[6px] border-gray-100 rounded-full"></div>
                    <div className="absolute inset-0 border-[6px] border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Target size={32} className="text-blue-600" />
                    </div>
                </div>
                <p className="text-gray-600 font-bold text-lg animate-pulse">در حال تحلیل...</p>
             </div>
        )}

        {/* --- STEP 3: RESULT DASHBOARD & CHAT --- */}
        {step === 'result' && (
            <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-700 pb-32">
                
                {/* Top Section: Analysis Cards */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Chart Card */}
                    <div className="md:col-span-7 bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <Layout size={18} className="text-gray-400" />
                                <h3 className="font-bold text-gray-800">نقشه مهارت‌های شما</h3>
                            </div>
                            <span className="text-xs bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg font-bold border border-emerald-100">امتیاز: ۸۵</span>
                        </div>
                        <SkillRadarChart />
                    </div>

                    {/* Action Items Card */}
                    <div className="md:col-span-5 bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                            <AlertCircle size={18} className="text-gray-400" />
                            <h3 className="font-bold text-gray-800">اقدامات ضروری</h3>
                        </div>
                        <div className="space-y-3 flex-1">
                            {[
                                { text: "یادگیری Docker Basics", urgent: true },
                                { text: "تست نویسی با Jest", urgent: true },
                                { text: "بهبود پروفایل لینکدین", urgent: false },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${item.urgent ? 'bg-red-100 text-red-500' : 'bg-blue-100 text-blue-500'}`}>
                                        {item.urgent ? <Target size={14} /> : <CheckCircle2 size={14} />}
                                    </div>
                                    <span className="text-sm text-gray-700 font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                        <button className="mt-4 w-full py-3.5 rounded-xl border-2 border-blue-50 text-blue-600 font-bold hover:bg-blue-50 transition-colors text-sm">
                            دریافت برنامه یادگیری
                        </button>
                    </div>
                </div>

                {/* Messages Section */}
                <div className="space-y-6 md:space-y-8">
                     <div className="flex items-center gap-2 text-gray-400 my-8">
                        <div className="h-px bg-gray-100 flex-1"></div>
                        <span className="text-xs font-bold uppercase tracking-wider">شروع گفتگو</span>
                        <div className="h-px bg-gray-100 flex-1"></div>
                     </div>

                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex items-start gap-2.5 md:gap-4 max-w-[90%] md:max-w-3xl ${msg.role === 'user' ? 'mr-auto flex-row-reverse' : ''}`}>
                            <div className={`
                                w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shrink-0 border overflow-hidden relative
                                ${msg.role === 'ai' ? 'bg-white shadow-sm border-gray-100 p-1.5' : 'bg-gray-100 border-gray-200'}
                            `}>
                                <Image src={msg.role === 'ai' ? "/main-logo.png" : "/avatar.png"} alt={msg.role} fill className="object-contain" />
                            </div>
                            
                            <div className={`space-y-1.5 flex flex-col ${msg.role === 'user' ? 'items-end' : ''}`}>
                                <span className="text-xs font-bold text-gray-700 mx-1">{msg.role === 'ai' ? 'هوش‌کد' : 'شما'}</span>
                                <div className={`
                                    text-sm md:text-base leading-7 p-4 md:p-5 rounded-3xl shadow-sm
                                    ${msg.role === 'ai' 
                                        ? 'bg-gray-50 border border-gray-100 text-gray-700 rounded-tr-none' 
                                        : 'bg-blue-600 text-white shadow-blue-600/20 rounded-tl-none'}
                                `}>
                                    {msg.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        )}
      </div>

      {/* Input Area (Only visible in result step) */}
      {step === 'result' && (
        <div className="p-3 md:p-6 border-t border-gray-100 bg-white sticky bottom-0 z-20">
            <ChatInput 
                inputValue={inputMessage}
                setInputValue={setInputMessage}
                handleSendMessage={handleSendMessage}
                handleKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
                textareaRef={textareaRef}
            />
            <p className="text-center text-[10px] text-gray-400 mt-3 font-medium opacity-60 hidden md:block">
                هوش مصنوعی ممکن است اشتباه کند.
            </p>
        </div>
      )}
    </div>
  );
};