"use client"

import { motion } from "motion/react"
import { IMPULSE_TIMELINE } from "@/lib/config/impulse"
import { cn } from "@/lib/utils"

/**
 * Timeline Section - Variant 1: Vertical Timeline
 * Classic vertical timeline with accent line
 */
export function ImpulseTimelineV1() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="mono text-xs text-muted-foreground tracking-widest">
          THE JOURNEY
        </span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
          Event Schedule
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent to-transparent" />

        {IMPULSE_TIMELINE.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "relative flex items-start gap-8 mb-12",
              "md:flex-row",
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10" />

            {/* Content Card */}
            <div className={cn(
              "ml-20 md:ml-0 flex-1",
              index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
            )}>
              <div className="border border-border p-6 bg-background hover:border-accent/30 transition-colors cursor-target group">
                <span className="mono text-xs text-accent">{item.time}</span>
                <h3 className="text-xl font-light mt-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>
                <span className="mono text-xs text-muted-foreground/60 mt-3 block">
                  {item.date}
                </span>
              </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/**
 * Timeline Section - Variant 2: Horizontal Scroll
 * Side-scrolling timeline cards
 */
export function ImpulseTimelineV2() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mono text-xs text-muted-foreground tracking-widest">
            SCHEDULE
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
            48 Hours of <span className="text-accent">Innovation</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-border" />

        {/* Scrollable Container */}
        <div className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-accent/20">
          {IMPULSE_TIMELINE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex-shrink-0 w-[300px] snap-center"
            >
              <div className="relative pt-8">
                {/* Timeline Dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10" />

                {/* Card */}
                <div className="border border-border p-6 bg-background hover:border-accent/30 transition-colors cursor-target mt-4">
                  <div className="mono text-xs text-accent mb-3">{item.time}</div>
                  <h3 className="text-lg font-light mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
 * Timeline Section - Variant 3: Compact List
 * Minimal list style timeline
 */
export function ImpulseTimelineV3() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-12 gap-12">
        {/* Left Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-4"
        >
          <div className="sticky top-24 space-y-6">
            <span className="mono text-xs text-accent tracking-widest">SCHEDULE</span>
            <h2 className="text-4xl font-light tracking-tight">
              Event <br /> Timeline
            </h2>
            <p className="text-muted-foreground text-sm">
              Three days of hacking, learning, and building. Mark your calendars.
            </p>
          </div>
        </motion.div>

        {/* Timeline List */}
        <div className="col-span-12 lg:col-span-8">
          <div className="border-l border-border pl-8 space-y-0">
            {IMPULSE_TIMELINE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative py-6 border-b border-border last:border-b-0 group cursor-target"
              >
                {/* Dot */}
                <div className="absolute -left-8 top-8 w-3 h-3 bg-background border-2 border-accent group-hover:bg-accent transition-colors -translate-x-1/2" />

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-32 flex-shrink-0">
                    <span className="mono text-xs text-accent">{item.time}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-light group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Timeline Section - Variant 4: Day Split Layout
 * Split by days with visual separation
 */
export function ImpulseTimelineV4() {
  // Group by day
  const day0 = IMPULSE_TIMELINE.filter(t => t.time.includes("Day 0"))
  const day1 = IMPULSE_TIMELINE.filter(t => t.time.includes("Day 1"))
  const day2 = IMPULSE_TIMELINE.filter(t => t.time.includes("Day 2"))
  const day3 = IMPULSE_TIMELINE.filter(t => t.time.includes("Day 3"))

  const days = [
    { label: "Pre-Event", items: day0 },
    { label: "Day 1", items: day1 },
    { label: "Day 2", items: day2 },
    { label: "Day 3", items: day3 },
  ].filter(d => d.items.length > 0)

  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light tracking-tight">
          The 48-Hour <span className="text-accent">Countdown</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {days.map((day, dayIndex) => (
          <motion.div
            key={day.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
            className="space-y-6"
          >
            {/* Day Header */}
            <div className="border-b border-accent pb-4">
              <h3 className="text-2xl font-light">{day.label}</h3>
            </div>

            {/* Items */}
            <div className="space-y-4">
              {day.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="p-4 border border-border hover:border-accent/30 transition-colors cursor-target group"
                >
                  <span className="mono text-xs text-accent">
                    {item.time.split(" - ")[1] || item.time}
                  </span>
                  <h4 className="text-sm font-medium mt-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
