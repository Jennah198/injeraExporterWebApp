'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Bot, MessageCircle, Send, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'

type Message = {
  id: string
  role: 'user' | 'bot'
  text: string
  timestamp: Date
}

const initialBotMessage =
  "Hello! 👋 I'm Selam, the Habesha Harvest assistant. I can help you with product info, pricing, shipping, and placing an order. What would you like to know?"

const intentMap: Array<{ keywords: string[]; response: string }> = [
  {
    keywords: ['price', 'cost', 'how much', 'pricing', 'quote'],
    response:
      "Our pricing depends on quantity and destination. For orders of 50kg+, we offer wholesale rates. Fill out our order form and we'll send a detailed quote within 24 hours. Ready to get a quote? [Get Quote ↗]",
  },
  {
    keywords: ['shipping', 'delivery', 'ship', 'export', 'international'],
    response:
      'We ship to 15+ countries worldwide including the USA, UK, Canada, UAE, Sweden, and Australia. Delivery takes 7–14 business days depending on destination. All orders are vacuum-sealed for freshness.',
  },
  {
    keywords: ['teff', 'classic', 'product', 'injera', 'type', 'variety'],
    response:
      'We offer three products: Classic Teff Injera (100% teff, traditional), Mixed Grain Injera (teff + barley, milder flavor), and Jumbo Export Rolls (bulk/wholesale, vacuum-sealed). Which would you like to know more about?',
  },
  {
    keywords: ['minimum', 'minimum order', 'how many', 'small order', 'quantity', 'kg'],
    response:
      'Our minimum order is 10kg for first-time buyers. For regular wholesale accounts, we recommend 50kg+ to qualify for bulk pricing. We can discuss custom quantities based on your needs.',
  },
  {
    keywords: ['fresh', 'shelf life', 'expire', 'how long', 'storage'],
    response:
      'Our injera is vacuum-sealed and nitrogen-flushed, giving it a shelf life of 30 days at room temperature or 90 days refrigerated. Freezing extends shelf life to 6 months.',
  },
  {
    keywords: ['halal', 'organic', 'certified', 'certificate', 'iso'],
    response:
      'Yes! All our products are Halal certified, export-licensed, and produced in an ISO-compliant facility. We can provide full certification documentation with any bulk order.',
  },
  {
    keywords: ['contact', 'call', 'email', 'whatsapp', 'phone', 'reach'],
    response:
      'You can reach us at: 📧 orders@habeshaharves.com | 📞 +251 911 234 567 | 💬 WhatsApp: +251 911 234 567. We respond within 24 hours, Monday–Saturday.',
  },
  {
    keywords: ['payment', 'pay', 'deposit', 'bank transfer', 'how to pay'],
    response:
      'We accept bank transfers (SWIFT/wire), and can accommodate other payment methods for established accounts. We require a 50% deposit to confirm your order, with the balance due before shipping.',
  },
  {
    keywords: ['track', 'tracking', 'where is my order', 'status'],
    response:
      "Once your order ships, you'll receive a tracking number via email. We use DHL, Ethiopian Airlines Cargo, and trusted freight partners. Need to check on an existing order? Share your order reference and I'll connect you with our team.",
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'salam', 'selam'],
    response:
      "Hello! 🌟 Great to hear from you! I'm Selam, here to help you with everything Habesha Harvest. Would you like to know about our products, shipping, or how to place an order?",
  },
]

const defaultResponse =
  "That's a great question! For detailed information on that, I'd recommend speaking directly with our team. You can reach us at orders@habeshaharves.com or WhatsApp +251 911 234 567. Or I can help you [place an order ↗]."

const quickReplies = ['Product Info', 'Shipping', 'Pricing', 'Place Order']

