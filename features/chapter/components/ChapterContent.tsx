// src/features/chapter/components/ChapterContent.tsx
import React from "react";
import Button from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { CodeBlock } from "./ui/CodeBlock";
import { Callout } from "./ui/Callout";
import { Snippet1, Snippet2, Snippet3 } from "../data/snippets"; 

export const ChapterContent = () => {
  return (
    // تغییر: پدینگ کمتر و گردی کمتر در موبایل
    <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-12 border border-gray-100 shadow-sm">
      
      {/* Content Header */}
      <div className="mb-8 md:mb-10 border-b border-gray-100 pb-6 md:pb-8">
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
          <span className="text-[10px] font-bold text-white bg-action-600 px-2.5 py-1 rounded-full">
            فصل دوم
          </span>
          <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
            سطح متوسط
          </span>
        </div>
        
        {/* تغییر: سایز فونت در موبایل کوچکتر شده */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-3 md:mb-4">
          جادوی انتزاع با Custom Hooks
        </h1>
        <p className="text-sm md:text-lg text-gray-500 leading-relaxed max-w-3xl">
          چگونه با ساخت هوک‌های اختصاصی، کدهای اسپاگتی را به ماژول‌های تمیز، قابل تست و با قابلیت استفاده مجدد تبدیل کنیم.
        </p>
      </div>

      {/* Body Text */}
      <article className="prose prose-sm md:prose-lg prose-gray max-w-none text-gray-700">
        <p className="leading-8 md:leading-9 text-justify mb-6">
          یکی از بزرگترین مشکلات در توسعه اپلیکیشن‌های ری‌اکت، <strong>تکرار منطق (Logic Duplication)</strong> است. تصور کنید در ۵ کامپوننت مختلف نیاز دارید دیتایی را از سرور بگیرید، وضعیت Loading را نمایش دهید و اگر خطایی رخ داد، پیام خطا نشان دهید.
        </p>

        <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
          <span className="w-1 h-5 md:h-6 bg-action-600 rounded-full"></span>
          صورت مسئله: کدهای تکراری
        </h3>
        <p className="leading-8 md:leading-9 text-justify">
          کد زیر را ببینید. منطق Fetching مستقیماً در کامپوننت نوشته شده و آن را شلوغ کرده است:
        </p>

        <div className="not-prose -mx-2 md:mx-0">
          <CodeBlock title="UserProfile.jsx (Dirty)">
            <Snippet1 />
          </CodeBlock>
        </div>

        <p className="leading-8 md:leading-9 text-justify mt-6">
          برای حل این مشکل، ما منطق را در یک فایل جداگانه کپسوله می‌کنیم.
        </p>

        <div className="-mx-2 md:mx-0">
            <Callout type="tip" title="قانون طلایی هوک‌ها">
            نام هوک‌های سفارشی شما <strong>باید</strong> با کلمه کلیدی <code>use</code> شروع شود. این قرارداد به React اجازه می‌دهد تا قوانین هوک‌ها را بررسی کند.
            </Callout>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-5 md:h-6 bg-emerald-500 rounded-full"></span>
          راه حل: ساخت هوک useFetch
        </h3>
        <p className="leading-8 md:leading-9 text-justify">
          در اینجا هوک <code>useFetch</code> را می‌سازیم:
        </p>

        <div className="not-prose -mx-2 md:mx-0">
          <CodeBlock title="hooks/useFetch.js">
            <Snippet2 />
          </CodeBlock>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-10 mb-4">نحوه استفاده نهایی</h3>
        <div className="not-prose -mx-2 md:mx-0">
          <CodeBlock title="UserProfile.jsx (Clean)">
            <Snippet3 />
          </CodeBlock>
        </div>

        <div className="-mx-2 md:mx-0">
            <Callout type="warning" title="هشدار پرفورمنس">
            هوک‌های سفارشی دقیقاً مثل کامپوننت‌ها با هر بار تغییر State یا Props دوباره اجرا می‌شوند.
            </Callout>
        </div>

      </article>

      {/* Footer Navigation - تغییر: دکمه‌ها در موبایل ستونی می‌شوند */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-gray-100">
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all text-sm">
          <ChevronRight size={18} />
          درس قبلی: چرخه حیات
        </button>
        
        <Button className="w-full sm:w-auto h-12 px-8 rounded-xl shadow-lg shadow-action-600/20 text-sm font-bold">
          درس بعدی: بهینه‌سازی
          <ChevronLeft size={18} className="mr-2" />
        </Button>
      </div>

    </div>
  );
};