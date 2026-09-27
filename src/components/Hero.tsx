import React, { useEffect, useRef, useState } from 'react'

const LEFT_WORDS = ['spark', 'imagine', 'evolve', 'render']
const RIGHT_WORDS = ['blaze', 'genesis', 'purpose', 'ignite']

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScrollAndResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)

      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight
      const scrollableDistance = sectionHeight - window.innerHeight

      if (scrollableDistance > 0) {
        const rawProgress = -rect.top / scrollableDistance
        const clamped = Math.min(1, Math.max(0, rawProgress))
        setProgress(clamped)
      } else {
        setProgress(0)
      }
    }

    // Run once on mount
    handleScrollAndResize()

    window.addEventListener('scroll', handleScrollAndResize, { passive: true })
    window.addEventListener('resize', handleScrollAndResize)

    return () => {
      window.removeEventListener('scroll', handleScrollAndResize)
      window.removeEventListener('resize', handleScrollAndResize)
    }
  }, [])

  const scaleFactor = isMobile ? 0.5 : 1
  const opacity = 0.35 + progress * 0.65

  // Layer vertical offsets for "BEYOND"
  // Layer 0 (back): #89CFF0 -> 36px (desktop) / 18px (mobile)
  // Layer 1: #EC612C -> 24px (desktop) / 12px (mobile)
  // Layer 2: #90EE90 -> 12px (desktop) / 6px (mobile)
  // Layer 3 (front): #FFFFFF -> 0px
  const layer0Offset = isMobile ? 18 : 36
  const layer1Offset = isMobile ? 12 : 24
  const layer2Offset = isMobile ? 6 : 12
  const layer3Offset = 0

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        height: '120vh',
        backgroundColor: '#EC612C',
      }}
    >
      {/* SECTION 1 - B. Sticky text overlay (z-index 5) */}
      <div className="sticky top-0 h-screen w-full z-5">
        {/* "BEYOND" stacked title */}
        <div className="absolute inset-0 flex items-start justify-center pt-[2vh] md:pt-[3vh] pointer-events-none">
          <div className="relative inline-block text-center">
            {/* Layer 0 (back) - Blue */}
            <h1
              className="font-bamboly absolute top-0 left-0 w-full text-center leading-[0.85] tracking-tight select-none pointer-events-none"
              style={{
                color: '#89CFF0',
                fontSize: 'clamp(7.5rem, 30vw, 28rem)',
                transform: `translateY(${layer0Offset}px)`,
              }}
            >
              BEYOND
            </h1>

            {/* Layer 1 - Orange gap (same as bg) */}
            <h1
              className="font-bamboly absolute top-0 left-0 w-full text-center leading-[0.85] tracking-tight select-none pointer-events-none"
              style={{
                color: '#EC612C',
                fontSize: 'clamp(7.5rem, 30vw, 28rem)',
                transform: `translateY(${layer1Offset}px)`,
              }}
            >
              BEYOND
            </h1>

            {/* Layer 2 - Green */}
            <h1
              className="font-bamboly absolute top-0 left-0 w-full text-center leading-[0.85] tracking-tight select-none pointer-events-none"
              style={{
                color: '#90EE90',
                fontSize: 'clamp(7.5rem, 30vw, 28rem)',
                transform: `translateY(${layer2Offset}px)`,
              }}
            >
              BEYOND
            </h1>

            {/* Layer 3 (front) - White */}
            <h1
              className="font-bamboly relative text-center leading-[0.85] tracking-tight select-none pointer-events-none"
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(7.5rem, 30vw, 28rem)',
                transform: `translateY(${layer3Offset}px)`,
              }}
            >
              BEYOND
            </h1>
          </div>
        </div>

        {/* Side word columns */}
        <div
          className="absolute top-0 left-0 right-0 flex items-end justify-between px-[3vw] md:px-[6vw] pointer-events-none"
          style={{ bottom: '-8vh' }}
        >
          {/* Left Column */}
          <div
            className="flex flex-col gap-1 md:gap-2"
            style={{ opacity }}
          >
            {LEFT_WORDS.map((word, i) => {
              const leftOffset = -(60 + i * 40) * scaleFactor * (1 - progress)
              return (
                <span
                  key={word}
                  className="font-poppins uppercase text-white/80 select-none block"
                  style={{
                    fontWeight: 500,
                    fontSize: 'clamp(1.6rem, 7vw, 9rem)',
                    lineHeight: 1.1,
                    transform: `translateX(${leftOffset}px)`,
                    transition: 'transform 0.05s linear',
                  }}
                >
                  {word}
                </span>
              )
            })}
          </div>

          {/* Right Column */}
          <div
            className="flex flex-col gap-1 md:gap-2 items-end"
            style={{ opacity }}
          >
            {RIGHT_WORDS.map((word, i) => {
              const rightOffset = +(60 + i * 40) * scaleFactor * (1 - progress)
              return (
                <span
                  key={word}
                  className="font-poppins uppercase text-white/80 select-none block text-right"
                  style={{
                    fontWeight: 500,
                    fontSize: 'clamp(1.6rem, 7vw, 9rem)',
                    lineHeight: 1.1,
                    transform: `translateX(${rightOffset}px)`,
                    transition: 'transform 0.05s linear',
                  }}
                >
                  {word}
                </span>
              )
            })}
          </div>
        </div>
      </div>

      {/* SECTION 1 - A. Character (z-index 10) */}
      <div className="absolute inset-0 pointer-events-none z-10 flex justify-center items-end">
        <picture className="contents">
          <source srcSet="/hero-character.webp" type="image/webp" />
          <img
            src="/hero-character.png"
            alt="Beyond Hero 3D Futuristic Character"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto max-w-none block select-none"
            style={{
              height: '115%',
              maxHeight: '115%',
              minHeight: '80%',
              filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))',
            }}
          />
        </picture>
      </div>
    </section>
  )
}
