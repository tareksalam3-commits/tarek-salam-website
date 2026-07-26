/*
 * About Section — "The Authority" Design
 * Professional bio with image and key facts
 */
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, MapPin } from "lucide-react";

interface AboutSectionProps {
  lang: "en" | "ar";
}

export default function AboutSection({ lang }: AboutSectionProps) {
  const isRTL = lang === "ar";
  const content = lang === "en"
    ? {
        sectionLabel: "About Me",
        title: "Building Teams. Driving Growth. Transforming Insurance.",
        paragraphs: [
          "As Branch Sales Manager at Suez Canal Life Insurance, I've dedicated over 8 years to building high-performing insurance teams and driving measurable business growth across Egypt's insurance market.",
          "My approach combines structured coaching methodologies with digital transformation strategies, particularly in CRM system implementation. I've successfully recruited and trained 30+ insurance advisors and promoted 4 managers through systematic leadership development programs.",
          "I specialize in bridging the gap between traditional insurance sales and modern digital tools, helping organizations achieve sustainable growth through empowered teams and technology-driven processes.",
        ],
        highlights: [
          { icon: Briefcase, title: "Current Role", value: "Development Manager" },
          { icon: GraduationCap, title: "Education", value: "General Engineering" },
          { icon: Award, title: "Industry", value: "Life Insurance" },
          { icon: MapPin, title: "Location", value: "Cairo, Egypt" },
        ],
        years: "8+ Years",
        company: "Suez Canal Life Insurance",
        role: "Development Manager",
      }
    : {
        sectionLabel: "نبذة عني",
        title: "بناء الفرق. تحقيق النمو. تحويل التأمين.",
        paragraphs: [
          "كمدير فرع بشركة قناة السويس لتأمينات الحياة، كرّست أكثر من 8 سنوات لبناء فرق مبيعات متميزة وتحقيق نمو ملموس في سوق التأمين المصري.",
          "يجمع نهجي بين منهجيات التدريب المنظم واستراتيجيات التحول الرقمي، خاصة في تنفيذ أنظمة CRM. نجحت في توظيف وتدريب أكثر من 30 مستشار تأمين وتطوير 4 مدراء من خلال برامج تطوير قيادي منظمة.",
          "أختص في سد الفجوة بين مبيعات التأمين التقليدية والأدوات الرقمية الحديثة، مما يساعد المنظمات على تحقيق نمو مستدام من خلال فرق متمكّنة وعمليات مبنية على التكنولوجيا.",
        ],
        highlights: [
          { icon: Briefcase, title: "المنصب الحالي", value: "مدير تطوير" },
          { icon: GraduationCap, title: "التعليم", value: "هندسة عامة" },
          { icon: Award, title: "القطاع", value: "تأمينات الحياة" },
          { icon: MapPin, title: "الموقع", value: "القاهرة، مصر" },
        ],
        years: "+8 سنوات",
        company: "قناة السويس لتأمينات الحياة",
        role: "مدير تطوير",
      };

  return (
    <section id="about" className="py-24 lg:py-32 bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">{content.sectionLabel}</span>
          <h2 className={`font-display text-4xl lg:text-5xl font-bold text-navy mt-3 ${isRTL ? "font-arabic" : ""}`}>
            {content.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image + Highlights */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src="/manus-storage/team-leadership_3c39c168.png"
                alt="Tarek Salam - Insurance Leadership"
                className="w-full rounded-lg shadow-2xl"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-5 border border-gold/20">
                <div className="text-3xl font-bold text-gold font-display">{content.years}</div>
                <div className="text-sm text-muted-foreground">{content.company}</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.paragraphs.map((p, i) => (
              <p key={i} className="text-[var(--foreground)] leading-relaxed mb-6 text-lg">
                {p}
              </p>
            ))}

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {content.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center">
                    <h.icon size={18} className="text-navy" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{h.title}</div>
                    <div className="text-sm font-semibold text-[var(--foreground)]">{h.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
