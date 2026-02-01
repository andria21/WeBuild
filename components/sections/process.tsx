"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, PenTool, Hammer, Rocket, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    titleKey: "process.step1.title",
    descKey: "process.step1.desc",
    color: "#00F0FF",
  },
  {
    icon: PenTool,
    number: "02",
    titleKey: "process.step2.title",
    descKey: "process.step2.desc",
    color: "#7B5CFF",
  },
  {
    icon: Hammer,
    number: "03",
    titleKey: "process.step3.title",
    descKey: "process.step3.desc",
    color: "#FF00E5",
  },
  {
    icon: Rocket,
    number: "04",
    titleKey: "process.step4.title",
    descKey: "process.step4.desc",
    color: "#00F0FF",
  },
]

export function Process() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030014]" />
      
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(123, 92, 255, 0.1) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
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
              background: 'linear-gradient(135deg, rgba(255, 0, 229, 0.1) 0%, rgba(123, 92, 255, 0.1) 100%)',
              border: '1px solid rgba(255, 0, 229, 0.2)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ArrowRight className="w-4 h-4 text-[#FF00E5]" />
            <span className="text-[#FF00E5] text-sm font-medium tracking-wider uppercase">
              {t("process.badge")}
            </span>
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[#ECEBFF] pb-2">{t("process.title").split(' ').slice(0, 2).join(' ')} </span>
            <span className="text-gradient-purple pb-2">{t("process.title").split(' ').slice(2).join(' ')}</span>
          </motion.h2>
          
          <motion.p
            className="text-[#7A7A9D] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t("process.subtitle")}
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2">
            <div className="relative w-full h-full">
              {/* Base line */}
              <div className="absolute inset-0 bg-[#1A1A3E]" />
              {/* Animated glow */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, #00F0FF, #7B5CFF, #FF00E5, transparent)',
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['100% 0', '-100% 0'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              >
                {/* Card */}
                <div className="group relative p-8 rounded-2xl bg-[#0A0A1B]/80 border border-[#1A1A3E] transition-all duration-500 hover:border-opacity-0">
                  {/* Animated border on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}30 0%, transparent 50%, ${step.color}30 100%)`,
                    }}
                  />
                  
                  {/* Step Number - Futuristic */}
                  <motion.div
                    className="absolute -top-5 left-8 flex items-center gap-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 15,
                      delay: 0.5 + index * 0.15 
                    }}
                  >
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm"
                      style={{
                        background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}80 100%)`,
                        color: '#030014',
                        boxShadow: `0 0 30px ${step.color}50`,
                      }}
                    >
                      {step.number}
                    </div>
                    {/* Connection dot */}
                    <div 
                      className="hidden lg:block w-3 h-3 rounded-full animate-pulse"
                      style={{
                        background: step.color,
                        boxShadow: `0 0 10px ${step.color}`,
                      }}
                    />
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 mt-4 transition-all duration-500"
                    style={{
                      background: `${step.color}10`,
                      border: `1px solid ${step.color}30`,
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 40px ${step.color}30`,
                    }}
                  >
                    <step.icon 
                      className="w-8 h-8"
                      style={{ color: step.color }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="relative text-xl font-bold text-[#ECEBFF] mb-3">
                    {t(step.titleKey)}
                  </h3>
                  <p className="relative text-[#7A7A9D] text-sm leading-relaxed">
                    {t(step.descKey)}
                  </p>

                  {/* Hover glow */}
                  <div 
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ backgroundColor: step.color }}
                  />
                </div>

                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 -bottom-4 w-[2px] h-8">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-[#1A1A3E]" />
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to bottom, ${step.color}, ${steps[index + 1].color})`,
                        }}
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
