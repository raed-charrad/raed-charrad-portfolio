import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves a project repo from a subpath, so every asset must be
  // requested from there rather than the domain root. Set this to '/' if the
  // site ever moves to a custom domain, to raed-charrad.github.io, or to a
  // root-serving host like Cloudflare Pages or Netlify — otherwise the asset
  // URLs carry a prefix the host does not have, and all of them 404.
  base: '/raed-charrad-portfolio/',
})
