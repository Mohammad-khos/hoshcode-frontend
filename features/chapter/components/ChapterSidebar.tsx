// src/features/chapter/components/ChapterSidebar.tsx
import React from "react";
import { X } from "lucide-react";
import { ChapterItem } from "./ui/ChapterItem";

interface ChapterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChapterSidebar = ({ isOpen, onClose }: ChapterSidebarProps) => {
  return (
    <>
      {/* Backdrop for Mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
      />

      <aside
        className={`
            fixed top-0 bottom-0 right-0 z-50 w-[280px] bg-white lg:bg-transparent lg:static lg:w-80 lg:shrink-0 lg:block
            transition-transform duration-300 ease-out shadow-2xl lg:shadow-none border-l lg:border-l-0 border-gray-100
            ${isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="h-full w-full p-5 lg:p-0 overflow-y-auto lg:sticky lg:top-32 scrollbar-hide">
          {/* Header Mobile */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <span className="font-bold text-lg text-gray-800">فهرست محتوا</span>
            <button
              onClick={onClose}
              className="p-1 text-gray-500 hover:bg-gray-100 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-6 pb-20 lg:pb-0">
            <div>
              <h3 className="text-[11px] font-extrabold text-gray-400 uppercase mb-3 px-2 tracking-wider">
                فصل اول: معماری
              </h3>
              <div className="space-y-1">
                <ChapterItem
                  title="معماری کامپوننت‌ها"
                  duration="۱۰ دقیقه"
                  type="text"
                  isCompleted={true}
                />
                <ChapterItem
                  title="چرخه حیات (Lifecycle)"
                  duration="۱۵ دقیقه"
                  type="text"
                  isCompleted={true}
                />
              </div>
            </div>

            <div>
              <h3 className="text-[11px] font-extrabold text-gray-400 uppercase mb-3 px-2 tracking-wider">
                فصل دوم: هوک‌ها
              </h3>
              <div className="space-y-1">
                <ChapterItem
                  title="هوک‌های سفارشی (Custom Hooks)"
                  duration="۲۰ دقیقه"
                  type="code"
                  isActive={true}
                />
                <ChapterItem
                  title="بهینه‌سازی با useMemo"
                  duration="۱۲ دقیقه"
                  type="text"
                  isLocked={true}
                />
                <ChapterItem
                  title="مدیریت State پیشرفته"
                  duration="۲۵ دقیقه"
                  type="text"
                  isLocked={true}
                />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
