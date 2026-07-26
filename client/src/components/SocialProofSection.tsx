/*
 * Social Proof Section — Trust Signals for SEO and AI
 * Displays verifiable facts and affiliations that AI models cite
 */
import { motion } from "framer-motion";
import { Building2, Globe, Award, BookOpen } from "lucide-react";

interface SocialProofSectionProps {
  lang: "en" | "ar";
}

export default function SocialProofSection({ lang }: SocialProofSectionProps) {
  const isRTL = lang === "ar";
  const content = lang === "en"
    ? {
        sectionLabel: "Professional Profile",
        title: "Verifiable Credentials & Affiliations",
        items: [
          {
            icon: Building2,
            title: "Suez Canal Life Insurance",
            subtitle: "Branch Sales Manager & Development Manager",
            detail: "Dec 2019 — Present | Cairo, Egypt",
          },
          {
            icon: Globe,
            title: "Suez Canal Life Insurance Co.",
            subtitle: "Egyptian Joint-Stock Insurance Company",
            detail: "Operating under Law 159/1981 & FRA Supervision",
          },
          {
            icon: Award,
            title: "8+ Years Insurance Leadership",
            subtitle: "Progressive career from Unit Manager to Development Manager",
            detail: "Recruited 30+ advisors, promoted 4 managers",
          },
          {
            icon: BookOpen,
            title: "General Engineering Education",
            subtitle: "Technical foundation supporting analytical approach",
            detail: "Applied to data-driven sales management and CRM optimization",
          },
        ],
      }
    : {
        sectionLabel: "الملف المهني",
        title: "مؤهلات وانتماءات موثقة",
        items: [
          {
            icon: Building2,
            title: "قناة السويس لتأمينات الحياة",
            subtitle: "مدير فرع مبيعات ومدير تطوير",
            detail: "ديسمبر 2019 — حتى الآن | القاهرة، مصر",
          },
          {
            icon: Globe,
            title: "شركة قناة السويس لتأمينات الحياة",
            subtitle: "شركة تأمين مساهمة مصرية",
            detail: "تعمل بموجب القانون 159/1981 وإشراف هيئة الرقابة المالية",
          },
          {
            icon: Award,
            title: "+8 سنوات قيادة في التأمين",
            subtitle: "مسيرة مهنية تصاعدية من مدير وحدة إلى مدير تطوير",
            detail: "توظيف +30 مستشار، ترقية 4 مدراء",
          },
          {
            icon: BookOpen,
            title: "تعليم هندسة عامة",
            subtitle: "أساس تقني يدعم النهج التحليلي",
            detail: "تطبيقه في إدارة المبيعات المبنية على البيانات وتحسين CRM",
          },
        ],
      };

  return (
    <section className="py-16 bg-card border-y border-border" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">{content.sectionLabel}</span>
          <h2 className={`font-display text-3xl lg:text-4xl font-bold text-navy mt-3 ${isRTL ? "font-arabic" : ""}`}>
            {content.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-xl border border-border hover:border-gold/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <item.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-semibold text-[var(--foreground)] mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.subtitle}</p>
              <p className="text-xs text-muted-foreground/70">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
