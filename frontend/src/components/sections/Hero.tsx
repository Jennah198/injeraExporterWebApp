'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  const scrollToContact = () => {
    const section = document.getElementById('contact')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-espresso via-espresso-light to-forest"
      >
        <div className="grain-overlay absolute inset-0 opacity-20" />

        <div className="animate-float absolute -right-24 -top-24 h-80 w-80 rounded-full bg-terracotta opacity-20 blur-3xl" />
        <div
          className="animate-float absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gold opacity-10 blur-3xl"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="animate-float absolute right-1/3 top-1/3 h-72 w-72 rounded-full bg-forest-light opacity-15 blur-3xl"
          style={{ animationDelay: '2s' }}
        />

        <div className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 opacity-10">
          <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="240" fill="#C8531A" />
            <circle cx="250" cy="250" r="220" stroke="#F5C842" strokeWidth="10" />
            {Array.from({ length: 44 }).map((_, index) => {
              const angle = (index / 44) * Math.PI * 2
              const x2 = 250 + Math.cos(angle) * 205
              const y2 = 250 + Math.sin(angle) * 205
              return (
                <line
                  key={`line-${index}`}
                  x1="250"
                  y1="250"
                  x2={x2}
                  y2={y2}
                  stroke="#FAD96E"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                />
              )
            })}
            {Array.from({ length: 120 }).map((_, i) => {
              const angle = (i / 120) * Math.PI * 2
              const radius = 60 + (i % 8) * 18
              const cx = 250 + Math.cos(angle) * radius
              const cy = 250 + Math.sin(angle) * radius
              return <circle key={`dot-${i}`} cx={cx} cy={cy} r="2.1" fill="#FAD96E" fillOpacity="0.45" />
            })}
          </svg>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
        >
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/20 px-4 py-1.5 text-sm text-gold"
          >
            <span className="font-body">🌍 Exporting to 15+ Countries</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-6 text-balance font-display text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Authentic Ethiopian Injera, Delivered Worldwide
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-6 max-w-2xl font-body text-lg text-white/70 md:text-xl"
          >
            Hand-crafted from 100% Ethiopian teff grain. Traditionally fermented. Vacuum-sealed for freshness.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <button
              type="button"
              onClick={scrollToContact}
              className="transform rounded-full bg-terracotta px-8 py-4 text-lg font-bold text-white transition-all hover:-translate-y-1 hover:bg-terracotta-dark hover:shadow-xl hover:shadow-terracotta/40"
            >
              Place Bulk Order
            </button>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="rounded-full border-2 border-white/40 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
            >
              Watch It Being Made
            </button>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50">
          <ChevronDown className="animate-bounce" size={28} />
        </div>
      </section>

      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-espresso p-2 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/70"
                aria-label="Close video modal"
              >
                <X size={18} />
              </button>
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Habesha Harvest production preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
