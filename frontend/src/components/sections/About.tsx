'use client'

import { BadgeCheck, Leaf, ShieldCheck } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div className="relative overflow-hidden rounded-3xl">
          <svg viewBox="0 0 640 520" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-label="Traditional Ethiopian kitchen illustration">
            <rect width="640" height="520" fill="#1A1208" />
            <circle cx="320" cy="285" r="130" fill="#C8531A" />
            <circle cx="320" cy="285" r="108" fill="#F5C842" fillOpacity="0.25" />
            <path d="M280 390C300 355 340 355 360 390C340 385 300 385 280 390Z" fill="#F5C842" />
            <path d="M300 400C318 372 342 372 360 400C340 396 320 396 300 400Z" fill="#E8744A" />
            <path d="M110 120L130 70L150 120M130 70V160" stroke="#2D5016" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M490 135L510 85L530 135M510 85V175" stroke="#2D5016" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M80 430C140 390 180 450 230 420" stroke="#C8531A" strokeWidth="16" strokeLinecap="round" />
            <path d="M400 430C470 390 520 450 570 410" stroke="#D4A520" strokeWidth="14" strokeLinecap="round" />
          </svg>
          <div className="absolute -bottom-4 -right-4 rounded-2xl bg-terracotta p-4 text-white shadow-xl">
            Est. 1985 · Addis Ababa
          </div>
        </div>

        <div>
          <p className="font-body text-sm font-bold uppercase tracking-widest text-terracotta">About Us</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-warmBrown">Rooted in Ethiopian Heritage</h2>

          <div className="mt-6 space-y-4 text-warmBrown/70">
            <p className="leading-relaxed">
              Habesha Harvest is a family business built across three generations of traditional injera makers,
              preserving artisanal fermentation methods while scaling for global diaspora communities.
            </p>
            <p className="leading-relaxed">
              Our teff is sourced exclusively from the Ethiopian highlands of Tigray and Amhara, where altitude,
              soil quality, and local farming knowledge produce exceptional grain.
            </p>
            <p className="leading-relaxed">
              Export-certified and ISO-compliant, we have shipped premium injera to 15 countries since 2010 with
              strict quality controls and trusted cold-chain partners.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-forest/30 px-4 py-2 text-sm text-forest">
              <BadgeCheck size={16} />
              ISO Certified
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-forest/30 px-4 py-2 text-sm text-forest">
              <ShieldCheck size={16} />
              Export Licensed
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-forest/30 px-4 py-2 text-sm text-forest">
              <Leaf size={16} />
              100% Organic
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
