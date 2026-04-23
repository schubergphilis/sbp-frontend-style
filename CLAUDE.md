# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React component library (`@schubergphilis/sbp-frontend-style`) built with TypeScript and styled-components. It provides a complete set of themed, accessible UI components following atomic design principles. The library supports light/dark modes and responsive scaling.

**Published to**: GitHub Package Registry (`npm.pkg.github.com`)

## Commands

### Development
```bash
pnpm dev                # Start Vite dev server on port 3005 with component showcase
```

### Building
```bash
pnpm build              # Clean dist/ and build library with Rollup (ESM + CJS bundles)
pnpm clean              # Remove dist/ folder
```

### Testing
```bash
pnpm test               # Run all tests with coverage (Jest)
pnpm test:debug         # Run tests in debug mode with watch and detailed output
pnpm test:focus         # Run a specific test file (modify script to target different file)
pnpm test:clear         # Clear Jest cache
pnpm coverage           # Open coverage report in Chrome
```

### Code Quality
```bash
pnpm lint               # ESLint check with TypeScript support
```

### Releasing
```bash
pnpm release            # Create new version with standard-version (CHANGELOG, git tag)
```

## Architecture

### Build System

The library uses **two separate entry points**:
- **Demo/Dev**: `src/index.tsx` → Vite dev server showcasing all components
- **Library Build**: `src/build.ts` → Rollup bundles for npm distribution

**Pre-build step**: `component-list.js` scans `src/components/` and generates `src/component-list.json` (used by demo app to dynamically list components). This runs automatically before `dev` and `build` commands.

**Two TypeScript configs**:
- `tsconfig.json`: For development and demo app (Vite, bundler resolution)
- `tsconfig.build.json`: For Rollup library build

### Atomic Design Structure

Components are organized in three levels:

```
src/components/
├── atoms/              # Basic building blocks (buttons, inputs, badges, loaders)
├── molecules/          # Composed components (cards, tables, modals, notifications)
└── organisms/          # Complex UI patterns (accordion, navigation bars)
```

Each level exports through an `index.ts` barrel file. The main export is at `src/components/index.ts`.

### Theming System

**Core files**:
- `src/styling/ThemeConfig.ts`: Defines `GlobalStyles`, `lightTheme`, `darkTheme`, `largeLightTheme`, `largeDarkTheme`
- `src/components/CloudStyle.tsx`: Convenience wrapper around styled-components `ThemeProvider`

**Theme tokens** are accessed via `theme.style.*` (colors, spacing, borders) and `theme.fonts.*` (font families).

**CloudStyle component** combines themes based on `isDarkMode` and `isLargeMode` props:
- Light/Dark mode: Switches color palette
- Large mode: Changes base `fontSize` from 16px to 24px (all components use `em`/`rem` and scale proportionally)
- Custom theme overrides: Pass `lightStyle`, `darkStyle`, or `fonts` props
- **Important**: `darkStyle` inherits overrides from `lightStyle` then applies its own overrides

**Global CSS Reset**: Applied via `GlobalStyles` component (based on Josh Comeau's CSS Reset).

### Path Aliases

TypeScript path resolution is configured with `baseUrl: "./src"`, allowing imports like:
```typescript
import { ColumnModel } from 'models/ColumnModel'
import { FunctionHelpers } from 'helpers/FunctionHelpers'
import { CloudStyle } from 'components/CloudStyle'
```

**Common aliases**:
- `components/*` → `src/components/*`
- `datatypes/*` → `src/datatypes/*`
- `helpers/*` → `src/helpers/*`
- `models/*` → `src/models/*`
- `styling/*` → `src/styling/*`
- `store/*` → `src/store/*` (demo app only)

Both Jest and Vite are configured to resolve these aliases.

### Data Models

`src/models/` contains TypeScript interfaces defining props for complex components:
- `ColumnModel`: Table column configuration (DynamicTable)
- `MenuItemModel`: Navigation menu items
- `SelectOptionModel`: Dropdown options
- `ComponentOptionModel`: Demo component configuration options
- `StepsModel`: Step progress indicators

When modifying components that accept structured data, update these models.

### Demo App Architecture

The Vite demo app (`src/App.tsx`) provides an interactive component showcase. It:
- Uses Redux Toolkit (`src/store/`) for demo settings (dark mode, large mode, etc.)
- Persists settings to localStorage via middleware
- Dynamically renders component examples using `component-list.json`
- Uses `ComponentBox` pattern to create interactive prop controls

**Note**: Consumer applications do **not** need Redux. It's only used for the demo.

## Library Exports

`src/build.ts` exports:
```typescript
export * from './components'   // All React components
export * from './datatypes'    // Type definitions
export * from './helpers'      // Utility functions
export * from './models'       // Data models/interfaces
export * from './styling'      // Theme config, GlobalStyles
export * from './types'        // Additional types
```

**Rollup output**:
- ESM: `dist/esm/index.mjs.js`
- CJS: `dist/cjs/index.js`
- Types: `dist/index.d.ts`

## Key Patterns

### Adding New Components

1. Create component in appropriate atomic level (`atoms/`, `molecules/`, or `organisms/`)
2. Export from level's `index.ts` barrel file
3. Component will be auto-detected by `component-list.js` for demo
4. Use styled-components with theme tokens: `${({ theme }) => theme.style.colorPrimary}`
5. Follow existing prop patterns (e.g., `isRounded`, `isDisabled`, `variant`)

### Testing

- Test files: `__tests__/**/*.test.ts(x)` or co-located `*.test.ts(x)`
- Uses Jest with ts-jest (ESM preset)
- jsdom environment for React components
- Coverage reports in `./coverage/`

**Common test imports**:
```typescript
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
```

### Styled Components Best Practices

- Use transient props (`$propName`) for styling props not passed to DOM
- Access theme via `${({ theme }) => ...}`
- All colors should reference theme tokens, not hardcoded values
- Use `em` and `rem` for sizes (supports isLargeMode scaling)

### Version & Release

This project uses `standard-version` for semantic versioning:
- Automatically generates CHANGELOG from conventional commits
- Creates git tags
- Updates version in package.json
- Commit format: `type(scope): message` (e.g., `feat(button): add loading state`)

## Important Notes

- **Peer dependencies**: React and ReactDOM are peer deps (not bundled). Consumer apps must provide them.
- **Font files**: Located in `public/fonts/` (TT Interfaces, TT Interphases). Demo app serves these; consumers need to host fonts or provide custom `fonts` prop to CloudStyle.
- **Icons**: SVG icon components in `src/components/icons/` (not exported in atomic index files, access directly)
- **Elements**: Helper UI elements in `src/components/elements/` (Elipse, TableOrder, TimestampBar) used internally by molecules/organisms
- **Module format**: This is an ESM-first package. CJS support provided but ESM is primary target.

## Quality & Honesty
- **No sycophancy, challenge reasoning.** Be direct — no praise, flattery, or filler. Push back on flawed assumptions or suboptimal approaches (yours and mine). Flag trade-offs honestly.