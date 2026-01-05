// src/features/dashboard/components/tabs/EditProfileTab.tsx
import React, { useState } from "react";
import { 
  User, Mail, Camera, Lock, Save, 
  AtSign, KeyRound, Check
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Minimal Input Component ---
interface MinimalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon: any;
    className?: string;
    helperText?: string;
}

const MinimalInput = ({ label, icon: Icon, className, helperText, ...props }: MinimalInputProps) => {
    return (
        <div className={cn("group", className)}>
            <label className="block text-xs font-bold text-gray-500 mb-2 mr-1">
                {label}
            </label>
            <div className="relative flex items-center">
                <div className="absolute right-4 text-gray-400 group-focus-within:text-primary transition-colors pointer-events-none">
                    <Icon size={18} />
                </div>
                <input 
                    {...props}
                    className={cn(
                        "w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pr-12 pl-4 text-sm font-bold text-gray-800 outline-none transition-all",
                        "focus:bg-white focus:border-primary/30 focus:shadow-[0_4px_20px_-2px_rgba(var(--primary),0.1)]",
                        "placeholder:text-gray-300",
                        props.disabled && "opacity-60 cursor-not-allowed bg-gray-100/50"
                    )}
                />
            </div>
            {helperText && (
                <p className="text-[10px] text-gray-400 mt-1.5 mr-1">{helperText}</p>
            )}
        </div>
    );
};

export const EditProfileTab = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="max-w-4xl mx-auto font-dana animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* --- Header --- */}
        <div className="mb-8">
            <h2 className="text-xl font-black text-gray-900">اطلاعات حساب کاربری</h2>
            <p className="text-xs text-gray-400 font-medium mt-1">مشخصات پایه‌ای که در هوش‌کد ثبت کرده‌اید</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* --- 1. Profile Picture Section (Center/Left) --- */}
            <div className="md:col-span-4 flex flex-col items-center">
                <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm w-full flex flex-col items-center text-center">
                    
                    <div className="relative mb-6 group cursor-pointer">
                        <div className="w-40 h-40 rounded-[2rem] bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden transition-all group-hover:border-primary/50 group-hover:bg-primary/5">
                            {/* Placeholder Avatar */}
                            <span className="text-5xl font-black text-gray-300 group-hover:text-primary/50 transition-colors">MK</span>
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-[1px] rounded-[2rem]">
                                <Camera size={28} className="mb-2" />
                                <span className="text-xs font-bold">تغییر عکس</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full space-y-2">
                        <button className="w-full py-3 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-gray-800 transition-colors">
                            آپلود تصویر جدید
                        </button>
                        <button className="w-full py-3 rounded-xl text-xs font-bold text-red-500 hover:bg-red-50 transition-colors">
                            حذف تصویر
                        </button>
                    </div>
                </div>
            </div>

            {/* --- 2. Basic Info Form (Right) --- */}
            <div className="md:col-span-8 space-y-6">
                
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        {/* Full Name */}
                        <div className="sm:col-span-2">
                             <MinimalInput 
                                label="نام کامل" 
                                defaultValue="محمدمهدی خسروی" 
                                icon={User}
                                placeholder="مثلا: علی محمدی"
                             />
                        </div>

                        {/* Username */}
                        <MinimalInput 
                            label="نام کاربری" 
                            defaultValue="mm_khosravi" 
                            icon={AtSign}
                            dir="ltr"
                            className="text-left"
                            helperText="نام کاربری باید انگلیسی و یکتا باشد."
                        />

                        {/* Email (Disabled) */}
                        <MinimalInput 
                            label="ایمیل (غیرقابل تغییر)" 
                            defaultValue="mahdi.khosravi@gmail.com" 
                            icon={Mail}
                            type="email"
                            dir="ltr"
                            disabled
                            className="text-left"
                        />
                    </div>
                </div>

                {/* --- 3. Password Section --- */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                            <KeyRound size={24} />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-gray-900">رمز عبور</h3>
                            <p className="text-[10px] text-gray-400 mt-1">آخرین تغییر: ۲ ماه پیش</p>
                        </div>
                    </div>
                    
                    <button className="px-5 py-3 rounded-xl border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors w-full sm:w-auto">
                        تغییر رمز عبور
                    </button>
                </div>

                {/* --- Action Buttons --- */}
                <div className="flex justify-end pt-4">
                     <button 
                        onClick={handleSave}
                        disabled={isLoading}
                        className="relative overflow-hidden px-12 py-4 rounded-2xl bg-primary text-primary-foreground text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed min-w-[160px]"
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>صبر کنید...</span>
                            </span>
                        ) : (
                            <>
                                <Save size={18} />
                                <span>ذخیره اطلاعات</span>
                            </>
                        )}
                    </button>
                </div>

            </div>
        </div>
    </div>
  );
};