'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { useMemo, useState } from 'react'

type GalleryItem = {
  id: number
  location: string
  colorFrom: string
  colorTo: string
}

const galleryItems: GalleryItem[] = [
  { id: 1, location: 'Addis Ababa, Ethiopia', colorFrom: '#C8531A', colorTo: '#F5C842' },
  { id: 2, location: 'London, UK', colorFrom: '#2D5016', colorTo: '#2A9D8F' },
  { id: 3, location: 'Dubai, UAE', colorFrom: '#1A1208', colorTo: '#C8531A' },
  { id: 4, location: 'Washington D.C., USA', colorFrom: '#F5C842', colorTo: '#FAF7F2' },
  { id: 5, location: 'Toronto, Canada', colorFrom: '#A03F12', colorTo: '#D4A520' },
  { id: 6, location: 'Melbourne, Australia', colorFrom: '#1E3610', colorTo: '#3D6B1E' },
  { id: 7, location: 'Stockholm, Sweden', colorFrom: '#2C1A0E', colorTo: '#C8531A' },
  { id: 8, location: 'Doha, Qatar', colorFrom: '#FAD96E', colorTo: '#E8744A' },
  { id: 9, location: 'Frankfurt, Germany', colorFrom: '#2D5016', colorTo: '#F5C842' },
]

const getItemHeight = (index: number) => {
  if ([0, 3, 6].includes(index)) return 'h-80'
  if ([1, 4, 7].includes(index)) return 'h-56'
  return 'h-72'
}

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(6)
  const visibleItems = useMemo(() => galleryItems.slice(0, visibleCount), [visibleCount])

  return (
    <section id="gallery" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-body text-sm font-bold uppercase tracking-widest text-terracotta">Gallery</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-warmBrown md:text-5xl">Injera Around the World</h2>
        <div className="mx-auto mt-4 h-[3px] w-[60px] bg-terracotta" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="mx-auto mt-16 max-w-6xl columns-1 gap-6 sm:columns-2 lg:columns-3"
      >
        {visibleItems.map((item, index) => (
          <motion.article
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="group relative mb-6 cursor-pointer break-inside-avoid overflow-hidden rounded-2xl"
          >
            <div
              className={`relative ${getItemHeight(index)} w-full`}
              style={{
                background: `linear-gradient(140deg, ${item.colorFrom}, ${item.colorTo})`,
              }}
            >
              <div className="absolute inset-0 opacity-20">
                <svg className="h-full w-full" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <defs>
                    <pattern id={`injera-pattern-${item.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
                      <circle cx="8" cy="8" r="3" fill="#fff" fillOpacity="0.4" />
                      <circle cx="18" cy="14" r="2" fill="#fff" fillOpacity="0.3" />
                      <circle cx="6" cy="19" r="2" fill="#fff" fillOpacity="0.3" />
                    </pattern>
                  </defs>
                  <rect width="240" height="240" fill={`url(#injera-pattern-${item.id})`} />
                </svg>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-espresso/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-display text-lg text-white">{item.location}</p>
                <span className="mt-1 text-white/80">
                  <MapPin size={14} />
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {visibleCount < 9 && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((current) => Math.min(current + 3, 9))}
            className="rounded-full border-2 border-terracotta px-7 py-3 font-bold text-terracotta transition-all hover:bg-terracotta hover:text-white"
          >
            Load More Photos
          </button>
        </div>
      )}
    </section>
  )
}
