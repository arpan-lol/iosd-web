"use client"

import { motion } from "motion/react"
import { MagicCard } from "@/components/ui/magic-card"
import { BorderBeam } from "@/components/ui/border-beam"
import { IMPULSE_TRACKS } from "@/lib/config/impulse"
import { cn } from "@/lib/utils"

/**
 * Tracks Section - Variant 1: Bento Grid Style
 * Asymmetric grid layout with hover effects
 */
export function ImpulseTracksV1() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <span className="mono text-xs text-muted-foreground tracking-widest">CHOOSE YOUR PATH</span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
          Hackathon Tracks
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Pick a track that aligns with your passion and build something incredible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {IMPULSE_TRACKS.map((track, index) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "group relative border border-border bg-background p-8 hover:border-accent/30 transition-all cursor-target",
              index === 0 && "md:col-span-2 lg:col-span-1"
            )}
          >
            {/* Gradient Background on Hover */}
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
              `bg-gradient-to-br ${track.color}`
            )} />

            {/* Icon */}
            <div className="relative z-10 text-4xl mb-6">{track.icon}</div>

            {/* Content */}
            <div className="relative z-10 space-y-3">
              <h3 className="text-2xl font-light tracking-tight group-hover:text-accent transition-colors">
                {track.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {track.description}
              </p>
            </div>

            {/* Corner Accent */}
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-accent/0 group-hover:border-accent transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/**
 * Tracks Section - Variant 2: MagicCard with Icons
 * Interactive cards with gradient border effects
 */
export function ImpulseTracksV2() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="mono text-xs text-accent tracking-widest">TRACKS</span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
          What will you <span className="text-accent">build</span>?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {IMPULSE_TRACKS.map((track, index) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <MagicCard className="h-full cursor-target">
              <div className="p-8 space-y-6">
                {/* Icon Badge */}
                <div className="w-14 h-14 border border-border flex items-center justify-center text-2xl bg-background">
                  {track.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-light tracking-tight">
                    {track.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* Track ID */}
                <div className="pt-4 border-t border-border">
                  <span className="mono text-xs text-muted-foreground">
                    #{track.id.toUpperCase()}
                  </span>
                </div>
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/**
 * Tracks Section - Variant 3: List Style
 * Clean horizontal list layout
 */
export function ImpulseTracksV3() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-12 gap-12">
        {/* Left - Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-4"
        >
          <div className="sticky top-24 space-y-6">
            <span className="mono text-xs text-muted-foreground tracking-widest">
              HACKATHON TRACKS
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Six paths, <br />
              <span className="text-accent">infinite possibilities</span>
            </h2>
            <p className="text-muted-foreground">
              Each track has its own set of challenges and prizes.
            </p>
          </div>
        </motion.div>

        {/* Right - Track List */}
        <div className="col-span-12 lg:col-span-8 space-y-4">
          {IMPULSE_TRACKS.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group border border-border hover:border-accent/30 p-6 transition-all cursor-target"
            >
              <div className="flex items-start gap-6">
                {/* Number */}
                <span className="mono text-sm text-muted-foreground w-8">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="text-3xl flex-shrink-0">
                  {track.icon}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-light group-hover:text-accent transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {track.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Tracks Section - Variant 4: Featured Cards
 * Large featured track + smaller supporting cards
 */
export function ImpulseTracksV4() {
  const featuredTrack = IMPULSE_TRACKS[0]
  const otherTracks = IMPULSE_TRACKS.slice(1)

  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light tracking-tight">
          Hackathon Tracks
        </h2>
      </motion.div>

      <div className="grid grid-cols-12 gap-6">
        {/* Featured Track */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-6"
        >
          <div className="relative h-full border border-accent/30 bg-accent/5 p-10 cursor-target overflow-hidden group">
            <BorderBeam size={200} duration={12} />

            <div className="relative z-10 h-full flex flex-col justify-between min-h-[320px]">
              <div className="text-6xl">{featuredTrack.icon}</div>
              
              <div className="space-y-4">
                <span className="mono text-xs text-accent">FEATURED TRACK</span>
                <h3 className="text-3xl md:text-4xl font-light tracking-tight">
                  {featuredTrack.title}
                </h3>
                <p className="text-muted-foreground max-w-md">
                  {featuredTrack.description}
                </p>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-50" />
          </div>
        </motion.div>

        {/* Other Tracks Grid */}
        <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">
          {otherTracks.slice(0, 4).map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group border border-border p-6 hover:border-accent/30 transition-colors cursor-target"
            >
              <div className="space-y-4">
                <div className="text-3xl">{track.icon}</div>
                <h3 className="text-lg font-light group-hover:text-accent transition-colors">
                  {track.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {track.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
