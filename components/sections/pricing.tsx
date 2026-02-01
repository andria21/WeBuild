"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Check, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

type PricingMode = "sale" | "rent"

const plans = [
  {
    nameKey: "pricing.starter.name",
    salePriceKey: "pricing.starter.price.sale",
    rentPriceKey: "pricing.starter.price.rent",
    descKey: "pricing.starter.desc",
    features: [
      "pricing.starter.f1",
      "pricing.starter.f2",
      "pricing.starter.f3",
      "pricing.starter.f4",
      "pricing.starter.f5",
      "pricing.starter.f6",
    ],
    popular: false,
    ctaKey: "pricing.cta",
    color: "#00F0FF",
  },
  {
    nameKey: "pricing.pro.name",
    salePriceKey: "pricing.pro.price.sale",
    rentPriceKey: "pricing.pro.price.rent",
    descKey: "pricing.pro.desc",
    features: [
      "pricing.pro.f1",
      "pricing.pro.f2",
      "pricing.pro.f3",
      "pricing.pro.f4",
      "pricing.pro.f5",
      "pricing.pro.f6",
      "pricing.pro.f7",
    ],
    popular: true,
    ctaKey: "pricing.cta",
    color: "#7B5CFF",
  },
  {
    nameKey: "pricing.enterprise.name",
    salePriceKey: "pricing.enterprise.price.sale",
    rentPriceKey: "pricing.enterprise.price.rent",
    descKey: "pricing.enterprise.desc",
    features: [
      "pricing.enterprise.f1",
      "pricing.enterprise.f2",
      "pricing.enterprise.f3",
      "pricing.enterprise.f4",
      "pricing.enterprise.f5",
      "pricing.enterprise.f6",
      "pricing.enterprise.f7",
    ],
    popular: false,
    ctaKey: "pricing.contact",
    color: "#FF00E5",
  },
]

export function Pricing() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [pricingMode, setPricingMode] = useState<PricingMode>("sale")

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#030014] via-[#050520] to-[#030014]" />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-125 h-125 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(123, 92, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-100 h-100 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(123, 92, 255, 0.1) 100%)',
              border: '1px solid rgba(0, 240, 255, 0.2)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4 text-[#00F0FF]" />
            <span className="text-[#00F0FF] text-sm font-medium tracking-wider uppercase">
              {t("pricing.badge")}
            </span>
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[#ECEBFF] pb-2">{t("pricing.title").split(' ').slice(0, 1).join(' ')} </span>
            <span className="text-gradient-cyan pb-2">{t("pricing.title").split(' ').slice(1).join(' ')}</span>
          </motion.h2>
          
          <motion.p
            className="text-[#7A7A9D] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t("pricing.subtitle")}
          </motion.p>

          {/* Pricing Toggle - Futuristic */}
          <motion.div
            className="inline-flex items-center p-1.5 rounded-full bg-[#0A0A1B] border border-[#1A1A3E]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              boxShadow: '0 0 30px rgba(0, 240, 255, 0.1)',
            }}
          >
            <button
              onClick={() => setPricingMode("sale")}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                pricingMode === "sale"
                  ? "text-[#030014]"
                  : "text-[#7A7A9D] hover:text-[#ECEBFF]"
              }`}
            >
              {pricingMode === "sale" && (
                <motion.div
                  layoutId="pricingToggle"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #00F0FF 0%, #7B5CFF 100%)',
                    boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                {t("pricing.toggle.sale")}
              </span>
            </button>
            <button
              onClick={() => setPricingMode("rent")}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                pricingMode === "rent"
                  ? "text-[#030014]"
                  : "text-[#7A7A9D] hover:text-[#ECEBFF]"
              }`}
            >
              {pricingMode === "rent" && (
                <motion.div
                  layoutId="pricingToggle"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #00F0FF 0%, #7B5CFF 100%)',
                    boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{t("pricing.toggle.rent")}</span>
            </button>
          </motion.div>

          {/* Toggle Description */}
          <motion.p
            className="text-sm mt-4"
            style={{ color: '#00F0FF' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {pricingMode === "sale" ? t("pricing.toggle.sale.desc") : t("pricing.toggle.rent.desc")}
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.nameKey}
              className={`group relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider z-10"
                  style={{
                    background: 'linear-gradient(135deg, #00F0FF 0%, #7B5CFF 100%)',
                    color: '#030014',
                    boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)',
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {t("pricing.pro.popular")}
                </motion.div>
              )}

              {/* Card glow */}
              {plan.popular && (
                <div 
                  className="absolute -inset-1 rounded-3xl opacity-30 blur-xl"
                  style={{ background: `linear-gradient(135deg, ${plan.color} 0%, #7B5CFF 100%)` }}
                />
              )}

              <div
                className={`relative h-full p-8 rounded-2xl transition-all duration-500 overflow-hidden ${
                  plan.popular
                    ? 'bg-[#0A0A1B]/90'
                    : 'bg-[#0A0A1B]/80'
                }`}
                style={{
                  border: plan.popular 
                    ? `1px solid ${plan.color}50`
                    : '1px solid rgba(26, 26, 62, 0.8)',
                }}
              >
                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${plan.color}20 0%, transparent 50%, ${plan.color}20 100%)`,
                  }}
                />

                {/* Data streams for popular */}
                {plan.popular && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-px h-16"
                        style={{
                          left: `${15 + i * 25}%`,
                          background: `linear-gradient(to bottom, transparent, ${plan.color}, transparent)`,
                        }}
                        animate={{
                          y: ['-100%', '800%'],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: 'linear',
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Plan Name */}
                <h3 
                  className="relative text-xl font-bold mb-2"
                  style={{ color: plan.color }}
                >
                  {t(plan.nameKey)}
                </h3>

                {/* Price */}
                <div className="relative flex items-baseline gap-2 mb-4">
                  <motion.span
                    key={`${plan.nameKey}-${pricingMode}`}
                    className="text-5xl font-bold text-[#ECEBFF] break-all"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {t(pricingMode === "sale" ? plan.salePriceKey : plan.rentPriceKey)}
                  </motion.span>
                  {plan.nameKey !== "pricing.enterprise.name" && (
                    <span className="text-[#7A7A9D] text-sm font-mono">
                      {pricingMode === "sale" ? t("pricing.perProject") : t("pricing.perMonth")}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="relative text-[#7A7A9D] text-sm mb-6">
                  {t(plan.descKey)}
                </p>

                {/* Features */}
                <ul className="relative space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div 
                        className="shrink-0 w-5 h-5 rounded-md flex items-center justify-center mt-0.5"
                        style={{
                          background: `${plan.color}20`,
                          border: `1px solid ${plan.color}40`,
                        }}
                      >
                        <Check className="w-3 h-3" style={{ color: plan.color }} />
                      </div>
                      <span className="text-[#7A7A9D] text-sm">{t(feature)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div 
                      className="absolute -inset-1 rounded-xl blur opacity-50"
                      style={{ background: `linear-gradient(135deg, ${plan.color} 0%, #7B5CFF 100%)` }}
                    />
                  )}
                  <Button
                    className={`relative w-full py-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "text-[#030014]"
                        : "bg-[#0F0F2D] hover:bg-[#1A1A3E] text-[#ECEBFF]"
                    }`}
                    style={plan.popular ? {
                      background: `linear-gradient(135deg, ${plan.color} 0%, #7B5CFF 100%)`,
                    } : {
                      border: `1px solid ${plan.color}30`,
                    }}
                  >
                    {t(plan.ctaKey)}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
