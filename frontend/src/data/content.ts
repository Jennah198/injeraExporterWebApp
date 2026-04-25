import { Product, Testimonial } from '@/types'

export const products: Product[] = [
  {
    id: 'classic-teff',
    name: 'Classic Teff Injera',
    description:
      'Our flagship 100% teff injera. Traditionally fermented for 3 days, delivering the authentic sour taste and perfect spongy texture loved by Ethiopian families worldwide.',
    weightInfo: '500g · 10 pieces per pack',
    badge: 'Best Seller',
    imageAlt: 'Classic Ethiopian teff injera flatbread',
  },
  {
    id: 'mixed-grain',
    name: 'Mixed Grain Injera',
    description:
      'A milder blend of teff and barley — ideal for restaurants introducing injera to new customers. Softer flavor profile with the same traditional texture.',
    weightInfo: '500g · 10 pieces per pack',
    badge: 'Restaurant Favorite',
    imageAlt: 'Mixed grain injera with teff and barley',
  },
  {
    id: 'jumbo-export',
    name: 'Jumbo Export Rolls',
    description:
      'Vacuum-sealed and nitrogen-flushed for maximum freshness. Purpose-built for international shipping — arrives at destination markets with full flavor intact.',
    weightInfo: '1kg · Bulk packs available',
    badge: 'Export Ready',
    imageAlt: 'Vacuum-sealed injera export rolls for international shipping',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Selamawit Tesfaye',
    business: 'Blue Nile Restaurant, Washington D.C.',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    quote:
      'Habesha Harvest injera tastes exactly like home. Our customers notice the quality difference immediately — the sourness, the texture, the size. We have been ordering for 3 years and will never switch.',
    initials: 'ST',
  },
  {
    id: '2',
    name: 'Mohammed Al-Rashid',
    business: 'Al Habesha Kitchen, Dubai',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    rating: 5,
    quote:
      'Reliable delivery, consistent quality, and packaging that handles the journey from Addis to Dubai without any issues. The vacuum sealing is excellent. Highly recommend for any Gulf-based Ethiopian restaurant.',
    initials: 'MA',
  },
  {
    id: '3',
    name: 'Tigist Bekele',
    business: 'Little Ethiopia, London',
    country: 'United Kingdom',
    flag: '🇬🇧',
    rating: 5,
    quote:
      'We tried four suppliers before finding Habesha Harvest. Nothing compares. The Classic Teff is 100% authentic and our entire diaspora community agrees. Worth every penny.',
    initials: 'TB',
  },
]

export const stats = [
  { value: 20, suffix: '+', label: 'Years of Tradition' },
  { value: 15, suffix: '', label: 'Countries Served' },
  { value: 100, suffix: '%', label: 'Teff Sourced Locally' },
]

export const orderSteps = [
  {
    number: '01',
    icon: 'ClipboardList',
    title: 'Submit Your Inquiry',
    description:
      'Fill out our simple order form with your product needs, quantity, and delivery country. Takes under 2 minutes.',
  },
  {
    number: '02',
    icon: 'FileText',
    title: 'Receive a Custom Quote',
    description:
      'Our export team responds within 24 hours with pricing, shipping costs, and available delivery dates.',
  },
  {
    number: '03',
    icon: 'CheckCircle',
    title: 'Confirm & Pay Deposit',
    description:
      'Approve your quote and pay a 50% deposit to lock in your order. We accept bank transfer and major payment methods.',
  },
  {
    number: '04',
    icon: 'Truck',
    title: 'We Ship Worldwide',
    description:
      'Your injera is freshly packed, vacuum-sealed, and dispatched within 5 business days with full tracking.',
  },
]
