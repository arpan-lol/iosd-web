"use client"

/**
 * IMPULSE HACKATHON PAGE
 * =====================
 * 
 * IOSD's Flagship Hackathon - Multiple component variations available.
 * Uncomment/comment sections to customize the page layout.
 * 
 * Each section has multiple variants:
 * - V1, V2, V3, V4 etc. with different design approaches
 * - Mix and match to create your ideal page
 * 
 * Photo placeholders are implemented throughout - replace with real images.
 */

// Hero Variants
import { 
  ImpulseHeroV1,     // Particles + Cinematic Typography
  ImpulseHeroV2,     // Minimal + Grid Background
  ImpulseHeroV3,     // Split Screen with Image
} from "@/components/impulse/ImpulseHero"

// Stats Variants
import { 
  ImpulseStatsV1,    // Horizontal Cards with NumberTicker
  ImpulseStatsV2,    // Large Typography Focus
  ImpulseStatsV3,    // MagicCard with Hover Effects
  ImpulseStatsV4,    // Asymmetric Layout
} from "@/components/impulse/ImpulseStats"

// Tracks Variants
import { 
  ImpulseTracksV1,   // Bento Grid Style
  ImpulseTracksV2,   // MagicCard with Icons
  ImpulseTracksV3,   // List Style
  ImpulseTracksV4,   // Featured Cards
} from "@/components/impulse/ImpulseTracks"

// Timeline Variants
import { 
  ImpulseTimelineV1, // Vertical Timeline
  ImpulseTimelineV2, // Horizontal Scroll
  ImpulseTimelineV3, // Compact List
  ImpulseTimelineV4, // Day Split Layout
} from "@/components/impulse/ImpulseTimeline"

// Prizes Variants
import { 
  ImpulsePrizesV1,   // Podium Style
  ImpulsePrizesV2,   // Cards with Icons
  ImpulsePrizesV3,   // Minimal List
  ImpulsePrizesV4,   // Full Width Banner
} from "@/components/impulse/ImpulsePrizes"

// Judges & Mentors Variants
import { 
  ImpulseJudgesV1,           // Grid Layout
  ImpulseMentorsV1,          // Featured Cards
  ImpulseJudgesMentorsV2,    // Split Layout
  ImpulseJudgesMentorsV3,    // Minimal List
} from "@/components/impulse/ImpulseJudgesMentors"

// Sponsors Variants
import { 
  ImpulseSponsorsV1, // Marquee Scroll
  ImpulseSponsorsV2, // Tiered Grid
  ImpulseSponsorsV3, // Minimal Banner
  ImpulseSponsorsV4, // Full Width with CTA
} from "@/components/impulse/ImpulseSponsors"

// Showcase (Winners & Gallery) Variants
import { 
  ImpulseWinnersV1,  // Featured Cards
  ImpulseWinnersV2,  // Timeline Style
  ImpulseGalleryV1,  // Grid Layout
  ImpulseGalleryV2,  // Mosaic Layout
  ImpulseShowcaseV1, // Combined Winners + Gallery
} from "@/components/impulse/ImpulseShowcase"

// FAQ Variants
import { 
  ImpulseFAQV1,      // Accordion Style
  ImpulseFAQV2,      // Two Column
  ImpulseFAQV3,      // Cards Style
} from "@/components/impulse/ImpulseFAQ"

// CTA & Theme Variants
import { 
  ImpulseCTAV1,      // Full Width Banner
  ImpulseCTAV2,      // Split with Image
  ImpulseCTAV3,      // Minimal Footer CTA
  ImpulseTheme,      // About + Theme Section
  ImpulseVelocityText, // Scrolling Text Banner
} from "@/components/impulse/ImpulseCTA"

import { ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"
import { IMPULSE_VELOCITY_TEXT } from "@/lib/config/impulse"

export default function ImpulsePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-transparent">
      
      {/* =============================================
          HERO SECTION
          Choose one variant:
          - ImpulseHeroV1: Particles + Cinematic
          - ImpulseHeroV2: Minimal + Grid
          - ImpulseHeroV3: Split with Image
      ============================================= */}
      <ImpulseHeroV1 />
      {/* <ImpulseHeroV2 /> */}
      {/* <ImpulseHeroV3 /> */}

      {/* =============================================
          VELOCITY SCROLL TEXT
          Optional animated scrolling text
      ============================================= */}
      <section className="py-12 overflow-hidden">
        <ScrollVelocityRow
          baseVelocity={3}
          className="text-center text-4xl font-light tracking-tight md:text-6xl text-muted-foreground/20"
        >
          {IMPULSE_VELOCITY_TEXT}
        </ScrollVelocityRow>
      </section>

      {/* =============================================
          ABOUT + THEME SECTION
          Learn about Impulse and this year's theme
      ============================================= */}
      <ImpulseTheme />

      {/* =============================================
          STATS SECTION
          Choose one variant:
          - ImpulseStatsV1: Horizontal Cards
          - ImpulseStatsV2: Large Typography
          - ImpulseStatsV3: MagicCard
          - ImpulseStatsV4: Asymmetric
      ============================================= */}
      <ImpulseStatsV1 />
      {/* <ImpulseStatsV2 /> */}
      {/* <ImpulseStatsV3 /> */}
      {/* <ImpulseStatsV4 /> */}

      {/* =============================================
          TRACKS SECTION
          Choose one variant:
          - ImpulseTracksV1: Bento Grid
          - ImpulseTracksV2: MagicCard
          - ImpulseTracksV3: List Style
          - ImpulseTracksV4: Featured Cards
      ============================================= */}
      <ImpulseTracksV2 />
      {/* <ImpulseTracksV1 /> */}
      {/* <ImpulseTracksV3 /> */}
      {/* <ImpulseTracksV4 /> */}

      {/* =============================================
          TIMELINE SECTION
          Choose one variant:
          - ImpulseTimelineV1: Vertical Timeline
          - ImpulseTimelineV2: Horizontal Scroll
          - ImpulseTimelineV3: Compact List
          - ImpulseTimelineV4: Day Split
      ============================================= */}
      <ImpulseTimelineV3 />
      {/* <ImpulseTimelineV1 /> */}
      {/* <ImpulseTimelineV2 /> */}
      {/* <ImpulseTimelineV4 /> */}

      {/* =============================================
          PRIZES SECTION
          Choose one variant:
          - ImpulsePrizesV1: Podium Style
          - ImpulsePrizesV2: Cards with Icons
          - ImpulsePrizesV3: Minimal List
          - ImpulsePrizesV4: Full Width Banner
      ============================================= */}
      <ImpulsePrizesV1 />
      {/* <ImpulsePrizesV2 /> */}
      {/* <ImpulsePrizesV3 /> */}
      {/* <ImpulsePrizesV4 /> */}

      {/* =============================================
          JUDGES & MENTORS SECTION
          Choose one or combine:
          - ImpulseJudgesV1 + ImpulseMentorsV1: Separate sections
          - ImpulseJudgesMentorsV2: Split Layout
          - ImpulseJudgesMentorsV3: Minimal List
      ============================================= */}
      <ImpulseJudgesMentorsV2 />
      {/* <ImpulseJudgesV1 /> */}
      {/* <ImpulseMentorsV1 /> */}
      {/* <ImpulseJudgesMentorsV3 /> */}

      {/* =============================================
          SPONSORS SECTION
          Choose one variant:
          - ImpulseSponsorsV1: Marquee Scroll
          - ImpulseSponsorsV2: Tiered Grid
          - ImpulseSponsorsV3: Minimal Banner
          - ImpulseSponsorsV4: Full Width + CTA
      ============================================= */}
      <ImpulseSponsorsV1 />
      {/* <ImpulseSponsorsV2 /> */}
      {/* <ImpulseSponsorsV3 /> */}
      {/* <ImpulseSponsorsV4 /> */}

      {/* =============================================
          PAST WINNERS & GALLERY SECTION
          Choose one:
          - ImpulseShowcaseV1: Combined Winners + Gallery
          - ImpulseWinnersV1 + ImpulseGalleryV1: Separate sections
          - ImpulseWinnersV2: Timeline Style Winners
          - ImpulseGalleryV2: Mosaic Gallery
      ============================================= */}
      <ImpulseShowcaseV1 />
      {/* <ImpulseWinnersV1 /> */}
      {/* <ImpulseWinnersV2 /> */}
      {/* <ImpulseGalleryV1 /> */}
      {/* <ImpulseGalleryV2 /> */}

      {/* =============================================
          FAQ SECTION
          Choose one variant:
          - ImpulseFAQV1: Accordion Style
          - ImpulseFAQV2: Two Column
          - ImpulseFAQV3: Cards Style
      ============================================= */}
      <ImpulseFAQV2 />
      {/* <ImpulseFAQV1 /> */}
      {/* <ImpulseFAQV3 /> */}

      {/* =============================================
          CTA SECTION
          Choose one variant:
          - ImpulseCTAV1: Full Width + Particles
          - ImpulseCTAV2: Split with Image
          - ImpulseCTAV3: Minimal Footer
      ============================================= */}
      <ImpulseCTAV1 />
      {/* <ImpulseCTAV2 /> */}
      {/* <ImpulseCTAV3 /> */}

      {/* =============================================
          FOOTER TAGLINE
          Optional closing statement
      ============================================= */}
      <p className="mono text-xs text-muted-foreground text-center py-16 border-t border-border">
        48 hours. Infinite possibilities. Welcome to Impulse.
      </p>
    </div>
  )
}
