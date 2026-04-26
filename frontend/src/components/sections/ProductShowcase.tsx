'use client'

import { products } from '@/data/content'
import { Product } from '@/types'
import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'

const paletteByProduct: Record<string, { base: string; ring: string; dots: string }> = {
  'classic-teff': { base: '#C8531A', ring: '#F5C842', dots: '#FAD96E' },
  'mixed-grain': { base: '#D4A520', ring: '#FAD96E', dots: '#C8531A' },
  'jumbo-export': { base: '#A03F12', ring: '#F5C842', dots: '#FAD96E' },
}

function InjeraArt({ productId }: { productId: string }) {
  const colors = paletteByProduct[productId] ?? paletteByProduct['classic-teff']

  return (
    <svg
      viewBox="0 0 300 300"
      className="h-44 w-44 transition-transform duration-700 group-hover:scale-110"
      aria-hidden="true"
    >
      <circle cx="150" cy="150" r="120" fill={colors.base} />
      <circle cx="150" cy="150" r="102" stroke={colors.ring} strokeWidth="6" fill="none" />
      <circle cx="150" cy="150" r="82" stroke={colors.ring} strokeWidth="2" fill="none" strokeDasharray="4 7" />
      <circle cx="150" cy="150" r="62" stroke={colors.ring} strokeWidth="2" fill="none" strokeDasharray="2 8" />
      {Array.from({ length: 80 }).map((_, index) => {
        const angle = (index / 80) * Math.PI * 2
        const radius = 20 + (index % 7) * 12
        return (
          <circle
            key={index}
            cx={150 + Math.cos(angle) * radius}
            cy={150 + Math.sin(angle) * radius}
            r="1.8"
            fill={colors.dots}
            fillOpacity="0.65"
          />
        )
      })}
    </svg>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const requestQuote = () => {
    if (typeof window === 'undefined') return
    const url = new URL(window.location.href)
    url.searchParams.set('product', product.id)
    window.history.replaceState({}, '', url.toString())

    const contact = document.getElementById('contact')
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-terracotta/20"
    >
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-linen-dark to-linen">
        <div className="flex h-full items-center justify-center">
          <InjeraArt productId={product.id} />
        </div>
        {product.badge && (
          <span className="absolute right-4 top-4 rounded-full bg-terracotta px-3 py-1 text-xs font-bold text-white">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-warmBrown">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-warmBrown/70">{product.description}</p>
        <p className="mt-3 flex items-center gap-1 text-sm font-bold text-terracotta">
          <Scale size={14} />
          {product.weightInfo}
        </p>
        <div className="mt-4 border-t border-terracotta/20" />
        <button
          type="button"
          onClick={requestQuote}
          className="mt-4 w-full rounded-full border-2 border-terracotta py-2.5 font-bold text-terracotta transition-all hover:bg-terracotta hover:text-white"
        >
          Get Quote
        </button>
      </div>
    </motion.article>
  )
}

export default function ProductShowcase() {
  return (
    <section id="our-injera" className="bg-linen px-4 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-body text-sm font-bold uppercase tracking-widest text-terracotta">Our Injera</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-warmBrown md:text-5xl">Crafted With Tradition</h2>
        <div className="mx-auto mt-4 h-[3px] w-[60px] bg-terracotta" />
        <p className="mt-4 text-warmBrown/60">
          Three varieties. One tradition. Shipped anywhere in the world.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}
