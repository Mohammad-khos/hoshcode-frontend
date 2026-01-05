// src/features/chapter/components/ui/CodeBlock.tsx
import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

export const CodeBlock = ({ children, title }: { children: React.ReactNode, title?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // تغییر: max-w-[85vw] یا max-w-full برای موبایل
    <div className="my-6 md:my-8 rounded-xl md:rounded-2xl overflow-hidden bg-[#1E1E1E] text-[#D4D4D4] font-mono text-[11px] md:text-[13px] leading-5 md:leading-6 border border-gray-800 shadow-xl dir-ltr text-left relative max-w-full">
      
      {/* Header */}
      <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 bg-[#252526] border-b border-[#1E1E1E]">
        <div className="flex items-center gap-2 md:gap-3">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27C93F]" />
            </div>
            {title && (
                <span className="ml-2 text-[10px] md:text-xs text-gray-400 font-medium font-sans opacity-80 truncate max-w-[150px]">
                    {title}
                </span>
            )}
        </div>
        <button onClick={handleCopy} className="text-xs text-gray-500 hover:text-white transition-colors p-1">
            {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
        </button>
      </div>
      
      {/* Content */}
      <div className="p-3 md:p-5 overflow-x-auto custom-scrollbar">
        <pre className="font-mono" dir="ltr">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
};