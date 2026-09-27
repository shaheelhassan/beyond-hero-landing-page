import React from 'react'

interface HeaderNavProps {
  onRandomColor: () => void
  onToggleFont: () => void
  currentFontName: string
  currentBgColor: string
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onRandomColor,
  onToggleFont,
  currentFontName,
  currentBgColor,
}) => {
  return (
    <header className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40 flex items-center gap-2 sm:gap-3 select-none">
      {/* Random Color Button */}
      <button
        onClick={onRandomColor}
        className="flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide backdrop-blur-md shadow-xl hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        title="Shuffle background and text colors"
      >
        <span
          className="w-3 h-3 rounded-full border border-white/40 shadow-sm"
          style={{ backgroundColor: currentBgColor }}
        />
        <span>Random Color</span>
      </button>

      {/* Typography Switcher */}
      <button
        onClick={onToggleFont}
        className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide backdrop-blur-md shadow-xl hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        title="Change Typography"
      >
        <span className="text-white/60 font-mono text-xs">Font:</span>
        <span className="font-semibold text-white">{currentFontName}</span>
      </button>

      {/* GitHub Profile */}
      <a
        href="https://github.com/shaheelhassan"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white hover:text-[#89CFF0] backdrop-blur-md shadow-xl hover:border-white/40 hover:scale-110 active:scale-95 transition-all duration-200"
        title="GitHub - shaheelhassan"
        aria-label="GitHub Profile"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      </a>

      {/* LinkedIn Profile */}
      <a
        href="https://linkedin.com/in/shaheelhassan"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white hover:text-[#0A66C2] backdrop-blur-md shadow-xl hover:border-white/40 hover:scale-110 active:scale-95 transition-all duration-200"
        title="LinkedIn - shaheelhassan"
        aria-label="LinkedIn Profile"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.81a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
        </svg>
      </a>
    </header>
  )
}
