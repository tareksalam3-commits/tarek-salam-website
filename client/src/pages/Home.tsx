import { useEffect, useState } from "react";
import {
  ArrowLeft, ArrowUp, BarChart3, BriefcaseBusiness, GraduationCap,
  Handshake, HeartPulse, Instagram, Landmark, Linkedin, Menu, MessageCircle,
  Phone, ShieldCheck, Sparkles, Target, Users, X,
} from "lucide-react";

const siteUrl = "https://tareksalammohamed.github.io/me/";
const whatsappUrl = "https://wa.me/message/IGIGGRIP6ARPC1";

const navItems = [
  ["الرئيسية", "home"], ["من أنا", "about"], ["الخدمات", "services"],
  ["التدريب", "training"], ["المحتوى", "content"], ["تواصل معنا", "contact"],
];

const stats = [
  { value: "10+", label: "سنوات خبرة", icon: Sparkles },
  { value: "2500+", label: "عميل سعيد", icon: Users },
  { value: "720", label: "متدرب وقائد", icon: GraduationCap },
  { value: "3970", label: "تعاقد ناجح", icon: Handshake },
  { value: "20+", label: "مدينة ومحافظة", icon: Landmark },
];

const services = [
  { icon: GraduationCap, title: "التدريب والتطوير", text: "برامج عملية في التأمين والمبيعات وبناء فرق الأداء العالي.", accent: "التعلم" },
  { icon: BriefcaseBusiness, title: "الاستشارات المالية", text: "تخطيط مالي واضح يساعدك على اتخاذ قرارات أكثر ثقة للمستقبل.", accent: "التخطيط" },
  { icon: BarChart3, title: "الادخار والاستثمار", text: "خطط ذكية لبناء ثروة متدرجة وتحقيق أهدافك المالية.", accent: "النمو" },
  { icon: ShieldCheck, title: "تأمين الحياة", text: "حلول حماية تمنح أسرتك أماناً مالياً في أهم مراحل الحياة.", accent: "الحماية" },
  { icon: HeartPulse, title: "التأمين الطبي", text: "رعاية صحية شاملة مصممة لك ولأسرتك باهتمام واستمرارية.", accent: "العافية" },
  { icon: Users, title: "تأمين الأفراد", text: "مساندة وحلول حماية مناسبة لاحتياجاتك وأولوياتك الشخصية.", accent: "الاستقرار" },
];

function BrandMark() {
  return <a className="brand-mark" href="#home" aria-label="طارق سلام - الصفحة الرئيسية"><span className="brand-initials">TS</span><span className="brand-name">TAREK SALAM</span><span className="brand-subtitle">FINANCIAL SERVICES & TRAINING</span></a>;
}

