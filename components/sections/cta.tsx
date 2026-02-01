"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Zap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

// Animated data streams
function DataStreams() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px"
          style={{
            left: `${5 + i * 5}%`,
            height: '100px',
            background: `linear-gradient(to bottom, transparent, ${i % 2 === 0 ? '#00F0FF' : '#7B5CFF'}50, transparent)`,
          }}
          animate={{
            y: ['-100%', '1000%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

// Glowing ring
function GlowRing() {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full"
      style={{
        border: '1px solid rgba(0, 240, 255, 0.2)',
        boxShadow: '0 0 60px rgba(0, 240, 255, 0.1), inset 0 0 60px rgba(0, 240, 255, 0.05)',
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.6, 0.3],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}

export function CTA() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030014]" />
      
      {/* Gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.1) 0%, transparent 50%)',
        }}
      />
      
      <GlowRing />
      <DataStreams />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 240, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Icon Badge */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-10 relative"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(123, 92, 255, 0.1) 100%)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              boxShadow: '0 0 40px rgba(0, 240, 255, 0.2)',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
          >
            {/* Animated ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                border: '1px solid rgba(0, 240, 255, 0.5)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Sparkles className="w-10 h-10 text-[#00F0FF]" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[#ECEBFF] pb-2">{t("cta.title").split(' ').slice(0, 2).join(' ')} </span>
            <span className="text-gradient-cyan pb-2">{t("cta.title").split(' ').slice(2).join(' ')}</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-[#7A7A9D] max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t("cta.subtitle")}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block relative group"
            >
              {/* Glow effect */}
              <div 
                className="absolute -inset-2 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #00F0FF 0%, #7B5CFF 100%)' }}
              />
              
              <Button
                size="lg"
                className="relative px-12 py-8 text-lg rounded-full font-bold transition-all duration-300 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #00F0FF 0%, #7B5CFF 100%)',
                  color: '#030014',
                  boxShadow: '0 0 40px rgba(0, 240, 255, 0.5)',
                }}
              >
                {/* Animated shine */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                  animate={{ translateX: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative flex items-center gap-3">
                  <Zap className="w-5 h-5" />
                  {t("cta.button")}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { label: 'Fast Response', color: '#00F0FF' },
              { label: '100+ Projects', color: '#7B5CFF' },
              { label: '5-Star Reviews', color: '#FF00E5' },
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                className="flex items-center gap-3 px-4 py-2 rounded-full"
                style={{
                  background: `${item.color}10`,
                  border: `1px solid ${item.color}30`,
                }}
                whileHover={{
                  borderColor: item.color,
                  boxShadow: `0 0 20px ${item.color}30`,
                }}
              >
                <motion.span 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                  animate={{
                    boxShadow: [`0 0 5px ${item.color}`, `0 0 15px ${item.color}`, `0 0 5px ${item.color}`],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[#7A7A9D]">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
