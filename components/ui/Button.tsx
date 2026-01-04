// src/components/ui/Button.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // وریانت 'cta' اضافه شد برای دکمه‌های سبز (فروش/شروع)
  variant?: "primary" | "cta" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean; // برای حالت لودینگ
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          // Base Styles: فونت دانا، گردی استاندارد، ترنزیشن نرم
          "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
          
          {
            /* 1. CTA (Call to Action) -> سبز رشد (Growth Emerald)
               مهم‌ترین دکمه صفحه. سایه سبز دارد و در هاور کمی بالا می‌پرد.
            */
            "bg-action-600 text-white shadow-lg shadow-action-500/25 hover:bg-action-500 hover:-translate-y-0.5 hover:shadow-action-500/40": 
              variant === "cta",

            /* 2. Primary -> آبی برند (Finca Indigo)
               برای دکمه‌های استاندارد مثل "ورود"، "جستجو"، "ارسال".
            */
            "bg-brand-600 text-white shadow-md shadow-brand-600/20 hover:bg-brand-700 hover:shadow-brand-600/30": 
              variant === "primary",
            
            /* 3. Secondary -> آبی یخی (Soft Blue)
               به جای طوسی، از آبی خیلی کمرنگ استفاده کردیم تا حس پریمیوم بدهد.
            */
            "bg-brand-50 text-brand-700 hover:bg-brand-100 hover:text-brand-800 border border-brand-100": 
              variant === "secondary",
            
            /* 4. Outline -> بوردر دار
               برای دکمه‌های کم‌اهمیت‌تر.
            */
            "border-2 border-gray-200 bg-transparent text-gray-600 hover:border-brand-300 hover:text-brand-600": 
              variant === "outline",
            
            /* 5. Ghost -> بدون پس‌زمینه
               برای لینک‌های منو.
            */
            "text-gray-600 hover:bg-brand-50 hover:text-brand-700": 
              variant === "ghost",

            /* 6. Danger -> قرمز
               برای حذف و خروج.
            */
             "bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border border-red-100":
              variant === "danger",
          },
          
          // Sizing
          {
            "h-9 px-4 text-xs": size === "sm",
            "h-11 px-6 text-sm": size === "md",      // ارتفاع استاندارد کمی بلندتر شد (44px)
            "h-14 px-8 text-base": size === "lg",    // دکمه‌های بزرگ برای هدر
            "h-10 w-10 p-0": size === "icon",        // برای دکمه‌های آیکون‌دار
          },
          className
        )}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span className="opacity-70">{children}</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default React.memo(Button);