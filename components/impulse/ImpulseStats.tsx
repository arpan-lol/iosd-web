"use client"

import { motion } from "motion/react"
import { NumberTicker } from "@/components/ui/number-ticker"
import { MagicCard } from "@/components/ui/magic-card"
import { IMPULSE_STATS } from "@/lib/config/impulse"
import { cn } from "@/lib/utils"

/**
 * Stats Section - Variant 1: Horizontal Cards with NumberTicker
 * Clean grid layout with animated numbers
 */
export function ImpulseStatsV1() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <span className="mono text-xs text-muted-foreground tracking-widest">BY THE NUMBERS</span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
          Impact at Scale
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {IMPULSE_STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative border border-border bg-background p-6 hover:border-accent/30 transition-all cursor-target"
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-light tracking-tight tabular-nums">
                <NumberTicker value={stat.value} />
                <span className="text-xl text-accent">{stat.suffix}</span>
              </h3>
              <p className="mono text-xs text-muted-foreground tracking-wider">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/**
 * Stats Section - Variant 2: Large Typography Focus
 * Bold statement design
 */
export function ImpulseStatsV2() {
  return (
    <section className="container mx-auto px-4 py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {IMPULSE_STATS.slice(0, 3).map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="text-center space-y-4"
          >
            <h3 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter">
              <NumberTicker value={stat.value} />
              <span className="text-4xl md:text-5xl text-accent">{stat.suffix}</span>
            </h3>
            <p className="text-lg text-muted-foreground uppercase tracking-widest">
              {stat.label}
            </p>
            <div className="w-12 h-[1px] bg-accent mx-auto" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/**
 * Stats Section - Variant 3: MagicCard with Hover Effects
 * Interactive cards with gradient borders
 */
export function ImpulseStatsV3() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light tracking-tight">
          Numbers that <span className="text-accent">matter</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {IMPULSE_STATS.slice(0, 4).map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <MagicCard className="p-8 h-full cursor-target">
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-5xl md:text-6xl font-light tracking-tight">
                  <NumberTicker value={stat.value} />
                  <span className="text-2xl text-accent">{stat.suffix}</span>
                </h3>
                <p className="mono text-xs text-muted-foreground tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/**
 * Stats Section - Variant 4: Asymmetric Layout
 * Editorial-style offset design
 */
export function ImpulseStatsV4() {
  const featuredStat = IMPULSE_STATS[0]
  const otherStats = IMPULSE_STATS.slice(1, 5)

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-12 gap-8 items-center">
        {/* Featured Stat */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-5"
        >
          <div className="relative border border-accent/30 p-12 bg-accent/5">
            <span className="mono text-xs text-accent tracking-widest block mb-4">
              HIGHLIGHT
            </span>
            <h3 className="text-8xl md:text-9xl font-light tracking-tighter">
              <NumberTicker value={featuredStat.value} />
              <span className="text-4xl text-accent">{featuredStat.suffix}</span>
            </h3>
            <p className="text-xl text-muted-foreground mt-4 uppercase tracking-wide">
              {featuredStat.label}
            </p>
            
            {/* Corner accent */}
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-accent" />
          </div>
        </motion.div>

        {/* Other Stats */}
        <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-6">
          {otherStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border p-8 hover:border-accent/30 transition-colors cursor-target"
            >
              <h3 className="text-4xl md:text-5xl font-light tracking-tight tabular-nums">
                <NumberTicker value={stat.value} />
                <span className="text-xl text-accent">{stat.suffix}</span>
              </h3>
              <p className="mono text-xs text-muted-foreground mt-3 tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
