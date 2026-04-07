# SBP Frontend Style

A comprehensive React component library built with TypeScript and styled-components. This library provides a complete set of pre-styled, customizable UI components following atomic design principles, designed for internal Schuberg Philis projects.

With this library, you can quickly build consistent, accessible user interfaces without maintaining component code yourself. All components are fully themed and support both light and dark modes out of the box.

## Features

- 🎨 Complete theming system with light/dark mode support
- ♿ Accessibility-focused components
- 📦 TypeScript support with full type definitions
- 🎯 Atomic design architecture (atoms, molecules, organisms)
- 🔧 Highly customizable via theme tokens
- 📱 Responsive and scalable components
- ⚡ Built with modern React (v19) and styled-components (v6)

## Platforms

This library is built for React-based applications:

| Platform | Supported | Notes                                     |
| -------- | --------- | ----------------------------------------- |
| ReactJS  | ✅        | Native support                            |
| NextJS   | ✅        | Works seamlessly with Next.js applications |

## Installation

Install the package using your preferred package manager:

```bash
pnpm add @schubergphilis/sbp-frontend-style

# Or with npm:
npm install @schubergphilis/sbp-frontend-style
```

### Peer Dependencies

This library requires React 19+ as a peer dependency:

```json
"peerDependencies": {
  "react": "^19.2.3",
  "react-dom": "^19.2.3"
}
```

## Quick Start

Wrap your application with the `<CloudStyle>` component to enable theming and default styles:

```jsx
import { ActionButton, CloudStyle } from '@schubergphilis/sbp-frontend-style'

const App = () => {
	return (
		<CloudStyle isDarkMode={false} isLargeMode={false}>
			<ActionButton variant="cta" isRounded>
				Welcome
			</ActionButton>
		</CloudStyle>
	)
}

export default App
```

## CloudStyle Configuration

The `<CloudStyle>` component provides theme configuration for all child components. It applies global styles and CSS resets based on [Josh Comeau's CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/).

### Props

| Property    | Type                  | Default   | Description                                                                                                                 |
| ----------- | --------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------- |
| isDarkMode  | boolean               | false     | Toggle between dark mode and light mode                                                                                     |
| isLargeMode | boolean               | false     | Increase base font size from 16px to 24px. All components use em/rem units and scale accordingly                           |
| lightStyle  | DefaultStyleWithCustomVars | undefined | Override default light theme tokens (colors, spacing, fonts, etc.)                                                    |
| darkStyle   | DefaultStyleWithCustomVars | undefined | Override default dark theme tokens. Inherits from lightStyle overrides if provided                                    |
| fonts       | DefaultFonts          | undefined | Customize font families used throughout components                                                                          |
| isDebug     | boolean               | false     | Enable debug mode for development                                                                                           |
| children    | ReactNode             | required  | Child components to be themed                                                                                               |

### Custom Theme Example

```jsx
import { CloudStyle } from '@schubergphilis/sbp-frontend-style'

const customLightTheme = {
	colorPrimary: '#0066cc',
	colorBg: '#ffffff',
	fontSize: '16px',
	// ... other theme tokens
}

const App = () => {
	return (
		<CloudStyle isDarkMode={false} lightStyle={customLightTheme}>
			{/* Your app components */}
		</CloudStyle>
	)
}
```

## Components

The library follows atomic design principles, organizing components into three categories:

### Atoms (Basic Building Blocks)

#### Buttons
- **ActionButton** - Primary action button with variants (cta, ghost, etc.), loading states, and badge support
- **DragButton** - Button for drag-and-drop interactions
- **TextLink** - Styled link component
- **ToggleButton** - Toggle/switch button component

#### Forms
- **TextInput** - Text input field with label and validation states
- **SelectInput** - Dropdown select component
- **CheckboxInput** - Checkbox with label
- **RadioInput** - Radio button with label

#### Avatars & Badges
- **Avatar** - User avatar with badge support, name abbreviation, and color generation
- **Badge** - Notification badge (supports count display with 999+ cap)
- **ChipBadge** - Chip-style badge component

#### Loaders & Progress
- **Loader** - Loading spinner component
- **ProgressBar** - Linear progress indicator
- **ProgressTimer** - Countdown timer with visual progress

#### Tooltips
- **Tooltip** - Contextual tooltip with multiple placement options (top, bottom, left, right)

### Molecules (Composed Components)

#### Cards
- **Card** - Base card component with header, content, and footer subcomponents
- **CardHeader** - Card header section
- **CardContent** - Card content section
- **CardFooter** - Card footer section

#### Tables
- **DynamicTable** - Feature-rich data table with sorting, sticky headers, zebra striping, column resizing, row selection, and pagination support

#### Modals & Notifications
- **Modal** - Modal dialog with backdrop and close functionality
- **Notification** - Toast notification with types (info, warning, success, error), auto-close, and expandable descriptions

#### Charts
- **DonutChart** - Circular progress/donut chart visualization

### Organisms (Complex Composed UI)

- **Accordion** - Expandable/collapsible panels with multiple items
- **NavigationBar** - Top-level navigation component
- **TabBar** - Tabbed interface component

### Helpers & Utilities

The library includes several helper utilities:

- **ProgressHelper** - Donut/circle progress visualization utilities
- **FunctionHelpers** - String manipulation, date validation, formatting utilities
- **ColorpickerHelper** - Color generation and manipulation
- **ConditionalWrapperHelper** - Conditional component wrapping utility
- **HtmlHelper** - HTML/JSX utilities
- **DeviceHelper** - Device detection utilities

## Development

### Running the Demo App

The library includes a live demo/playground application built with Vite:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3005](http://localhost:3005) to view the interactive component showcase.

### Building the Library

Build the library for distribution:

```bash
pnpm build
# or
npm run build
```

This uses Rollup to create optimized ESM and CJS bundles in the `dist` folder.

### Running Tests

Launch the Jest test runner:

```bash
pnpm test
# or
npm test
```

For debugging tests:

```bash
pnpm test:debug
```

### Linting

```bash
pnpm lint
```

## Package Exports

The library provides both ESM and CommonJS exports:

```json
{
  "exports": {
    "types": "./dist/index.d.ts",
    "import": "./dist/esm/index.mjs.js",
    "require": "./dist/cjs/index.js"
  }
}
```

## Contributing

This library uses:
- **TypeScript** for type safety
- **styled-components** for styling
- **Rollup** for library bundling
- **Vite** for development
- **Jest** for testing
- **ESLint** and **Prettier** for code quality

## License

MIT

## Repository

[https://github.com/schubergphilis/sbp-frontend-style](https://github.com/schubergphilis/sbp-frontend-style)
