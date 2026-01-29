"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const navItems = [
  { key: "nav.about", href: "#about" },
  { key: "nav.services", href: "#services" },
  { key: "nav.pricing", href: "#pricing" },
  { key: "nav.process", href: "#process" },
  { key: "nav.contact", href: "#contact" },
]

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#030014]/80 backdrop-blur-2xl border-b border-custom-one/10"
          : "bg-transparent"
      }`}
    >
      {/* Animated top border */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.5), transparent)',
        }}
        animate={{
          opacity: isScrolled ? 1 : 0,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src="/images/logo.png"
              alt="WeBuild Logo"
              className="h-34 w-auto transition-all group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="relative px-4 py-2 text-[#7A7A9D] hover:text-custom-one transition-colors text-sm font-medium group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="relative z-10">{t(item.key)}</span>
                {/* Hover background */}
                <motion.span 
                  className="absolute inset-0 rounded-lg bg-custom-one/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="navHover"
                />
                {/* Bottom line */}
                <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-custom-one scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher - Futuristic */}
            <motion.div
              className="flex items-center p-1 rounded-full bg-[#0A0A1B] border border-[#1A1A3E]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
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
                    layoutId="langSwitch"
                    className="absolute inset-0 bg-custom-one rounded-full"
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
                    layoutId="langSwitch"
                    className="absolute inset-0 bg-custom-one rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">KA</span>
              </button>
            </motion.div>

            {/* CTA Button - Cyber style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-custom-one to-[#7B5CFF] rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity" />
              <Button
                className="relative bg-[#030014] hover:bg-[#030014] text-custom-one font-medium px-6 py-2 rounded-full border border-custom-one/50 transition-all duration-300 group-hover:border-custom-one"
              >
                <Zap className="w-4 h-4 mr-2" />
                {t("nav.getStarted")}
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative p-2 text-custom-one"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 rounded-lg border border-custom-one/30" />
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#030014]/95 backdrop-blur-2xl border-b border-custom-one/10"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  className="block text-[#7A7A9D] hover:text-custom-one transition-colors text-base font-medium py-3 px-4 rounded-lg hover:bg-custom-one/5 border-l-2 border-transparent hover:border-custom-one"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </motion.a>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 py-4 px-4">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-2 text-sm font-mono rounded-lg transition-all border ${
                    language === "en"
                      ? "bg-custom-one text-[#030014] border-custom-one"
                      : "bg-transparent text-[#7A7A9D] border-[#1A1A3E]"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("ka")}
                  className={`px-4 py-2 text-sm font-mono rounded-lg transition-all border ${
                    language === "ka"
                      ? "bg-custom-one text-[#030014] border-custom-one"
                      : "bg-transparent text-[#7A7A9D] border-[#1A1A3E]"
                  }`}
                >
                  ქართული
                </button>
              </div>

              <div className="px-4">
                <Button
                  className="w-full bg-gradient-to-r from-custom-one to-[#7B5CFF] hover:opacity-90 text-[#030014] font-semibold py-6 rounded-xl"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {t("nav.getStarted")}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
