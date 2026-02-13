"use client"

import { motion } from "motion/react"
import { Marquee } from "@/components/ui/marquee"
import { IMPULSE_SPONSORS, Sponsor } from "@/lib/config/impulse"
import { cn } from "@/lib/utils"

// Group sponsors by tier
const titleSponsors = IMPULSE_SPONSORS.filter(s => s.tier === "title")
const goldSponsors = IMPULSE_SPONSORS.filter(s => s.tier === "gold")
const silverSponsors = IMPULSE_SPONSORS.filter(s => s.tier === "silver")
const bronzeSponsors = IMPULSE_SPONSORS.filter(s => s.tier === "bronze")
const partners = IMPULSE_SPONSORS.filter(s => s.tier === "partner")

interface SponsorLogoProps {
  sponsor: Sponsor
  size?: "sm" | "md" | "lg"
}

function SponsorLogo({ sponsor, size = "md" }: SponsorLogoProps) {
  const sizeClasses = {
    sm: "h-8 px-4",
    md: "h-12 px-6",
    lg: "h-16 px-8",
  }

  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-center border border-border bg-background cursor-target",
        "hover:border-accent/30 transition-colors",
        sizeClasses[size]
      )}
    >
      {/* Placeholder Logo */}
      <div className="flex items-center gap-2 text-muted-foreground/50">
        <div className="w-6 h-6 border border-dashed border-muted-foreground/30 flex items-center justify-center text-xs">
          📷
        </div>
        <span className="mono text-xs">{sponsor.name}</span>
      </div>
    </a>
  )
}

/**
 * Sponsors Section - Variant 1: Marquee Scroll
 * Infinite scrolling sponsor logos
 */
export function ImpulseSponsorsV1() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="mono text-xs text-muted-foreground tracking-widest">
            POWERED BY
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
            Our Sponsors
          </h2>
        </motion.div>
      </div>

      {/* Title & Gold Sponsors - Slower scroll */}
      <Marquee pauseOnHover className="[--duration:30s] mb-8">
        {[...titleSponsors, ...goldSponsors].map((sponsor, i) => (
          <SponsorLogo key={`${sponsor.name}-${i}`} sponsor={sponsor} size="lg" />
        ))}
      </Marquee>

      {/* Silver Sponsors - Reverse direction */}
      <Marquee pauseOnHover reverse className="[--duration:25s] mb-8">
        {silverSponsors.map((sponsor, i) => (
          <SponsorLogo key={`${sponsor.name}-${i}`} sponsor={sponsor} size="md" />
        ))}
      </Marquee>

      {/* Bronze & Partners */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {[...bronzeSponsors, ...partners].map((sponsor, i) => (
          <SponsorLogo key={`${sponsor.name}-${i}`} sponsor={sponsor} size="sm" />
        ))}
      </Marquee>
    </section>
  )
}

/**
 * Sponsors Section - Variant 2: Tiered Grid
 * Traditional grid layout by tier
 */
export function ImpulseSponsorsV2() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="mono text-xs text-muted-foreground tracking-widest">
          SPONSORS & PARTNERS
        </span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
          Backed by the <span className="text-accent">Best</span>
        </h2>
      </motion.div>

      {/* Title Sponsor */}
      {titleSponsors.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mono text-xs text-accent text-center mb-6">TITLE SPONSOR</p>
          <div className="flex justify-center">
            <div className="border-2 border-accent/30 bg-accent/5 p-8 cursor-target">
              <div className="flex flex-col items-center text-muted-foreground/50">
                <div className="w-20 h-20 border-2 border-dashed border-muted-foreground/30 flex items-center justify-center text-3xl mb-4">
                  📷
                </div>
                <span className="mono text-sm">{titleSponsors[0]?.name || "Title Sponsor"}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Gold Sponsors */}
      {goldSponsors.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mono text-xs text-muted-foreground text-center mb-6">GOLD SPONSORS</p>
          <div className="flex flex-wrap justify-center gap-6">
            {goldSponsors.map((sponsor, i) => (
              <div key={i} className="border border-yellow-500/30 bg-yellow-500/5 p-6 cursor-target">
                <div className="flex flex-col items-center text-muted-foreground/50">
                  <div className="w-16 h-16 border border-dashed border-muted-foreground/30 flex items-center justify-center text-2xl mb-2">
                    📷
                  </div>
                  <span className="mono text-xs">{sponsor.name}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Silver Sponsors */}
      {silverSponsors.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mono text-xs text-muted-foreground text-center mb-6">SILVER SPONSORS</p>
          <div className="flex flex-wrap justify-center gap-4">
            {silverSponsors.map((sponsor, i) => (
              <div key={i} className="border border-border p-4 cursor-target hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-3 text-muted-foreground/50">
                  <div className="w-10 h-10 border border-dashed border-muted-foreground/30 flex items-center justify-center text-lg">
                    📷
                  </div>
                  <span className="mono text-xs">{sponsor.name}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Partners */}
      {partners.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mono text-xs text-muted-foreground text-center mb-6">PARTNERS</p>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((sponsor, i) => (
              <div key={i} className="px-4 py-2 border border-border cursor-target hover:border-accent/30 transition-colors">
                <span className="mono text-xs text-muted-foreground">{sponsor.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  )
}

/**
 * Sponsors Section - Variant 3: Minimal Banner
 * Simple horizontal layout
 */
export function ImpulseSponsorsV3() {
  return (
    <section className="py-16 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="mono text-xs text-muted-foreground">POWERED BY</span>
            <h3 className="text-xl font-light mt-1">Our Sponsors</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            {IMPULSE_SPONSORS.slice(0, 6).map((sponsor, i) => (
              <div key={i} className="text-muted-foreground/50 hover:text-accent transition-colors cursor-target">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📷</span>
                  <span className="mono text-xs">{sponsor.name}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/**
 * Sponsors Section - Variant 4: Full Width with CTA
 * Sponsors with a become sponsor CTA
 */
export function ImpulseSponsorsV4() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-12 gap-12">
        {/* Left - CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-4"
        >
          <div className="sticky top-24 space-y-6">
            <span className="mono text-xs text-muted-foreground tracking-widest">
              SPONSORS
            </span>
            <h2 className="text-4xl font-light tracking-tight">
              Partner with <span className="text-accent">Impulse</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Join leading companies in supporting the next generation of builders.
            </p>
            <a
              href="#become-sponsor"
              className="inline-block px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-colors mono text-xs cursor-target"
            >
              Become a Sponsor
            </a>
          </div>
        </motion.div>

        {/* Right - Sponsors Grid */}
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {IMPULSE_SPONSORS.map((sponsor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  "border p-6 cursor-target hover:border-accent/30 transition-colors",
                  sponsor.tier === "title" ? "border-accent/30 bg-accent/5 col-span-2 md:col-span-3" : "border-border"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "border border-dashed border-muted-foreground/30 flex items-center justify-center",
                    sponsor.tier === "title" ? "w-16 h-16 text-2xl" : "w-10 h-10 text-lg"
                  )}>
                    📷
                  </div>
                  <div>
                    <span className="text-sm">{sponsor.name}</span>
                    <p className={cn(
                      "mono text-[10px] uppercase",
                      sponsor.tier === "title" ? "text-accent" : "text-muted-foreground"
                    )}>
                      {sponsor.tier} sponsor
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
