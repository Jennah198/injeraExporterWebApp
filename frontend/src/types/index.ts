export interface Product {
  id: string
  name: string
  description: string
  weightInfo: string
  badge?: string
  imageAlt: string
}

export interface Testimonial {
  id: string
  name: string
  business: string
  country: string
  flag: string
  rating: number
  quote: string
  initials: string
}

export interface InquiryForm {
  fullName: string
  company: string
  email: string
  phone: string
  country: string
  product: string
  quantity: number
  message: string
}

export interface FeedbackForm {
  name: string
  business?: string
  country: string
  rating: number
  message: string
}
