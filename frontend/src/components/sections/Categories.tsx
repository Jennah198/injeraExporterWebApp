'use client'

import { ShoppingCart } from 'lucide-react'

const categories = [
  {
    id: 'classic-teff',
    name: 'Classic Teff Injera',
    subtitle: 'Farm-fresh daily selections',
    info: '10 pieces/pack',
    buttonColor: 'bg-[#22C55E] hover:bg-[#16A34A]',
    imageSrc: '/images/debo.png',
    imageFallbackBg: 'bg-gradient-to-br from-green-100 to-green-200',
  },
  {
    id: 'mixed-grain',
    name: 'Mixed Grain Injera',
    subtitle: 'Warm artisanal breads',
    info: '6 pieces/pack',
    buttonColor: 'bg-[#F97316] hover:bg-[#EA6C0A]',
    imageSrc: '/images/moseb.png',
    imageFallbackBg: 'bg-gradient-to-br from-orange-100 to-amber-200',
  },
  {
    id: 'jumbo-export',
    name: 'Jumbo Export Rolls',
    subtitle: 'Locally sourced daily',
    info: '10 pieces/pack',
    buttonColor: 'bg-[#F59E0B] hover:bg-[#D97706]',
    imageSrc: '/sehan.png',
    imageFallbackBg: 'bg-gradient-to-br from-yellow-100 to-amber-200',
  },
]

export default function Categories() {
  return (
    <section id="categories" className="bg-white px-6 py-16 md:px-10">
      <h2 className="mb-12 text-center font-display text-2xl font-bold text-[#1A1208] md:text-3xl">
        Our best delivered categories
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-gray-50 shadow-md transition-transform duration-300 group-hover:scale-105">
              <img
                src={cat.imageSrc}
                alt={cat.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.parentElement!.className += ` ${cat.imageFallbackBg}`
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>

            <h3 className="font-display text-lg font-bold leading-tight text-[#1A1208]">{cat.name}</h3>
            <p className="mt-1 font-body text-xs text-gray-400">{cat.subtitle}</p>
            <p className="font-body text-xs text-gray-400">{cat.info}</p>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`mt-4 flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-bold text-white transition-all ${cat.buttonColor}`}
            >
              <ShoppingCart size={14} />
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
