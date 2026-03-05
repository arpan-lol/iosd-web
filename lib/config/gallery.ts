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
  src: string;
  alt: string;
  description?: string;
  tags: string[];
  height: number; // relative height for masonry layout
}
export const GALLERY_IMAGES: GalleryImage[] = [
  // === Event Covers (local) ===
  {
    src: "/gallery/yash-gupta/cover.jpg",
    alt: "Yash Gupta Mentorship Session",
    description: "Internship Mentorship Session",
    tags: ["seminar"],
    height: 350,
  },
  {
    src: "/gallery/career-darika/cover.jpg",
    alt: "IOSD x Career Width",
    description: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    height: 320,
  },
  {
    src: "/gallery/impulse-25/cover.jpg",
    alt: "IMPULSE 25",
    description: "IMPULSE 25 Hackathon",
    tags: ["impulse-25", "hackathon"],
    height: 380,
  },
  {
    src: "/gallery/xplode-25/cover.jpg",
    alt: "XPLODE 25",
    description: "XPLODE 25 Hackathon",
    tags: ["xplode-25"],
    height: 360,
  },
  // === Xplode 25
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721011/24_odlqxe.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721010/23_p3om25.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721009/22_zyassb.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 340,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721008/21_ybddff.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721006/20_y6nqga.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 300,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721006/19_izpoic.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721004/17_cmhvp4.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721004/18_fpffhd.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721003/16_m5atfw.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721002/15_z2tsag.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721001/14_ztmjeh.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721000/13_imdbul.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720999/12_gyhql5.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720998/11_g6xim0.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720998/10_it6nve.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720997/9_mm8dky.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720995/8_yo6vnn.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720994/6_bkfnsa.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720994/7_wdhvzr.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720994/5_s5cfil.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720993/4_uy99fd.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720993/3_fypv9i.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720993/2_a60zyu.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720993/1_mjdxwv.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    height: 400,
  },
  // === Group / Community (Cloudinary) ===
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722290/37_wy6fo8.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722289/35_frn2bl.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    height: 350,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722289/36_phb2ew.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    height: 340,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722286/34_n8grf3.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    height: 340,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722286/33_wcizsk.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722285/32_cqto2b.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    height: 340,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721805/31_dmmqdb.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721804/30_xssw20.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721801/28_embtyi.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721793/22_ohyb0r.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721782/13_g2crty.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721777/9_ikektf.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721776/8_f818nz.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721772/2_io3cdg.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    height: 320,
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
// Landing page gallery preview grid
export interface GalleryPreviewItem {
  src: string;
  alt: string;
  label?: string;
  gridClass: string;
}
export const GALLERY_PREVIEW: GalleryPreviewItem[] = [
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720997/9_mm8dky.jpg",
    alt: "Xplode 25",
    label: "XPLODE 25",
    gridClass: "col-span-2 row-span-2",
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721008/21_ybddff.jpg",
    alt: "Xplode 25",
    gridClass: "aspect-square",
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722290/37_wy6fo8.jpg",
    alt: "IOSD Community",
    gridClass: "aspect-square",
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720994/5_s5cfil.jpg",
    alt: "Xplode 25",
    gridClass: "aspect-square",
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721805/31_dmmqdb.jpg",
    alt: "IOSD Community",
    gridClass: "aspect-square",
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721804/30_xssw20.jpg",
    alt: "IOSD Community",
    label: "Community",
    gridClass: "col-span-2 aspect-[2/1]",
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721000/13_imdbul.jpg",
    alt: "Xplode 25",
    gridClass: "aspect-square",
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722289/35_frn2bl.jpg",
    alt: "IOSD Community",
    gridClass: "aspect-square",
  },
];
