"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ka"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",

    // Hero
    "hero.title": "We build any website you can imagine.",
    "hero.subtitle": "From stunning landing pages to complex SaaS platforms — we deliver pixel-perfect, high-performance websites at unprecedented speed.",
    "hero.cta.primary": "Start Your Project",
    "hero.cta.secondary": "See Pricing",

    // About
    "about.badge": "What We Do",
    "about.title": "Your vision, our expertise.",
    "about.subtitle": "WeBuild handles everything from initial concept to final deployment. We combine cutting-edge design with robust development to create websites that convert.",
    "about.design.title": "Design",
    "about.design.desc": "Custom UI/UX design that captures your brand essence and delights users.",
    "about.develop.title": "Development",
    "about.develop.desc": "Clean, scalable code built with modern frameworks and best practices.",
    "about.deploy.title": "Deployment",
    "about.deploy.desc": "Seamless launch with optimized performance and ongoing support.",

    // Services
    "services.badge": "Services",
    "services.title": "Everything you need to succeed online.",
    "services.subtitle": "No matter what type of website you need, we have the expertise to deliver exceptional results.",
    "services.anytype.title": "Any Website Type",
    "services.anytype.desc": "Landing pages, e-commerce, SaaS, portfolios, dashboards — we build it all.",
    "services.fast.title": "Fast Delivery",
    "services.fast.desc": "Get your project launched in weeks, not months. Speed without compromise.",
    "services.custom.title": "Custom Design",
    "services.custom.desc": "Unique, tailored designs that make your brand stand out from competitors.",
    "services.scalable.title": "Scalable Solutions",
    "services.scalable.desc": "Built to grow with your business. From startup to enterprise scale.",
    "services.seo.title": "SEO Ready",
    "services.seo.desc": "Optimized from the ground up for search engines and conversions.",
    "services.modern.title": "Modern Tech Stack",
    "services.modern.desc": "Next.js, React, TypeScript — cutting-edge technology for peak performance.",
    "services.chatbot.title": "Free AI Chatbot",
    "services.chatbot.desc": "Every website includes a smart AI chatbot to engage visitors and answer questions 24/7.",

    // Process
    "process.badge": "Our Process",
    "process.title": "From idea to launch in 4 simple steps.",
    "process.subtitle": "We've streamlined our workflow to deliver exceptional results efficiently.",
    "process.step1.title": "Idea",
    "process.step1.desc": "Share your vision with us. We'll discuss requirements, goals, and possibilities.",
    "process.step2.title": "Design",
    "process.step2.desc": "Our designers create stunning mockups tailored to your brand.",
    "process.step3.title": "Build",
    "process.step3.desc": "We develop your site with clean code and cutting-edge technology.",
    "process.step4.title": "Launch",
    "process.step4.desc": "Your website goes live with full support and optimization.",

    // Pricing
    "pricing.badge": "Pricing",
    "pricing.title": "Simple, transparent pricing.",
    "pricing.subtitle": "Choose the plan that fits your needs. No hidden fees, no surprises.",
    "pricing.toggle.sale": "Buy Website",
    "pricing.toggle.rent": "Rent Website",
    "pricing.toggle.sale.desc": "Own your website forever with a one-time payment",
    "pricing.toggle.rent.desc": "Flexible monthly payments with hosting included",
    "pricing.perProject": "/one-time",
    "pricing.perMonth": "/month",
    "pricing.starter.name": "Starter",
    "pricing.starter.price.sale": "₾1,999",
    "pricing.starter.price.rent": "₾149",
    "pricing.starter.desc": "Perfect for small businesses and personal projects.",
    "pricing.starter.f1": "Landing page",
    "pricing.starter.f2": "Mobile responsive design",
    "pricing.starter.f3": "Basic SEO optimization",
    "pricing.starter.f4": "Contact form integration",
    "pricing.starter.f5": "Free AI chatbot included",
    "pricing.starter.f6": "2 rounds of revisions",
    "pricing.pro.name": "Professional",
    "pricing.pro.price.sale": "₾4,999",
    "pricing.pro.price.rent": "₾499",
    "pricing.pro.desc": "Ideal for growing businesses and startups.",
    "pricing.pro.f1": "Multi-page website (up to 10 pages)",
    "pricing.pro.f2": "Animations & interactions",
    "pricing.pro.f3": "Advanced SEO & analytics",
    "pricing.pro.f4": "CMS integration",
    "pricing.pro.f5": "E-commerce ready",
    "pricing.pro.f6": "Free AI chatbot included",
    "pricing.pro.f7": "Unlimited revisions",
    "pricing.pro.popular": "Most Popular",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.price.sale": "Custom",
    "pricing.enterprise.price.rent": "Custom",
    "pricing.enterprise.desc": "For complex projects and large organizations.",
    "pricing.enterprise.f1": "Custom web applications",
    "pricing.enterprise.f2": "SaaS & dashboard development",
    "pricing.enterprise.f3": "API integrations",
    "pricing.enterprise.f4": "Dedicated project manager",
    "pricing.enterprise.f5": "Priority support",
    "pricing.enterprise.f6": "Advanced AI chatbot with custom training",
    "pricing.enterprise.f7": "Ongoing maintenance",
    "pricing.cta": "Get Started",
    "pricing.contact": "Contact Us",

    // CTA
    "cta.title": "Ready to build something amazing?",
    "cta.subtitle": "Stop waiting. Start creating. Let's turn your vision into a stunning reality today.",
    "cta.button": "Start Your Project Now",

    // Footer
    "footer.tagline": "Building exceptional websites for visionary brands.",
    "footer.rights": "All rights reserved.",
    "footer.startProject": "Start a Project",
  },
  ka: {
    // Navigation
    "nav.about": "ჩვენ შესახებ",
    "nav.services": "სერვისები",
    "nav.pricing": "ფასები",
    "nav.process": "პროცესი",
    "nav.contact": "კონტაქტი",
    "nav.getStarted": "დაწყება",

    // Hero
    "hero.title": "ჩვენ ვაშენებთ ნებისმიერ ვებსაიტს, რომელსაც წარმოიდგენთ.",
    "hero.subtitle": "განსაცვიფრებელი სადესანტო გვერდებიდან რთულ SaaS პლატფორმებამდე — ჩვენ ვაწვდით პიქსელზე სრულყოფილ, მაღალი ხარისხის ვებსაიტებს უპრეცედენტო სიჩქარით.",
    "hero.cta.primary": "დაიწყეთ თქვენი პროექტი",
    "hero.cta.secondary": "ნახეთ ფასები",

    // About
    "about.badge": "რას ვაკეთებთ",
    "about.title": "თქვენი ხედვა, ჩვენი ექსპერტიზა.",
    "about.subtitle": "WeBuild ამუშავებს ყველაფერს საწყისი კონცეფციიდან საბოლოო განთავსებამდე. ჩვენ ვაერთიანებთ თანამედროვე დიზაინს მძლავრ დეველოპმენტთან.",
    "about.design.title": "დიზაინი",
    "about.design.desc": "უნიკალური UI/UX დიზაინი, რომელიც ასახავს თქვენი ბრენდის არსს.",
    "about.develop.title": "დეველოპმენტი",
    "about.develop.desc": "სუფთა, მასშტაბირებადი კოდი თანამედროვე ფრეიმვორკებით.",
    "about.deploy.title": "განთავსება",
    "about.deploy.desc": "უწყვეტი გაშვება ოპტიმიზირებული შესრულებით და მხარდაჭერით.",

    // Services
    "services.badge": "სერვისები",
    "services.title": "ყველაფერი, რაც გჭირდებათ ონლაინ წარმატებისთვის.",
    "services.subtitle": "როგორი ვებსაიტიც არ უნდა დაგჭირდეთ, ჩვენ გვაქვს ექსპერტიზა განსაკუთრებული შედეგების მისაღწევად.",
    "services.anytype.title": "ნებისმიერი ტიპის საიტი",
    "services.anytype.desc": "სადესანტო გვერდები, ონლაინ მაღაზიები, SaaS, პორტფოლიოები — ყველაფერს ვაშენებთ.",
    "services.fast.title": "სწრაფი მიწოდება",
    "services.fast.desc": "გაუშვით თქვენი პროექტი კვირებში, არა თვეებში.",
    "services.custom.title": "უნიკალური დიზაინი",
    "services.custom.desc": "ინდივიდუალური დიზაინები, რომლებიც გამოარჩევს თქვენს ბრენდს.",
    "services.scalable.title": "მასშტაბირებადი გადაწყვეტილებები",
    "services.scalable.desc": "აგებულია თქვენს ბიზნესთან ერთად ზრდისთვის.",
    "services.seo.title": "SEO მზად",
    "services.seo.desc": "ოპტიმიზირებული საძიებო სისტემებისთვის და კონვერსიებისთვის.",
    "services.modern.title": "თანამედროვე ტექნოლოგია",
    "services.modern.desc": "Next.js, React, TypeScript — უახლესი ტექნოლოგია მაქსიმალური შესრულებისთვის.",
    "services.chatbot.title": "უფასო AI ჩატბოტი",
    "services.chatbot.desc": "ყველა ვებსაიტს მოყვება ჭკვიანი AI ჩატბოტი ვიზიტორების ჩასართავად და კითხვებზე საპასუხოდ 24/7.",

    // Process
    "process.badge": "ჩვენი პროცესი",
    "process.title": "იდეიდან გაშვებამდე 4 მარტივ ნაბიჯში.",
    "process.subtitle": "ჩვენ გავამარტივეთ სამუშაო პროცესი ეფექტური შედეგების მისაღწევად.",
    "process.step1.title": "იდეა",
    "process.step1.desc": "გაგვიზიარეთ თქვენი ხედვა. განვიხილავთ მოთხოვნებს და შესაძლებლობებს.",
    "process.step2.title": "დიზაინი",
    "process.step2.desc": "ჩვენი დიზაინერები ქმნიან განსაცვიფრებელ მაკეტებს.",
    "process.step3.title": "აწყობა",
    "process.step3.desc": "ვავითარებთ თქვენს საიტს სუფთა კოდით.",
    "process.step4.title": "გაშვება",
    "process.step4.desc": "თქვენი ვებსაიტი იწყებს მუშაობას სრული მხარდაჭერით.",

    // Pricing
    "pricing.badge": "ფასები",
    "pricing.title": "მარტივი, გამჭვირვალე ფასები.",
    "pricing.subtitle": "აირჩიეთ თქვენი საჭიროებების შესაბამისი გეგმა. ფარული საკომისიოების გარეშე.",
    "pricing.toggle.sale": "საიტის შეძენა",
    "pricing.toggle.rent": "საიტის გაქირავება",
    "pricing.toggle.sale.desc": "ფლობეთ თქვენი ვებსაიტი სამუდამოდ ერთჯერადი გადახდით",
    "pricing.toggle.rent.desc": "მოქნილი ყოველთვიური გადახდები ჰოსტინგის ჩათვლით",
    "pricing.perProject": "/ერთჯერადი",
    "pricing.perMonth": "/თვე",
    "pricing.starter.name": "სტარტერი",
    "pricing.starter.price.sale": "₾6,499",
    "pricing.starter.price.rent": "₾399",
    "pricing.starter.desc": "იდეალურია მცირე ბიზნესებისთვის და პირადი პროექტებისთვის.",
    "pricing.starter.f1": "სადესანტო გვერდი (5 სექციამდე)",
    "pricing.starter.f2": "მობილური ადაპტირებული დიზაინი",
    "pricing.starter.f3": "ბაზისური SEO ოპტიმიზაცია",
    "pricing.starter.f4": "საკონტაქტო ფორმა",
    "pricing.starter.f5": "უფასო AI ჩატბოტი",
    "pricing.starter.f6": "2 რევიზია",
    "pricing.pro.name": "პროფესიონალური",
    "pricing.pro.price.sale": "₾15,999",
    "pricing.pro.price.rent": "₾899",
    "pricing.pro.desc": "იდეალურია მზარდი ბიზნესებისა და სტარტაპებისთვის.",
    "pricing.pro.f1": "მრავალგვერდიანი საიტი (10 გვერდამდე)",
    "pricing.pro.f2": "მორგებული ანიმაციები",
    "pricing.pro.f3": "გაფართოებული SEO და ანალიტიკა",
    "pricing.pro.f4": "CMS ინტეგრაცია",
    "pricing.pro.f5": "ონლაინ მაღაზიის მზადყოფნა",
    "pricing.pro.f6": "უფასო AI ჩატბოტი",
    "pricing.pro.f7": "შეუზღუდავი რევიზიები",
    "pricing.pro.popular": "ყველაზე პოპულარული",
    "pricing.enterprise.name": "საწარმო",
    "pricing.enterprise.price.sale": "ინდივიდუალური",
    "pricing.enterprise.price.rent": "ინდივიდუალური",
    "pricing.enterprise.desc": "რთული პროექტებისა და დიდი ორგანიზაციებისთვის.",
    "pricing.enterprise.f1": "მორგებული ვებ აპლიკაციები",
    "pricing.enterprise.f2": "SaaS და დაშბორდის დეველოპმენტი",
    "pricing.enterprise.f3": "API ინტეგრაციები",
    "pricing.enterprise.f4": "გამოყოფილი პროექტის მენეჯერი",
    "pricing.enterprise.f5": "პრიორიტეტული მხარდაჭერა",
    "pricing.enterprise.f6": "გაფართოებული AI ჩატბოტი მორგებული ტრენინგით",
    "pricing.enterprise.f7": "მიმდინარე მოვლა",
    "pricing.cta": "დაწყება",
    "pricing.contact": "დაგვიკავშირდით",

    // CTA
    "cta.title": "მზად ხართ რაიმე საოცრის შესაქმნელად?",
    "cta.subtitle": "ნუ მოიცდით. დაიწყეთ შექმნა. მოდით გადავაქციოთ თქვენი ხედვა განსაცვიფრებელ რეალობად დღესვე.",
    "cta.button": "დაიწყეთ თქვენი პროექტი ახლავე",

    // Footer
    "footer.tagline": "ვაშენებთ განსაკუთრებულ ვებსაიტებს ხედვის მქონე ბრენდებისთვის.",
    "footer.rights": "ყველა უფლება დაცულია.",
    "footer.startProject": "დაიწყეთ პროექტი",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
