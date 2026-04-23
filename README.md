# Lakra Studio Website

## Deploy on Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repository or upload this project.
3. Framework preset: Vite
4. Build command: npm run build
5. Output directory: dist
6. Click Deploy.

## Important

This version pins Tailwind CSS to v3.4.17 because Tailwind v4 changed the PostCSS plugin setup and can cause Vercel build failures.

## Local test

npm install
npm run build
npm run dev
