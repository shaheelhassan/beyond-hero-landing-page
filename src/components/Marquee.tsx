import React from 'react'

export const Marquee: React.FC = () => {
  const marqueeText = 'SPARK \u00B7 RENDER \u00B7 IGNITE \u00B7 UNFOLD \u00B7 GENESIS \u00B7 EVOLVE \u00B7 PURPOSE \u00B7 BEYOND \u00B7 '

  return (
    <section className="w-full bg-white overflow-hidden py-6 md:py-8">
      <div className="marquee-track flex whitespace-nowrap">
        {[0, 1, 2, 3].map((index) => (
          <span
            key={index}
            className="font-bamboly uppercase shrink-0 leading-none select-none"
            style={{
              color: '#EC612C',
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