const getBotResponse = (input: string) => {
  const text = input.toLowerCase()
  const foundIntent = intentMap.find((intent) => intent.keywords.some((keyword) => text.includes(keyword)))
  return foundIntent?.response ?? defaultResponse
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const endRef = useRef<HTMLDivElement | null>(null)
  const timersRef = useRef<number[]>([])

  const hasInitialMessage = useMemo(() => messages.some((m) => m.role === 'bot'), [messages])

  useEffect(() => {
    if (isOpen && !hasInitialMessage) {
      setMessages([
        {
          id: crypto.randomUUID(),
          role: 'bot',
          text: initialBotMessage,
          timestamp: new Date(),
        },
      ])
    }
  }, [isOpen, hasInitialMessage])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping, isOpen])

  useEffect(() => {
    return () => {
      timersRef.current.forEach((id) => window.clearTimeout(id))
    }
  }, [])

  const openOrderForm = () => {
    const section = document.getElementById('contact')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  const sendMessage = (text: string) => {
    const cleaned = text.trim()
    if (!cleaned) return

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      text: cleaned,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    const response = getBotResponse(cleaned)
    const timerId = window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'bot',
          text: response,
          timestamp: new Date(),
        },
      ])
      setIsTyping(false)
    }, 800)

    timersRef.current.push(timerId)
  }

  const renderBotText = (text: string) => {
    const quoteTag = '[Get Quote ↗]'
    const orderTag = '[place an order ↗]'

    if (text.includes(quoteTag)) {
      const firstPart = text.replace(quoteTag, '').trim()
      return (
        <>
          <span>{firstPart} </span>
          <button type="button" onClick={openOrderForm} className="font-semibold text-terracotta underline">
            Get Quote ↗
          </button>
        </>
      )
    }

    if (text.includes(orderTag)) {
      const firstPart = text.replace(orderTag, '').trim()
      return (
        <>
          <span>{firstPart} </span>
          <button type="button" onClick={openOrderForm} className="font-semibold text-terracotta underline">
            place an order ↗
          </button>
        </>
      )
    }

    return <span>{text}</span>
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle chatbot"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-white shadow-2xl shadow-terracotta/50 transition-all hover:scale-110 hover:bg-terracotta-dark"
      >
        <MessageCircle size={24} />
        {!isOpen && (
          <>
            <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-red-500" />
            <span className="absolute -right-0.5 -top-0.5 h-3 w-3 animate-ping rounded-full bg-red-500" />
          </>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-80 overflow-hidden rounded-2xl md:w-96"
          >
            <div className="flex items-center gap-3 rounded-t-2xl bg-terracotta p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                <Bot size={20} />
              </div>
              <div>
                <p className="font-bold text-white">Selam</p>
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <p className="text-xs text-white/70">Online</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="ml-auto text-white/70 transition-colors hover:text-white"
                aria-label="Close chatbot"
              >
                <X size={18} />
              </button>
            </div>

            <div className="h-80 space-y-3 overflow-y-auto bg-white p-4">
              {messages.map((message) => (
                <div key={message.id} className={message.role === 'user' ? 'text-right' : 'text-left'}>
                  <div
                    className={`inline-block max-w-[80%] px-4 py-2 text-sm ${
                      message.role === 'user'
                        ? 'rounded-2xl rounded-br-sm bg-terracotta text-white'
                        : 'rounded-2xl rounded-bl-sm bg-linen text-warmBrown'
                    }`}
                  >
                    {message.role === 'bot' ? renderBotText(message.text) : message.text}
                  </div>
                  <p className="mt-1 text-xs text-gray-400">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              ))}

              {isTyping && (
                <div className="text-left">
                  <div className="inline-flex max-w-[80%] items-center gap-1 rounded-2xl rounded-bl-sm bg-linen px-4 py-3">
                    <span className="chat-dot h-1.5 w-1.5 rounded-full bg-warmBrown/60" />
                    <span className="chat-dot h-1.5 w-1.5 rounded-full bg-warmBrown/60 [animation-delay:120ms]" />
                    <span className="chat-dot h-1.5 w-1.5 rounded-full bg-warmBrown/60 [animation-delay:240ms]" />
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>

            <div className="flex flex-wrap gap-2 border-t border-gray-100 bg-white px-4 py-2">
              {quickReplies.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => sendMessage(chip)}
                  className="rounded-full border border-terracotta/30 bg-linen px-3 py-1 text-xs text-terracotta transition-all hover:bg-terracotta hover:text-white"
                >
                  {chip}
                </button>
              ))}
            </div>

            <div className="flex gap-2 rounded-b-2xl border-t border-gray-100 bg-white p-3">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') sendMessage(inputValue)
                }}
                className="flex-1 text-sm outline-none placeholder:text-gray-400"
                placeholder="Ask Selam anything..."
              />
              <button
                type="button"
                onClick={() => sendMessage(inputValue)}
                disabled={!inputValue.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-white transition-all hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .chat-dot {
          animation: chatDotBounce 0.9s infinite ease-in-out;
        }

        @keyframes chatDotBounce {
          0%,
          80%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          40% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}
