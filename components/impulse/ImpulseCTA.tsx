"use client"

import { motion } from "motion/react"
import { BorderBeam } from "@/components/ui/border-beam"
import { Particles } from "@/components/ui/particles"
import { IMPULSE_HERO, IMPULSE_CONTENT } from "@/lib/config/impulse"
import { cn } from "@/lib/utils"

/**
 * CTA Section - Variant 1: Full Width Banner
 * Bold call-to-action with particles
 */
export function ImpulseCTAV1() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Particles */}
      <Particles
        className="absolute inset-0"
        quantity={50}
        ease={80}
        color="#67bed9"
        refresh
      />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter">
            Ready to <span className="text-accent">Build</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            48 hours. One hackathon. Infinite possibilities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            {IMPULSE_HERO.registrationOpen ? (
              <a
                href={IMPULSE_HERO.registerUrl}
                className="relative px-10 py-4 bg-accent text-background font-medium hover:bg-accent/90 transition-colors cursor-target"
              >
                Register Now
                <BorderBeam size={80} duration={6} />
              </a>
            ) : (
              <div className="relative px-10 py-4 border border-accent text-accent">
                <span className="mono text-sm">Registration Opening Soon</span>
                <span
                  className="absolute inset-0 -z-10 blur-xl"
                  style={{
                    background: "radial-gradient(circle at center, var(--accent), transparent 70%)",
                    animation: "pulseGlow 2.5s ease-in-out infinite",
                    opacity: 0.3,
                  }}
                />
              </div>
            )}
            <a
              href="#schedule"
              className="px-10 py-4 border border-border hover:border-accent/50 transition-colors mono text-sm cursor-target"
            >
              View Schedule
            </a>
          </div>

          <p className="mono text-xs text-muted-foreground pt-8">
            {IMPULSE_HERO.date} • {IMPULSE_HERO.venue}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/**
 * CTA Section - Variant 2: Split with Image
 * CTA with image placeholder
 */
export function ImpulseCTAV2() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-12 gap-8 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-6"
        >
          <div className="relative aspect-[4/3] bg-muted/10 border border-border overflow-hidden group">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/50">
              <span className="text-6xl">🚀</span>
              <span className="mono text-xs mt-4">Hackathon Image</span>
            </div>
            
            {/* Corner Accents */}
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-accent" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-accent" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-6 space-y-8"
        >
          <div className="space-y-4">
            <span className="mono text-xs text-accent tracking-widest">
              JOIN US
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Don't miss out on <span className="text-accent">Impulse '26</span>
            </h2>
          </div>

          <p className="text-lg text-muted-foreground">
            Be part of the biggest hackathon at MAIT. Build something amazing, 
            learn from the best, and compete for exciting prizes.
          </p>

          <ul className="space-y-3">
            {IMPULSE_CONTENT.about.highlights.slice(0, 3).map((highlight, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>

          <a
            href={IMPULSE_HERO.registerUrl}
            className="inline-block px-8 py-4 bg-white text-black font-medium hover:bg-white/90 transition-colors cursor-target"
          >
            Register Now →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/**
 * CTA Section - Variant 3: Minimal Footer CTA
 * Simple centered CTA
 */
export function ImpulseCTAV3() {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            See you at Impulse '26
          </h2>
          <p className="text-muted-foreground">
            Join 500+ hackers from across India for 48 hours of building, learning, and creating.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={IMPULSE_HERO.registerUrl}
              className="px-8 py-3 bg-accent text-background hover:bg-accent/90 transition-colors cursor-target"
            >
              Register
            </a>
            <a
              href="mailto:impulse@iosd.in"
              className="mono text-xs text-muted-foreground hover:text-accent transition-colors cursor-target"
            >
              impulse@iosd.in
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 text-muted-foreground/50">
            <span className="mono text-xs">{IMPULSE_HERO.date}</span>
            <span className="w-1 h-1 bg-accent rounded-full" />
            <span className="mono text-xs">{IMPULSE_HERO.venue}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/**
 * About Section - Theme reveal
 * This year's theme
 */
export function ImpulseTheme() {
  return (
    <section className="container mx-auto px-4 py-32" id="about">
      <div className="grid grid-cols-12 gap-12 items-center">
        {/* Left - About */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-6 space-y-8"
        >
          <div>
            <span className="mono text-xs text-muted-foreground tracking-widest">
              ABOUT IMPULSE
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
              {IMPULSE_CONTENT.about.title}
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {IMPULSE_CONTENT.about.description}
          </p>

          <ul className="space-y-3">
            {IMPULSE_CONTENT.about.highlights.map((highlight, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right - Theme Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-6"
        >
          <div className="relative border-2 border-accent/30 bg-accent/5 p-10 overflow-hidden">
            <BorderBeam size={200} duration={12} />

            <div className="relative z-10 space-y-6">
              <span className="mono text-xs text-accent tracking-widest">
                {IMPULSE_HERO.edition} THEME
              </span>
              <h3 className="text-5xl md:text-6xl font-light tracking-tighter">
                {IMPULSE_CONTENT.theme.tagline}
              </h3>
              <p className="text-muted-foreground text-lg">
                {IMPULSE_CONTENT.theme.description}
              </p>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, var(--accent) 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/**
 * Velocity Text Section
 * Scrolling text banner
 */
export function ImpulseVelocityText() {
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap"
      >
        {[...Array(10)].map((_, i) => (
          <span 
            key={i} 
            className="text-6xl md:text-8xl font-light tracking-tighter text-muted-foreground/10 mx-8"
          >
            HACK • BUILD • INNOVATE • SHIP •
          </span>
        ))}
      </motion.div>
    </section>
  )
}
