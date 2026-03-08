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
 * - width: Actual image width in pixels (from Cloudinary/image metadata)
 * - height: Actual image height in pixels (from Cloudinary/image metadata)
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
  width: number;
  height: number;
}
export const GALLERY_IMAGES: GalleryImage[] = [
  // === Xplode 25
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720993/3_fypv9i.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 2000, height: 3008,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722290/37_wy6fo8.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    width: 2914, height: 1639,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721777/9_ikektf.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720993/2_a60zyu.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 2000, height: 3008,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721004/18_fpffhd.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 2000, height: 3008,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721010/23_p3om25.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 990, height: 1760,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721009/22_zyassb.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 1512, height: 1214,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721003/16_m5atfw.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721008/21_ybddff.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721006/20_y6nqga.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 3008, height: 938,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721004/17_cmhvp4.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721002/15_z2tsag.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 2000, height: 3008,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721001/14_ztmjeh.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 2000, height: 3008,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721000/13_imdbul.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720999/12_gyhql5.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 3000, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720998/11_g6xim0.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 3000, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720998/10_it6nve.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 3000, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720997/9_mm8dky.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 3000, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720995/8_yo6vnn.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 2000, height: 3000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720994/7_wdhvzr.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 2000, height: 3000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720994/5_s5cfil.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720993/4_uy99fd.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 2000, height: 3008,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721011/24_odlqxe.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 3000, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721006/19_izpoic.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720993/1_mjdxwv.jpg",
    alt: "Xplode 25",
    tags: ["xplode-25", "event"],
    width: 2000, height: 3008,
  },

  // === LinkedIn Optimization Seminar ===
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732119/1_gacojz.jpg",
    alt: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732115/14_sot6ob.jpg",
    alt: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732111/12_hgsqzj.jpg",
    alt: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732108/10_zuxkpy.jpg",
    alt: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732122/2_ozrqfu.jpg",
    alt: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    width: 2000, height: 3008,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732106/9_ucyjjj.jpg",
    alt: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732104/8_nky6qq.jpg",
    alt: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    width: 3008, height: 2000,
  },
  // {
  //   src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732101/6_sux8qs.jpg",
  //   alt: "LinkedIn Optimization Seminar",
  //   tags: ["seminar"],
  //   width: 3008, height: 2000,
  // }, (is a cover already)
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732113/13_op5tja.jpg",
    alt: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    width: 2000, height: 3008,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732099/5_yamc9e.jpg",
    alt: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    width: 2000, height: 3008,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732097/4_j12iiz.jpg",
    alt: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732117/15_wdxt8x.jpg",
    alt: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    width: 2000, height: 2315,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732096/3_f7bz9x.jpg",
    alt: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    width: 2000, height: 3008,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732066/9_nlodnj.jpg",
    alt: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    width: 6016, height: 4000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732110/11_vqyz1x.jpg",
    alt: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    width: 3008, height: 2000,
  },
  // === Group / Community ===
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722289/35_frn2bl.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    width: 3058, height: 2293,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722289/36_phb2ew.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    width: 3484, height: 2613,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722286/34_n8grf3.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    width: 2499, height: 1874,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722286/33_wcizsk.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    width: 2207, height: 2943,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722285/32_cqto2b.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    width: 3024, height: 2268,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721805/31_dmmqdb.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721804/30_xssw20.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721801/28_embtyi.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721793/22_ohyb0r.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721782/13_g2crty.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721776/8_f818nz.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    width: 3008, height: 2000,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721772/2_io3cdg.jpg",
    alt: "IOSD Community",
    tags: ["community"],
    width: 3008, height: 2000,
  },

  // === Event Covers ===
  {
    // src: "/gallery/yash-gupta/cover.jpg",
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772988010/3_bccmpi.jpg",
    alt: "Yash Gupta Mentorship Session",
    description: "Internship Mentorship Session",
    tags: ["seminar"],
    width: 1512, height: 2016,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732101/6_sux8qs.jpg",
    alt: "LinkedIn Optimization Seminar",
    description: "LinkedIn Optimization Seminar",
    tags: ["seminar"],
    width: 3008, height: 2000,
  },
  {
    src: "/gallery/impulse-25/cover.jpg",
    alt: "IMPULSE 25",
    description: "IMPULSE 25 Hackathon",
    tags: ["impulse-25", "hackathon"],
    width: 1152, height: 1440,
  },
  {
    src: "/gallery/xplode-25/cover.jpg",
    alt: "XPLODE 25",
    description: "XPLODE 25 - The Orientation",
    tags: ["xplode-25"],
    width: 512, height: 512,
  },

  // === Yash bhaiya ka seminar ===
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772988010/1_hfbnhn.jpg",
    alt: "IOSD Seminar",
    tags: ["seminar"],
    width: 1512, height: 2016,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772988009/2_inctmi.jpg",
    alt: "IOSD Seminar",
    tags: ["seminar"],
    width: 1512, height: 830,
  },
  // {
  //   src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772988010/3_bccmpi.jpg",
  //   alt: "IOSD Seminar",
  //   tags: ["seminar"],
  //   width: 1512, height: 2016,
  // }, (is a cover already)
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772988010/4_lfyz6q.jpg",
    alt: "IOSD Seminar",
    tags: ["seminar"],
    width: 2016, height: 1512,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772988010/5_cbdklz.jpg",
    alt: "IOSD Seminar",
    tags: ["seminar"],
    width: 2016, height: 1512,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772988011/6_kz5cop.jpg",
    alt: "IOSD Seminar",
    tags: ["seminar"],
    width: 1512, height: 795,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772988011/7_uo12f2.jpg",
    alt: "IOSD Seminar",
    tags: ["seminar"],
    width: 2016, height: 1512,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772988012/8_ygznow.jpg",
    alt: "IOSD Seminar",
    tags: ["seminar"],
    width: 2016, height: 1512,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772988010/9_tm1l8a.jpg",
    alt: "IOSD Seminar",
    tags: ["seminar"],
    width: 2016, height: 1512,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772988010/10_buq0rp.jpg",
    alt: "IOSD Seminar",
    tags: ["seminar"],
    width: 2016, height: 1512,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772988011/11_wngwbg.jpg",
    alt: "IOSD Seminar",
    tags: ["seminar"],
    width: 2016, height: 1512,
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772988012/12_nfuo1w.jpg",
    alt: "IOSD Seminar",
    tags: ["seminar"],
    width: 2016, height: 1512,
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
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772720993/2_a60zyu.jpg",
    alt: "Xplode 25",
    gridClass: "aspect-square",
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721805/31_dmmqdb.jpg",
    alt: "IOSD Community",
    gridClass: "aspect-square",
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772721003/16_m5atfw.jpg",
    alt: "IOSD Community",
    label: "Community",
    gridClass: "col-span-2 aspect-[2/1]",
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772732111/12_hgsqzj.jpg",
    alt: "Xplode 25",
    gridClass: "aspect-square",
  },
  {
    src: "https://res.cloudinary.com/djqkhf152/image/upload/v1772722289/35_frn2bl.jpg",
    alt: "IOSD Community",
    gridClass: "aspect-square",
  },
];
