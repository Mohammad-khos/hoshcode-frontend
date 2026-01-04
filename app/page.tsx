// src/app/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/features/landing/components/Hero";
import Stats from "@/features/landing/components/Stats";
import FeaturesGrid from "@/features/landing/components/FeaturesGrid";
import TrendingCourses from "@/features/landing/components/TrendingCourses";
import Testimonial from "@/features/landing/components/Testimonial";
import CTASection from "@/features/landing/components/CTASection";

// این صفحه به طور پیش‌فرض Server Component است و برای سئو عالی است.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Header />
      
      {/* Landing Page Sections */}
      <Hero />
      <Stats />
      <FeaturesGrid />
      <TrendingCourses />
      <Testimonial />
      <CTASection />
      
      <Footer />
    </main>
  );
}