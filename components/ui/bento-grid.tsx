"use client"

import type React from "react"

import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)} {...props}>
      {children}
    </div>
  )
}

// Floating Icon Badge style
const BentoCard = ({ name, className, icon: Icon, description, ...props }: BentoCardProps) => {
  return (
    <div
      key={name}
      className={cn(
        "cursor-target cursor-none",
        "group relative col-span-3 flex flex-col justify-end overflow-hidden",
        "border border-border/50 bg-muted/10",
        "hover:border-accent/30 hover:bg-accent/5 transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Floating icon badge */}
      <div className="absolute top-4 right-4 h-12 w-12 border border-border/50 
        bg-background flex items-center justify-center shadow-sm
        group-hover:border-accent/50 group-hover:shadow-accent/10 transition-all">
        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
      </div>
      
      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-2xl font-light tracking-tight">{name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export { BentoCard, BentoGrid }
