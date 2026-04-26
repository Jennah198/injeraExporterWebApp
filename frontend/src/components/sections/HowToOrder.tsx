'use client'

import { orderSteps } from '@/data/content'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'

type IconName = keyof typeof LucideIcons

export default function HowToOrder() {
  const scrollToContact = () => {
    const section = document.getElementById('contact')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="how-to-order" className="bg-linen px-4 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-body text-sm font-bold uppercase tracking-widest text-terracotta">How To Order</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-warmBrown md:text-5xl">
          Simple. Transparent. Reliable.
        </h2>
        <div className="mx-auto mt-4 h-[3px] w-[60px] bg-terracotta" />
      </div>

      <div className="relative mx-auto mt-20 max-w-5xl">
        <div className="absolute left-16 right-16 top-7 hidden h-[2px] bg-terracotta/20 md:block" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {orderSteps.map((step, index) => {
            const IconComponent = LucideIcons[step.icon as IconName] as LucideIcons.LucideIcon | undefined

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-terracotta font-display text-xl font-bold text-white shadow-lg shadow-terracotta/30">
                  {step.number}
                </div>
                <div className="mb-4 mt-6 flex justify-center text-forest">
                  {IconComponent ? <IconComponent size={32} /> : <LucideIcons.CircleHelp size={32} />}
                </div>
                <h3 className="font-display text-xl font-bold text-warmBrown">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-warmBrown/60">{step.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>

      <div className="mt-14 text-center">
        <p className="font-display text-2xl font-bold text-warmBrown">Ready to Order?</p>
        <button
          type="button"
          onClick={scrollToContact}
          className="mt-5 rounded-full bg-terracotta px-8 py-3 font-bold text-white transition-all hover:bg-terracotta-dark hover:shadow-lg hover:shadow-terracotta/30"
        >
          Get Your Quote
        </button>
      </div>
    </section>
  )
}
