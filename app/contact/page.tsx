// src/app/contact/page.tsx
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display">
      <Header />
      
      <main className="py-16 md:py-24">
        <div className="container-custom">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-foreground">با ما در ارتباط باشید</h1>
            <p className="text-muted-foreground text-lg">
              سوالی دارید؟ پیشنهادی برای بهبود دارید؟ یا فقط می‌خواهید سلام کنید؟
              <br />تیم پشتیبانی ما همیشه آماده پاسخگویی به شماست.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-card border border-border rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-xl">
            
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-10 relative z-10">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">اطلاعات تماس</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  می‌توانید از طریق راه‌های ارتباطی زیر به صورت مستقیم با ما تماس بگیرید یا به دفتر ما مراجعه کنید.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">ایمیل</h4>
                    <p className="text-muted-foreground text-sm mt-1">support@hoshcode.com</p>
                    <p className="text-muted-foreground text-sm">careers@hoshcode.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">تلفن</h4>
                    <p className="text-muted-foreground text-sm mt-1">۰۲۱-۱۲۳۴۵۶۷۸</p>
                    <p className="text-muted-foreground text-sm">شنبه تا چهارشنبه، ۹ تا ۱۷</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">دفتر مرکزی</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      تهران، خیابان آزادی، ناحیه نوآوری شریف،<br />
                      ساختمان هوش کد، طبقه ۴
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-8 border-t border-border">
                <h5 className="font-bold text-sm mb-4 text-foreground">شبکه‌های اجتماعی</h5>
                <div className="flex gap-4">
                  {['twitter', 'github', 'instagram', 'linkedin'].map((social) => (
                    <a key={social} href="#" className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                      <span className="capitalize text-xs">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7 bg-background/50 rounded-2xl p-6 md:p-8 border border-border">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">نام و نام خانوادگی</label>
                    <input type="text" className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground" placeholder="مثلاً: علی محمدی" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">ایمیل</label>
                    <input type="email" className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground" placeholder="ali@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">موضوع پیام</label>
                  <select className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground">
                    <option>پیشنهاد و انتقاد</option>
                    <option>پشتیبانی فنی</option>
                    <option>مشاوره دوره</option>
                    <option>همکاری تجاری</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">متن پیام</label>
                  <textarea rows={5} className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground resize-none" placeholder="پیام خود را اینجا بنویسید..."></textarea>
                </div>

                <Button variant="primary" className="w-full h-12 text-base font-bold shadow-lg shadow-primary/20">
                  <MessageCircle className="w-5 h-5 ml-2 rtl:rotate-0" />
                  ارسال پیام
                </Button>
              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}