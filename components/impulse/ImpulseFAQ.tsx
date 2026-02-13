"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { IMPULSE_FAQ } from "@/lib/config/impulse"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-border"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between gap-4 text-left cursor-target group"
      >
        <span className="text-lg font-light group-hover:text-accent transition-colors">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
            isOpen && "rotate-180 text-accent"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[500px] pb-6" : "max-h-0"
        )}
      >
        <p className="text-muted-foreground leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </motion.div>
  )
}

/**
 * FAQ Section - Variant 1: Accordion Style
 * Clean accordion with animations
 */
export function ImpulseFAQV1() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="mono text-xs text-muted-foreground tracking-widest">
          QUESTIONS
        </span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
          Frequently Asked <span className="text-accent">Questions</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {IMPULSE_FAQ.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

/**
 * FAQ Section - Variant 2: Two Column
 * Split layout with sticky header
 */
export function ImpulseFAQV2() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
  const halfLength = Math.ceil(IMPULSE_FAQ.length / 2)
  const leftColumn = IMPULSE_FAQ.slice(0, halfLength)
  const rightColumn = IMPULSE_FAQ.slice(halfLength)

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
            <span className="mono text-xs text-accent tracking-widest">
              FAQ
            </span>
            <h2 className="text-4xl font-light tracking-tight">
              Got <br /> Questions?
            </h2>
            <p className="text-muted-foreground text-sm">
              Can't find what you're looking for? Reach out to us at impulse@iosd.in
            </p>
            <a
              href="mailto:impulse@iosd.in"
              className="inline-block mono text-xs text-accent hover:underline cursor-target"
            >
              Contact Us →
            </a>
          </div>
        </motion.div>

        {/* Right - FAQ Items */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-0">
            {leftColumn.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>
          <div className="space-y-0">
            {rightColumn.map((faq, index) => {
              const actualIndex = index + halfLength
              return (
                <FAQItem
                  key={actualIndex}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === actualIndex}
                  onToggle={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                  index={index}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * FAQ Section - Variant 3: Cards Style
 * Each FAQ in a card
 */
export function ImpulseFAQV3() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="mono text-xs text-muted-foreground tracking-widest">
          HELP CENTER
        </span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-4">
          Everything you need to know
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {IMPULSE_FAQ.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={cn(
              "border border-border p-6 transition-colors cursor-target group",
              openIndex === index ? "border-accent/30 bg-accent/5" : "hover:border-accent/20"
            )}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <h3 className="font-light group-hover:text-accent transition-colors">
                  {faq.question}
                </h3>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index ? "max-h-[500px]" : "max-h-0"
                  )}
                >
                  <p className="text-sm text-muted-foreground pt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
              <span className="mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
