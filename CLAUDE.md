# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 (App Router) application. The project uses TypeScript, Tailwind CSS v4, and Turbopack for development and builds.

## Commands

### Development
```bash
npm run dev       # Start dev server with Turbopack (runs on http://localhost:3000)
npm run build     # Build production bundle with Turbopack
npm start         # Start production server
npm run lint      # Run ESLint
```

## Architecture

### Project Structure
- **App Router**: Uses Next.js 15 App Router (`app/` directory)
- **Path Aliases**: `@/*` maps to project root via tsconfig paths
- **Styling**: Tailwind CSS v4 with PostCSS, custom Geist fonts (Geist Sans and Geist Mono)
- **TypeScript**: Strict mode enabled with ES2017 target

### Key Files
- `app/layout.tsx`: Root layout with font configuration and metadata
- `app/page.tsx`: Home page component
- `app/auth/page.tsx`: Authentication page with sign in/sign up forms
