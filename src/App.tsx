import React, { useState, useEffect } from 'react'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { HeaderNav } from './components/HeaderNav'
import { DevelopmentModal } from './components/DevelopmentModal'
import { PRESET_THEMES, FONT_OPTIONS, generateRandomTheme, type ThemePalette } from './utils/theme'

export const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemePalette>(PRESET_THEMES[0])
  const [fontIndex, setFontIndex] = useState(0)
  const [isAutoChange, setIsAutoChange] = useState(true)

  // Automatically transition colors on interval
  useEffect(() => {
    if (!isAutoChange) return

    const interval = setInterval(() => {
      setTheme(generateRandomTheme())
    }, 3500)

    return () => clearInterval(interval)
  }, [isAutoChange])

  const handleRandomColor = () => {
    const newTheme = generateRandomTheme()
    setTheme(newTheme)
  }

  const handleToggleAutoChange = () => {
    setIsAutoChange((prev) => !prev)
  }

  const handleToggleFont = () => {
    setFontIndex((prev) => (prev + 1) % FONT_OPTIONS.length)
  }

  const currentFont = FONT_OPTIONS[fontIndex]

  return (
    <main className="w-full min-h-screen bg-black overflow-x-hidden relative">
      {/* Top Right GitHub, LinkedIn & Theme Controls */}
      <HeaderNav
        onRandomColor={handleRandomColor}
        onToggleFont={handleToggleFont}
        currentFontName={currentFont.name}
        currentBgColor={theme.bgColor}
        isAutoChange={isAutoChange}
        onToggleAutoChange={handleToggleAutoChange}
      />

      {/* Development Notice Modal */}
      <DevelopmentModal />

      {/* Hero Section */}
      <Hero theme={theme} fontClass={currentFont.cssClass} />

      {/* Infinite Marquee Section */}
      <Marquee theme={theme} fontClass={currentFont.cssClass} />
    </main>
  )
}

export default App
