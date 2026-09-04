import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this repo from a subpath, so assets must be requested
  // from there rather than the domain root. Change to '/' if you move to a
  // custom domain or to raed-charrad.github.io.
  base: '/raed-charrad-portfolio/',
})
