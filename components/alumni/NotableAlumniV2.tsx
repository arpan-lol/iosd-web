"use client"

import { motion } from "motion/react"
import { NOTABLE_ALUMNI } from "@/lib/config"

/**
 * Variation 2: Cinematic Cards Grid
 * Floating cards with magnetic glow effect on hover. 
 * Company logos prominent, dramatic scale difference between name and meta.
 */

export function NotableAlumniV2() {
  return (
    <section className="container mx-auto px-4 py-32">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20"
      >
        <div>
          <span className="mono text-accent mb-4 block">Alumni Network</span>
          <h2 className="text-5xl lg:text-7xl font-light tracking-tight">
            Notable<br />Alumni
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md text-lg">
          Our members have gone on to shape technology at leading companies worldwide.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/10">
        {NOTABLE_ALUMNI.slice(0, 12).map((person, i) => (
          <motion.a
            key={i}
            href={person.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="cursor-target cursor-none group relative bg-background p-8 lg:p-10 transition-all duration-500 hover:bg-surface-1"
          >
            {/* Company - prominent */}
            <div className="text-3xl lg:text-4xl font-light text-accent/80 group-hover:text-accent transition-colors mb-6">
              {person.current}
            </div>

            {/* Name */}
            <div className="text-xl font-light text-foreground mb-2">
              {person.name}
            </div>

            {/* Batch */}
            <div className="mono text-muted-foreground">
              {person.batch}
            </div>

            {/* Corner glow on hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" />
            
            {/* Bottom line animation */}
            <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-accent to-transparent transition-all duration-700" />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
