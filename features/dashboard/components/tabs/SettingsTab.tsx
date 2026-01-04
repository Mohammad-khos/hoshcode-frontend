// src/features/dashboard/components/tabs/SettingsTab.tsx
import React from "react";
import { Bell, Lock, Globe, Moon } from "lucide-react";
import Button from "@/components/ui/Button";

export const SettingsTab = () => {
  return (
    <div className="space-y-6 animate-fade-in">
        
        {/* Security */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-foreground flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                امنیت و ورود
            </h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                    <div>
                        <p className="font-medium text-foreground text-sm">تغییر رمز عبور</p>
                        <p className="text-xs text-muted-foreground">آخرین تغییر: ۳ ماه پیش</p>
                    </div>
                    <Button variant="outline" size="sm">تغییر</Button>
                </div>
                 <div className="flex items-center justify-between py-2">
                    <div>
                        <p className="font-medium text-foreground text-sm">تایید دو مرحله‌ای</p>
                        <p className="text-xs text-muted-foreground">امنیت حساب خود را افزایش دهید</p>
                    </div>
                     <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted cursor-pointer">
                        <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                    </div>
                </div>
            </div>
        </div>

        {/* Preferences */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-foreground flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                تنظیمات اعلان‌ها
            </h3>
            <div className="space-y-3">
                 {['ایمیل‌های خبرنامه', 'اطلاع‌رسانی پاسخ منتور', 'پیشنهادات دوره جدید'].map((item, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-border/50 last:border-0 pb-3 last:pb-0">
                        <span className="text-sm text-foreground">{item}</span>
                        <input type="checkbox" defaultChecked className="accent-primary h-4 w-4 rounded border-gray-300" />
                    </div>
                 ))}
            </div>
        </div>
    </div>
  );
};