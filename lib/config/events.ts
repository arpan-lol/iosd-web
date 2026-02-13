/**
 * EVENTS CONFIG GUIDE
 * ====================
 * 
 * HOW TO ADD A NEW EVENT:
 * 1. Add event entry here with a unique `id` (kebab-case, e.g. "impulse-26")
 * 2. Set `coverImage` to the path of the cover image (must exist in public/gallery/)
 * 3. Add images to gallery.ts with the event's `id` in their `tags` array
 * 
 * RELATIONSHIP:
 * - Event.id links to GalleryImage.tags
 * - One event → many images (all images tagged with event.id)
 * - coverImage is explicitly set (not auto-picked from gallery)
 * 
 * FIELDS:
 * - id: Unique identifier, used to filter gallery images (MUST match tags in gallery.ts)
 * - title: Display name
 * - date: Human-readable date string (e.g. "March 2026")
 * - year: Numeric year for timeline grouping
 * - category: Display label like "Hackathon", "Talk", "Workshop"
 * - coverImage: Path to cover image (usually /gallery/{event-folder}/cover.jpg)
 * - featured?: Optional - shows in "Recent Highlights" section
 * 
 * GOTCHAS:
 * - If event.id doesn't match any gallery image tags, modal will only show coverImage
 * - coverImage path must exist in public/ folder
 * - Keep id consistent between here and gallery.ts tags
 */

export type Event = {
  id: string
  title: string
  date: string        // "Mar 2024"
  year: number
  category: string    // Display category like "Hackathon", "Talk"
  coverImage: string
  featured?: boolean
}

export const EVENTS: Event[] = [
  {
    id: "yash-gupta-mentorship",
    title: "Yash Gupta's Mentorship Session",
    date: "December 2025",
    year: 2025,
    category: "Mentorship",
    coverImage: "/gallery/yash-gupta/cover.jpg",
    featured: true,
  },
  {
    id: "career-width",
    title: "IOSD x Career Width",
    date: "November 2025",
    year: 2025,
    category: "Talk",
    coverImage: "/gallery/career-darika/cover.jpg",
  },
  {
    id: "impulse-25",
    title: "IMPULSE 25",
    date: "October 2025",
    year: 2025,
    category: "Hackathon",
    coverImage: "/gallery/impulse-25/cover.jpg",
  },
  {
    id: "xplode-25",
    title: "XPLODE 25",
    date: "September 2025",
    year: 2025,
    category: "Hackathon",
    coverImage: "/gallery/xplode-25/cover.jpg",
    featured: true
  },
]

export type UpcomingEvent = {
  title: string
  date: string
  description: string
  coverImage?: string
  registerUrl?: string
  registrationOpen: boolean
}

export const UPCOMING_EVENT: UpcomingEvent | null = {
  title: "IMPULSE 26",
  date: "Mar 2026",
  description:
    "The flagship tech fest of IOSD MAIT",
  coverImage: "/gallery/impulse-25/cover.jpg",
  registerUrl: "",
  registrationOpen: false,
}
