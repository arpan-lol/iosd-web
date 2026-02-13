"use client"

import { motion } from "motion/react"
import { NOTABLE_ALUMNI } from "@/lib/config"

/**
 * Variation 1: Magazine Index Style
 * Large oversized batch numbers on left, staggered name reveals, 
 * dramatic mono typography. Hover triggers accent glow line and subtle shift.
 */

export function NotableAlumniV1() {
  // Group alumni by batch
  const batches = NOTABLE_ALUMNI.reduce((acc, person) => {
    if (!acc[person.batch]) acc[person.batch] = []
    acc[person.batch].push(person)
    return acc
  }, {} as Record<string, typeof NOTABLE_ALUMNI>)

  return (
    <section className="container mx-auto px-4 py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <span className="mono text-accent mb-4 block">Where they are now</span>
        <h2 className="text-5xl lg:text-7xl font-light tracking-tight">Notable Alumni</h2>
      </motion.div>

      {Object.entries(batches)
        .sort(([a], [b]) => Number(b.split("-")[1]) - Number(a.split("-")[1]))
        .map(([batch, people], batchIndex) => (
        <motion.div
          key={batch}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: batchIndex * 0.1 }}
          className="grid grid-cols-12 gap-4 mb-16 border-t border-border/20 pt-8"
        >
          <div className="col-span-12 lg:col-span-3 cursor-target cursor-none">
            <span className="text-6xl lg:text-8xl font-extralight text-foreground/10 select-none">
              {Number(batch.split("-")[1])}
            </span>
          </div>

          {/* Names grid */}
          <div className="col-span-12 lg:col-span-9 space-y-1">
            {people.map((person, i) => (
              <motion.a
                key={i}
                href={person.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="cursor-target cursor-none group flex items-center justify-between py-3 px-4 -mx-4 hover:bg-surface-1 transition-all duration-300"
              >
                <span className="text-xl lg:text-2xl font-light group-hover:text-accent transition-colors">
                  {person.name}
                </span>
                <span className="mono text-muted-foreground group-hover:text-accent/80 transition-colors">
                  {person.current}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  )
}
