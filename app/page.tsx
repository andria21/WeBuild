"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { Pricing } from "@/components/sections/pricing"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#0F1020]">
        <Header />
        <Hero />
        <About />
        <Services />
        <Process />
        <Pricing />
        <CTA />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
