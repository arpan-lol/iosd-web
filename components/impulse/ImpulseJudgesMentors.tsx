"use client"

import { motion } from "motion/react"
import { MagicCard } from "@/components/ui/magic-card"
import { IMPULSE_JUDGES, IMPULSE_MENTORS, Judge } from "@/lib/config/impulse"
import { Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

interface PersonCardProps {
  person: Judge
  index: number
  variant?: "default" | "minimal" | "featured"
}

function PersonCard({ person, index, variant = "default" }: PersonCardProps) {
  if (variant === "minimal") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="group cursor-target"
      >
        <div className="flex items-center gap-4 p-4 border border-border hover:border-accent/30 transition-colors">
          {/* Placeholder Avatar */}
          <div className="w-12 h-12 bg-muted/20 border border-border flex items-center justify-center flex-shrink-0">
            <span className="text-muted-foreground/50 text-xs">📷</span>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium truncate group-hover:text-accent transition-colors">
              {person.name}
            </h3>
            <p className="mono text-xs text-muted-foreground truncate">
              {person.role} @ {person.company}
            </p>
          </div>

          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
        </div>
      </motion.div>
    )
  }

  if (variant === "featured") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <MagicCard className="h-full cursor-target">
          <div className="p-6 text-center space-y-4">
            {/* Placeholder Image */}
            <div className="w-24 h-24 mx-auto bg-muted/20 border border-border flex items-center justify-center">
              <div className="flex flex-col items-center text-muted-foreground/50">
                <span className="text-2xl">📷</span>
                <span className="mono text-[8px] mt-1">Photo</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-light">{person.name}</h3>
              <p className="mono text-xs text-accent mt-1">{person.company}</p>
              <p className="text-sm text-muted-foreground">{person.role}</p>
            </div>

            {person.linkedin && (
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mono text-xs text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Connect
              </a>
            )}
          </div>
        </MagicCard>
      </motion.div>
    )
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group cursor-target"
    >
      <div className="border border-border hover:border-accent/30 transition-colors p-6 space-y-4">
        {/* Placeholder Image */}
        <div className="aspect-square bg-muted/10 border border-border flex items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center text-muted-foreground/50">
            <span className="text-4xl">📷</span>
            <span className="mono text-xs mt-2">Photo Placeholder</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-light group-hover:text-accent transition-colors">
            {person.name}
          </h3>
          <p className="text-sm text-muted-foreground">{person.role}</p>
          <p className="mono text-xs text-accent mt-1">{person.company}</p>
        </div>

        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span className="mono text-xs">LinkedIn</span>
          </a>
        )}
      </div>
    </motion.div>
  )
}

/**
 * Judges Section - Variant 1: Grid Layout
 * Clean grid with image placeholders
 */
export function ImpulseJudgesV1() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="mono text-xs text-muted-foreground tracking-widest">
          THE JURY
        </span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
          Meet Our <span className="text-accent">Judges</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Industry experts who will evaluate your projects and provide valuable feedback.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {IMPULSE_JUDGES.map((judge, index) => (
          <PersonCard key={judge.name} person={judge} index={index} />
        ))}
      </div>
    </section>
  )
}

/**
 * Mentors Section - Variant 1: Featured Cards
 * MagicCard style with hover effects
 */
export function ImpulseMentorsV1() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="mono text-xs text-accent tracking-widest">GUIDANCE</span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
          Expert Mentors
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg">
          Get guidance from industry professionals throughout the hackathon.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {IMPULSE_MENTORS.map((mentor, index) => (
          <PersonCard key={mentor.name} person={mentor} index={index} variant="featured" />
        ))}
      </div>
    </section>
  )
}

/**
 * Combined Section - Variant 2: Split Layout
 * Judges and mentors in a split view
 */
export function ImpulseJudgesMentorsV2() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-12 gap-16">
        {/* Judges */}
        <div className="col-span-12 lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-24 space-y-8"
          >
            <div>
              <span className="mono text-xs text-muted-foreground tracking-widest">
                THE JURY
              </span>
              <h2 className="text-3xl font-light tracking-tight mt-4">
                Judges
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {IMPULSE_JUDGES.map((judge, index) => (
                <PersonCard key={judge.name} person={judge} index={index} variant="featured" />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mentors */}
        <div className="col-span-12 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="mono text-xs text-accent tracking-widest">
                GUIDANCE
              </span>
              <h2 className="text-3xl font-light tracking-tight mt-4">
                Mentors
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">
                Industry experts available throughout the hackathon
              </p>
            </div>

            <div className="space-y-3">
              {IMPULSE_MENTORS.map((mentor, index) => (
                <PersonCard key={mentor.name} person={mentor} index={index} variant="minimal" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/**
 * Combined Section - Variant 3: Minimal List
 * Compact list view for both
 */
export function ImpulseJudgesMentorsV3() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light tracking-tight">
          The People Behind <span className="text-accent">Impulse</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Judges Column */}
        <div>
          <h3 className="text-xl font-light mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent" />
            Judges
          </h3>
          <div className="space-y-3">
            {IMPULSE_JUDGES.map((judge, index) => (
              <PersonCard key={judge.name} person={judge} index={index} variant="minimal" />
            ))}
          </div>
        </div>

        {/* Mentors Column */}
        <div>
          <h3 className="text-xl font-light mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent" />
            Mentors
          </h3>
          <div className="space-y-3">
            {IMPULSE_MENTORS.map((mentor, index) => (
              <PersonCard key={mentor.name} person={mentor} index={index} variant="minimal" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
