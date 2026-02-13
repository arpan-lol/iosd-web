"use client"

import { motion } from "motion/react"
import { NOTABLE_ALUMNI } from "@/lib/config"

/**
 * Notable Alumni Section
 * Large typography, minimal layout.
 * Magazine-style with dramatic spacing and hover reveals.
 */

export function NotableAlumni() {
  return (
    <section className="container mx-auto px-4 py-24">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-baseline gap-8 mb-16 border-b border-border/20 pb-8"
      >
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
          Notable Alumni
        </h2>
      </motion.div>

      {/* Alumni List */}
      <div className="space-y-0">
        {NOTABLE_ALUMNI.map((person, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group relative border-b border-border/10 last:border-b-0"
          >
            {person.link ? (
              <a
                href={person.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-8 lg:py-10 transition-all duration-300 hover:pl-4"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  {/* Name and Role */}
                  <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6">
                    <span className="text-2xl lg:text-3xl font-light text-foreground group-hover:text-accent transition-colors duration-300">
                      {person.name}
                    </span>
                    <span className="text-muted-foreground text-sm lg:text-base">
                      {person.role}
                    </span>
                  </div>

                  {/* Meta info */}
                  <div className="flex items-center gap-6 lg:gap-10">
                    <span className="mono text-accent/70">{person.batch}</span>
                    {person.current && (
                      <span className="text-sm text-muted-foreground max-w-[200px] truncate hidden lg:block">
                        {person.current}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover reveal - full current position */}
                {person.current && (
                  <div className="lg:hidden mt-2 text-sm text-muted-foreground">
                    {person.current}
                  </div>
                )}
              </a>
            ) : (
              <div className="py-8 lg:py-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6">
                    <span className="text-2xl lg:text-3xl font-light text-foreground">
                      {person.name}
                    </span>
                    <span className="text-muted-foreground text-sm lg:text-base">
                      {person.role}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 lg:gap-10">
                    <span className="mono text-accent/70">{person.batch}</span>
                    {person.current && (
                      <span className="text-sm text-muted-foreground max-w-[200px] truncate">
                        {person.current}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Subtle line animation */}
            <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-accent/40 to-transparent transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
