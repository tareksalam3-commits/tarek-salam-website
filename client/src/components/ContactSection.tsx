/*
 * Contact Section — "The Authority" Design
 * Professional contact form with LinkedIn and social links
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send, ExternalLink } from "lucide-react";

interface ContactSectionProps {
  lang: "en" | "ar";
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const isRTL = lang === "ar";
  const content = lang === "en"
    ? {
        sectionLabel: "Get in Touch",
        title: "Let's Connect",
        subtitle: "Interested in discussing insurance industry insights, team development, or potential collaborations? I'd love to hear from you.",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        subjectPlaceholder: "Subject",
        messagePlaceholder: "Your Message",
        sendButton: "Send Message",
        contactInfo: "Contact Information",
        socialTitle: "Connect on Social",
        socialDesc: "Follow me for insights on insurance leadership, sales excellence, and digital transformation.",
      }
    : {
        sectionLabel: "تواصل معي",
        title: "لنتواصل",
        subtitle: "مهتم بمناقشة رؤى قطاع التأمين أو تطوير الفرق أو التعاون المحتمل؟ يسعدني سماع رأيك.",
        namePlaceholder: "اسمك",
        emailPlaceholder: "بريدك الإلكتروني",
        subjectPlaceholder: "الموضوع",
        messagePlaceholder: "رسالتك",
        sendButton: "إرسال الرسالة",
        contactInfo: "معلومات التواصل",
        socialTitle: "تواصل عبر وسائل التواصل",
        socialDesc: "تابعني للحصول على رؤى حول قيادة التأمين وتميز المبيعات والتحول الرقمي.",
      };

  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sent");
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background" dir={isRTL ? "rtl" : "ltr"}>
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
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">{content.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-navy mb-4">{content.contactInfo}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center">
                    <Mail size={18} className="text-navy" />
                  </div>
                  <a href="mailto:contact@tareksalam.com" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    contact@tareksalam.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center">
                    <Linkedin size={18} className="text-navy" />
                  </div>
                  <a href="https://www.linkedin.com/in/tarek-salam" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-gold transition-colors flex items-center gap-1">
                    LinkedIn Profile <ExternalLink size={12} />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center">
                    <MapPin size={18} className="text-navy" />
                  </div>
                  <span className="text-sm text-muted-foreground">Cairo, Egypt</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-xl bg-navy text-white">
              <h4 className="font-semibold mb-2">{content.socialTitle}</h4>
              <p className="text-white/60 text-sm mb-4">{content.socialDesc}</p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/tarek-salam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                  <Linkedin size={18} className="text-white" />
                </a>
                <a href="https://github.com/tareksalam3-commits" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder={content.namePlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-[var(--foreground)] placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder={content.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-[var(--foreground)] placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                  required
                />
              </div>
              <input
                type="text"
                placeholder={content.subjectPlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-[var(--foreground)] placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                required
              />
              <textarea
                placeholder={content.messagePlaceholder}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-[var(--foreground)] placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
                required
              />
              <button
                type="submit"
                className={`w-full py-3.5 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                  formStatus === "sent"
                    ? "bg-green-600"
                    : "bg-navy hover:bg-navy-light"
                }`}
              >
                {formStatus === "sent" ? (
                  <>
                    <CheckIcon />
                    {lang === "en" ? "Message Sent!" : "تم إرسال الرسالة!"}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {content.sendButton}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
