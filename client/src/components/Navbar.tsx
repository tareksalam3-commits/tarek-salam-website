/*
 * Navbar Component — "The Authority" Design
 * Clean, professional navigation with scroll-aware background
 * Bilingual: English + Arabic language toggle
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  lang: "en" | "ar";
  setLang: (lang: "en" | "ar") => void;
}

const navItems = {
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Achievements", href: "#achievements" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ],
  ar: [
    { label: "الرئيسية", href: "#home" },
    { label: "نبذة عني", href: "#about" },
    { label: "الخبرات", href: "#expertise" },
    { label: "الإنجازات", href: "#achievements" },
    { label: "المقالات", href: "#insights" },
    { label: "تواصل", href: "#contact" },
  ],
};

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isRTL = lang === "ar";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <nav className="container flex items-center justify-between py-4 lg:py-5">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/manus-storage/logo-mark_04159213.png"
            alt="Tarek Salam Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col">
            <span className={`font-display text-lg font-bold tracking-tight transition-colors ${scrolled ? "text-navy" : "text-white"}`}>
              Tarek Salam
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${scrolled ? "text-gold" : "text-gold-light"}`}>
              {lang === "en" ? "Insurance Leader" : "رائد التأمين"}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems[lang].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? "text-[var(--foreground)]" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Language Toggle + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className={`text-sm font-medium px-3 py-1.5 rounded-md border transition-all ${
              scrolled
                ? "border-navy/20 text-navy hover:bg-navy/5"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            {lang === "en" ? "عربي" : "English"}
          </button>
          <a
            href="#contact"
            className="bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
          >
            {lang === "en" ? "Get in Touch" : "تواصل معي"}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${scrolled ? "text-navy" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-border"
            dir={isRTL ? "rtl" : "ltr"}
          >
            <div className="container py-6 flex flex-col gap-4">
              {navItems[lang].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[var(--foreground)] font-medium py-2 hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <button
                  onClick={() => { toggleLang(); setMobileOpen(false); }}
                  className="text-sm font-medium px-4 py-2 rounded-md border border-navy/20 text-navy"
                >
                  {lang === "en" ? "عربي" : "English"}
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-md"
                >
                  {lang === "en" ? "Get in Touch" : "تواصل معي"}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
