// src/app/dashboard/layout.tsx
import React from "react";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ساختار جدید: هدر در بالا، بدنه در پایین
  <>
      <Header />
    <div className="flex h-screen w-full flex-col overflow-hidden  my-22">
      
      {/* هدر سراسری (Top Navigation) */}
      
      <div className="flex flex-1 overflow-hidden">
        {/* سایدبار (Side Navigation) */}
        {/* <DashboardSidebar /> */}
        
        {/* محتوای اصلی */}
        <main className="flex-1 overflow-y-auto bg-muted/20 p-4 lg:p-10 scroll-smooth">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
      
    </div>
    <Footer/>
    </>
  );
}