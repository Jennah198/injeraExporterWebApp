'use client'

import { useState } from 'react'
import { createInquiry } from '@/services/inquiry.service'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    quantity: '',
    message: '',
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      await createInquiry(form)
      alert('Inquiry sent successfully')
    } catch {
      alert('Error submitting inquiry')
    }
  }

  return (
    <section id="contact" className="py-16 bg-[var(--color-dark)] text-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl mb-6 text-center">Request Order</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Name"
            className="w-full p-3 rounded text-white"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Email"
            className="w-full p-3 rounded text-white"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            placeholder="Country"
            className="w-full p-3 rounded text-white"
            onChange={(e) => setForm({ ...form, country: e.target.value })}
          />

          <input
            placeholder="Quantity"
            className="w-full p-3 rounded text-white"
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          />

          <textarea
            placeholder="Message"
            className="w-full p-3 rounded text-white"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button className="bg-[var(--color-primary)] px-6 py-3 rounded w-full">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
