import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Adds `.is-visible` the first time an element scrolls into view, which lets
 * CSS stagger its children in. Only used below the fold — the hero renders at
 * full opacity so the first painted frame is never blank.
 */
export function useReveal({ threshold = 0.12 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        })
      },
      { threshold, rootMargin: '0px 0px -6% 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return ref
}

/** Which section is currently under the top bar, for nav + rail highlighting. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const seen = new Map()

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e))
        const visible = [...seen.values()]
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-15% 0px -60% 0px', threshold: 0 }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids.join(',')]) // eslint-disable-line react-hooks/exhaustive-deps

  return active
}

/** True once the page has scrolled past `offset`. Adds the top-bar hairline. */
export function useScrolled(offset = 8) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}

/**
 * Cycles an index through `length` every `ms`. Used for the hero focus line,
 * where every option stays in the DOM and only the active one is shown.
 */
export function useCycle(length, ms = 2600) {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (length < 2 || prefersReducedMotion()) return
    const id = setInterval(() => setI((n) => (n + 1) % length), ms)
    return () => clearInterval(id)
  }, [length, ms])

  return i
}

/**
 * Counts from 0 to `target` once the element is in view.
 * Reduced-motion users get the final figure immediately.
 */
export function useCountUp(target, { ms = 1100 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setValue(target)
      return
    }

    let raf = 0
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        io.disconnect()

        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / ms, 1)
          // ease-out cubic, so the number settles rather than stopping dead
          setValue(Math.round(target * (1 - Math.pow(1 - t, 3))))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )

    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, ms])

  return [ref, value]
}

/**
 * Writes the pointer position onto the document root as --px / --py so the
 * fixed background glow can follow it without re-rendering React.
 */
export function usePointerGlow() {
  useEffect(() => {
    if (prefersReducedMotion() || window.matchMedia('(pointer: coarse)').matches) return

    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight * 0.2

    const write = () => {
      raf = 0
      document.documentElement.style.setProperty('--px', `${x}px`)
      document.documentElement.style.setProperty('--py', `${y}px`)
    }

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      if (!raf) raf = requestAnimationFrame(write)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])
}

/**
 * Tracks the cursor inside one element as --mx / --my percentages, driving the
 * sheen on a project panel. Returns handlers to spread onto the element.
 */
export function useSheen() {
  const onPointerMove = (e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
  }

  return { onPointerMove }
}
