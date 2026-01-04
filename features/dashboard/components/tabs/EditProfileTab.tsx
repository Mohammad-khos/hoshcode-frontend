// src/features/dashboard/components/tabs/EditProfileTab.tsx
import React from "react";
import { User, Mail, MapPin, Globe, Save } from "lucide-react";
import Button from "@/components/ui/Button";

export const EditProfileTab = () => {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm animate-fade-in">
      <h3 className="mb-6 text-lg font-bold text-foreground flex items-center gap-2">
        <User className="w-5 h-5 text-primary" />
        اطلاعات شخصی
      </h3>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-foreground">نام</span>
            <input className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" type="text" defaultValue="الکس" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-foreground">نام خانوادگی</span>
            <input className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" type="text" defaultValue="جانسون" />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
           <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-foreground">ایمیل</span>
            <div className="relative">
                <Mail className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input className="w-full rounded-lg border border-input bg-background pr-10 pl-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" type="email" defaultValue="alex@hoshcode.com" />
            </div>
          </label>
           <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-foreground">موقعیت مکانی</span>
             <div className="relative">
                <MapPin className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input className="w-full rounded-lg border border-input bg-background pr-10 pl-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" type="text" defaultValue="تهران، ایران" />
            </div>
          </label>
        </div>

        <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-foreground">درباره من (Bio)</span>
            <textarea rows={4} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" defaultValue="برنامه‌نویس فول‌استک با علاقه زیاد به ساخت اپلیکیشن‌های مقیاس‌پذیر..." />
        </label>
        
        <div className="border-t border-border pt-6 flex justify-end gap-3">
            <Button variant="outline" type="button">انصراف</Button>
            <Button variant="primary" type="button" className="gap-2">
                <Save className="w-4 h-4" />
                ذخیره تغییرات
            </Button>
        </div>
      </form>
    </div>
  );
};