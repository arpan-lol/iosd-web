'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { UPCOMING_EVENT } from '@/lib/config/events'
import { cn } from '@/lib/utils'

export function FloatingEventPromo() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if user dismissed in this session
    const dismissed = sessionStorage.getItem('event-promo-dismissed')
    if (dismissed) {
      setIsDismissed(true)
      return
    }

    // Show after scrolling past hero
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight * 0.6
      
      if (scrollY > heroHeight && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
    sessionStorage.setItem('event-promo-dismissed', 'true')
  }

  if (!UPCOMING_EVENT || isDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ 
            type: 'spring', 
            damping: 25, 
            stiffness: 300,
            mass: 0.8
          }}
          className={cn(
            'fixed top-4 left-1/2 -translate-x-1/2 z-50',
            'max-w-lg w-[calc(100%-2rem)]'
          )}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 -z-10 blur-2xl opacity-40">
            <div 
              className="w-full h-full rounded-sm"
              style={{
                background: 'radial-gradient(ellipse at center, var(--accent) 0%, transparent 70%)',
                animation: 'pulseGlow 3s ease-in-out infinite'
              }}
            />
          </div>

          <div className={cn(
            'relative overflow-hidden',
            'bg-black/90 backdrop-blur-xl',
            'border border-accent/30',
            'group cursor-target'
          )}>
            {/* Animated border beam effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div 
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}
              />
            </div>

            <Link
              href={`/events#${UPCOMING_EVENT.id}`}
              className="flex items-center gap-4 p-4 pr-12"
            >
              {/* Icon pulse */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg animate-pulse" />
                <div className="relative w-10 h-10 flex items-center justify-center bg-accent/10 border border-accent/40">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="mono text-[10px] text-accent mb-0.5 tracking-wider">
                  UPCOMING EVENT
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-light text-foreground truncate">
                    {UPCOMING_EVENT.title}
                  </span>
                  <span className="mono text-xs text-muted-foreground hidden sm:inline">
                    — {UPCOMING_EVENT.date}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-1 text-accent transition-transform duration-300 group-hover:translate-x-1">
                <span className="mono text-xs hidden sm:inline">VIEW</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Dismiss button */}
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleDismiss()
              }}
              className={cn(
                'absolute top-1/2 right-3 -translate-y-1/2',
                'w-6 h-6 flex items-center justify-center',
                'text-muted-foreground hover:text-foreground',
                'transition-colors duration-200',
                'cursor-target'
              )}
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
