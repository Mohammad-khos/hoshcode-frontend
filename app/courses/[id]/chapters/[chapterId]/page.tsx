"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChapterHeader } from "@/features/chapter/components/ChapterHeader";
import { ChapterSidebar } from "@/features/chapter/components/ChapterSidebar";
import { ChapterContent } from "@/features/chapter/components/ChapterContent";

export default function ChapterPage({ params }: { params: { id: string, chapterId: string } }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-[#F8F9FB] text-gray-900 font-dana my-22 md:mt-28 mb-12">
        <main className="container mx-auto px-4 md:px-6">
          
          <ChapterHeader 
            courseId={params.id} 
            toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} 
          />

          <div className="flex flex-col lg:flex-row gap-8 items-start relative">
            <ChapterSidebar 
              isOpen={isSidebarOpen} 
              onClose={() => setSidebarOpen(false)} 
            />
            
            <div className="flex-1 w-full min-w-0">
              <ChapterContent />
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </>
  );
}