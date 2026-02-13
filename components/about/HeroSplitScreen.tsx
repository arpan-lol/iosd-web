"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { WordRotate } from "@/components/ui/word-rotate"

export function HeroSplitScreen() {
  return (
    <section className="relative flex items-center justify-center py-10 md:py-15">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* Logo - secondary */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <Image
              src="/IOSD_HD.png"
              alt="IOSD"
              width={1079}
              height={280}
              className="h-auto w-full max-w-[160px] sm:max-w-[200px] md:max-w-[240px] object-contain opacity-70"
              priority
            />
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
              About the{" "}
              <WordRotate
                words={["Community", "Family", "Movement", "Culture"]}
                className="text-accent"
              />
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
