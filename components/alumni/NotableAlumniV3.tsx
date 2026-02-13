"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { NOTABLE_ALUMNI } from "@/lib/config"

/**
 * Variation 3: Editorial List with Scroll Reveal
 * Full-width editorial rows, oversized index numbers, 
 * horizontal scroll reveal with atmospheric glow. Most dramatic/cinematic feel.
 */

export function NotableAlumniV3() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const headerX = useTransform(scrollYProgress, [0, 0.3], [100, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <section ref={sectionRef} className="py-32 overflow-hidden">
      {/* Floating header with parallax */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div style={{ x: headerX, opacity: headerOpacity }}>
          <span className="mono text-accent mb-4 block">Alumni Excellence</span>
          <h2 className="text-6xl lg:text-8xl font-extralight tracking-tight">
            Where They Are Now
          </h2>
        </motion.div>
      </div>

      {/* Full-width alumni list */}
      <div className="relative">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4">
          {NOTABLE_ALUMNI.map((person, i) => (
            <motion.a
              key={i}
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-12 items-center gap-4 py-6 lg:py-8 border-b border-border/10 transition-all duration-300"
            >
              {/* Index number */}
              <div className="col-span-1 hidden lg:block">
                <span className="mono text-muted-foreground/40 group-hover:text-accent/60 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Name - large */}
              <div className="col-span-8 lg:col-span-5">
                <span className="cursor-target cursor-none text-2xl lg:text-4xl font-light text-foreground group-hover:text-accent transition-colors duration-300">
                  {person.name}
                </span>
              </div>

              {/* Company - accent */}
              <div className="col-span-4 lg:col-span-3 text-right lg:text-left">
                <span className="text-lg lg:text-xl text-accent/70 group-hover:text-accent transition-colors">
                  {person.current}
                </span>
              </div>

              {/* Batch */}
              <div className="hidden lg:block lg:col-span-2">
                <span className="mono text-muted-foreground">
                  {person.batch}
                </span>
              </div>

              {/* Arrow indicator */}
              <div className="hidden lg:flex lg:col-span-1 justify-end">
                <span className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-accent">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