function SocialLinks() {
  return <div className="social-links" aria-label="روابط التواصل الاجتماعي"><a href="https://www.linkedin.com/in/tareksalammohamed" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://www.instagram.com/tareksalammohamed" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a><a href={whatsappUrl} aria-label="اتصال هاتفي"><Phone size={17} /></a></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" dir="rtl">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container header-inner">
          <BrandMark />
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="التنقل الرئيسي">{navItems.map(([label, id]) => <a key={id} className={id === "home" ? "active" : ""} href={`#${id}`} onClick={closeMenu}>{label}</a>)}</nav>
          <div className="header-actions"><SocialLinks /><a className="gold-button compact" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span>تواصل واتساب</span></a></div>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="فتح القائمة" aria-expanded={menuOpen}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section"><div className="hero-backdrop" aria-hidden="true" /><div className="hero-glow hero-glow-one" aria-hidden="true" /><div className="hero-glow hero-glow-two" aria-hidden="true" /><div className="container hero-grid">
          <div className="hero-copy"><div className="eyebrow"><span /> خبرة · ثقة · نتائج <span /></div><h1>طارق سلام</h1><h2>خدمات مالية <b>–</b> تأمين <b>–</b> تدريب وتطوير</h2><p className="hero-lede">أساعد الأفراد والعائلات على بناء مستقبل مالي آمن، وأساعد المسوقين وصناع النجاح على تطوير أنفسهم وبناء فرق قوية.</p><div className="hero-cta-row"><a className="gold-button" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={20} /> تواصل واتساب <small>محادثة فورية</small></a><a className="outline-button" href={whatsappUrl}><Phone size={19} /> اتصل الآن</a></div><div className="hero-trust"><ShieldCheck size={18} /><span>استشارة أولية تساعدك على تحديد الخطوة المناسبة</span></div></div>
          <div className="hero-portrait" aria-label="طارق سلام - خبير الخدمات المالية والتأمين"><div className="portrait-aura" /><div className="portrait-card"><div className="portrait-monogram">TS</div><span>مسار واضح</span><strong>مستقبل أكثر أماناً</strong></div><div className="portrait-photo-wrap"><img className="portrait-photo" src="/me/assets/tarek-portrait.png" alt="طارق سلام، خبير الخدمات المالية والتأمين وتطوير فرق العمل" /></div><div className="portrait-caption"><span>طارق سلام</span><small>مدير مبيعات وتطوير فرق</small></div></div>
        </div><div className="container stats-bar" aria-label="إحصاءات طارق سلام">{stats.map(({ value, label, icon: Icon }) => <div className="stat-item" key={label}><Icon size={27} /><div><strong>{value}</strong><span>{label}</span></div></div>)}</div></section>

        <section id="about" className="intro-section section-space"><div className="container intro-grid"><div className="section-heading"><span className="section-kicker">من أنا</span><h2>خبرة تُترجم إلى <em>خطوات عملية</em></h2></div><div className="intro-copy"><p>أنا <strong>طارق سلام</strong>، مدير مبيعات وخبير في الخدمات المالية والتأمين وتطوير فرق العمل. أؤمن أن القرار المالي الجيد يبدأ بفهم واضح، وخطة قابلة للتنفيذ، وشريك يضع أهدافك في المقدمة.</p><p>من خلال التدريب والاستشارات وحلول الحماية، أساعد الأفراد والعائلات والمسوقين على بناء نتائج مستدامة بثقة ووعي.</p><a className="text-link" href="#contact">تعرّف على قصتي <ArrowLeft size={17} /></a></div></div></section>

        <section id="services" className="services-section section-space"><div className="container"><div className="center-heading"><span className="section-kicker">حلول مصممة لك</span><h2>خدماتنا</h2><p>من الحماية إلى النمو، نضع بين يديك خيارات واضحة تساعدك على التحرك بثقة.</p></div><div className="services-grid">{services.map(({ icon: Icon, title, text, accent }) => <article className="service-card" key={title}><div className="service-icon"><Icon size={32} /></div><span className="service-accent">{accent}</span><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`عرض المزيد عن ${title}`}>عرض المزيد <ArrowLeft size={15} /></a></article>)}</div></div></section>

        <section id="training" className="training-section section-space"><div className="container training-panel"><div className="training-icon"><Target size={42} /></div><div><span className="section-kicker">للمسوقين وصناع النجاح</span><h2>طوّر فريقك، ووسّع تأثيرك</h2><p>تدريب عملي في بناء فرق المبيعات، القيادة، المتابعة، وتحويل الأهداف إلى نظام عمل يومي.</p></div><a className="gold-button" href="#contact">ابدأ محادثة <ArrowLeft size={18} /></a></div></section>

        <section id="content" className="content-section section-space"><div className="container content-grid"><div><span className="section-kicker">المحتوى</span><h2>معرفة مالية بلغة بسيطة</h2><p>أشارك أفكاراً عملية عن التأمين والادخار والمبيعات وتطوير الذات، لتأخذ قرارك وأنت أكثر وضوحاً.</p></div><div className="content-quote"><Sparkles size={28} /><blockquote>"الثقة لا تُبنى بالكلام فقط؛ تُبنى بنتيجة يلمسها العميل وفريق ينمو كل يوم."</blockquote><span>طارق سلام</span></div></div></section>

        <section id="contact" className="contact-section section-space"><div className="container contact-panel"><div><span className="section-kicker">تواصل معنا</span><h2>جاهز لخطوتك التالية؟</h2><p>اترك رسالتك أو تواصل مباشرة، وسأساعدك في الوصول إلى الخيار الأنسب لاحتياجك.</p></div><div className="contact-actions"><a className="gold-button" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={20} /> ابدأ عبر واتساب</a><a className="outline-button" href="mailto:tarek.salam3@gmail.com">أرسل بريداً إلكترونياً</a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><BrandMark /><div className="footer-copy"><p>طارق سلام — خدمات مالية، تأمين، تدريب وتطوير.</p><small>© {new Date().getFullYear()} Tarek Salam. جميع الحقوق محفوظة.</small></div><div className="footer-links"><a href="https://www.linkedin.com/in/tareksalammohamed" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.facebook.com/tareksalammohamed" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.instagram.com/tareksalammohamed" target="_blank" rel="noreferrer">Instagram</a></div></div></footer>
      <div className="floating-actions"><a className="float-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="واتساب"><MessageCircle size={22} /></a><a className="float-facebook" href="https://www.facebook.com/tareksalammohamed" target="_blank" rel="noreferrer" aria-label="فيسبوك">f</a><a className="float-instagram" href="https://www.instagram.com/tareksalammohamed" target="_blank" rel="noreferrer" aria-label="إنستغرام"><Instagram size={21} /></a><a className="float-top" href="#home" aria-label="العودة إلى الأعلى"><ArrowUp size={20} /></a></div>
    </div>
  );
}

export { siteUrl };
