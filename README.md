# Tailwind Studio

Tailwind Studio is a visual, designer-friendly environment for creating responsive Tailwind CSS components. Design on a live canvas, tweak utility classes with precision, and export clean HTML/React/Vue/Svelte snippets ready for your project.

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm

### Setup

```bash
npm install
```

### Available Scripts

#### Development

```bash
npm run dev
```

Starts the development server with hot module replacement.

#### Build

```bash
npm run build
```

Type-checks the codebase and builds for production.

#### Preview

```bash
npm run preview
```

Preview the production build locally.

### Code Quality

This project uses ESLint and Prettier to maintain code quality and consistent formatting.

#### Linting

```bash
npm run lint        # Check for linting errors
npm run lint:fix    # Fix linting errors automatically
```

#### Formatting

```bash
npm run format      # Format code with Prettier
```

#### Pre-commit Hooks

The project uses Husky and lint-staged to automatically lint and format code before each commit. This ensures all committed code meets the project's quality standards.

### Configuration Files

- **ESLint**: `eslint.config.js` - Linting rules for TypeScript and Vue
- **Prettier**: `.prettierrc.json` - Code formatting rules
- **EditorConfig**: `.editorconfig` - Editor settings for consistent coding style
