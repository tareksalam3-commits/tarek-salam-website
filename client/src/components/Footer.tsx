/*
 * Footer — "The Authority" Design
 * Professional footer with SEO-rich content and links
 */
import { Linkedin, Github } from "lucide-react";

interface FooterProps {
  lang: "en" | "ar";
}

export default function Footer({ lang }: FooterProps) {
  const isRTL = lang === "ar";
  const content = lang === "en"
    ? {
        name: "Tarek Salam",
        tagline: "Life Insurance Leader | Digital Transformation Expert | Suez Canal Life Insurance",
        rights: "All Rights Reserved",
        builtBy: "Built with passion for professional excellence",
        linkedInLabel: "LinkedIn",
        githubLabel: "GitHub",
      }
    : {
        name: "طارق سلام",
        tagline: "رائد التأمين | خبير التحول الرقمي | قناة السويس لتأمينات الحياة",
        rights: "جميع الحقوق محفوظة",
        builtBy: "مبني بشغف للتميز المهني",
        linkedInLabel: "لينكد إن",
        githubLabel: "جيت هاب",
      };

  return (
    <footer className="bg-navy text-white py-12" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/manus-storage/logo-mark_04159213.png"
                alt="Tarek Salam Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-display text-lg font-bold">{content.name}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">{content.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-4">
              {lang === "en" ? "Quick Links" : "روابط سريعة"}
            </h4>
            <div className="space-y-2">
              {lang === "en" ? (
                <>
                  <a href="#about" className="block text-sm text-white/60 hover:text-gold transition-colors">About</a>
                  <a href="#expertise" className="block text-sm text-white/60 hover:text-gold transition-colors">Expertise</a>
                  <a href="#achievements" className="block text-sm text-white/60 hover:text-gold transition-colors">Achievements</a>
                  <a href="#insights" className="block text-sm text-white/60 hover:text-gold transition-colors">Insights</a>
                  <a href="#contact" className="block text-sm text-white/60 hover:text-gold transition-colors">Contact</a>
                </>
              ) : (
                <>
                  <a href="#about" className="block text-sm text-white/60 hover:text-gold transition-colors">نبذة عني</a>
                  <a href="#expertise" className="block text-sm text-white/60 hover:text-gold transition-colors">الخبرات</a>
                  <a href="#achievements" className="block text-sm text-white/60 hover:text-gold transition-colors">الإنجازات</a>
                  <a href="#insights" className="block text-sm text-white/60 hover:text-gold transition-colors">المقالات</a>
                  <a href="#contact" className="block text-sm text-white/60 hover:text-gold transition-colors">تواصل</a>
                </>
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-gold mb-4">
              {lang === "en" ? "Connect" : "تواصل"}
            </h4>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/tarek-salam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/tareksalammohamed" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} {content.name}. {content.rights}.
          </p>
          <p className="text-white/40 text-xs">{content.builtBy}</p>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <h2>Tarek Salam - Tarek Salam Life Insurance Manager Egypt</h2>
          <p>طارق سلام - طارق سلام مدير تأمينات الحياة مصر - قناة السويس لتأمينات الحياة - تطوير فرق المبيعات - التحول الرقمي - CRM</p>
          <p>Suez Canal Life Insurance Branch Manager, Life Insurance Sales Team Development, CRM Digital Transformation, Insurance Training Cairo Egypt</p>
        </div>
      </div>
    </footer>
  );
}
