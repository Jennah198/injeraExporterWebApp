'use client'

import { User } from 'lucide-react'

const links = [
  { label: 'Home', id: 'home' },
  { label: 'Our Injera', id: 'our-injera' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'How To Order', id: 'how-to-order' },
  { label: 'About', id: 'about' },
  { label: 'contact', id: 'contact' },
]

export default function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 h-14 bg-[#8B4513]">
      <div className="flex h-full items-center justify-between px-6 md:px-10">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="font-display text-lg font-bold tracking-wide text-white"
        >
          Habesha Harvest
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="cursor-pointer font-body text-sm text-white transition-colors hover:text-white/70"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="User profile"
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/20 transition-all hover:bg-white/30"
        >
          <User size={18} color="white" />
        </button>
      </div>
    </nav>
  )
}
