# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Agro Web App — frontend for an agricultural IoT platform. React 18 SPA built with Vite, using Redux for state management and Tailwind CSS for styling. Communicates with a Spring Boot backend API at `http://localhost:8080`.

## Commands

```bash
npm run dev      # Start dev server (port 5173)
npm run build    # Production build (output: dist/)
npm run preview  # Preview production build
```

Docker:
```bash
docker compose up --build   # Runs on port 5173
```

No test suite or linter is configured.

## Architecture

- **Vite + React 18** (JSX, no TypeScript)
- **React Router v6** (`src/routes.js`) — `createBrowserRouter` with three routes: `/` (Login), `/users` (Users), `/areas` (Areas)
- **Redux** (`src/store/`) — classic Redux with `redux-thunk`, organized as actions/reducers/constants
- **Axios** (`src/services/springboot.js`) — API client targeting `localhost:8080` (Spring Boot backend)
- **Tailwind CSS** via PostCSS (`postcss.config.cjs`, `tailwind.config.cjs`)

## Key Conventions

- UI language is Portuguese (labels, placeholders, button text)
- Pages live in `src/pages/` as functional components
- Redux follows the pattern: `store/constants/` → `store/actions/` → `store/reducers/`
- API service layer in `src/services/` wraps axios instances per backend
