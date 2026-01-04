// src/app/ai-mentor/page.tsx
import React from "react";
import { ChatSidebar } from "@/features/ai-mentor/components/ChatSidebar";
import { ChatWindow } from "@/features/ai-mentor/components/ChatWindow";
import { ContextPanel } from "@/features/ai-mentor/components/ContextPanel";

export default function AIMentorPage() {
  return (
    // ارتفاع صفحه را ثابت می‌کنیم (h-screen) تا اسکرول داخلی کار کند
    <div className="flex h-screen w-full overflow-hidden bg-background">
      
      {/* 1. Sidebar (Left) */}
      <ChatSidebar />
      
      {/* 2. Main Chat (Center) */}
      <ChatWindow />
      
      {/* 3. Context Panel (Right - in RTL it will be visually Left if logic is not mirrored, but flex order handles it) */}
      {/* نکته: در حالت RTL، اگر بخواهید سایدبار "راست" (Context) در سمت چپ صفحه بیفتد (مثل طرح انگلیسی که سمت راست بود)، ترتیب فلکس درست است. */}
      {/* اما اگر می‌خواهید در RTL، پنل Context سمت "چپ" باشد (که منطقی است)، باید در کد JSX اول بیاید یا از order استفاده کنید. */}
      {/* در اینجا ما ترتیب استاندارد DOM را حفظ می‌کنیم. در RTL خود به خود جاها برعکس می‌شود. */}
      {/* ChatSidebar (راست در RTL) | ChatWindow (وسط) | ContextPanel (چپ در RTL) */}
      <ContextPanel />
      
    </div>
  );
}