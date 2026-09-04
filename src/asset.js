/**
 * Resolves a path from the `public/` directory against the site's base URL.
 *
 * Vite rewrites asset paths it finds in `index.html`, but NOT strings that live
 * in JavaScript. So a value like '/portrait.jpg' in profile.js is requested
 * from the domain root — which 404s wherever the site is served from a subpath,
 * as it is on GitHub Pages (/raed-charrad-portfolio/). Run every public asset
 * path through here instead of hardcoding the prefix, so the same code works in
 * dev, at a subpath, and at a domain root.
 *
 *   asset('/portrait.jpg')            -> '/raed-charrad-portfolio/portrait.jpg'
 *   asset('portrait.jpg')             -> '/raed-charrad-portfolio/portrait.jpg'
 *   asset('https://cdn/x.jpg')        -> unchanged
 *   asset(null)                       -> null
 */
export function asset(path) {
  if (!path) return path

  // Already absolute or inlined — leave it alone.
  if (/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(path)) return path

  const base = import.meta.env.BASE_URL || '/'
  return `${base.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`
}
