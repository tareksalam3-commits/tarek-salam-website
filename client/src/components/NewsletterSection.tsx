/*
 * Newsletter Section — Growth & AI Visibility Engine
 * Email list building for sustained content distribution
 * Free: Mailchimp free tier or ConvertKit free
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

interface NewsletterSectionProps {
  lang: "en" | "ar";
}

export default function NewsletterSection({ lang }: NewsletterSectionProps) {
  const isRTL = lang === "ar";
  const content = lang === "en"
    ? {
        title: "Stay Updated on Insurance Insights",
        subtitle: "Get weekly analysis on insurance industry trends, sales leadership strategies, and digital transformation in the Egyptian market.",
        placeholder: "Enter your email address",
        button: "Subscribe",
        privacy: "No spam. Unsubscribe anytime. Your privacy is protected.",
        success: "Thank you for subscribing!",
      }
    : {
        title: "ابقَ على اطلاع برؤى التأمين",
        subtitle: "احصل على تحليل أسبوعي حول اتجاهات صناعة التأمين واستراتيجيات القيادة المبيعاتية والتحول الرقمي في السوق المصري.",
        placeholder: "أدخل بريدك الإلكتروني",
        button: "اشترك",
        privacy: "بدون رسائل مزعجة. يمكنك إلغاء الاشتراك في أي وقت.",
        success: "شكراً لاشتراكك!",
      };

  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to Mailchimp/ConvertKit free tier
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-20 bg-navy relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
            <Mail size={24} className="text-gold" />
          </div>
          <h2 className={`font-display text-3xl lg:text-4xl font-bold text-white mb-4 ${isRTL ? "font-arabic" : ""}`}>
            {content.title}
          </h2>
          <p className="text-white/60 mb-8">{content.subtitle}</p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-xl bg-white/10 border border-gold/30"
            >
              <p className="text-gold font-semibold">{content.success}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content.placeholder}
                className="flex-1 px-5 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                required
              />
              <button
                type="submit"
                className="bg-gold text-white font-semibold px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 justify-center"
              >
                {content.button}
                <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
              </button>
            </form>
          )}

          <p className="text-white/40 text-xs mt-4">{content.privacy}</p>
        </motion.div>
      </div>
    </section>
  );
}
