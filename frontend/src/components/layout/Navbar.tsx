'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = ['Home', 'Our Injera', 'Gallery', 'How to Order', 'About', 'Contact']

const toSectionId = (label: string) => label.toLowerCase().replace(/\s+/g, '-')

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScroll = (target: string) => {
    const element = document.getElementById(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-linen/95 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => handleScroll('home')}
          className="inline-flex items-center gap-2"
          aria-label="Go to home section"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M5 17C11 16 15.5 11.5 17 5C12 7 7 12 5 17Z"
              fill="#C8531A"
              stroke="#A03F12"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path d="M6.5 15.5L9.5 12.5" stroke="#A03F12" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <span className="font-display text-lg font-bold text-warmBrown">Habesha Harvest</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => handleScroll(toSectionId(link))}
              className="cursor-pointer font-body text-sm tracking-wide text-warmBrown/80 transition-colors hover:text-terracotta"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => handleScroll('contact')}
            className="rounded-full bg-terracotta px-5 py-2 text-sm font-bold text-white transition-all hover:bg-terracotta-dark hover:shadow-lg hover:shadow-terracotta/30"
          >
            Order Now
          </button>
        </div>

        <button
          type="button"
          className="text-warmBrown md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="overflow-hidden border-t border-terracotta/10 bg-linen/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  type="button"
                  onClick={() => handleScroll(toSectionId(link))}
                  className="cursor-pointer rounded-md px-2 py-2 text-left font-body text-sm tracking-wide text-warmBrown/80 transition-colors hover:text-terracotta"
                >
                  {link}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleScroll('contact')}
                className="mt-2 rounded-full bg-terracotta px-5 py-2 text-sm font-bold text-white transition-all hover:bg-terracotta-dark hover:shadow-lg hover:shadow-terracotta/30"
              >
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
