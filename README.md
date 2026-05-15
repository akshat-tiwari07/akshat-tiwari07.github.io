# Akshat Tiwari Portfolio

Personal 3D portfolio for Akshat Tiwari, Senior Software Engineer at Optum.
The site is built with React, TypeScript, Vite, Three.js, React Three Fiber,
and GSAP, with resume-backed sections for experience, projects, skills, and
contact details.

![Portfolio Preview](public/images/preview1.png)

## Features

- Responsive one-page portfolio layout with animated sections.
- Resume download served from `public/Akshat_Tiwari.pdf`.
- 3D character scene powered by React Three Fiber and Three.js.
- GSAP-driven smooth scrolling, transitions, and hover interactions.
- Experience sections covering Optum, Webstrat, HighRadius, and KIIT.
- Project carousel for EasyTest, Webstrat, CodeCollab, and Secure Chat.

## Tech Stack

### Core

- React 18
- TypeScript
- Vite

### Animation and 3D

- GSAP + `@gsap/react`
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/postprocessing`
- `@react-three/cannon`
- `@react-three/rapier`

### Supporting Libraries

- `react-icons`
- `react-fast-marquee`
- `@vercel/analytics`

## Project Structure

```text
.
|-- public/                    # Static assets and resume PDF
|-- src/
|   |-- assets/                # Local media/assets
|   |-- components/
|   |   |-- Character/         # 3D scene and character logic
|   |   |-- styles/            # Component CSS files
|   |   |-- About.tsx
|   |   |-- Career.tsx
|   |   |-- Contact.tsx
|   |   |-- Landing.tsx
|   |   |-- MainContainer.tsx
|   |   |-- Navbar.tsx
|   |   |-- TechStack.tsx
|   |   |-- WhatIDo.tsx
|   |   `-- Work.tsx
|   |-- context/               # Global providers
|   |-- data/                  # Static data/content definitions
|   |-- App.tsx
|   `-- main.tsx
|-- package.json
`-- vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
npm run dev
```

Open the URL shown in the terminal, typically `http://localhost:5173`.

## Available Scripts

- `npm run dev` starts the Vite dev server.
- `npm run build` type-checks and builds the production bundle.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint checks across the project.

## Updating Resume Content

- Replace `public/Akshat_Tiwari.pdf` with the latest resume PDF.
- Update profile copy in `src/components/About.tsx`, `Career.tsx`,
  `WhatIDo.tsx`, `Work.tsx`, and `Contact.tsx`.
- Update page metadata in `index.html`.

## Deployment

Create a production build with:

```bash
npm run build
```

Deploy the generated `dist/` folder to Vercel, Netlify, Cloudflare Pages, or
any static hosting provider.

## License

This project is open source and available under the [MIT License](LICENSE).
