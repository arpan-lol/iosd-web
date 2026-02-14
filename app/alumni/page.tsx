import Image from "next/image"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { AvatarCircles } from "@/components/ui/avatar-circles"
import { DotPattern } from "@/components/ui/dot-pattern"
import { AlumniImpact } from "@/components/alumni/AlumniImpact"
// import { NotableAlumni } from "@/components/alumni/NotableAlumni"
import { NotableAlumniV1 } from "@/components/alumni/NotableAlumniV1"
import { NotableAlumniV2 } from "@/components/alumni/NotableAlumniV2"
import { NotableAlumniV3 } from "@/components/alumni/NotableAlumniV3"
import { ALUMNI_COMPANIES, ALUMNI_AVATARS } from "@/lib/config/alumni"
import { UI_CONFIG } from "@/lib/config"

export default function AlumniPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-transparent">
      {/* Hero */}
      <section className="relative flex h-[60vh] items-center justify-center">
        <div className="z-10 flex flex-col items-center gap-6 text-center px-4">
          <h1 className="text-4xl sm:text-7xl font-light tracking-tight pb-2 px-6">
            IOSD Alumni
          </h1>

          <p className="max-w-xl text-muted-foreground text-base sm:text-lg">
            Generations of builders, engineers, and leaders - connected by craft.
          </p>

          <div className="mt-4 flex items-center gap-6">
            <AvatarCircles
              numPeople={99}
              avatarUrls={ALUMNI_AVATARS}
            />
          </div>
        </div>

        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent_70%)]"
          )}
          style={{ opacity: UI_CONFIG.dotPattern.opacity / 100 }}
        />
      </section>

      <NotableAlumniV1 />
      <NotableAlumniV2 />
      <NotableAlumniV3 />
      {/* <NotableAlumni /> */}

      {/* Companies */}
      <section className="py-24">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-light tracking-tight text-center">
            Where We Work
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <Marquee className="[--duration:24s]">
            {ALUMNI_COMPANIES.map((company) => (
              <div
                key={company.name}
                className={cn(
                  "mx-6 flex h-16 w-40 items-center justify-center",
                  "border border-accent/20 md:border-border text-sm mono",
                  "text-muted-foreground hover:text-foreground transition hover:border-accent/40 cursor-target"
                )}
              >
                <Image src={company.logo} alt={company.name} width={34} height={34} className="max-w-fit max-h-6 mr-3" />
                {company.name}
              </div>
            ))}
          </Marquee>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background" />
        </div>
      </section>

      {/* Impact Section */}
      <AlumniImpact />
    </div>
  )
}
