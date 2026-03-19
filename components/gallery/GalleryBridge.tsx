"use client"

import { useRef, useState } from "react"
import { GALLERY_IMAGES, type GalleryImage } from "@/lib/config"
import { GalleryModal } from "@/components/gallery/GalleryModal"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion, useScroll, useSpring, useTransform } from "motion/react"

export function GalleryBridge() {
  const images = GALLERY_IMAGES.slice(0, 10)
  const [selected, setSelected] = useState<GalleryImage | null>(null)
  const stripRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: stripRef,
    offset: ["start end", "end start"],
  })

  // Keep the drift subtle so manual horizontal scrolling still feels primary.
  const drift = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [-28, 0, 28]),
    {
      stiffness: 120,
      damping: 28,
      mass: 0.4,
    }
  )

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-light tracking-tight text-center">
          Moments from Our Events
        </h2>
      </div>

      {/* Horizontal image strip */}
      <div
        ref={stripRef}
        className="relative overflow-x-auto overflow-y-hidden pb-2"
        onWheel={(e) => {
          if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.currentTarget.scrollLeft += e.deltaY
            e.preventDefault()
          }
        }}
      >
        <motion.div className="flex w-max snap-x snap-mandatory gap-6 px-6" style={{ x: drift }}>
          {images.map((img) => (
            <div
              key={img.src}
              onClick={() => setSelected(img)}
              className={cn(
                "group cursor-pointer cursor-target",
                "h-64 w-[22rem] md:w-96 shrink-0 snap-start overflow-hidden",
                "border border-border bg-muted"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={384}
                height={256}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background" />
      </div>

      {/* Modal */}
      <GalleryModal
        images={images}
        selected={selected}
        onClose={() => setSelected(null)}
        onSelect={setSelected}
      />
    </section>
  )
}