import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Cloudflare Pages and Netlify serve from the domain root, so assets are
  // requested from '/'. This was '/raed-charrad-portfolio/' while the site ran
  // on GitHub Pages, which serves a project repo from a subpath — if you ever
  // move back there, set it to '/<repo-name>/' again or every asset 404s.
  base: '/',
})
