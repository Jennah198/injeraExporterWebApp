'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { getNames } from 'country-list'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const inquirySchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  company: z.string().min(1, 'Company / Restaurant is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(1, 'Phone is required'),
  country: z.string().min(1, 'Country is required'),
  product: z.string().min(1, 'Product interest is required'),
  quantity: z.number().min(10, 'Minimum quantity is 10kg'),
  message: z.string().optional(),
})

type InquiryFormData = z.infer<typeof inquirySchema>

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const countries = useMemo(() => getNames().sort((a, b) => a.localeCompare(b)), [])
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      product: '',
      quantity: 10,
      message: '',
    },
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const preselectedProduct = params.get('product')
    if (preselectedProduct) {
      const productMap: Record<string, string> = {
        'classic-teff': 'Classic Teff',
        'mixed-grain': 'Mixed Grain',
        'jumbo-export': 'Jumbo Export',
      }
      setValue('product', productMap[preselectedProduct] ?? 'Not Sure Yet')
    }
  }, [setValue])

  const onSubmit = (data: InquiryFormData) => {
    console.log('Inquiry submitted', data)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="bg-espresso px-4 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold text-white">Start Your Order</h2>
          <p className="mt-3 text-white/60">Tell us what you need and our export team will prepare your quote.</p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 text-gold" size={18} />
              <div>
                <p className="text-white/60">Phone</p>
                <p className="text-white">+251 911 234 567</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 text-gold" size={18} />
              <div>
                <p className="text-white/60">Email</p>
                <p className="text-white">orders@habeshaharves.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 text-gold" size={18} />
              <div>
                <p className="text-white/60">WhatsApp</p>
                <a href="https://wa.me/251911234567" className="text-white underline-offset-2 hover:underline">
                  +251 911 234 567
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 text-gold" size={18} />
              <div>
                <p className="text-white/60">Address</p>
                <p className="text-white">Bole Sub-city, Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-sm text-white/80">We respond within 24 hours</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <svg viewBox="0 0 500 220" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg" aria-label="Global delivery map">
              <path d="M50 110C85 75 150 60 190 85C220 105 255 95 275 70C305 35 360 30 410 65" stroke="white" strokeOpacity="0.08" strokeWidth="18" fill="none" />
              <path d="M95 150C130 120 175 120 220 145C255 165 310 165 350 140" stroke="white" strokeOpacity="0.08" strokeWidth="14" fill="none" />
              <circle cx="100" cy="92" r="4" fill="#F5C842" />
              <circle cx="240" cy="88" r="4" fill="#F5C842" />
              <circle cx="290" cy="95" r="4" fill="#F5C842" />
              <circle cx="155" cy="82" r="4" fill="#F5C842" />
            </svg>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          {isSubmitted ? (
            <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-forest text-white">
                <Check size={30} />
              </div>
              <p className="text-lg text-white">
                Your inquiry has been received! We&apos;ll contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...register('fullName')}
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-white/40 focus:border-gold focus:outline-none"
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-400">{errors.fullName.message}</p>}
              </div>

              <div>
                <input
                  {...register('company')}
                  placeholder="Company / Restaurant"
                  className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-white/40 focus:border-gold focus:outline-none"
                />
                {errors.company && <p className="mt-1 text-sm text-red-400">{errors.company.message}</p>}
              </div>

              <div>
                <input
                  {...register('email')}
                  placeholder="Email"
                  className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-white/40 focus:border-gold focus:outline-none"
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
              </div>

              <div>
                <input
                  {...register('phone')}
                  placeholder="Phone (with country flag/emojis if preferred)"
                  className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-white/40 focus:border-gold focus:outline-none"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>}
              </div>

              <div>
                <select
                  {...register('country')}
                  className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white focus:border-gold focus:outline-none"
                >
                  <option value="" className="text-black">
                    Select Country
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country} className="text-black">
                      {country}
                    </option>
                  ))}
                </select>
                {errors.country && <p className="mt-1 text-sm text-red-400">{errors.country.message}</p>}
              </div>

              <div>
                <select
                  {...register('product')}
                  className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white focus:border-gold focus:outline-none"
                >
                  <option value="" className="text-black">
                    Product Interest
                  </option>
                  <option value="Classic Teff" className="text-black">
                    Classic Teff
                  </option>
                  <option value="Mixed Grain" className="text-black">
                    Mixed Grain
                  </option>
                  <option value="Jumbo Export" className="text-black">
                    Jumbo Export
                  </option>
                  <option value="Not Sure Yet" className="text-black">
                    Not Sure Yet
                  </option>
                </select>
                {errors.product && <p className="mt-1 text-sm text-red-400">{errors.product.message}</p>}
              </div>

              <div>
                <input
                  type="number"
                  min={10}
                  {...register('quantity', { valueAsNumber: true })}
                  placeholder="Quantity in kg"
                  className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-white/40 focus:border-gold focus:outline-none"
                />
                {errors.quantity && <p className="mt-1 text-sm text-red-400">{errors.quantity.message}</p>}
              </div>

              <div>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Message (optional)"
                  className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-white/40 focus:border-gold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-terracotta py-4 text-lg font-bold text-white transition-all hover:bg-terracotta-dark hover:shadow-lg hover:shadow-terracotta/50"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
