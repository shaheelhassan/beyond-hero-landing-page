# Beyond Hero Landing Page

A pixel-for-pixel recreation of the **Beyond Hero** landing page built with React, Vite, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Pixel-for-Pixel Typography**:
  - Retro stacked 4-layer `BEYOND` title using `Bamboly Demo` font (Blue `#89CFF0`, Orange `#EC612C`, Green `#90EE90`, White `#FFFFFF`).
  - Side word columns (Left: `SPARK`, `IMAGINE`, `EVOLVE`, `RENDER`; Right: `BLAZE`, `GENESIS`, `PURPOSE`, `IGNITE`) using Google Fonts `Poppins` (weight 500).
- **Exact Scroll-Driven Animation**:
  - Sticky text overlay across a `120vh` hero section.
  - Horizontal translation of word columns sliding inward to `0` based on exact math:
    - `leftOffset[i] = -(60 + i * 40) * scaleFactor * (1 - progress)`
    - `rightOffset[i] = +(60 + i * 40) * scaleFactor * (1 - progress)`
  - Dynamic opacity transition from `0.35` to `1.0`.
  - Responsive breakpoint handling (desktop vs `<768px` mobile scale factor of `0.5`).
- **Hero Character**:
  - 3D bust of young Black man with electric-blue braids and neon-green turtleneck.
  - Anchored at bottom center with `115%` height, overlapping the title at `z-index: 10`.
- **Seamless Infinite Marquee**:
  - Full-width band with 4 seamless copies of `SPARK · RENDER · IGNITE · UNFOLD · GENESIS · EVOLVE · PURPOSE · BEYOND ·`.
  - 18s linear infinite loop with zero layout shifts.

## 🛠 Tech Stack

- **React 19**
- **Vite 6**
- **TypeScript**
- **Tailwind CSS v4**

## 💻 Getting Started

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```
