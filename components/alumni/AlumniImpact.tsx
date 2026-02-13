"use client"

import { motion } from "motion/react"
import { NumberTicker } from "@/components/ui/number-ticker"
import { ALUMNI_IMPACT } from "@/lib/config"

/**
 * Alumni Impact Section
 * Editorial timeline strip with large typography and animated numbers.
 * Magazine-style presentation with alternating emphasis.
 */

export function AlumniImpact() {
  return (
    <section className="container mx-auto px-4 py-32">
      {/* Section intro */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mb-20"
      >
        <span className="mono text-accent block mb-4">The Impact</span>
        <p className="text-2xl lg:text-3xl font-light text-muted-foreground leading-relaxed">
           Built by engineers who care about the craft, <br/>
          <span className="text-foreground"> shaping the industry</span> one contribution at a time.
        </p>
      </motion.div>

      {/* Stats row */}
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-px bg-border/20">
        {ALUMNI_IMPACT.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="group relative flex-1 bg-background py-12 lg:py-16 px-8 border-l border-border/20 first:border-l-0 hover:bg-accent/5 transition-all duration-500 cursor-target"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex flex-col h-full">
              <p className="text-6xl lg:text-7xl font-extralight tracking-tighter tabular-nums">
                <NumberTicker value={item.stat} />
                <span className="text-accent text-4xl lg:text-5xl">{item.suffix}</span>
              </p>
              
              <div className="mt-6 flex-1 flex flex-col justify-end">
                <p className="text-lg font-medium text-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.sublabel}
                </p>
              </div>
            </div>

            {/* Index */}
            <span className="absolute bottom-6 right-6 mono text-border/60 group-hover:text-accent/40 transition-colors">
              {String(i + 1).padStart(2, '0')}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
