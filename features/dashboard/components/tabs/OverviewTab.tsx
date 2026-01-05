// src/features/dashboard/components/tabs/OverviewTab.tsx
import React from "react";
import { 
  Flame, CheckCircle, MoreHorizontal, 
  Play, LayoutDashboard, Code2, Zap, 
  BookOpen, BrainCircuit, Terminal, 
  FileText, MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Components ---

// 1. Activity Bar (تراکم مطالعه و کدنویسی)
const ActivityBar = ({ height, active, day, tooltip }: { height: string, active?: boolean, day: string, tooltip: string }) => (
    <div className="flex flex-col items-center gap-2 group cursor-default relative w-full">
        <div className="relative w-full max-w-[30px] h-24 bg-gray-50 rounded-xl flex items-end overflow-hidden">
            <div 
                className={cn(
                    "w-full transition-all duration-500 ease-out min-h-[4px]", 
                    active ? "bg-primary opacity-100" : "bg-gray-300 opacity-40 group-hover:opacity-60"
                )}
                style={{ height }} 
            />
        </div>
        <span className={cn("text-[10px] font-bold", active ? "text-gray-900" : "text-gray-300")}>
            {day}
        </span>
        
        {/* Tooltip */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-lg">
            {tooltip}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
    </div>
);

// 2. Text-Based Course Item (فوکوس روی "مطالعه" و "تمرین")
const CourseItem = ({ title, section, type, progress, icon: Icon, isLast, colorClass }: any) => (
    <div className={cn(
        "flex items-center gap-4 py-4 group cursor-pointer hover:bg-gray-50/50 -mx-4 px-4 transition-colors rounded-xl",
        !isLast && "border-b border-gray-100"
    )}>
        {/* Icon based on Course Type */}
        <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center transition-all border border-transparent group-hover:bg-white group-hover:shadow-sm group-hover:border-gray-100",
            colorClass
        )}>
            <Icon size={20} strokeWidth={1.5} className="opacity-80 group-hover:opacity-100" />
        </div>
        
        {/* Info */}
        <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-gray-900 text-sm truncate">{title}</h4>
                <div className="flex items-center gap-1.5 bg-white border border-gray-100 px-2 py-0.5 rounded-md shadow-sm">
                    {type === 'read' ? <FileText size={10} className="text-gray-400"/> : <Terminal size={10} className="text-gray-400"/>}
                    <span className="text-[10px] font-bold text-gray-500">
                        {progress}%
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${progress}%` }} />
                </div>
                <span className="text-[10px] text-gray-400 truncate max-w-[150px] dir-ltr text-right font-medium">{section}</span>
            </div>
        </div>

        {/* Action: "Continue Reading" instead of Play */}
        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors" title="ادامه مطالعه">
            {type === 'read' ? <BookOpen size={14} /> : <Code2 size={14} />}
        </button>
    </div>
);

// 3. Stat Box (متریک‌های هوش‌کد)
const StatBox = ({ label, value, sub, icon: Icon }: any) => (
    <div className="bg-white rounded-[2rem] p-5 border border-gray-100 flex flex-col justify-between h-32 hover:border-gray-200 hover:shadow-sm transition-all group">
        <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-gray-400">{label}</span>
            <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-gray-900 transition-colors">
                <Icon size={16} />
            </div>
        </div>
        <div>
            <p className="text-2xl font-black text-gray-900 tracking-tight dir-ltr text-right">{value}</p>
            {sub && (
                <p className="text-[10px] text-gray-400 font-medium mt-1 dir-ltr w-fit ml-auto">
                    {sub}
                </p>
            )}
        </div>
    </div>
);


export const OverviewTab = () => {
  return (
    <div className="space-y-6 font-dana animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* --- Header --- */}
        <div className="flex items-end justify-between pb-2">
            <div>
                <h2 className="text-xl font-black text-gray-900">میز کار آموزشی</h2>
                <p className="text-xs text-gray-400 font-medium mt-1">امروز ۱۴ اسفند • ادامه یادگیری مسیر "فرانت‌اند مستر"</p>
            </div>
  
        </div>

        {/* --- Top Row: Stats & Analysis --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Stats (Left - 4 Cols) */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
               <div className="grid grid-cols-2 gap-4">
                   {/* Stat 1: AI Help */}
                   <StatBox 
                        label="تعامل با AI" 
                        value="48" 
                        sub="سوال و دیباگ" 
                        icon={MessageSquare} 
                   />
                   {/* Stat 2: Practical Exercises */}
                   <StatBox 
                        label="تمرین حل شده" 
                        value="12" 
                        sub="این هفته" 
                        icon={Terminal} 
                   />
               </div>
               
               {/* Streak Card (Reading Streak) */}
               <div className="bg-gray-900 text-white rounded-[2rem] p-6 flex items-center justify-between relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform shadow-xl shadow-gray-900/10">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10" />
                   <div className="relative z-10">
                       <div className="flex items-center gap-2 mb-2 text-gray-400">
                           <Flame size={18} className="text-orange-400 fill-orange-400" />
                           <span className="text-xs font-bold">زنجیره مطالعه</span>
                       </div>
                       <p className="text-4xl font-black tracking-tight dir-ltr text-right">5 <span className="text-lg opacity-50 font-medium">روز</span></p>
                       <p className="text-[10px] text-gray-500 mt-1">مطالعه روزانه: حداقل ۱۵ دقیقه</p>
                   </div>
                   <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white transition-all">
                       <Zap size={20} />
                   </div>
               </div>
            </div>

            {/* Reading/Coding Activity Chart (Right - 8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 border border-gray-100 flex flex-col justify-between shadow-[0_20px_40px_-15px_rgba(0,0,0,0.02)]">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="font-bold text-gray-900">نمودار یادگیری</h3>
                        <p className="text-[10px] text-gray-400 mt-0.5">ترکیب مطالعه متنی و حل تمرین</p>
                    </div>
                    {/* Legend */}
                    <div className="flex gap-3">
                         <div className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-[10px] text-gray-400 font-bold">مطالعه</span>
                         </div>
                    </div>
                </div>
                
                {/* Bar Chart (Data: Minutes spent reading/coding) */}
                <div className="flex items-end justify-between gap-3 h-full px-2 pb-2">
                    <ActivityBar height="30%" day="ش" tooltip="۳۰ دقیقه مطالعه" />
                    <ActivityBar height="55%" day="ی" tooltip="۵۵ دقیقه (۲۰ تمرین)" />
                    <ActivityBar height="20%" day="د" tooltip="۲۰ دقیقه مرور" />
                    <ActivityBar height="85%" day="س" tooltip="۹۰ دقیقه مطالعه عمیق" />
                    <ActivityBar height="40%" day="چ" tooltip="۴۰ دقیقه" />
                    <ActivityBar height="10%" day="پ" tooltip="۱۰ دقیقه" />
                    <ActivityBar height="60%" day="ج" tooltip="۶۰ دقیقه تمرین" active />
                </div>
            </div>

        </div>

        {/* --- Bottom Row: Text Courses & AI Challenge --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Text-Based Courses List (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.02)]">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-900">دوره‌های در حال مطالعه</h3>
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-lg">
                        متنی و تعاملی
                    </span>
                </div>
                
                <div className="flex flex-col">
                    <CourseItem 
                        title="مستندات جامع React" 
                        section="بخش ۳: مدیریت State پیشرفته" 
                        type="read" // Text based
                        progress={45} 
                        icon={BookOpen}
                        colorClass="bg-blue-50 text-blue-600"
                    />
                    <CourseItem 
                        title="چالش‌های الگوریتمی پایتون" 
                        section="تمرین ۲۴: درخت‌های باینری" 
                        type="code" // Coding based
                        progress={82} 
                        icon={Terminal} 
                        colorClass="bg-yellow-50 text-yellow-600"
                    />
                     <CourseItem 
                        title="راهنمای طراحی سیستم (System Design)" 
                        section="فصل ۱: Load Balancing" 
                        type="read"
                        progress={12} 
                        icon={LayoutDashboard} 
                        colorClass="bg-purple-50 text-purple-600"
                        isLast
                    />
                </div>
            </div>

            {/* AI Suggestion / Next Step (5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-[2.5rem] p-8 border border-gray-100 flex flex-col relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.02)]">
                <div className="flex justify-between items-center mb-6 relative z-10">
                    <h3 className="font-bold text-gray-900">پیشنهاد هوش مصنوعی</h3>
                    <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center animate-pulse">
                        <BrainCircuit size={16} />
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-4 relative z-10">
                    {/* AI Chat Bubble Visual */}
                    <div className="bg-gray-50 rounded-2xl rounded-tr-sm p-4 border border-gray-100 relative">
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                            «سلام محمدمهدی! بر اساس عملکردت در بخش "React"، به نظر میاد مفهوم <span className="text-indigo-600 font-bold bg-indigo-50 px-1 rounded">useReducer</span> نیاز به تمرین بیشتری داره. یه مقاله کوتاه و یک تمرین برات آماده کردم.»
                        </p>
                    </div>

                    <div className="flex items-center gap-3 mt-2">
                        <div className="flex-1 h-px bg-gray-100" />
                        <span className="text-[10px] text-gray-400 font-bold">زمان تخمینی: ۱۰ دقیقه</span>
                        <div className="flex-1 h-px bg-gray-100" />
                    </div>
                </div>
                
                <button className="w-full py-4 rounded-2xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors mt-auto shadow-lg shadow-indigo-600/20 relative z-10 flex items-center justify-center gap-2 group">
                    <BookOpen size={14} />
                    <span>شروع مطالعه پیشنهادی</span>
                </button>

                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/20" />
            </div>

        </div>

    </div>
  );
};