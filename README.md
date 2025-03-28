# Project Store

An e-commerce store built with Nuxt 3, featuring product listings, categories, cart functionality, and more.

## System Requirements

- Node.js version 16.x or higher
- npm version 8.x or higher
- macOS, Windows, or Linux operating system

## Technologies Used

- **Nuxt 3** - Vue.js framework for server-side rendering and static site generation
- **Pinia** - State management for Vue applications
- **TypeScript** - For type safety and better developer experience
- **Sass** - For styling with variables and mixins
- **Nuxt Image** - For optimized image handling

## API Integration

This project uses the native fetch API to retrieve data from [Fake Store API](https://fakestoreapi.com), which provides mock e-commerce data including:

- Products
- Categories
- Cart functionality

## Features

- Product listings by category
- Product detail pages
- Shopping cart functionality
- Responsive design

## Component Usage

### HomeFeaturesComponent

This component displays products from a specific category on the home page:

```vue
<LazyHomeFeaturesComponent title="Category Title" category="category-slug" />
```

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
