"use client"

import { motion } from "motion/react"
import { MagicCard } from "@/components/ui/magic-card"
import { BorderBeam } from "@/components/ui/border-beam"
import { IMPULSE_PRIZES } from "@/lib/config/impulse"
import { cn } from "@/lib/utils"

/**
 * Prizes Section - Variant 1: Podium Style
 * Three main prizes in podium layout
 */
export function ImpulsePrizesV1() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="mono text-xs text-muted-foreground tracking-widest">
          REWARDS
        </span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
          Win Big at <span className="text-accent">Impulse</span>
        </h2>
      </motion.div>

      {/* Main Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-4xl mx-auto mb-16">
        {/* 2nd Place */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="order-2 md:order-1"
        >
          <div className="border border-border bg-background p-8 text-center h-[280px] flex flex-col justify-end cursor-target hover:border-accent/30 transition-colors">
            <span className="mono text-xs text-muted-foreground">2ND PLACE</span>
            <h3 className="text-4xl font-light text-accent mt-2">
              {IMPULSE_PRIZES.first.amount}
            </h3>
            <p className="text-sm text-muted-foreground mt-4">
              {IMPULSE_PRIZES.first.description}
            </p>
          </div>
        </motion.div>

        {/* 1st Place - Grand Prize */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <div className="relative border-2 border-accent bg-accent/5 p-8 text-center h-[360px] flex flex-col justify-end cursor-target overflow-hidden">
            <BorderBeam size={200} duration={10} />
            
            {/* Crown Icon */}
            <div className="text-4xl mb-4">👑</div>
            
            <span className="mono text-xs text-accent">GRAND PRIZE</span>
            <h3 className="text-5xl md:text-6xl font-light mt-2">
              {IMPULSE_PRIZES.grandPrize.amount}
            </h3>
            <p className="text-sm text-muted-foreground mt-4">
              {IMPULSE_PRIZES.grandPrize.description}
            </p>

            {/* Perks */}
            <div className="flex flex-wrap gap-2 justify-center mt-6">
              {IMPULSE_PRIZES.grandPrize.perks.map((perk, i) => (
                <span key={i} className="mono text-xs px-2 py-1 bg-accent/10 text-accent">
                  {perk}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3rd Place */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="order-3"
        >
          <div className="border border-border bg-background p-8 text-center h-[220px] flex flex-col justify-end cursor-target hover:border-accent/30 transition-colors">
            <span className="mono text-xs text-muted-foreground">3RD PLACE</span>
            <h3 className="text-4xl font-light text-accent mt-2">
              {IMPULSE_PRIZES.second.amount}
            </h3>
            <p className="text-sm text-muted-foreground mt-4">
              {IMPULSE_PRIZES.second.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Special Prizes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-xl font-light text-center mb-8">Special Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {IMPULSE_PRIZES.special.map((prize, index) => (
            <div
              key={index}
              className="border border-border p-4 text-center hover:border-accent/30 transition-colors cursor-target group"
            >
              <h4 className="text-sm font-medium group-hover:text-accent transition-colors">
                {prize.title}
              </h4>
              <p className="text-lg text-accent mt-1">{prize.amount}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

/**
 * Prizes Section - Variant 2: Cards with Icons
 * Grid layout with prominent prize cards
 */
export function ImpulsePrizesV2() {
  const allPrizes = [
    { ...IMPULSE_PRIZES.grandPrize, icon: "🏆", featured: true },
    { ...IMPULSE_PRIZES.first, icon: "🥈", featured: false },
    { ...IMPULSE_PRIZES.second, icon: "🥉", featured: false },
    { ...IMPULSE_PRIZES.trackWinners, icon: "🎯", featured: false },
  ]

  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="mono text-xs text-accent tracking-widest">PRIZES</span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
          Over <span className="text-accent">₹1,00,000</span> in prizes
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allPrizes.map((prize, index) => (
          <motion.div
            key={prize.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              prize.featured && "md:col-span-2"
            )}
          >
            <MagicCard className={cn(
              "h-full cursor-target",
              prize.featured && "border-accent/30"
            )}>
              <div className={cn(
                "p-8",
                prize.featured && "md:flex md:items-center md:gap-12"
              )}>
                {/* Icon */}
                <div className={cn(
                  "text-5xl mb-6",
                  prize.featured && "md:mb-0 md:text-7xl"
                )}>
                  {prize.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="mono text-xs text-muted-foreground">
                    {prize.featured ? "GRAND PRIZE" : prize.title}
                  </span>
                  <h3 className={cn(
                    "font-light mt-2",
                    prize.featured ? "text-5xl md:text-6xl" : "text-3xl"
                  )}>
                    {prize.amount}
                  </h3>
                  <p className="text-muted-foreground mt-4">
                    {prize.description}
                  </p>

                  {prize.perks && (
                    <div className="flex flex-wrap gap-2 mt-6">
                      {prize.perks.map((perk, i) => (
                        <span key={i} className="mono text-xs px-3 py-1 border border-border">
                          {perk}
                        </span>
                      ))}
                    </div>
                  )}
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
 * Prizes Section - Variant 3: Minimal List
 * Clean, editorial prize list
 */
export function ImpulsePrizesV3() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-12 gap-12">
        {/* Left - Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-5"
        >
          <div className="sticky top-24 space-y-6">
            <span className="mono text-xs text-muted-foreground tracking-widest">
              PRIZE POOL
            </span>
            <h2 className="text-6xl md:text-7xl font-light tracking-tighter">
              ₹1L<span className="text-accent">+</span>
            </h2>
            <p className="text-muted-foreground max-w-sm">
              Compete for exciting cash prizes, internships, mentorship, and exclusive swag.
            </p>
          </div>
        </motion.div>

        {/* Right - Prize List */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          {/* Main Prizes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-accent/30 p-8 bg-accent/5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="mono text-xs text-accent">GRAND PRIZE</span>
                <h3 className="text-4xl font-light mt-2">
                  {IMPULSE_PRIZES.grandPrize.amount}
                </h3>
              </div>
              <div className="text-4xl">🏆</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border border-border p-6 hover:border-accent/30 transition-colors cursor-target"
            >
              <span className="mono text-xs text-muted-foreground">1ST RUNNER UP</span>
              <h3 className="text-2xl font-light mt-2">{IMPULSE_PRIZES.first.amount}</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border border-border p-6 hover:border-accent/30 transition-colors cursor-target"
            >
              <span className="mono text-xs text-muted-foreground">2ND RUNNER UP</span>
              <h3 className="text-2xl font-light mt-2">{IMPULSE_PRIZES.second.amount}</h3>
            </motion.div>
          </div>

          {/* Special Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="border border-border p-8"
          >
            <span className="mono text-xs text-muted-foreground block mb-6">
              SPECIAL CATEGORIES
            </span>
            <div className="grid grid-cols-2 gap-4">
              {IMPULSE_PRIZES.special.map((prize, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="text-sm">{prize.title}</span>
                  <span className="text-accent font-light">{prize.amount}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/**
 * Prizes Section - Variant 4: Full Width Banner
 * Immersive full-width prize showcase
 */
export function ImpulsePrizesV4() {
  return (
    <section className="py-24">
      {/* Full Width Banner */}
      <div className="relative bg-accent/5 border-y border-accent/30 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, var(--accent) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <span className="mono text-xs text-accent tracking-widest">
              TOTAL PRIZE POOL
            </span>
            <h2 className="text-7xl md:text-9xl font-light tracking-tighter">
              ₹1,00,000<span className="text-accent">+</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Cash prizes, internship offers, mentorship sessions, and swag for all participants
            </p>
          </motion.div>
        </div>
      </div>

      {/* Prize Breakdown */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Grand Prize", amount: IMPULSE_PRIZES.grandPrize.amount, icon: "🏆" },
            { label: "1st Runner Up", amount: IMPULSE_PRIZES.first.amount, icon: "🥈" },
            { label: "2nd Runner Up", amount: IMPULSE_PRIZES.second.amount, icon: "🥉" },
            { label: "Track Winners", amount: IMPULSE_PRIZES.trackWinners.amount + " each", icon: "🎯" },
          ].map((prize, index) => (
            <motion.div
              key={prize.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group cursor-target"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {prize.icon}
              </div>
              <h3 className="text-2xl font-light text-accent">{prize.amount}</h3>
              <p className="mono text-xs text-muted-foreground mt-2">{prize.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
