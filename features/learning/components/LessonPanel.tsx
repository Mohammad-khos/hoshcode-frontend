import React from "react";
import { BookOpen, Clock, Lightbulb } from "lucide-react";

export const LessonPanel = () => {
  return (
    <section className="flex-1 bg-white border-l border-gray-100 flex flex-col overflow-hidden min-w-[350px]">
        
        {/* Header */}
        <div className="h-12 border-b border-gray-100 flex items-center justify-between px-6 bg-white sticky top-0 z-10">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                <BookOpen size={16} />
                <span>محتوای آموزشی</span>
            </div>
            <div className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                <Clock size={12} />
                زمان مطالعه: ۱۰ دقیقه
            </div>
        </div>

        {/* Content (Prose) */}
        <div className="flex-1 overflow-y-auto p-8 pb-32 font-dana leading-loose">
            
            <span className="inline-block px-3 py-1 rounded-full bg-action-600 text-white text-[10px] font-black mb-4">
                مفهوم پایه
            </span>
            
            <h1 className="text-3xl font-black text-gray-900 mb-6">تعریف متغیرها (Variables)</h1>
            
            <p className="text-gray-600 mb-6 text-justify">
                در جاوااسکریپت، متغیرها مثل جعبه‌هایی هستند که می‌توانیم اطلاعات را در آن‌ها ذخیره کنیم. درک تفاوت بین <code className="bg-gray-100 px-1 rounded text-red-500 font-mono text-sm">let</code>، <code className="bg-gray-100 px-1 rounded text-red-500 font-mono text-sm">const</code> و <code className="bg-gray-100 px-1 rounded text-red-500 font-mono text-sm">var</code> اولین قدم برای نوشتن کد تمیز است.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-primary/10 text-primary flex items-center justify-center text-xs">1</span>
                تکامل متغیرها
            </h3>
            
            <p className="text-gray-600 mb-6 text-justify">
                در گذشته فقط از <code className="dir-ltr inline-block">var</code> استفاده می‌شد. اما در نسخه ES6 دو کلمه کلیدی قدرتمند جدید معرفی شدند:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-2 mb-2 text-primary font-bold text-sm">
                        const
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">زمانی استفاده کنید که مقدار متغیر هرگز تغییر نمی‌کند (ثابت است).</p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-2 mb-2 text-blue-500 font-bold text-sm">
                        let
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">زمانی استفاده کنید که مقدار متغیر در طول برنامه تغییر می‌کند.</p>
                </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-4">ماموریت شما</h3>
            <p className="text-gray-600 mb-4">
                ما نیاز داریم وضعیت اولیه اپلیکیشن هوش‌کد را تنظیم کنیم. لطفا یک متغیر جدید به نام <code className="bg-gray-100 px-1 rounded text-red-500 font-mono text-sm">greeting</code> بسازید.
            </p>

            <div className="p-4 rounded-2xl bg-yellow-50 border border-yellow-100 flex gap-3 items-start">
                <Lightbulb className="text-yellow-500 shrink-0 mt-0.5" size={20} />
                <div className="text-xs text-yellow-800 leading-relaxed">
                    <strong className="block mb-1 font-bold">نکته حرفه‌ای:</strong>
                    اگرچه <code className="font-mono">const</code> ترجیح داده می‌شود، اما اینجا چون می‌خواهیم بعداً پیام خوش‌آمدگویی را تغییر دهیم، از <code className="font-mono">let</code> استفاده کنید.
                </div>
            </div>

        </div>
    </section>
  );
};