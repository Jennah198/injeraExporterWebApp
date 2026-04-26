'use client'

import { Camera, MessageCircle, Share2, Video } from 'lucide-react'

const socialLinks = [
  { Icon: Share2, href: '#', label: 'Facebook' },
  { Icon: Camera, href: '#', label: 'Instagram' },
  { Icon: Video, href: '#', label: 'YouTube' },
  { Icon: MessageCircle, href: 'https://wa.me/251911234567', label: 'WhatsApp' },
] as const

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Injera', href: '#our-injera' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'How to Order', href: '#how-to-order' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const products = ['Classic Teff Injera', 'Mixed Grain Injera', 'Jumbo Export Rolls', 'Custom Orders']

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-espresso px-4 pb-8 pt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-4">
        <div>
          <div className="inline-flex items-center gap-2">
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
            <p className="font-display text-xl font-bold text-white">Habesha Harvest</p>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Pure Ethiopian injera, delivered worldwide with pride.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white/60 transition-colors hover:text-gold"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-white/50 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Products</h3>
          <ul className="mt-4 space-y-2">
            {products.map((item) => (
              <li key={item}>
                <a href="#our-injera" className="text-sm text-white/50 transition-colors hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/50">
            <li>Bole Sub-city, Addis Ababa, Ethiopia</li>
            <li>+251 911 234 567</li>
            <li>orders@habeshaharves.com</li>
            <li>WhatsApp: +251 911 234 567</li>
          </ul>
          <div className="mt-4 inline-block rounded-lg bg-forest/40 px-3 py-2 text-xs text-green-300">
            24hr Response Guarantee
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm md:flex-row">
        <p className="text-white/30">© 2026 Habesha Harvest. All rights reserved.</p>
        <p className="text-white/30">Made with ❤️ in Addis Ababa, Ethiopia</p>
        <div className="flex items-center gap-2 text-white/30">
          <a href="#" className="transition-colors hover:text-white/60">
            Privacy Policy
          </a>
          <span>·</span>
          <a href="#" className="transition-colors hover:text-white/60">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
