import './globals.css'
import type { Metadata } from 'next'
import { Lato, Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
  title: 'Habesha Harvest | Premium Ethiopian Injera Export',
  description:
    'Habesha Harvest exports premium Ethiopian injera worldwide. Authentic 100% teff injera, vacuum-sealed freshness, and reliable global delivery.',
  keywords: [
    'Ethiopian injera export',
    'teff injera wholesale',
    'Habesha Harvest',
    'injera supplier',
    'global food export',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable}`}>{children}</body>
    </html>
  )
}
