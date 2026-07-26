/*
 * Achievements Section — "The Authority" Design
 * Timeline-style achievements with key milestones
 */
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Users, Award, Calendar } from "lucide-react";

interface AchievementsSectionProps {
  lang: "en" | "ar";
}

export default function AchievementsSection({ lang }: AchievementsSectionProps) {
  const isRTL = lang === "ar";
  const content = lang === "en"
    ? {
        sectionLabel: "Key Achievements",
        title: "A Track Record of Measurable Impact",
        achievements: [
          {
            icon: Users,
            title: "30+ Advisors Recruited & Trained",
            desc: "Built a pipeline of skilled insurance advisors from scratch, implementing structured onboarding and continuous development programs.",
            metric: "30+",
            metricLabel: "Advisors",
          },
          {
            icon: TrendingUp,
            title: "4 Managers Promoted",
            desc: "Identified and developed talent within the team, creating clear career paths and leadership succession planning.",
            metric: "4",
            metricLabel: "Leaders",
          },
          {
            icon: Award,
            title: "Consistently Exceeded Sales Targets",
            desc: "Achieved and surpassed quarterly and annual sales targets through strategic planning and team motivation.",
            metric: "100%+",
            metricLabel: "Target Hit",
          },
          {
            icon: Calendar,
            title: "6+ Years at Suez Canal Life Insurance",
            desc: "Sustained growth and leadership across multiple roles from Sales Manager to Development Manager.",
            metric: "6+",
            metricLabel: "Years",
          },
        ],
      }
    : {
        sectionLabel: "أبرز الإنجازات",
        title: "سجل حافل بتأثير ملموس وقابل للقياس",
        achievements: [
          {
            icon: Users,
            title: "+30 مستشار تم توظيفه وتدريبه",
            desc: "بنيت خط إنتاج من مستشاري التأمين المهرة من الصفر، مع تطبيق برامج تأهيل وتطوير مستمر منظمة.",
            metric: "+30",
            metricLabel: "مستشار",
          },
          {
            icon: TrendingUp,
            title: "4 مدراء تمت ترقيتهم",
            desc: "حددت وطورت المواهب داخل الفريق، مع إنشاء مسارات وظيفية واضحة وخطة تعاقب قيادي.",
            metric: "4",
            metricLabel: "قائد",
          },
          {
            icon: Award,
            title: "تجاوز مستهدفات المبيعات باستمرار",
            desc: "حققت وتجاوزت أهداف المبيعات الربع سنوية والسنوية من خلال التخطيط الاستراتيجي وتحفيز الفريق.",
            metric: "+100%",
            metricLabel: "تحقيق الهدف",
          },
          {
            icon: Calendar,
            title: "+6 سنوات في قناة السويس لتأمينات الحياة",
            desc: "نمو مستدام وقيادة عبر أدوار متعددة من مدير مبيعات إلى مدير تطوير.",
            metric: "+6",
            metricLabel: "سنوات",
          },
        ],
      };

  return (
    <section id="achievements" className="py-24 lg:py-32 bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">{content.sectionLabel}</span>
          <h2 className={`font-display text-4xl lg:text-5xl font-bold text-navy mt-3 ${isRTL ? "font-arabic" : ""}`}>
            {content.title}
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {content.achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Gold accent bar */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} className="text-navy" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-[var(--foreground)]">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="inline-flex items-center gap-2 bg-gold/10 px-3 py-1 rounded-full">
                    <span className="text-gold font-bold text-sm">{item.metric}</span>
                    <span className="text-gold/70 text-xs">{item.metricLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-xl bg-navy text-white">
            <p className={`text-xl leading-relaxed ${isRTL ? "font-arabic" : "font-display"}`}>
              {lang === "en"
                ? '"True leadership in insurance isn\'t just about hitting numbers — it\'s about building people who can sustain and multiply those results."'
                : '"القيادة الحقيقية في التأمين ليست مجرد تحقيق أرقام — بل هي بناء أشخاص قادرين على استدامة وتضاعيف تلك النتائج."'}
            </p>
            <div className="mt-4 text-gold text-sm font-semibold">— Tarek Salam | طارق سلام</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
