/*
 * Home Page — "The Authority" Design
 * Main landing page with all sections, bilingual, SEO-optimized
 */
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SocialProofSection from "@/components/SocialProofSection";
import AchievementsSection from "@/components/AchievementsSection";
import BlogSection from "@/components/BlogSection";
import InsightsSection from "@/components/InsightsSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

function HomePage() {
  const { lang, setLang, isRTL } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = isRTL ? "ar" : "en";
  }, [isRTL]);

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <SocialProofSection lang={lang} />
      <ExpertiseSection lang={lang} />
      <AchievementsSection lang={lang} />
      <BlogSection lang={lang} />
      <NewsletterSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}
