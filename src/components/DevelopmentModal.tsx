import React, { useState, useEffect } from 'react'

export const DevelopmentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/80 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-2xl hover:bg-[#EC612C] hover:border-[#EC612C] transition-all duration-300 cursor-pointer"
        title="View Project Notice"
      >
        <span className="w-2 h-2 rounded-full bg-[#EC612C] animate-pulse" />
        Dev Notice
      </button>
    )
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md transition-opacity duration-300"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-xl bg-gradient-to-b from-[#18181b] to-[#09090b] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-[0_0_80px_rgba(236,97,44,0.3)] text-center select-none transform transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EC612C]/20 border border-[#EC612C]/40 text-[#EC612C] text-xs font-bold tracking-widest uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-[#EC612C] animate-ping" />
          <span>Work In Progress</span>
        </div>

        {/* Big Heading */}
        <h2 className="font-bamboly text-3xl sm:text-5xl text-white tracking-wide leading-tight mb-4 uppercase">
          PROJECT UNDER DEVELOPMENT
        </h2>

        {/* Message */}
        <p className="font-poppins text-lg sm:text-xl text-white/90 font-medium leading-relaxed mb-8 max-w-md mx-auto">
          This project is under development. Use your own skills to build to the next level with focus and passion!
        </p>

        {/* Action Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#EC612C] hover:bg-[#d6521f] text-white font-poppins font-semibold text-base tracking-wide uppercase shadow-lg shadow-[#EC612C]/30 hover:shadow-[#EC612C]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
        >
          Got It &bull; Explore Project
        </button>
      </div>
    </div>
  )
}
