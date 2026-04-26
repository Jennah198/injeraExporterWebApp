'use client'

import { Star } from 'lucide-react'
import { useState } from 'react'

type StarRatingProps = {
  value: number
  onChange?: (v: number) => void
  readonly?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
}

export default function StarRating({ value, onChange, readonly = false, size = 'md' }: StarRatingProps) {
  const [hoveredStar, setHoveredStar] = useState(0)
  const iconSize = sizeMap[size]

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const starValue = index + 1
        const isActive = hoveredStar ? starValue <= hoveredStar : starValue <= value
        const colorClass = isActive ? 'text-gold' : 'text-gray-200'

        return (
          <button
            key={starValue}
            type="button"
            aria-label={`Rate ${starValue} star${starValue > 1 ? 's' : ''}`}
            disabled={readonly}
            onMouseEnter={() => !readonly && setHoveredStar(starValue)}
            onMouseLeave={() => !readonly && setHoveredStar(0)}
            onClick={() => !readonly && onChange?.(starValue)}
            className={`transition-colors ${readonly ? 'cursor-default' : 'cursor-pointer'}`}
          >
            <Star size={iconSize} fill="currentColor" className={colorClass} />
          </button>
        )
      })}
    </div>
  )
}
