# GEMINI Project Context: Portfolio Website

## Project Overview

This repository contains a modern portfolio website built using the **Next.js 16+** App Router and **TypeScript**. It is a sophisticated, visually-oriented project designed to showcase professional work.

The front-end is built with **React 19** and leverages a hybrid styling approach:
*   **Material-UI (MUI)** is the primary component library, with a highly customized, design-token-based theme system found in `src/theme/theme.ts`. This theme supports both **light and dark modes** and defines a complete color palette, typography scale, and component-specific overrides for a consistent and professional look.
*   **Tailwind CSS** is integrated for utility-first styling, used primarily for layout and rapid prototyping.
*   **Framer Motion** is used for animations, adding a dynamic and polished feel to UI elements like the header and background.

The architecture is component-based, following Next.js conventions. Key UI features include a responsive, glassmorphism-style header, an animated background, and a custom logo component (`SparkLogo`).

## Building and Running

The project uses `npm` as the package manager. The following scripts are available in `package.json`:

*   **Install dependencies:**
    ```bash
    npm install
    ```

*   **Run the development server:**
    Starts the application on `http://localhost:3000` with hot-reloading.
    ```bash
    npm run dev
    ```

*   **Build for production:**
    Creates an optimized production build in the `.next` directory.
    ```bash
    npm run build
    ```

*   **Start the production server:**
    Runs the built application.
    ```bash
    npm run start
    ```

*   **Lint the codebase:**
    Checks the code for style and quality issues using ESLint.
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Directory Structure:**
    *   `src/app/`: Core application routing and pages (Next.js App Router).
    *   `src/components/`: Reusable React components.
        *   `src/components/ui/`: Smaller, more atomic UI elements.
    *   `src/theme/`: Contains the centralized MUI theme configuration (`theme.ts`).
    *   `public/`: Static assets like images and SVGs.

*   **Styling:**
    *   Global styles and Tailwind CSS imports are in `src/app/globals.css`.
    *   Component styling is primarily handled via MUI's `sx` prop or `styled()` API, leveraging the custom theme.
    *   Utility classes from Tailwind CSS are used for layout and smaller style adjustments directly in JSX.

*   **Theming:**
    *   The application's look and feel is controlled by `src/theme/theme.ts`. To make changes to colors, fonts, or component styles, modify this file.
    *   The theme mode (light/dark) is managed by the `useColorMode` hook, accessible through the `ThemeRegistry` context provider in the root layout.

*   **Code Quality:**
    *   The project is configured with **ESLint** for code linting (`eslint.config.mjs`).
    *   **TypeScript** is used throughout for static typing.
    *   The **Next.js React Compiler** (`reactCompiler: true` in `next.config.ts`) is enabled for automatic performance optimizations.
