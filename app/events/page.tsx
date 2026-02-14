"use client"

import { useState } from "react"
import { DotPattern } from "@/components/ui/dot-pattern"
import { EVENTS, type Event } from "@/lib/config/events"
import { UI_CONFIG } from "@/lib/config"
import { cn } from "@/lib/utils"
import { EventPreviewCard } from "@/components/events/EventPreviewCard"
import { GalleryModal } from "@/components/gallery/GalleryModal"
import { GALLERY_IMAGES, getEventImages, type GalleryImage } from "@/lib/config"
import { UPCOMING_EVENT } from "@/lib/config/events"
import { UpcomingEventCard } from "@/components/events/UpcomingEvent"
import EventsTimeline from "@/components/events/EventsTimeline"
import { GalleryBridge } from "@/components/gallery/GalleryBridge"

const featured = EVENTS.filter(e => e.featured)
const recent = EVENTS.filter(e => !e.featured)

export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [eventImages, setEventImages] = useState<GalleryImage[]>([])

  const handleEventClick = (event: Event) => {
    // Get all images tagged with this event's id
    const images = getEventImages(event.id)
    
    if (images.length === 0) {
      // Fallback: try to find cover image in gallery
      const coverImage = GALLERY_IMAGES.find(img => img.src === event.coverImage)
      if (coverImage) {
        setEventImages([coverImage])
        setSelectedImage(coverImage)
      }
      return
    }
    
    setEventImages(images)
    // Find cover image in the filtered images, or use first image
    const cover = images.find(img => img.src === event.coverImage) || images[0]
    setSelectedImage(cover)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
    setEventImages([])
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-transparent">
      {/* Hero */}
      <section className="relative flex h-[60vh] items-center justify-center">
        <div className="z-10 flex flex-col items-center gap-6 text-center px-4">
          <h1 className="text-4xl sm:text-7xl font-light tracking-tight pb-2 px-6">
            Events
          </h1>

          <p className="max-w-xl text-muted-foreground text-base sm:text-lg">
            Workshops, hackathons, talks, and everything that shapes the IOSD community.
          </p>
        </div>

        {/* <MeshGradient
          className="absolute inset-0 opacity-20"
          colors={["#000000", "#1a1a2e", "#67bed9", "#ffffff"]}
          speed={0.8}
        /> */}

        <DotPattern
          className={cn(
            "mask-[radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
          style={{ opacity: UI_CONFIG.dotPattern.opacity / 100 }}
        />

      </section>

      {/* Upcoming Event */}
      {UPCOMING_EVENT && (
        <section id={UPCOMING_EVENT.id} className="container mx-auto px-4 pt-8 pb-4 scroll-mt-24">
          <h2 className="mb-8 text-3xl font-light tracking-tight">
            What's Next
          </h2>
          <UpcomingEventCard event={UPCOMING_EVENT} />
        </section>
      )}

      {/* Featured */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-3xl font-light tracking-tight">
          Recent Highlights
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {featured.map(event => (
            <EventPreviewCard
              key={event.id}
              event={event}
              priority
              onClick={() => handleEventClick(event)}
            />
          ))}
        </div>
      </section>

      {/* Recent */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-2xl font-light tracking-tight">
          More Events
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map(event => (
            <EventPreviewCard
              key={event.id}
              event={event}
              onClick={() => handleEventClick(event)}
            />
          ))}
        </div>
      </section>

      {/* More Events */}

      <GalleryModal
        images={eventImages}
        selected={selectedImage}
        onClose={handleCloseModal}
        onSelect={setSelectedImage}
      />


      <EventsTimeline />

      <GalleryBridge />

      <p className="mono text-xs text-muted-foreground text-center py-16">
        Events are excuses. Learning is the agenda.
      </p>


    </div>
  )
}
