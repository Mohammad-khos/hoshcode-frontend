import React from "react";
import { FolderOpen, FileJson, FileCode, ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export const FileSidebar = () => {
  return (
    <aside className="w-full h-full flex flex-col bg-white">
       
       {/* Tabs */}
       <div className="flex border-b border-gray-100">
           <button className="flex-1 py-4 text-xs font-bold text-primary border-b-2 border-primary bg-primary/5">
               فایل‌ها
           </button>
           <button className="flex-1 py-4 text-xs font-bold text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors">
               سرفصل‌ها
           </button>
       </div>

       {/* File Tree */}
       <div className="flex-1 overflow-y-auto py-4 space-y-1">
           <div className="px-5 pb-2 pt-1 flex items-center justify-between text-[10px] font-black text-gray-400 uppercase tracking-wider">
               <span>پروژه</span>
               <Plus size={14} className="cursor-pointer hover:text-primary transition-colors" />
           </div>

           {/* Items */}
           <div className="flex items-center gap-2 px-5 py-2 text-gray-600 hover:bg-gray-50 cursor-pointer">
               <FolderOpen size={16} className="text-yellow-500" />
               <span className="text-xs font-bold">src</span>
           </div>

           <div className="flex items-center gap-2 px-5 pr-9 py-2 bg-primary/5 text-primary border-r-2 border-primary cursor-pointer">
               <FileCode size={16} className="text-yellow-500" />
               <span className="text-xs font-bold">index.js</span>
           </div>

           <div className="flex items-center gap-2 px-5 pr-9 py-2 text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors group">
               <FileCode size={16} className="text-blue-400 group-hover:scale-110 transition-transform" />
               <span className="text-xs font-bold">style.css</span>
           </div>

           <div className="flex items-center gap-2 px-5 pr-9 py-2 text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors group">
               <FileCode size={16} className="text-orange-500 group-hover:scale-110 transition-transform" />
               <span className="text-xs font-bold">index.html</span>
           </div>
       </div>

       {/* Resources Footer */}
       <div className="p-4 border-t border-gray-100">
           <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
               <div className="flex items-center justify-between text-xs font-bold text-gray-700 mb-2">
                   <span>منابع کمکی</span>
                   <ChevronDown size={14} />
               </div>
               <div className="space-y-2">
                   <a href="#" className="flex items-center gap-2 text-[10px] text-gray-400 hover:text-primary transition-colors">
                       <FileJson size={12} />
                       MDN: متغیرهای JS
                   </a>
               </div>
           </div>
       </div>

    </aside>
  );
};