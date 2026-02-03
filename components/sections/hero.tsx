"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { ArrowRight, Zap } from "lucide-react";
import { useEffect, useState } from "react";

// Cyber grid component
function CyberGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Perspective Grid Floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[60vh]"
        style={{
          background: `
            linear-gradient(to top, rgba(0, 240, 255, 0.1) 0%, transparent 100%),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 99px,
              rgba(0, 240, 255, 0.15) 99px,
              rgba(0, 240, 255, 0.15) 100px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 99px,
              rgba(0, 240, 255, 0.15) 99px,
              rgba(0, 240, 255, 0.15) 100px
            )
          `,
          backgroundSize: "100px 100px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center top",
          maskImage: "linear-gradient(to top, black 0%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 80%)",
        }}
      />
    </div>
  );
}

// Floating data particles
function DataParticles() {
  const particles = [...Array(30)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
    size: Math.random() > 0.5 ? "w-1 h-1" : "w-0.5 h-0.5",
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.size} rounded-full`}
          style={{
            left: `${particle.x}%`,
            background: particle.id % 2 === 0 ? "#00F0FF" : "#7B5CFF",
            boxShadow:
              particle.id % 2 === 0
                ? "0 0 10px #00F0FF, 0 0 20px #00F0FF"
                : "0 0 10px #7B5CFF, 0 0 20px #7B5CFF",
          }}
          animate={{
            y: ["-10vh", "110vh"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Glowing orbs
function GlowingOrbs() {
  return (
    <>
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(123, 92, 255, 0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Center pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 50%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}

// Animated text reveal
function GlitchText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>{children}</span>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(
    useTransform(mouseX, [0, 1], [-20, 20]),
    springConfig
  );
  const glowY = useSpring(
    useTransform(mouseY, [0, 1], [-20, 20]),
    springConfig
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#030014]" />
      <CyberGrid />
      <GlowingOrbs />
      <DataParticles />

      {/* Scan line effect */}
      <div className="absolute inset-0 bg-scan-lines pointer-events-none opacity-30" />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(3, 0, 20, 0.8) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Futuristic Badge */}
          <div className="flex flex-col items-center">
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(123, 92, 255, 0.1) 100%)",
                border: "1px solid rgba(0, 240, 255, 0.3)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(30, 32, 52, 1), transparent)",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["200% 0", "-200% 0"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <Zap className="w-4 h-4 text-[#7b5cff]" />
              <span className="text-[#7b5cff] text-sm font-medium tracking-wider uppercase">
                Next-Gen Web Development
              </span>
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(123, 92, 255, 0.1) 100%)",
                border: "1px solid rgba(0, 240, 255, 0.3)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(30, 32, 52, 1), transparent)",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["200% 0", "-200% 0"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <Zap className="w-4 h-4 text-[#7b5cff]" />
              <span className="text-[#7b5cff] text-sm font-medium tracking-wider uppercase">
                DEMO
              </span>
            </motion.div>
          </div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-[#ECEBFF] block">
              {t("hero.title").split(" ").slice(0, 2).join(" ")}
            </span>
            <span className="relative inline-block pb-2">
              <span className="text-gradient-cyan pb-2">
                {t("hero.title").split(" ").slice(2).join(" ") || "The Future"}
              </span>
              {/* Underline glow */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #7B5CFF, transparent)",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-[#7A7A9D] max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Primary CTA - Cyber style */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-linear-to-r from-[#00F0FF] to-[#7B5CFF] rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />
              <Button
                size="lg"
                className="relative bg-[#030014] hover:bg-[#030014] text-[#7B5CFF] font-semibold px-10 py-7 text-lg rounded-full border border-[#00F0FF] transition-all duration-300 group overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-[#00F0FF]/20 to-[#7B5CFF]/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative flex items-center gap-2">
                  {t("hero.cta.primary")}
                  <ArrowRight className="w-5! h-10! transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-[#1A1A3E] hover:border-[#7B5CFF] text-[#ECEBFF] hover:text-white font-semibold px-10 py-7 text-lg rounded-full transition-all duration-300 hover:bg-[#7B5CFF]/10 bg-transparent hover:shadow-[0_0_30px_rgba(123,92,255,0.3)]"
              >
                {t("hero.cta.secondary")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Tech stack indicators */}
          {/* <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {['Next.js', 'React', 'TypeScript', 'Tailwind'].map((tech, i) => (
              <motion.div
                key={tech}
                className="px-4 py-2 rounded-lg bg-[#0A0A1B]/50 border border-[#1A1A3E] text-[#7A7A9D] text-sm font-mono"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                whileHover={{ 
                  borderColor: '#00F0FF',
                  color: '#00F0FF',
                  boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)',
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-[-60] left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-[#7b5cff]/50 flex justify-center pt-2"
            style={{ boxShadow: "0 0 10px rgba(0, 240, 255, 0.3)" }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-[#7b5cff] rounded-full"
              animate={{ opacity: [0.5, 1, 0.5], y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
