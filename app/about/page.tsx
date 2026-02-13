"use client"

import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { JoinUsButton } from "@/components/join-us-button";
import {
  ABOUT_EVENTS,
  TEAM_MEMBERS,
  ABOUT_CONTENT,
  DOMAINS,
} from "@/lib/config";
import { WordRotate } from "@/components/ui/word-rotate";
import CompleteTeamSection from './complete';
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { HeroSplitScreen } from "@/components/about/HeroSplitScreen";

interface NotificationProps {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-transparent">
      {/* Hero Section */}
      <HeroSplitScreen />

      {/* Mission & Vision Split */}
      <section className="container mx-auto px-4 pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-light tracking-tight">{ABOUT_CONTENT.mission.title}</h2>
            <p className="text-muted-foreground">
              {ABOUT_CONTENT.mission.description}
            </p>
            <h2 className="text-3xl font-light tracking-tight pt-4">{ABOUT_CONTENT.vision.title}</h2>
            <p className="text-muted-foreground">
              {ABOUT_CONTENT.vision.description}
            </p>
          </div>
          {/* 
          Animated List
          
          <div className="relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg border-none bg-background p-6 shadow-lg">
            <AnimatedList>
              {ABOUT_EVENTS.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div> */}

          {/* Placeholder Image */}
          <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden border border-border bg-muted/20">
            <div className="flex flex-col items-center gap-4 text-muted-foreground/50">
              <div className="h-16 w-16 border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                <span className="text-2xl">📷</span>
              </div>
              <p className="mono text-xs">Photo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col items-center gap-6 text-center mb-16 px-5">
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight leading-none">
            Meet the Team
          </h1>
          <p className="max-w-xl text-muted-foreground text-lg">
            The people shaping IOSD - quietly, deliberately, together.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="p-8 border border-blue-500/20 rounded-lg bg-slate-900/40 transition-colors hover:border-blue-500/40"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-6 h-28 w-28 overflow-hidden border border-border">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-medium">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mt-1 text-sm text-muted-foreground mono">
                  {member.role}
                </p>

                {/* Socials */}
                <div className="mt-6 flex gap-5">
                  {member.socials.github && (
                    <a href={member.socials.github} className="text-muted-foreground hover:text-foreground transition">
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="text-muted-foreground hover:text-foreground transition">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="text-muted-foreground hover:text-foreground transition">
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CompleteTeamSection />


      {/* Domains Bento Grid */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-3xl font-light tracking-tight text-center">
          Technical Domains
        </h2>
        <BentoGrid className="lg:grid-rows-2">
          {DOMAINS.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </section>


      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-light tracking-tight">
            {ABOUT_CONTENT.cta.title}
          </h2>
          <p className="max-w-xl text-muted-foreground">
            {ABOUT_CONTENT.cta.description}
          </p>
          <JoinUsButton />
        </div>
      </section>

    </div>
  )
}