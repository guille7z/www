# www

My own personal corner of the interwebs, built with [Svelte](https://svelte.dev/) (SvelteKit).

## Features

- **Home** — a simple, minimal, homepage featuring a figlet title with my name on it (rendered via a custom component), and under it, links to my socials and ways to contact me, alongside a few blinkies.
- **Projects** (`/projects`) — a grid of my GitHub repositories, pulled via the GitHub REST API, showing each repo's description, language, topics and stars - with links to the repo and live demo (if one exists).
- **Blog** (`/blog`) — a blog page!

## Running locally

You'll need [Node.js](https://nodejs.org/) and `npm` (or `pnpm`) installed.

1. **Clone the repo**

   ```bash
   git clone https://github.com/guille7z/www
   cd www
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the dev server**

   ```bash
   npm run dev
   ```

   If you want it to open automatically in your browser:

   ```bash
   npm run dev --open
   ```

## Build

To create a production build:

```bash
npm run build
```

To preview the production build locally before deploying:

```bash
npm run preview
```

## Stack?

- [SvelteKit](https://kit.svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-svelte](https://lucide.dev/) for icons
- GitHub REST API for the projects page
