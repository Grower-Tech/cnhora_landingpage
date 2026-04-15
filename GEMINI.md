# Project Overview: CNHora Landing Page

This is the official landing page for **CNHora**, a management platform for driving schools (autoescolas). The project is built with a focus on high-performance animations and a modern, "tech-forward" aesthetic to connect students with independent instructors.

## Main Technologies
- **Frontend Framework:** React 18 (Vite-based)
- **Styling:** Tailwind CSS + Custom CSS (Glassmorphism, animations)
- **Animations:** 
  - **GSAP:** Used for complex scroll-triggered sequences in the Hero section.
  - **Framer Motion:** Used for UI interactions, transitions, and the mobile menu.
  - **Three.js:** Powers the background particle system in the Hero section.
- **Icons:** Lucide React
- **Meta Tags:** React Helmet Async

## Project Architecture
- `src/components/layout/`: Global components like `Navbar` and `Footer`.
- `src/components/sections/`: Main landing page sections (e.g., `Hero`).
- `src/components/ui/`: Reusable primitive components.
- `src/hooks/`: Custom React hooks.
- `src/utils/`: Utility functions.
- `src/assets/`: Static assets like images and styles.

## Key Features
- **Advanced Hero Section:** A multi-stage, scroll-triggered experience featuring a 3D particle background, orbital rings, and "tunneling" feature cards.
- **Responsive Design:** Optimized for mobile with a custom navigation menu and adjusted animation complexity.
- **Custom Cursor:** Interactive cursor that changes state based on hovered elements.
- **Glassmorphism UI:** Heavy use of backdrop-blur and semi-transparent layers for a premium feel.

## Development Commands
- `npm run dev`: Starts the local development server (Vite).
- `npm run build`: Generates the production build in the `dist/` directory.
- `npm run lint`: Runs ESLint for code quality checks.
- `npm run preview`: Previews the production build locally.

## Development Conventions
- **Path Aliases:** Use defined aliases for cleaner imports:
  - `@` -> `./src`
  - `@components` -> `./src/components`
  - `@assets` -> `./src/assets`
  - `@hooks` -> `./src/hooks`
  - `@utils` -> `./src/utils`
- **Styling:** 
  - Prefer Tailwind for layout and simple styling.
  - Use `src/index.css` for complex keyframe animations and global CSS variables.
  - The project uses a "Dark" theme by default (`--blue-deep: #000810`).
- **Animations:** 
  - Use **GSAP ScrollTrigger** for time-based or scroll-bound sequences.
  - Use **Framer Motion** for spring-based interactions and entrance animations.
- **Icons:** Standardize on **Lucide React**.

## Important Files
- `index.html`: Main HTML entry point.
- `vite.config.js`: Contains build optimization and path alias configurations.
- `tailwind.config.js`: Custom Tailwind theme and color extensions.
- `src/index.css`: Heart of the custom styling and global animations.
- `novapag.html`: Standalone HTML prototype/backup of the landing page design.
