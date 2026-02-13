/**
 * GALLERY CONFIG GUIDE
 * ====================
 * 
 * HOW TO ADD IMAGES:
 * 
 * 1. EVENT IMAGES (linked to an event):
 *    - Add image with the event's `id` in the `tags` array
 *    - Example: tags: ["impulse-26", "hackathon", "winners"]
 *    - These will appear in the event modal when clicking that event card
 * 
 * 2. STANDALONE IMAGES (not linked to any event):
 *    - Just add image without any event id in tags
 *    - Example: tags: ["community", "team-photo"]
 *    - These will only appear in /gallery page, not in any event modal
 * 
 * FIELDS:
 * - id: Unique number (just increment from last entry)
 * - src: Image path (local: "/gallery/folder/image.jpg" or external URL)
 * - alt: Accessibility text
 * - description: Optional caption shown on hover
 * - tags: Array of strings for filtering (include event.id to link to event)
 * - height: Relative height for masonry layout (300-400 recommended)
 * 
 * TAG CONVENTIONS:
 * - Event IDs: "impulse-25", "xplode-25" (kebab-case, matches events.ts)
 * - Categories: "hackathon", "workshop", "seminar", "community"
 * - Descriptive: "winners", "team-photo", "keynote"
 * 
 * GOTCHAS:
 * - Event modal only shows images that have the event.id in their tags
 * - If no images have the event.id tag, modal falls back to just coverImage
 * - Tags are case-sensitive - keep them lowercase kebab-case
 * - Gallery page filter shows ALL unique tags
 * - One image can have multiple tags (appear in multiple filters/events)
 * 
 * HELPERS:
 * - getAllTags(): Returns all unique tags for filter UI
 * - getEventImages(eventId): Returns images for a specific event
 */

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description?: string;
  tags: string[];
  height: number; // relative height for masonry layout
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/yash-gupta/cover.jpg",
    alt: "Yash Gupta Mentorship Session",
    description: "Yash Gupta's Mentorship Session",
    tags: ["yash-gupta-mentorship", "workshop"],
    height: 350,
  },
  {
    id: 2,
    src: "/gallery/career-darika/cover.jpg",
    alt: "IOSD x Career Width",
    description: "Career Width Talk",
    tags: ["career-width", "seminar"],
    height: 320,
  },
  {
    id: 3,
    src: "/gallery/impulse-25/cover.jpg",
    alt: "IMPULSE 25",
    description: "IMPULSE 25 Hackathon",
    tags: ["impulse-25", "hackathon"],
    height: 380,
  },
  {
    id: 4,
    src: "/gallery/xplode-25/cover.jpg",
    alt: "XPLODE 25",
    description: "XPLODE 25 Hackathon",
    tags: ["xplode-25", "hackathon"],
    height: 360,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    alt: "Team Collaboration Workshop",
    description: "Student collaboration during tech workshop",
    tags: ["workshop"],
    height: 340,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
    alt: "Panel Discussion",
    description: "Industry experts panel discussion",
    tags: ["seminar"],
    height: 300,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    alt: "Hackathon Night",
    description: "Late night coding session at hackathon",
    tags: ["hackathon"],
    height: 390,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800",
    alt: "Code Review Session",
    description: "Peer code review and learning",
    tags: ["workshop"],
    height: 330,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    alt: "Team Building Activity",
    description: "IOSD team bonding session",
    tags: ["community"],
    height: 360,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
    alt: "Tech Talk Series",
    description: "Guest speaker tech talk",
    tags: ["seminar"],
    height: 310,
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
    alt: "Project Demo Day",
    description: "Students presenting their projects",
    tags: ["event"],
    height: 370,
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
    alt: "Coding Workshop",
    description: "Hands-on coding workshop session",
    tags: ["workshop"],
    height: 345,
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
    alt: "IOSD Meetup",
    description: "Monthly community meetup",
    tags: ["community"],
    height: 325,
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800",
    alt: "Innovation Summit",
    description: "Annual innovation and tech summit",
    tags: ["event"],
    height: 355,
  },
];

// Helper to get all unique tags from gallery images
export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  GALLERY_IMAGES.forEach(img => img.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
};

// Helper to get images for a specific event
export const getEventImages = (eventId: string): GalleryImage[] => {
  return GALLERY_IMAGES.filter(img => img.tags.includes(eventId));
};
