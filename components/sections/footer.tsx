"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Zap, ArrowUpRight } from "lucide-react"

const navLinks = [
  { key: "nav.about", href: "#about" },
  { key: "nav.services", href: "#services" },
  { key: "nav.pricing", href: "#pricing" },
  { key: "nav.process", href: "#process" },
]

export function Footer() {
  const { language, setLanguage, t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030014]" />
      
      {/* Top border with glow */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.3), rgba(123, 92, 255, 0.3), transparent)',
        }}
      />
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px blur-sm"
        style={{
          background: 'linear-gradient(90deg, transparent, #00F0FF, #7B5CFF, transparent)',
        }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 mb-6 group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src="/images/original-20logo-20on-20dark-20background.png"
                alt="WeBuild Logo"
                className="h-8 w-auto transition-all group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]"
              />
            </motion.a>
            <p className="text-[#7A7A9D] text-sm max-w-sm mb-8 leading-relaxed">
              {t("footer.tagline")}
            </p>

            {/* Language Switcher - Futuristic */}
            <div className="inline-flex items-center p-1 rounded-full bg-[#0A0A1B] border border-[#1A1A3E]">
              <button
                onClick={() => setLanguage("en")}
                className={`relative px-3 py-1.5 text-xs font-mono rounded-full transition-all duration-300 ${
                  language === "en"
                    ? "text-[#030014]"
                    : "text-[#7A7A9D] hover:text-[#ECEBFF]"
                }`}
              >
                {language === "en" && (
                  <motion.div
                    layoutId="footerLang"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #00F0FF 0%, #7B5CFF 100%)',
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">EN</span>
              </button>
              <button
                onClick={() => setLanguage("ka")}
                className={`relative px-3 py-1.5 text-xs font-mono rounded-full transition-all duration-300 ${
                  language === "ka"
                    ? "text-[#030014]"
                    : "text-[#7A7A9D] hover:text-[#ECEBFF]"
                }`}
              >
                {language === "ka" && (
                  <motion.div
                    layoutId="footerLang"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #00F0FF 0%, #7B5CFF 100%)',
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">KA</span>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#ECEBFF] font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF]" style={{ boxShadow: '0 0 10px #00F0FF' }} />
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-[#7A7A9D] hover:text-[#00F0FF] text-sm transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#00F0FF] transition-all duration-300" />
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#ECEBFF] font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7B5CFF]" style={{ boxShadow: '0 0 10px #7B5CFF' }} />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@webuild.io"
                  className="text-[#7A7A9D] hover:text-[#00F0FF] text-sm transition-colors duration-300 font-mono"
                >
                  COMING SOON
                </a>
              </li>
              <li>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300"
                  style={{
                    color: '#00F0FF',
                    background: 'rgba(0, 240, 255, 0.1)',
                    border: '1px solid rgba(0, 240, 255, 0.2)',
                  }}
                  whileHover={{
                    borderColor: '#00F0FF',
                    boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
                  }}
                >
                  <Zap className="w-4 h-4" />
                  {t("footer.startProject")}
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            borderTop: '1px solid rgba(26, 26, 62, 0.8)',
          }}
        >
          <p className="text-[#7A7A9D] text-sm font-mono">
            <span className="text-[#00F0FF]">&copy;</span> {currentYear} WeBuild. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#7A7A9D] hover:text-[#ECEBFF] text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#7A7A9D] hover:text-[#ECEBFF] text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
        
        {/* Decorative bottom glow */}
        {/* <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-50 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at bottom, rgba(0, 240, 255, 0.1) 0%, transparent 70%)',
          }}
        /> */}
      </div>
    </footer>
  )
}
