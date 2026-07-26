/*
 * Insights Section — "The Authority" Design
 * Blog/Articles section with thought leadership content
 */
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

interface InsightsSectionProps {
  lang: "en" | "ar";
}

export default function InsightsSection({ lang }: InsightsSectionProps) {
  const isRTL = lang === "ar";
  const content = lang === "en"
    ? {
        sectionLabel: "Insights & Articles",
        title: "Thought Leadership",
        subtitle: "Sharing perspectives on insurance industry transformation, sales excellence, and digital innovation.",
        articles: [
          {
            category: "Digital Transformation",
            title: "Why CRM Systems Are Reshaping Insurance in Egypt",
            excerpt: "The Egyptian insurance market is at a critical inflection point. Companies that invest in CRM infrastructure today will lead the market tomorrow.",
            date: "July 2026",
            readTime: "5 min read",
          },
          {
            category: "Sales Leadership",
            title: "Building a High-Performance Insurance Sales Team",
            excerpt: "The difference between a good team and a great one comes down to structured coaching, clear KPIs, and a culture of continuous improvement.",
            date: "June 2026",
            readTime: "7 min read",
          },
          {
            category: "Industry Trends",
            title: "The Future of Life Insurance in the MENA Region",
            excerpt: "With regulatory changes and digital adoption accelerating, life insurance in the Middle East is entering a new era of growth and opportunity.",
            date: "May 2026",
            readTime: "6 min read",
          },
        ],
        viewAll: "View All Articles",
      }
    : {
        sectionLabel: "المقالات والرؤى",
        title: "القيادة الفكرية",
        subtitle: "مشاركة رؤى حول تحول صناعة التأمين وتميز المبيعات والابتكار الرقمي.",
        articles: [
          {
            category: "التحول الرقمي",
            title: "لماذا تعيد أنظمة CRM تشكيل التأمين في مصر",
            excerpt: "سوق التأمين المصري عند نقطة تحول حرجة. الشركات التي تستثمر في بنية CRM اليوم ستكون قائدة السوق غداً.",
            date: "يوليو 2026",
            readTime: "5 دقائق",
          },
          {
            category: "القيادة المبيعاتية",
            title: "بناء فريق مبيعات تأمين عالي الأداء",
            excerpt: "الفرق بين الفريق الجيد والمتميز يكمن في التدريب المنظم ومؤشرات الأداء الواضحة وثقافة التحسين المستمر.",
            date: "يونيو 2026",
            readTime: "7 دقائق",
          },
          {
            category: "اتجاهات القطاع",
            title: "مستقبل تأمينات الحياة في منطقة الشرق الأوسط",
            excerpt: "مع تسارع التغييرات التنظيمية والتبني الرقمي، يدخل قطاع تأمينات الحياة في الشرق الأوسط عصراً جديداً من النمو.",
            date: "مايو 2026",
            readTime: "6 دقائق",
          },
        ],
        viewAll: "عرض كل المقالات",
      };

  return (
    <section id="insights" className="py-24 lg:py-32 bg-[var(--cream)]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-4"
        >
          <div>
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">{content.sectionLabel}</span>
            <h2 className={`font-display text-4xl lg:text-5xl font-bold text-navy mt-3 ${isRTL ? "font-arabic" : ""}`}>
              {content.title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">{content.subtitle}</p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {content.articles.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Card Header */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Tag size={14} className="text-gold" />
                  <span className="text-gold text-xs font-semibold uppercase tracking-wide">{article.category}</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-3 group-hover:text-gold transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>
              </div>
              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-border bg-muted/30 flex items-center justify-between">
                <span className="text-sm font-medium text-navy group-hover:text-gold transition-colors">
                  {lang === "en" ? "Read More" : "اقرأ المزيد"}
                </span>
                <ArrowRight size={16} className={`text-gold ${isRTL ? "rotate-180" : ""} group-hover:translate-x-1 transition-transform`} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
