'use client'

import StarRating from '@/components/ui/StarRating'
import { testimonials } from '@/data/content'
import { FeedbackForm } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { getNames } from 'country-list'
import { useEffect, useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const feedbackSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  business: z.string().optional(),
  country: z.string().min(1, 'Country is required'),
  rating: z.number().min(1, 'Please select at least 1 star'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FeedbackFormData = z.infer<typeof feedbackSchema>

export default function Feedback() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const countries = useMemo(() => getNames().sort((a, b) => a.localeCompare(b)), [])

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: '',
      business: '',
      country: '',
      rating: 0,
      message: '',
    },
  })

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  const current = testimonials[activeIndex]

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const onSubmit = (data: FeedbackForm) => {
    console.log('Feedback submitted', data)
    setIsSubmitted(true)
    reset()
  }

  return (
    <section id="feedback" className="bg-linen px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold text-warmBrown md:text-5xl">What Our Partners Say</h2>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="rounded-full border-2 border-terracotta/30 p-3 text-terracotta transition-all hover:border-terracotta hover:bg-terracotta hover:text-white"
          >
            ←
          </button>

          <div className="w-full max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.article
                key={current.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="rounded-3xl bg-white p-8 shadow-xl shadow-warmBrown/10"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <StarRating value={5} readonly size="sm" />
                  <p className="text-sm text-warmBrown/70">
                    <span className="mr-1">{current.flag}</span>
                    {current.country}
                  </p>
                </div>

                <p className="relative mt-4 font-display text-lg italic leading-relaxed text-warmBrown/80">
                  <span className="mr-1 text-4xl leading-none text-terracotta/60">"</span>
                  {current.quote}
                  <span className="ml-1 text-4xl leading-none text-terracotta/60">"</span>
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta font-bold text-white">
                    {current.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-warmBrown">{current.name}</p>
                    <p className="text-sm text-warmBrown/60">{current.business}</p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="rounded-full border-2 border-terracotta/30 p-3 text-terracotta transition-all hover:border-terracotta hover:bg-terracotta hover:text-white"
          >
            →
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all ${idx === activeIndex ? 'w-8 bg-terracotta' : 'w-2.5 bg-terracotta/30'}`}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="font-display text-3xl font-bold text-warmBrown">Share Your Experience</h3>
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-3xl bg-white p-8 shadow-xl md:p-10">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center py-8 text-center"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 240, damping: 16 }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white"
              >
                <Check size={26} />
              </motion.div>
              <p className="mt-4 font-semibold text-warmBrown">Thank you! Your feedback is under review.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <input
                  {...register('name')}
                  placeholder="Name"
                  className="w-full rounded-xl border border-warmBrown/20 p-3 text-warmBrown focus:border-terracotta focus:outline-none"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <input
                  {...register('business')}
                  placeholder="Business / Organization (optional)"
                  className="w-full rounded-xl border border-warmBrown/20 p-3 text-warmBrown focus:border-terracotta focus:outline-none"
                />
              </div>

              <div>
                <select
                  {...register('country')}
                  className="w-full rounded-xl border border-warmBrown/20 p-3 text-warmBrown focus:border-terracotta focus:outline-none"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.country && <p className="mt-1 text-sm text-red-500">{errors.country.message}</p>}
              </div>

              <div>
                <Controller
                  control={control}
                  name="rating"
                  render={({ field }) => <StarRating value={field.value} onChange={field.onChange} size="md" />}
                />
                {errors.rating && <p className="mt-1 text-sm text-red-500">{errors.rating.message}</p>}
              </div>

              <div>
                <textarea
                  {...register('message')}
                  placeholder="Message"
                  rows={5}
                  className="w-full rounded-xl border border-warmBrown/20 p-3 text-warmBrown focus:border-terracotta focus:outline-none"
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-terracotta py-3 font-bold text-white transition-all hover:bg-terracotta-dark"
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
