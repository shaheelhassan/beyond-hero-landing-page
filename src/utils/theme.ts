export interface ThemePalette {
  name: string
  bgColor: string
  beyondFront: string
  beyondLayer0: string // back layer (blue in original)
  beyondLayer1: string // gap layer (matches bgColor)
  beyondLayer2: string // front-mid layer (green in original)
  sideWordColor: string
  marqueeBg: string
  marqueeText: string
}

export interface FontOption {
  id: string
  name: string
  cssClass: string
}

export const FONT_OPTIONS: FontOption[] = [
  { id: 'bamboly', name: 'Bamboly', cssClass: 'font-bamboly' },
  { id: 'syne', name: 'Syne', cssClass: 'font-syne' },
  { id: 'outfit', name: 'Outfit', cssClass: 'font-outfit' },
]

export const PRESET_THEMES: ThemePalette[] = [
  {
    name: 'Sunset Orange',
    bgColor: '#EC612C',
    beyondFront: '#FFFFFF',
    beyondLayer0: '#89CFF0',
    beyondLayer1: '#EC612C',
    beyondLayer2: '#90EE90',
    sideWordColor: 'rgba(255, 255, 255, 0.85)',
    marqueeBg: '#FFFFFF',
    marqueeText: '#EC612C',
  },
  {
    name: 'Cyber Violet',
    bgColor: '#7C3AED',
    beyondFront: '#FFFFFF',
    beyondLayer0: '#38BDF8',
    beyondLayer1: '#7C3AED',
    beyondLayer2: '#F43F5E',
    sideWordColor: 'rgba(255, 255, 255, 0.85)',
    marqueeBg: '#FFFFFF',
    marqueeText: '#7C3AED',
  },
  {
    name: 'Neon Emerald',
    bgColor: '#059669',
    beyondFront: '#FFFFFF',
    beyondLayer0: '#38BDF8',
    beyondLayer1: '#059669',
    beyondLayer2: '#FDE047',
    sideWordColor: 'rgba(255, 255, 255, 0.85)',
    marqueeBg: '#FFFFFF',
    marqueeText: '#059669',
  },
  {
    name: 'Midnight Electric',
    bgColor: '#1E40AF',
    beyondFront: '#FFFFFF',
    beyondLayer0: '#F472B6',
    beyondLayer1: '#1E40AF',
    beyondLayer2: '#34D399',
    sideWordColor: 'rgba(255, 255, 255, 0.85)',
    marqueeBg: '#FFFFFF',
    marqueeText: '#1E40AF',
  },
  {
    name: 'Crimson Flame',
    bgColor: '#DC2626',
    beyondFront: '#FFFFFF',
    beyondLayer0: '#60A5FA',
    beyondLayer1: '#DC2626',
    beyondLayer2: '#FDE047',
    sideWordColor: 'rgba(255, 255, 255, 0.85)',
    marqueeBg: '#FFFFFF',
    marqueeText: '#DC2626',
  },
  {
    name: 'Hot Magenta',
    bgColor: '#DB2777',
    beyondFront: '#FFFFFF',
    beyondLayer0: '#22D3EE',
    beyondLayer1: '#DB2777',
    beyondLayer2: '#A7F3D0',
    sideWordColor: 'rgba(255, 255, 255, 0.85)',
    marqueeBg: '#FFFFFF',
    marqueeText: '#DB2777',
  },
]

export function generateRandomTheme(): ThemePalette {
  const hue = Math.floor(Math.random() * 360)
  const bg = `hsl(${hue}, 82%, 48%)`
  const layer0 = `hsl(${(hue + 180) % 360}, 85%, 72%)`
  const layer2 = `hsl(${(hue + 90) % 360}, 85%, 68%)`

  return {
    name: `Dynamic HSL ${hue}°`,
    bgColor: bg,
    beyondFront: '#FFFFFF',
    beyondLayer0: layer0,
    beyondLayer1: bg,
    beyondLayer2: layer2,
    sideWordColor: 'rgba(255, 255, 255, 0.85)',
    marqueeBg: '#FFFFFF',
    marqueeText: bg,
  }
}
