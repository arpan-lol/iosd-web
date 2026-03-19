/**
 * EVENTS CONFIG GUIDE
 * ====================
 * 
 * HOW TO ADD A NEW EVENT:
 * 1. Add event entry here in chronological display order
 * 2. Set `coverImage` to the path or URL of the cover image
 * 3. Update EVENT_GALLERY_TAGS using the same event index
 * 
 * RELATIONSHIP:
 * - Event index links to EVENT_GALLERY_TAGS[index]
 * - EVENT_GALLERY_TAGS[index] links to GalleryImage.tags
 * - coverImage is explicitly set (not auto-picked from gallery)
 * 
 * FIELDS:
 * - title: Display name
 * - date: Human-readable date string (e.g. "March 2026")
 * - category: Display label like "Hackathon", "Talk", "Workshop"
 * - coverImage: Path to cover image (usually /gallery/{event-folder}/cover.jpg)
 * - featured?: Optional - shows in "Recent Highlights" section
 * 
 * GOTCHAS:
 * - If EVENT_GALLERY_TAGS[index] doesn't match any gallery image tags, modal will only show coverImage
 * - coverImage path must exist in public/ folder
 * - Keep EVENTS order and EVENT_GALLERY_TAGS order aligned
 */

export type Event = {
  title: string
  date: string        // "Mar 2024"
  category: string    // Display category like "Hackathon", "Talk"
  coverImage: string
  featured?: boolean
}

export const EVENTS: Event[] = [
  {
    title: "Internship Mentorship Session",
    date: "December 2025",
    category: "seminar",
    coverImage: "https://res.cloudinary.com/djqkhf152/image/upload/v1772988010/3_bccmpi.jpg",
    featured: true,
  },
  {
    title: "LinkedIn Optimization Seminar",
    date: "November 2025",
    category: "seminar",
    coverImage: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732101/6_sux8qs.jpg",
  },
  {
    title: "IMPULSE 2025",
    date: "October 2025",
    category: "Hackathon",
    coverImage: "/gallery/impulse-25/cover.jpg",
  },
  {
    title: "XPLODE 25",
    date: "September 2025",
    category: "Orientation",
    coverImage: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722286/34_n8grf3.jpg",
    featured: true
  },
]

// Index-based mapping for event modal image lookup.
// Keep order aligned with EVENTS above.
export const EVENT_GALLERY_TAGS: Array<string | null> = [
  "seminar",
  "seminar",
  "impulse-25",
  "xplode-25",
]

export type UpcomingEvent = {
  id: string
  title: string
  date: string
  description: string
  coverImage?: string
  registerUrl?: string
  registrationOpen: boolean
}

export const UPCOMING_EVENT: UpcomingEvent | null = null
