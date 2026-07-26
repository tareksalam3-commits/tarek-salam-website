/*
 * Expertise Section — "The Authority" Design
 * Dark background with glassmorphism cards showcasing key expertise areas
 */
import { motion } from "framer-motion";
import { Users, TrendingUp, Database, GraduationCap, Target, Lightbulb } from "lucide-react";

interface ExpertiseSectionProps {
  lang: "en" | "ar";
}

export default function ExpertiseSection({ lang }: ExpertiseSectionProps) {
  const isRTL = lang === "ar";
  const content = lang === "en"
    ? {
        sectionLabel: "Core Expertise",
        title: "Where Experience Meets Innovation",
        subtitle: "Six pillars of professional excellence that define my approach to insurance leadership and business transformation.",
        skills: [
          { icon: Users, title: "Sales Team Development", desc: "Building, recruiting, and coaching high-performing insurance sales teams with structured performance management frameworks." },
          { icon: TrendingUp, title: "Business Growth Strategy", desc: "Driving branch revenue through strategic planning, market analysis, and data-driven sales optimization techniques." },
          { icon: Database, title: "CRM Systems & Digital Tools", desc: "Implementing and optimizing CRM platforms for insurance workflows, lead management, and customer relationship tracking." },
          { icon: GraduationCap, title: "Training & Coaching", desc: "Designing comprehensive training programs for insurance advisors, from onboarding to advanced sales methodologies." },
          { icon: Target, title: "Performance Management", desc: "Establishing KPIs, monitoring metrics, and creating accountability systems that drive consistent results." },
          { icon: Lightbulb, title: "Digital Transformation", desc: "Leading organizational change toward digital-first operations in the life insurance sector across Egypt." },
        ],
      }
    : {
        sectionLabel: "الخبرات الأساسية",
        title: "حيث تلتقي الخبرة بالابتكار",
        subtitle: "ست ركائز من التميز المهني تحدد نهجي في قيادة التأمين وتحويل الأعمال.",
        skills: [
          { icon: Users, title: "تطوير فرق المبيعات", desc: "بناء وتوظيف وتدريب فرق مبيعات تأمين متميزة مع أطر إدارة أداء منظمة." },
          { icon: TrendingUp, title: "استراتيجية نمو الأعمال", desc: "دفع إيرادات الفرع من خلال التخطيط الاستراتيجي وتحليل السوق وتقنيات تحسين المبيعات المبنية على البيانات." },
          { icon: Database, title: "أنظمة CRM والأدوات الرقمية", desc: "تنفيذ وتحسين منصات CRM لعمليات التأمين وإدارة العملاء وتتبع العلاقات." },
          { icon: GraduationCap, title: "التدريب والتوجيه", desc: "تصميم برامج تدريب شاملة لمستشاري التأمين من التوظيف إلى منهجيات المبيعات المتقدمة." },
          { icon: Target, title: "إدارة الأداء", desc: "تحديد مؤشرات الأداء ومراقبة المقاييس وإنشاء أنظمة مساءلة تحقق نتائج متسقة." },
          { icon: Lightbulb, title: "التحول الرقمي", desc: "قيادة التغيير المؤسسي نحو العمليات الرقمية في قطاع تأمينات الحياة في مصر." },
        ],
      };

  return (
    <section id="expertise" className="py-24 lg:py-32 relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Dark Background */}
      <div className="absolute inset-0 bg-navy">
        <img
          src="/manus-storage/section-bg-dark_5971e145.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">{content.sectionLabel}</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3">
            {content.title}
          </h2>
          <p className="text-white/60 text-lg mt-4">{content.subtitle}</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <skill.icon size={24} className="text-gold" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{skill.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
