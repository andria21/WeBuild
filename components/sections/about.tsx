"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Palette, Code, Rocket, Hexagon } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const features = [
  {
    icon: Palette,
    titleKey: "about.design.title",
    descKey: "about.design.desc",
    color: "#00F0FF",
    delay: 0,
  },
  {
    icon: Code,
    titleKey: "about.develop.title",
    descKey: "about.develop.desc",
    color: "#7B5CFF",
    delay: 0.1,
  },
  {
    icon: Rocket,
    titleKey: "about.deploy.title",
    descKey: "about.deploy.desc",
    color: "#FF00E5",
    delay: 0.2,
  },
]

// Hexagonal background pattern
function HexPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon 
              points="25,0 50,14.4 50,43.4 25,57.7 0,43.4 0,14.4" 
              fill="none" 
              stroke="#00F0FF" 
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  )
}

export function About() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030014]" />
      <HexPattern />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-150 rounded-full" 
        style={{ background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, transparent 70%)', filter: 'blur(80px)' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
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
            <Hexagon className="w-4 h-4 text-[#7b5cff]" />
            <span className="text-[#7b5cff] text-sm font-medium tracking-wider uppercase">
              {t("about.badge")}
            </span>
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[#ECEBFF]">{t("about.title").split(' ').slice(0, 2).join(' ')} </span>
            <span className="text-gradient-cyan">{t("about.title").split(' ').slice(2).join(' ')}</span>
          </motion.h2>
          
          <motion.p
            className="text-[#7A7A9D] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t("about.subtitle")}
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + feature.delay }}
            >
              {/* Card glow effect */}
              <div 
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl"
                style={{ background: feature.color }}
              />
              
              <div className="relative h-full p-8 rounded-2xl bg-[#0A0A1B]/80 border border-[#1A1A3E] overflow-hidden transition-all duration-500 group-hover:border-opacity-0">
                {/* Animated border */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}40 0%, transparent 50%, ${feature.color}40 100%)`,
                  }}
                />
                
                {/* Scan line effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20"
                  style={{
                    background: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${feature.color}20 2px, ${feature.color}20 4px)`,
                  }}
                />
                
                {/* Icon */}
                <motion.div
                  className="relative w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20 0%, transparent 100%)`,
                    border: `1px solid ${feature.color}40`,
                    boxShadow: `0 0 20px ${feature.color}20`,
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 40px ${feature.color}40`,
                  }}
                >
                  <feature.icon 
                    className="w-8 h-8 transition-all duration-500"
                    style={{ color: feature.color }}
                  />
                </motion.div>

                {/* Content */}
                <h3 
                  className="relative text-2xl font-bold mb-4 transition-colors duration-300"
                  style={{ color: '#ECEBFF' }}
                >
                  {t(feature.titleKey)}
                </h3>
                <p className="relative text-[#7A7A9D] leading-relaxed text-base">
                  {t(feature.descKey)}
                </p>

                {/* Corner accent */}
                <div 
                  className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${feature.color}10 0%, transparent 70%)`,
                  }}
                />
                
                {/* Number indicator */}
                <div 
                  className="absolute top-4 right-4 text-6xl font-bold opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ color: feature.color }}
                >
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
