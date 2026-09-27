import React, { useState } from 'react'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { HeaderNav } from './components/HeaderNav'
import { DevelopmentModal } from './components/DevelopmentModal'
import { PRESET_THEMES, FONT_OPTIONS, generateRandomTheme, type ThemePalette } from './utils/theme'

export const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemePalette>(PRESET_THEMES[0])
  const [fontIndex, setFontIndex] = useState(0)

  const handleRandomColor = () => {
    // Generate a fresh harmonious random palette
    const newTheme = generateRandomTheme()
    setTheme(newTheme)
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
