"use client"

import { motion } from "motion/react"
import { Particles } from "@/components/ui/particles"
import { WordRotate } from "@/components/ui/word-rotate"
import { BorderBeam } from "@/components/ui/border-beam"
import { IMPULSE_HERO } from "@/lib/config/impulse"
import { cn } from "@/lib/utils"

/**
 * Hero Section - Variant 1: Particles + Cinematic Typography
 * Full-screen immersive hero with floating particles
 */
export function ImpulseHeroV1() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#67bed9"
        refresh
      />
      
      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Content */}
      <div className="z-10 flex flex-col items-center gap-8 text-center px-6">
        {/* Edition Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="mono text-xs tracking-widest text-accent">
            {IMPULSE_HERO.tagline} • {IMPULSE_HERO.edition}
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl sm:text-8xl md:text-9xl font-light tracking-tighter"
        >
          <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            {IMPULSE_HERO.title}
          </span>
        </motion.h1>

        {/* Rotating Words */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-3 text-2xl md:text-3xl font-light"
        >
          <span className="text-muted-foreground">Time to</span>
          <WordRotate
            words={IMPULSE_HERO.rotatingWords}
            className="text-accent"
          />
        </motion.div>

        {/* Date & Venue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-4"
        >
          <span className="mono text-sm text-muted-foreground">
            {IMPULSE_HERO.date}
          </span>
          <span className="hidden sm:block w-1 h-1 bg-accent rounded-full" />
          <span className="mono text-sm text-muted-foreground">
            {IMPULSE_HERO.venue}
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
        >
          {IMPULSE_HERO.registrationOpen ? (
            <a
              href={IMPULSE_HERO.registerUrl}
              className="cursor-target relative group px-8 py-4 bg-accent text-background font-medium hover:bg-accent/90 transition-colors"
            >
              Register Now
              <BorderBeam size={100} duration={8} />
            </a>
          ) : (
            <div className="relative px-8 py-4 border border-border">
              <span className="mono text-sm">Registration Opening Soon</span>
              <span
                className="absolute inset-0 -z-10 blur-xl opacity-50"
                style={{
                  background: "radial-gradient(circle at center, var(--accent), transparent 70%)",
                  animation: "pulseGlow 2.5s ease-in-out infinite",
                }}
              />
            </div>
          )}
          <a
            href="#about"
            className="cursor-target px-8 py-4 border border-border hover:border-accent/50 hover:text-accent transition-all mono text-sm"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-muted-foreground/30 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

/**
 * Hero Section - Variant 2: Minimal + Grid Background
 * Cleaner, more editorial approach
 */
export function ImpulseHeroV2() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(103, 190, 217, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(103, 190, 217, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[160px]" />

      {/* Content */}
      <div className="z-10 container mx-auto px-6">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mono text-xs tracking-widest text-muted-foreground block"
            >
              {IMPULSE_HERO.edition} EDITION
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-7xl sm:text-8xl md:text-[10rem] font-light tracking-tighter leading-none"
            >
              {IMPULSE_HERO.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-lg"
            >
              {IMPULSE_HERO.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <div className="h-[1px] w-16 bg-accent" />
              <span className="mono text-xs text-muted-foreground">
                {IMPULSE_HERO.date}
              </span>
            </motion.div>
          </div>

          {/* Right - Event Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="relative border border-border bg-background/50 backdrop-blur-sm p-8 space-y-6">
              <BorderBeam size={150} duration={10} />
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="mono text-xs text-muted-foreground">DURATION</span>
                  <span className="text-lg font-light">48 Hours</span>
                </div>
                <div className="h-[1px] bg-border" />
                <div className="flex justify-between items-center">
                  <span className="mono text-xs text-muted-foreground">VENUE</span>
                  <span className="text-lg font-light">MAIT Campus</span>
                </div>
                <div className="h-[1px] bg-border" />
                <div className="flex justify-between items-center">
                  <span className="mono text-xs text-muted-foreground">PRIZE POOL</span>
                  <span className="text-lg font-light text-accent">₹1,00,000+</span>
                </div>
              </div>

              {IMPULSE_HERO.registrationOpen ? (
                <a
                  href={IMPULSE_HERO.registerUrl}
                  className="cursor-target block w-full text-center py-4 bg-accent text-background font-medium hover:bg-accent/90 transition-colors"
                >
                  Register Now
                </a>
              ) : (
                <div className="w-full text-center py-4 border border-accent/30 text-accent mono text-sm">
                  Coming Soon
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/**
 * Hero Section - Variant 3: Split Screen with Image Placeholder
 * Image-forward design
 */
export function ImpulseHeroV3() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="container mx-auto px-6 py-24 lg:py-0 lg:min-h-screen flex items-center">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <span className="mono text-xs tracking-widest text-accent">
                {IMPULSE_HERO.tagline}
              </span>
              <h1 className="text-6xl md:text-7xl font-light tracking-tighter">
                {IMPULSE_HERO.title}
                <span className="text-accent">'26</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {IMPULSE_HERO.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-muted-foreground">{IMPULSE_HERO.date}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-muted-foreground">{IMPULSE_HERO.venue}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href={IMPULSE_HERO.registerUrl}
                className="cursor-target px-8 py-4 bg-white text-black font-medium hover:bg-white/90 transition-colors"
              >
                Register Now
              </a>
              <a
                href="#schedule"
                className="cursor-target px-8 py-4 border border-border hover:border-white/40 transition-colors"
              >
                View Schedule
              </a>
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="relative aspect-[4/3] bg-muted/10 border border-border overflow-hidden group">
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/50">
                <div className="h-20 w-20 border-2 border-dashed border-muted-foreground/30 flex items-center justify-center mb-4">
                  <span className="text-4xl">📷</span>
                </div>
                <p className="mono text-xs">Hero Image Placeholder</p>
                <p className="mono text-xs text-muted-foreground/30 mt-1">1200 x 900</p>
              </div>

              {/* Corner Accents */}
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-accent" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-accent" />
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
