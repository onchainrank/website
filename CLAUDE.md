# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run Next.js linter
- `npm run export` - Export static site

## Architecture Overview

This is "onchainrank" - a Next.js application providing real-time on-chain analytics for pump.fun tokens and meme coin trading tools.

### Domain Structure & Routing
- **Main domain**: `onchainrank.com` serves marketing pages (home, about, pricing)
- **App subdomain**: `app.onchainrank.com` serves authenticated dashboard features
- **Middleware logic**: `src/middleware.ts` redirects non-whitelisted paths from main domain to app subdomain
- **Whitelisted paths**: `/`, `/profile`, `/register`, `/login`, `/dashboard`
- **Next.config.ts**: Additional redirects for paths not starting with dashboard/login/register

### Technology Stack
- Next.js 15 with App Router
- Firebase Auth & Firestore (project: "onchainrank2")
- Socket.io client for real-time data
- Tailwind CSS with custom brand colors
- TypeScript

### Key Architecture Patterns
- **Authentication**: Firebase Auth state managed in NavBar component, protects dashboard routes
- **Styling**: Custom Tailwind config with brand colors (`brand-navy`, `brand-green`, `brand-navy-light`)
- **Real-time data**: LiveTable component in dashboard uses Socket.io
- **Firebase config**: Centralized in `src/lib/firebase.ts` with singleton pattern

### Important Files
- `src/middleware.ts` - Domain routing and redirect logic
- `src/lib/firebase.ts` - Firebase configuration and exports
- `src/app/layout.tsx` - Root layout with custom fonts and metadata
- `src/app/components/NavBar.tsx` - Authentication-aware navigation
- `src/app/dashboard/LiveTable.tsx` - Real-time data display component