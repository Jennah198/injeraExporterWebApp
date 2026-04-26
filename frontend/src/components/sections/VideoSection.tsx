'use client'

import { Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 20, label: 'Years of Tradition', suffix: '+' },
  { value: 15, label: 'Countries Served', suffix: '' },
  { value: 100, label: 'Teff Sourced Locally', suffix: '%' },
]

const secondaryVideos = [
  'Fermentation Process',
  'Our Kitchen',
  'Packaging & Export',
]

function CountUpStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    if (elementRef.current) observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    const duration = 1400
    const intervalMs = 24
    const steps = Math.ceil(duration / intervalMs)
    let step = 0

    const timer = window.setInterval(() => {
      step += 1
      const progress = Math.min(step / steps, 1)
      setCount(Math.round(value * progress))
      if (progress >= 1) {
        window.clearInterval(timer)
      }
    }, intervalMs)

    return () => window.clearInterval(timer)
  }, [started, value])

  return (
    <div ref={elementRef} className="text-center">
      <p className="font-display text-5xl font-bold text-gold">
        {count}
        {suffix}
      </p>
      <p className="mt-1 font-body text-sm uppercase tracking-wider text-white/60">{label}</p>
    </div>
  )
}

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="process" className="bg-espresso px-4 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-widest text-gold/60">The Process</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">From Teff to Table</h2>
        <p className="mt-4 text-white/50">
          Watch the care, craft, and quality controls behind every export-ready injera batch.
        </p>

        <div className="relative mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-espresso-light shadow-2xl">
          {!isPlaying ? (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="relative flex h-full w-full flex-col items-center justify-center gap-4 bg-black/25"
              aria-label="Play process video"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-terracotta text-white shadow-lg shadow-terracotta/30">
                <Play className="ml-1" size={34} fill="currentColor" />
              </span>
              <span className="font-body text-lg text-white/85">Our Traditional Process - 4 min</span>
            </button>
          ) : (
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Habesha Harvest process video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-espresso to-transparent" />
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-8">
          {stats.map((stat) => (
            <CountUpStat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          {secondaryVideos.map((title) => (
            <button
              key={title}
              type="button"
              className="group overflow-hidden rounded-xl border border-white/10 bg-espresso-light text-left transition-all hover:border-terracotta/50"
            >
              <div className="relative aspect-video bg-gradient-to-br from-terracotta/35 via-gold/20 to-forest/35">
                <span className="absolute inset-0 flex items-center justify-center text-white/80">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/35">
                    <Play size={16} fill="currentColor" />
                  </span>
                </span>
              </div>
              <p className="px-3 py-2 text-sm text-white/70">{title}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
