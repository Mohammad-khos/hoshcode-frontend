import React from "react";
import { CheckCircle2, Lock, PlayCircle, FileText } from "lucide-react";

interface ChapterItemProps {
  title: string;
  duration: string;
  type?: 'video' | 'text' | 'code';
  isActive?: boolean;
  isCompleted?: boolean;
  isLocked?: boolean;
}

export const ChapterItem = ({ title, duration, type, isActive, isCompleted, isLocked }: ChapterItemProps) => {
  return (
    <div className={`group flex items-center gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer mb-2
      ${isActive 
        ? 'bg-primary text-white  ' 
        : 'bg-white border-gray-100 text-gray-600 hover:border-gray-200 hover:bg-gray-50'
      }
      ${isLocked ? 'opacity-60 pointer-events-none' : ''}
    `}>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border 
        ${isActive ? 'border-white/30 bg-white/20' : 'border-gray-200 bg-gray-100'}`}>
        {isCompleted ? <CheckCircle2 size={14} className={isActive ? "text-white" : "text-emerald-500"} /> : 
         isLocked ? <Lock size={12} /> : 
         type === 'video' ? <PlayCircle size={14} /> : <FileText size={14} />}
      </div>
      
      <div className="flex flex-col flex-1 min-w-0">
        <span className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </span>
        <span className={`text-[10px] ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
          {duration}
        </span>
      </div>
    </div>
  );
};