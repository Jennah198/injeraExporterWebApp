'use client'

import { Check, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center bg-[#FAF7F2] pt-14">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto_280px]">
          <div className="flex flex-col justify-center gap-5 py-12">
            <h1 className="font-display font-bold leading-tight text-[#1A1208]">
              <span className="block text-5xl md:text-6xl">Fast</span>
              <span className="block text-5xl md:text-6xl">Delivery &amp;</span>
              <span className="block text-5xl md:text-6xl">easy pickup</span>
            </h1>

            <p className="mt-1 max-w-xs font-body text-sm leading-relaxed text-[#2C1A0E]/60">
              Hand-crafted from 100% Ethiopian teff grain. Traditionally fermented. Vacuum-sealed for freshness.
            </p>

            <div className="mt-4 flex w-fit flex-col gap-3">
              <button className="flex items-center gap-2 rounded-full bg-[#22C55E] px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#16A34A]">
                <MapPin size={15} />
                See Store Location
              </button>
              <button className="flex items-center gap-2 rounded-full border-2 border-[#22C55E] bg-transparent px-6 py-2.5 text-sm font-bold text-[#22C55E] transition-all hover:bg-[#22C55E] hover:text-white">
                How to order
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative h-[320px] w-[320px] md:h-[380px] md:w-[380px]">
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <svg viewBox="0 0 380 380" className="h-full w-full">
                  <circle cx="190" cy="190" r="190" fill="#F97316" />
                  <path d="M190 190 L190 0 A190 190 0 0 1 380 190 Z" fill="#FBBF24" />
                  <path d="M190 190 L380 190 A190 190 0 0 1 190 380 Z" fill="#EC4899" />
                  <path d="M190 190 L190 380 A190 190 0 0 1 0 190 Z" fill="#3B82F6" />
                  <path d="M190 190 L0 190 A190 190 0 0 1 190 0 Z" fill="#10B981" />
                  <path d="M190 190 L285 95 A190 190 0 0 1 380 190 Z" fill="#F59E0B" />
                  <path d="M190 190 L95 285 A190 190 0 0 1 0 190 Z" fill="#8B5CF6" />
                </svg>
              </div>

              <div className="absolute inset-4 overflow-hidden rounded-full">
                <img
                  src="/images/debo.png"
                  alt="Fresh Ethiopian injera"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>

              <div className="absolute -top-2 left-8 z-10 flex items-center gap-2 rounded-2xl border border-gray-100 bg-white px-4 py-2.5 shadow-xl">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#22C55E]">
                  <Check size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] leading-none text-[#1A1208] font-bold">System Active</p>
                  <p className="mt-0.5 text-[9px] leading-none text-gray-400">Orders delivered</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <p className="font-body text-[10px] font-bold uppercase tracking-widest text-gray-400">QUICK ACTIONS</p>
              <p className="text-[10px] text-gray-300">Access core features easily</p>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full rounded-full bg-[#F97316] px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#EA6C0A] hover:shadow-lg hover:shadow-orange-400/40"
            >
              Place Order
            </button>
            <button
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full rounded-full bg-[#F97316] px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#EA6C0A] hover:shadow-lg hover:shadow-orange-400/40"
            >
              Watch it being made
            </button>
            <button
              onClick={() => document.getElementById('our-injera')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full rounded-full bg-[#F97316] px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#EA6C0A] hover:shadow-lg hover:shadow-orange-400/40"
            >
              What&apos;s Injera
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
