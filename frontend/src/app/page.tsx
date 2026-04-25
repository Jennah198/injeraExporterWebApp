import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import ProductShowcase from '@/components/sections/ProductShowcase'
import ContactForm from '@/components/sections/ContactForm'

export default function Home() {
  const products = [
    { id: '1', name: 'Teff Injera', image: '/images/injera1.jpg' },
    { id: '2', name: 'Mixed Injera', image: '/images/injera2.jpg' },
    { id: '3', name: 'Brown Injera', image: '/images/injera3.jpg' },
  ]

  return (
    <>
      <Navbar />
      <Hero />
      <ProductShowcase products={products} />
      <ContactForm />
    </>
  )
}
