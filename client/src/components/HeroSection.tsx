/*
 * Hero Section — "The Authority" Design
 * Full-viewport hero with layered background, gold accents, and bilingual content
 */
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  lang: "en" | "ar";
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const isRTL = lang === "ar";
  const content = lang === "en"
    ? {
        title: "Tarek Salam",
        subtitle: "Life Insurance Leader & Digital Transformation Expert",
        description: "Branch Sales Manager at Suez Canal Life Insurance with 8+ years of experience in building high-performing insurance teams, driving sales growth, and implementing CRM digital transformation across Egypt.",
        cta1: "View Expertise",
        cta2: "Contact Me",
        badge: "Suez Canal Life Insurance",
      }
    : {
        title: "طارق سلام",
        subtitle: "رائد التأمين والتحول الرقمي",
        description: "مدير فرع بشركة قناة السويس لتأمينات الحياة بخبرة تزيد عن 8 سنوات في بناء فرق مبيعات متميزة وتطوير المبيعات وتنفيذ التحول الرقمي لأنظمة CRM في مصر.",
        cta1: "استكشف الخبرات",
        cta2: "تواصل معي",
        badge: "قناة السويس لتأمينات الحياة",
      };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/hero-bg_22ad4b54.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/70" />
      </div>

      {/* Gold Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-1.5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-gold-light text-sm font-medium">{content.badge}</span>
          </motion.div>

          {/* Title */}
          <h1 className={`font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight ${isRTL ? "font-arabic" : ""}`}>
            {content.title}
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gold-light font-light mb-6">
            {content.subtitle}
          </h2>

          {/* Description */}
          <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl">
            {content.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#expertise"
              className="bg-gold text-white font-semibold px-7 py-3.5 rounded-md hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              {content.cta1}
            </a>
            <a
              href="#contact"
              className="border border-white/30 text-white font-semibold px-7 py-3.5 rounded-md hover:bg-white/10 transition-all"
            >
              {content.cta2}
            </a>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl"
        >
          {[
            { value: "8+", label: lang === "en" ? "Years Experience" : "سنوات خبرة" },
            { value: "30+", label: lang === "en" ? "Advisors Trained" : "مستشار تم تدريبه" },
            { value: "4", label: lang === "en" ? "Managers Promoted" : "مدراء تمت ترقيتهم" },
            { value: "6+", label: lang === "en" ? "Years Leadership" : "سنوات قيادة" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gold font-display">{stat.value}</div>
              <div className="text-xs text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
