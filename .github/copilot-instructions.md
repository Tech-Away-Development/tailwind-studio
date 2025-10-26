# Copilot Instructions for Tailwind Studio

## Project Architecture
This is a Vue 3 + TypeScript + Vite application using the Composition API with `<script setup>` syntax. The project structure follows Vue 3 conventions:

- **Entry Point**: `src/main.ts` - Bootstraps the Vue app and mounts to `#app`
- **Root Component**: `src/App.vue` - Uses scoped styles and hosts the main layout
- **Components**: `src/components/` - Single File Components (SFCs) using `<script setup lang="ts">`
- **Assets**: `src/assets/` for images, `public/` for static files served directly

## Development Patterns

### Component Structure
- Use `<script setup lang="ts">` for all new components
- Define props with `defineProps<{ propName: type }>()`
- Use `ref()` for reactive state, import from `vue`
- Apply scoped styles unless global styles are specifically needed

Example component pattern:
```vue
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
  <!-- Template content -->
</template>

<style scoped>
/* Component-specific styles */
</style>
```

### TypeScript Configuration
- Uses strict TypeScript settings with `noUnusedLocals` and `noUnusedParameters`
- Split TypeScript configs: `tsconfig.app.json` for app code, `tsconfig.node.json` for build tools
- Vite client types are included for proper IDE support

## Build & Development

### Key Commands
- `npm run dev` - Start development server with HMR
- `npm run build` - Type-check with `vue-tsc` then build for production
- `npm run preview` - Preview production build locally

### Build Process
1. TypeScript compilation check via `vue-tsc -b`
2. Vite bundles the application with Vue SFC processing
3. Output goes to `dist/` directory

## Current State & Expectations
- **Router**: Vue Router is installed but not yet configured in the codebase
- **Styling**: Despite the "tailwind-studio" name, Tailwind CSS is not yet integrated
- **State Management**: No Pinia/Vuex setup - using component state only

## Integration Notes
When adding Tailwind CSS (as the project name suggests):
1. Install via `npm install -D tailwindcss postcss autoprefixer`
2. Configure `tailwind.config.js` and update `src/style.css`
3. Update Vite config if PostCSS processing needed

When setting up routing:
1. Create `src/router/index.ts` to configure Vue Router
2. Update `src/main.ts` to use the router
3. Add `<router-view>` to `src/App.vue`