"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Zap, Sparkles, TrendingUp, Search, Cpu, MessageSquareText, Layers } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const services = [
  {
    icon: Globe,
    titleKey: "services.anytype.title",
    descKey: "services.anytype.desc",
    color: "#00F0FF",
    gridSpan: "col-span-1",
  },
  {
    icon: Zap,
    titleKey: "services.fast.title",
    descKey: "services.fast.desc",
    color: "#7B5CFF",
    gridSpan: "col-span-1",
  },
  {
    icon: Sparkles,
    titleKey: "services.custom.title",
    descKey: "services.custom.desc",
    color: "#FF00E5",
    gridSpan: "col-span-1",
  },
  {
    icon: TrendingUp,
    titleKey: "services.scalable.title",
    descKey: "services.scalable.desc",
    color: "#00F0FF",
    gridSpan: "col-span-1",
  },
  {
    icon: Search,
    titleKey: "services.seo.title",
    descKey: "services.seo.desc",
    color: "#7B5CFF",
    gridSpan: "col-span-1",
  },
  {
    icon: Cpu,
    titleKey: "services.modern.title",
    descKey: "services.modern.desc",
    color: "#FF00E5",
    gridSpan: "col-span-1",
  },
  {
    icon: MessageSquareText,
    titleKey: "services.chatbot.title",
    descKey: "services.chatbot.desc",
    color: "#00F0FF",
    isFeatured: true,
    gridSpan: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
]

// Animated circuit lines
function CircuitLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px"
          style={{
            width: '100%',
            top: `${20 + i * 20}%`,
            background: 'linear-gradient(90deg, transparent, #00F0FF, transparent)',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export function Services() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#030014] via-[#050520] to-[#030014]" />
      <CircuitLines />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
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
              background: 'linear-gradient(135deg, rgba(123, 92, 255, 0.1) 0%, rgba(0, 240, 255, 0.1) 100%)',
              border: '1px solid rgba(123, 92, 255, 0.2)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Layers className="w-4 h-4 text-[#7B5CFF]" />
            <span className="text-[#7B5CFF] text-sm font-medium tracking-wider uppercase">
              {t("services.badge")}
            </span>
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[#ECEBFF] pb-2">{t("services.title").split(' ').slice(0, 1).join(' ')} </span>
            <span className="text-gradient-purple pb-2">{t("services.title").split(' ').slice(1).join(' ')}</span>
          </motion.h2>
          
          <motion.p
            className="text-[#7A7A9D] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t("services.subtitle")}
          </motion.p>
        </motion.div>

        {/* Services Grid - Bento Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              className={`group relative ${service.gridSpan}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
            >
              <div 
                className={`relative h-full p-6 sm:p-8 rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1 ${
                  service.isFeatured 
                    ? 'bg-linear-to-br from-[#00F0FF]/10 via-[#0A0A1B] to-[#7B5CFF]/10' 
                    : 'bg-[#0A0A1B]/80'
                }`}
                style={{
                  border: service.isFeatured 
                    ? '1px solid rgba(0, 240, 255, 0.3)' 
                    : '1px solid rgba(26, 26, 62, 0.8)',
                }}
              >
                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}20 0%, transparent 50%, ${service.color}20 100%)`,
                  }}
                />

                {/* Featured badge */}
                {service.isFeatured && (
                  <motion.div
                    className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{
                      background: 'linear-gradient(135deg, #00F0FF 0%, #7B5CFF 100%)',
                      color: '#030014',
                    }}
                    animate={{
                      boxShadow: ['0 0 20px rgba(0, 240, 255, 0.3)', '0 0 40px rgba(0, 240, 255, 0.5)', '0 0 20px rgba(0, 240, 255, 0.3)'],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    FREE
                  </motion.div>
                )}

                {/* Icon */}
                <motion.div
                  className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500"
                  style={{
                    background: `${service.color}15`,
                    border: `1px solid ${service.color}30`,
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 30px ${service.color}30`,
                  }}
                >
                  <service.icon 
                    className="w-7 h-7"
                    style={{ color: service.color }}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-[#ECEBFF] mb-3 group-hover:text-white transition-colors">
                  {t(service.titleKey)}
                </h3>
                <p className="relative text-[#7A7A9D] text-sm leading-relaxed">
                  {t(service.descKey)}
                </p>

                {/* Corner glow */}
                <div 
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundColor: service.color }}
                />

                {/* Data stream effect for featured */}
                {service.isFeatured && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-px h-20"
                        style={{
                          left: `${25 + i * 25}%`,
                          background: `linear-gradient(to bottom, transparent, ${service.color}, transparent)`,
                        }}
                        animate={{
                          y: ['-100%', '500%'],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: 'linear',
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
