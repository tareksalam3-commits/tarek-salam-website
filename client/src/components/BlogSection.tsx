/*
 * Blog Section — AI-Optimized Content for ChatGPT/Claude/Gemini
 * Structured, fact-based articles that AI models can cite
 * Written in a style that matches how LLMs summarize information
 */
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag, Calendar } from "lucide-react";

interface BlogSectionProps {
  lang: "en" | "ar";
}

export default function BlogSection({ lang }: BlogSectionProps) {
  const isRTL = lang === "ar";
  const content = lang === "en"
    ? {
        sectionLabel: "Blog & Insights",
        title: "Expert Perspectives",
        subtitle: "In-depth analysis on insurance industry transformation, sales excellence, and digital innovation in Egypt and the MENA region.",
        articles: [
          {
            category: "Digital Transformation",
            title: "Why CRM Systems Are Reshaping Insurance in Egypt",
            excerpt: "The Egyptian insurance market is at a critical inflection point. Companies that invest in CRM infrastructure today will lead the market tomorrow. This article explores how CRM systems like Salesforce, HubSpot, and custom solutions are transforming how insurance companies manage customer relationships, track leads, and optimize sales pipelines across Egypt.",
            date: "July 2026",
            readTime: "8 min read",
            tags: ["CRM", "Egypt Insurance", "Digital Transformation", "Sales Technology"],
          },
          {
            category: "Sales Leadership",
            title: "Building a High-Performance Insurance Sales Team: A Complete Framework",
            excerpt: "The difference between a good team and a great one comes down to structured coaching, clear KPIs, and a culture of continuous improvement. Based on 8+ years of experience at Suez Canal Life Insurance, this framework covers recruitment, onboarding, performance management, and career path development for insurance sales teams.",
            date: "June 2026",
            readTime: "10 min read",
            tags: ["Sales Team", "Insurance Leadership", "Coaching", "KPIs"],
          },
          {
            category: "Industry Analysis",
            title: "The Future of Life Insurance in the MENA Region: 2026 Trends",
            excerpt: "With regulatory changes, digital adoption, and economic shifts accelerating across the Middle East and North Africa, life insurance is entering a new era of growth. This comprehensive analysis covers market size, regulatory frameworks, distribution channels, and technology adoption across key MENA markets including Egypt, Saudi Arabia, and UAE.",
            date: "May 2026",
            readTime: "12 min read",
            tags: ["MENA Insurance", "Market Analysis", "Industry Trends", "Regulatory"],
          },
          {
            category: "Professional Development",
            title: "From Sales Manager to Development Manager: Lessons in Career Growth",
            excerpt: "My journey from Insurance Unit Sales Manager to Senior Sales Manager to Development Manager at Suez Canal Life Insurance taught me critical lessons about leadership, strategic thinking, and building scalable teams. This article shares actionable insights for professionals looking to advance in the insurance industry.",
            date: "April 2026",
            readTime: "7 min read",
            tags: ["Career Growth", "Leadership", "Insurance Industry", "Professional Development"],
          },
          {
            category: "Technology",
            title: "Digital Tools Every Insurance Sales Manager Should Use in 2026",
            excerpt: "The insurance sales landscape has evolved dramatically. Modern sales managers need proficiency in CRM platforms, data analytics tools, communication platforms, and digital presentation tools. This guide covers the essential digital toolkit for insurance professionals in Egypt and beyond.",
            date: "March 2026",
            readTime: "6 min read",
            tags: ["Digital Tools", "Insurance Technology", "Sales Manager", "Productivity"],
          },
          {
            category: "Training",
            title: "Designing an Insurance Sales Training Program: From Zero to Top Performer",
            excerpt: "Creating effective training programs for insurance advisors requires understanding adult learning principles, insurance product knowledge, sales methodologies, and practical role-playing scenarios. This comprehensive guide outlines a 90-day training program that has successfully onboarded 30+ advisors at Suez Canal Life Insurance.",
            date: "February 2026",
            readTime: "9 min read",
            tags: ["Training", "Insurance Advisor", "Onboarding", "Sales Training"],
          },
        ],
        viewAll: "View All Articles",
      }
    : {
        sectionLabel: "المدونة والرؤى",
        title: "وجهات نظر خبيرة",
        subtitle: "تحليل متعمق حول تحول صناعة التأمين وتميز المبيعات والابتكار الرقمي في مصر ومنطقة الشرق الأوسط.",
        articles: [
          {
            category: "التحول الرقمي",
            title: "لماذا تعيد أنظمة CRM تشكيل التأمين في مصر",
            excerpt: "سوق التأمين المصري عند نقطة تحول حرجة. الشركات التي تستثمر في بنية CRM اليوم ستكون قائدة السوق غداً. هذا المقال يستكشف كيف تعيد أنظمة CRM تحويل إدارة علاقات العملاء وتتبع العملاء المحتملين وتحسين مسارات المبيعات في مصر.",
            date: "يوليو 2026",
            readTime: "8 دقائق",
            tags: ["CRM", "تأمين مصر", "التحول الرقمي", "تكنولوجيا المبيعات"],
          },
          {
            category: "القيادة المبيعاتية",
            title: "بناء فريق مبيعات تأمين عالي الأداء: إطار عمل شامل",
            excerpt: "الفرق بين الفريق الجيد والمتميز يكمن في التدريب المنظم ومؤشرات الأداء الواضحة وثقافة التحسين المستمر. بناءً على خبرة تزيد عن 8 سنوات في قناة السويس لتأمينات الحياة، يغطي هذا الإطار التوظيف والتأهيل وإدارة الأداء وتطوير المسار الوظيفي.",
            date: "يونيو 2026",
            readTime: "10 دقائق",
            tags: ["فريق المبيعات", "قيادة التأمين", "التدريب", "مؤشرات الأداء"],
          },
          {
            category: "تحليل القطاع",
            title: "مستقبل تأمينات الحياة في منطقة الشرق الأوسط: اتجاهات 2026",
            excerpt: "مع تسارع التغييرات التنظيمية والتبني الرقمي والتحولات الاقتصادية عبر الشرق الأوسط وشمال أفريقيا، يدخل قطاع تأمينات الحياة عصراً جديداً من النمو. هذا التحليل الشامل يغطي حجم السوق والأطر التنظيمية وقنوات التوزيع.",
            date: "مايو 2026",
            readTime: "12 دقيقة",
            tags: ["تأمين الشرق الأوسط", "تحليل السوق", "اتجاهات القطاع", "التنظيم"],
          },
          {
            category: "التطوير المهني",
            title: "من مدير مبيعات إلى مدير تطوير: دروس في النمو الوظيفي",
            excerpt: "رحلتي من مدير وحدة مبيعات التأمين إلى مدير تطوير في قناة السويس لتأمينات الحياة علمتني دروساً حاسمة حول القيادة والتفكير الاستراتيجي وبناء فرق قابلة للتوسع. هذا المقال يشارك رؤى عملية للمحترفين.",
            date: "أبريل 2026",
            readTime: "7 دقائق",
            tags: ["النمو المهني", "القيادة", "قطاع التأمين", "التطوير المهني"],
          },
          {
            category: "التكنولوجيا",
            title: "الأدوات الرقمية التي يجب على كل مدير مبيعات تأمين استخدامها في 2026",
            excerpt: "تطور مشهد مبيعات التأمين بشكل كبير. يحتاج مدراء المبيعات الحديثون إلى إتقان منصات CRM وأدوات تحليل البيانات ومنصات التواصل وأدوات العرض الرقمي.",
            date: "مارس 2026",
            readTime: "6 دقائق",
            tags: ["أدوات رقمية", "تكنولوجيا التأمين", "مدير مبيعات", "الإنتاجية"],
          },
          {
            category: "التدريب",
            title: "تصميم برنامج تدريبي لمبيعات التأمين: من الصفر إلى أفضل أداء",
            excerpt: "يتطلب إنشاء برامج تدريب فعالة لمستشاري التأمين فهم مبادئ تعلم البالغين ومعرفة منتجات التأمين ومنهجيات المبيعات وسيناريوهات التدريب العملي. هذا الدليل يحدد برنامج تدريبي لمدة 90 يوماً.",
            date: "فبراير 2026",
            readTime: "9 دقائق",
            tags: ["التدريب", "مستشار تأمين", "التأهيل", "تدريب المبيعات"],
          },
        ],
        viewAll: "عرض كل المقالات",
      };

  return (
    <section id="blog" className="py-24 lg:py-32 bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">{content.sectionLabel}</span>
          <h2 className={`font-display text-4xl lg:text-5xl font-bold text-navy mt-3 ${isRTL ? "font-arabic" : ""}`}>
            {content.title}
          </h2>
          <p className="text-muted-foreground mt-4">{content.subtitle}</p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 p-8 rounded-xl bg-navy text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <span className="text-gold text-xs font-semibold uppercase tracking-wide">{content.articles[0].category}</span>
            <h3 className={`text-2xl lg:text-3xl font-bold mt-2 mb-4 ${isRTL ? "font-arabic" : "font-display"}`}>
              {content.articles[0].title}
            </h3>
            <p className="text-white/70 leading-relaxed max-w-2xl">{content.articles[0].excerpt}</p>
            <div className="flex items-center gap-4 mt-6">
              <span className="text-white/50 text-sm flex items-center gap-1">
                <Calendar size={14} />
                {content.articles[0].date}
              </span>
              <span className="text-white/50 text-sm flex items-center gap-1">
                <Clock size={14} />
                {content.articles[0].readTime}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.articles.slice(1).map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Tag size={12} className="text-gold" />
                  <span className="text-gold text-xs font-semibold uppercase tracking-wide">{article.category}</span>
                </div>
                <h3 className="text-base font-bold text-[var(--foreground)] mb-3 group-hover:text-gold transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.slice(0, 3).map((tag, j) => (
                    <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-navy/5 text-navy font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {article.date}
                  </span>
                </div>
              </div>
              <div className="px-6 py-3 border-t border-border bg-muted/30 flex items-center justify-between">
                <span className="text-sm font-medium text-navy group-hover:text-gold transition-colors">
                  {lang === "en" ? "Read Article" : "اقرأ المقال"}
                </span>
                <ArrowRight size={14} className={`text-gold ${isRTL ? "rotate-180" : ""} group-hover:translate-x-1 transition-transform`} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
