import React from 'react'
import type { ThemePalette } from '../utils/theme'

interface MarqueeProps {
  theme: ThemePalette
  fontClass: string
}

export const Marquee: React.FC<MarqueeProps> = ({ theme, fontClass }) => {
  const marqueeText = 'SPARK \u00B7 RENDER \u00B7 IGNITE \u00B7 UNFOLD \u00B7 GENESIS \u00B7 EVOLVE \u00B7 PURPOSE \u00B7 BEYOND \u00B7 '

  return (
    <section
      className="w-full overflow-hidden py-6 md:py-8 transition-colors duration-500"
      style={{ backgroundColor: theme.marqueeBg }}
    >
      <div className="marquee-track flex whitespace-nowrap">
        {[0, 1, 2, 3].map((index) => (
          <span
            key={index}
            className={`${fontClass} uppercase shrink-0 leading-none select-none transition-colors duration-500`}
            style={{
              color: theme.marqueeText,
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1,
              paddingRight: '0.25em',
            }}
          >
            {marqueeText}
          </span>
        ))}
      </div>
    </section>
  )
}
