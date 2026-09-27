import React from 'react'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { DevelopmentModal } from './components/DevelopmentModal'

export const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-black overflow-x-hidden">
      <DevelopmentModal />
      <Hero />
      <Marquee />
    </main>
  )
}

export default App
