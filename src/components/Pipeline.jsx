import { useEffect, useRef } from 'react'
import { pipeline } from '../data/profile.js'
import { useCycle } from '../hooks.js'

/* Stages that represent the AI half of the work are tinted amber; everything
   else is the cobalt "data flow" accent. Colour carries role, not decoration. */
const MODEL_STAGES = new Set(['Model'])

const font = (px) => `500 ${px}px "IBM Plex Mono", ui-monospace, monospace`

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

/**
 * The hero diagram: the real stages a document travels through in Raed's work,
 * with data visibly moving between them. Drawn on canvas rather than as SVG
 * paths so the particles cost nothing in DOM.
 *
 * Node count adapts to the available width — full labels, then short labels,
 * then a reduced set of stages — so nothing is ever clipped or overlapped.
 */
export default function Pipeline() {
  const active = useCycle(pipeline.length, 2200)
  const activeRef = useRef(0)
  activeRef.current = active

  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const cs = getComputedStyle(document.documentElement)
    const read = (name, fallback) => cs.getPropertyValue(name).trim() || fallback
    const C = {
      panel: read('--panel', '#111823'),
      line: read('--line-bright', '#2c3a4d'),
      ink: read('--ink', '#e7ecf3'),
      dim: read('--dim', '#8a98aa'),
      flow: read('--flow', '#4c8dff'),
      model: read('--model', '#ffb067'),
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let raf = 0
    let w = 0
    let h = 0
    let layout = null

    // Progressively simpler stage sets, tried widest-first.
    const CANDIDATES = [
      pipeline.map((_, i) => i), // full labels
      pipeline.map((_, i) => i), // short labels
      [0, 1, 4, 5, 6],
      [0, 1, 4, 6],
    ]

    const computeLayout = () => {
      const pad = 18
      const minGap = 16
      const fs = w < 560 ? 9 : 10.5
      ctx.font = font(fs)

      for (let s = 0; s < CANDIDATES.length; s++) {
        const idxs = CANDIDATES[s]
        const labels = idxs.map((i) => (s === 0 ? pipeline[i].label : pipeline[i].short))
        const nodeW = Math.max(...labels.map((l) => ctx.measureText(l).width)) + 22
        const n = labels.length
        const needed = n * nodeW + (n - 1) * minGap + pad * 2

        if (needed <= w || s === CANDIDATES.length - 1) {
          let boxW = nodeW
          let gap = n > 1 ? (w - pad * 2 - n * boxW) / (n - 1) : 0

          // On a very narrow canvas even the simplest stage set can overflow.
          // Hold a minimum gap and give the nodes whatever width is left, so
          // the row always fits inside the canvas rather than running off it.
          if (gap < minGap) {
            gap = Math.min(minGap, 8)
            boxW = n > 0 ? (w - pad * 2 - (n - 1) * gap) / n : boxW
          }

          // Shrink the type if a label would now spill out of its own box.
          const widest = Math.max(...labels.map((l) => ctx.measureText(l).width))
          const fsFit =
            widest + 12 > boxW ? Math.max(7, (fs * (boxW - 12)) / widest) : fs

          const nodeH = 34
          const cy = Math.round(h / 2)
          return {
            fs: fsFit,
            cy,
            nodeH,
            nodes: labels.map((label, i) => ({
              label,
              idx: idxs[i],
              x: pad + i * (boxW + gap),
              w: boxW,
            })),
          }
        }
      }
      return null
    }

    const measure = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      if (!w || !h) return
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      layout = computeLayout()
    }

    const draw = (t) => {
      if (!layout) return
      const { nodes, fs, cy, nodeH } = layout
      ctx.clearRect(0, 0, w, h)

      // ---- edges, with data travelling along them ----
      for (let i = 0; i < nodes.length - 1; i++) {
        const x1 = nodes[i].x + nodes[i].w
        const x2 = nodes[i + 1].x

        ctx.strokeStyle = C.line
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(x1, cy)
        ctx.lineTo(x2, cy)
        ctx.stroke()

        if (reduced) continue

        for (let p = 0; p < 2; p++) {
          const phase = (t / 2600 + i * 0.14 + p * 0.5) % 1
          const px = x1 + (x2 - x1) * phase

          const glow = ctx.createRadialGradient(px, cy, 0, px, cy, 9)
          glow.addColorStop(0, 'rgba(76, 141, 255, 0.55)')
          glow.addColorStop(1, 'rgba(76, 141, 255, 0)')
          ctx.fillStyle = glow
          ctx.beginPath()
          ctx.arc(px, cy, 9, 0, Math.PI * 2)
          ctx.fill()

          ctx.fillStyle = '#dbe8ff'
          ctx.beginPath()
          ctx.arc(px, cy, 1.6, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // ---- nodes ----
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.font = font(fs)

      nodes.forEach((n) => {
        const isActive = n.idx === activeRef.current
        const accent = MODEL_STAGES.has(pipeline[n.idx].short) ? C.model : C.flow

        roundRect(ctx, n.x, cy - nodeH / 2, n.w, nodeH, 7)
        ctx.fillStyle = C.panel
        ctx.fill()

        if (isActive) {
          ctx.shadowColor = accent
          ctx.shadowBlur = 14
        }
        ctx.strokeStyle = isActive ? accent : C.line
        ctx.lineWidth = isActive ? 1.4 : 1
        ctx.stroke()
        ctx.shadowBlur = 0

        ctx.fillStyle = isActive ? C.ink : C.dim
        ctx.fillText(n.label, n.x + n.w / 2, cy + 0.5)
      })
    }

    const loop = (now) => {
      draw(now)
      raf = requestAnimationFrame(loop)
    }

    const start = () => {
      measure()
      if (reduced) draw(0)
      else if (!raf) raf = requestAnimationFrame(loop)
    }

    start()

    // Font metrics change once the webfont lands, which changes node widths.
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        measure()
        if (reduced) draw(0)
      })
    }

    let ro
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(() => {
        measure()
        if (reduced) draw(0)
      })
      ro.observe(canvas)
    } else {
      window.addEventListener('resize', start)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro?.disconnect()
      window.removeEventListener('resize', start)
    }
  }, [])

  return (
    <figure className="pipe">
      <div className="pipe__head">
        <span className="eyebrow">Document pipeline</span>
        <span className="pipe__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </div>

      <canvas
        ref={canvasRef}
        className="pipe__canvas"
        role="img"
        aria-label={`Pipeline diagram: ${pipeline.map((s) => s.label).join(' to ')}`}
      />

      <ul className="pipe__legend">
        {pipeline.map((stage, i) => (
          <li key={stage.label} data-on={i === active ? 'true' : undefined}>
            <b>{stage.label}</b> — {stage.note}
          </li>
        ))}
      </ul>
    </figure>
  )
}
