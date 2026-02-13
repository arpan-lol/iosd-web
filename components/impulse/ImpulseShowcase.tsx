"use client"

import { motion } from "motion/react"
import { MagicCard } from "@/components/ui/magic-card"
import { BorderBeam } from "@/components/ui/border-beam"
import { IMPULSE_PAST_WINNERS, IMPULSE_GALLERY } from "@/lib/config/impulse"
import { cn } from "@/lib/utils"

/**
 * Past Winners Section - Variant 1: Featured Cards
 * Showcase winning teams with project details
 */
export function ImpulseWinnersV1() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="mono text-xs text-muted-foreground tracking-widest">
          HALL OF FAME
        </span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
          Previous <span className="text-accent">Winners</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Projects that made history at Impulse
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {IMPULSE_PAST_WINNERS.map((winner, index) => (
          <motion.div
            key={`${winner.year}-${winner.teamName}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <MagicCard className="h-full cursor-target">
              <div className="p-0">
                {/* Image Placeholder */}
                <div className="aspect-video bg-muted/10 border-b border-border flex items-center justify-center">
                  <div className="flex flex-col items-center text-muted-foreground/50">
                    <span className="text-4xl">📷</span>
                    <span className="mono text-xs mt-2">Project Image</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="mono text-xs text-accent">{winner.year}</span>
                    <span className="mono text-xs px-2 py-1 bg-accent/10 text-accent">
                      {winner.prize}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-light">{winner.projectName}</h3>
                    <p className="mono text-xs text-muted-foreground mt-1">
                      by {winner.teamName}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {winner.description}
                  </p>

                  {/* Team Members */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {winner.members.map((member, i) => (
                      <span
                        key={i}
                        className="mono text-xs px-2 py-1 border border-border"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
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
 * Past Winners Section - Variant 2: Timeline Style
 * Winners organized by year
 */
export function ImpulseWinnersV2() {
  // Group by year
  const winnersByYear = IMPULSE_PAST_WINNERS.reduce((acc, winner) => {
    if (!acc[winner.year]) acc[winner.year] = []
    acc[winner.year].push(winner)
    return acc
  }, {} as Record<string, typeof IMPULSE_PAST_WINNERS>)
  
  const years = Object.keys(winnersByYear).sort((a, b) => b.localeCompare(a))

  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="mono text-xs text-accent tracking-widest">LEGACY</span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
          Winners Through the Years
        </h2>
      </motion.div>

      <div className="space-y-16">
        {years.map((year, yearIndex) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: yearIndex * 0.1 }}
          >
            <div className="flex items-center gap-6 mb-8">
              <h3 className="text-6xl font-light text-accent">{year}</h3>
              <div className="flex-1 h-[1px] bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-8 border-l border-accent/30">
              {winnersByYear[year].map((winner, i) => (
                <div
                  key={i}
                  className="relative border border-border p-6 hover:border-accent/30 transition-colors cursor-target group"
                >
                  {/* Prize Badge */}
                  <div className="absolute -left-4 top-6 w-8 h-8 bg-accent text-background flex items-center justify-center text-xs font-bold">
                    {winner.prize === "Grand Prize" ? "1" : winner.prize === "1st Runner Up" ? "2" : "3"}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-light group-hover:text-accent transition-colors">
                        {winner.projectName}
                      </h4>
                      <p className="mono text-xs text-muted-foreground">
                        {winner.teamName}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {winner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/**
 * Gallery Section - Variant 1: Grid Layout
 * Image gallery with hover effects
 */
export function ImpulseGalleryV1() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="mono text-xs text-muted-foreground tracking-widest">
          MEMORIES
        </span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
          Impulse Gallery
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {IMPULSE_GALLERY.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={cn(
              "relative aspect-square bg-muted/10 border border-border overflow-hidden group cursor-target",
              index === 0 && "col-span-2 row-span-2"
            )}
          >
            {/* Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/50">
              <span className={cn("text-4xl", index === 0 && "text-6xl")}>📷</span>
              <span className="mono text-xs mt-2 text-center px-4">{image.caption}</span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Caption on Hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm">{image.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="/gallery"
          className="inline-flex items-center gap-4 group cursor-target"
        >
          <span className="mono text-xs tracking-widest group-hover:text-accent transition-colors">
            VIEW FULL GALLERY
          </span>
          <span className="group-hover:translate-x-2 transition-transform">→</span>
        </a>
      </motion.div>
    </section>
  )
}

/**
 * Gallery Section - Variant 2: Mosaic Layout
 * More dynamic image arrangement
 */
export function ImpulseGalleryV2() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mono text-xs text-accent tracking-widest">GALLERY</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
            Behind the <span className="text-accent">Scenes</span>
          </h2>
        </motion.div>
      </div>

      {/* Full Width Mosaic */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-2 px-2">
        {IMPULSE_GALLERY.map((image, index) => {
          // Varied sizing for visual interest
          const sizeClass = index % 5 === 0 
            ? "col-span-2 row-span-2" 
            : index % 3 === 0 
              ? "col-span-2" 
              : "col-span-1"
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className={cn(
                "relative aspect-square bg-muted/10 border border-border overflow-hidden group cursor-target",
                sizeClass
              )}
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                <span className="text-2xl">📷</span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

/**
 * Combined Section - Winners + Gallery
 * Best of both worlds
 */
export function ImpulseShowcaseV1() {
  const featuredWinner = IMPULSE_PAST_WINNERS[0]

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-12 gap-12">
        {/* Left - Featured Winner */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-5"
        >
          <div className="sticky top-24">
            <span className="mono text-xs text-muted-foreground tracking-widest">
              LAST YEAR'S CHAMPION
            </span>
            
            <div className="relative border border-accent/30 bg-accent/5 mt-6 overflow-hidden">
              <BorderBeam size={200} duration={15} />
              
              {/* Image Placeholder */}
              <div className="aspect-video bg-muted/10 flex items-center justify-center">
                <div className="flex flex-col items-center text-muted-foreground/50">
                  <span className="text-5xl">🏆</span>
                  <span className="mono text-xs mt-2">Winner Photo</span>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🥇</span>
                  <span className="mono text-xs text-accent">GRAND PRIZE {featuredWinner.year}</span>
                </div>
                
                <h3 className="text-3xl font-light">{featuredWinner.projectName}</h3>
                <p className="mono text-sm text-muted-foreground">
                  by {featuredWinner.teamName}
                </p>
                <p className="text-muted-foreground">
                  {featuredWinner.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Gallery Preview */}
        <div className="col-span-12 lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mono text-xs text-accent tracking-widest">
              MOMENTS FROM IMPULSE
            </span>
            <h2 className="text-3xl font-light tracking-tight mt-4">
              The Hackathon Experience
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {IMPULSE_GALLERY.slice(0, 4).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square bg-muted/10 border border-border overflow-hidden group cursor-target"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/50">
                  <span className="text-3xl">📷</span>
                  <span className="mono text-xs mt-2">{image.caption}</span>
                </div>
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          <a
            href="/gallery"
            className="inline-flex items-center gap-4 group cursor-target"
          >
            <div className="w-12 h-[1px] bg-muted-foreground group-hover:bg-accent transition-colors" />
            <span className="mono text-xs tracking-widest group-hover:text-accent transition-colors">
              VIEW FULL GALLERY
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
