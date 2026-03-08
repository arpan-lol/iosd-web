"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { NOTABLE_ALUMNI } from "@/lib/config"

/** placeholder for alumni without photos */
function AlumniAvatar({ name, image }: { name: string; image: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  if (image) {
    return (
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden border border-border-subtle bg-surface-1">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover contrast-[0.95] grayscale-[0.2] transition-all duration-500 group-hover:grayscale-0"
          sizes="96px"
        />
      </div>
    )
  }

  return (
    <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-border-subtle bg-accent/5 flex items-center justify-center">
      <span className="text-accent text-xl font-medium tracking-wide">
        {initials}
      </span>
    </div>
  )
}

/* =========================================================
   HEADER
   ========================================================= */
function Header() {
  return (
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
  )
}

export function NotableAlumniV2() {
  return (
    <section className="container mx-auto px-4 py-32">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/10">
        {NOTABLE_ALUMNI.map((person, i) => (
          <motion.a
            key={i}
            href={person.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="cursor-target cursor-none group relative bg-background p-8 lg:p-10 transition-all duration-500 hover:bg-surface-1 overflow-hidden"
          >
            {/* Avatar*/}
            <div className="absolute top-8 right-8 z-10 transition-transform duration-500 group-hover:scale-105">
              <AlumniAvatar name={person.name} image={person.image} />
            </div>

            {/* Company */}
            <div className="text-3xl lg:text-4xl font-light text-accent/80 group-hover:text-accent transition-colors mb-6 relative z-10">
              {person.current}
            </div>

            {/* Name */}
            <div className="text-xl font-light text-foreground mb-2 relative z-10">
              {person.name}
            </div>

            {/* Batch */}
            <div className="mono text-muted-foreground relative z-10">
              {person.batch}
            </div>

            {/* Corner glow on hover */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-radial from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" />

            {/* Bottom line animation */}
            <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-accent to-transparent transition-all duration-700" />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
