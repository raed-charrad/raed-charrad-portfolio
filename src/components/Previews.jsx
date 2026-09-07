/* ============================================================================
   Project previews — one looping animation per project.

   These are ABSTRACT DIAGRAMS of what each project does, not mock screenshots.
   A fake UI would imply a product surface that may not look like this, and for
   the NeoLedge work it would leak an interface I have never seen. Each one
   shows the mechanism instead: what moves, and in what direction.

   Rules every preview follows:
   - Pure CSS animation on transform/opacity only, so there is no JS timer and
     the compositor does the work.
   - The RESTING state (animations disabled) is a complete, readable diagram.
     Nothing is parked invisible waiting for a keyframe.
   - Colour carries the same roles as the rest of the site: cobalt is data in
     flight, amber is a model or AI step, green is a success state.
   ========================================================================== */

import { useMediaQuery } from '../hooks.js'
import { useContent } from '../i18n.jsx'

const BOX = '0 0 320 120'

function Frame({ id, children }) {
  const { previews } = useContent()
  return (
    <div className="pv">
      <svg
        viewBox={BOX}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={previews[id]}
      >
        {children}
      </svg>
    </div>
  )
}

/** A labelled box, the shared unit of every diagram. */
function Node({ x, y, w = 62, h = 26, label, tone }) {
  return (
    <g className={tone ? `pv-node pv-node--${tone}` : 'pv-node'}>
      <rect x={x} y={y} width={w} height={h} rx="5" />
      <text className="pv-txt" x={x + w / 2} y={y + h / 2 + 3} textAnchor="middle">
        {label}
      </text>
    </g>
  )
}

/* ---------------------------------------------------------------------------
   FAST connector — a document crosses to Elise; one attempt fails and retries.
   ------------------------------------------------------------------------ */
function Fast() {
  return (
    <Frame id="fast">
      <line className="pv-line" x1="78" y1="40" x2="180" y2="40" />
      <Node x="16" y="27" label="FAST" />
      <Node x="180" y="27" label="Elise" />

      {/* retry arc: the path a failed attempt takes back */}
      <path className="pv-line pv-dashed" d="M176 46 q-49 26 -98 0" />
      <text className="pv-txt pv-txt--dim" x="127" y="72" textAnchor="middle">
        retry
      </text>

      <circle className="pv-pkt" cx="0" cy="40" r="3.5" />

      {/* signing circuit filling */}
      <text className="pv-txt pv-txt--dim" x="16" y="97" textAnchor="start">
        circuit
      </text>
      <rect className="pv-track" x="58" y="90" width="200" height="5" rx="2.5" />
      <rect className="pv-fill" x="58" y="90" width="200" height="5" rx="2.5" />
      <circle className="pv-ok" cx="270" cy="92.5" r="4" />
    </Frame>
  )
}

/* ---------------------------------------------------------------------------
   NeoForm — fields drop into a form, which then triggers a workflow.
   ------------------------------------------------------------------------ */
function NeoForm() {
  return (
    <Frame id="neoform">
      <rect className="pv-panel" x="16" y="18" width="150" height="84" rx="6" />
      <text className="pv-txt pv-txt--dim" x="26" y="34">
        designer
      </text>

      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          className="pv-drop"
          x="28"
          y={44 + i * 18}
          width={126 - i * 22}
          height="11"
          rx="3"
          style={{ animationDelay: `${i * 0.45}s` }}
        />
      ))}

      <line className="pv-line" x1="166" y1="60" x2="206" y2="60" />
      <circle className="pv-pkt pv-pkt--short" cx="0" cy="60" r="3" />

      <Node x="206" y="34" w={64} h={24} label="flow" tone="flow" />
      <Node x="206" y="66" w={64} h={24} label="LLM" tone="model" />
    </Frame>
  )
}

/* ---------------------------------------------------------------------------
   Restaurant ordering — menu, basket filling, payment confirmed.
   ------------------------------------------------------------------------ */
function Ordering() {
  return (
    <Frame id="ordering">
      <rect className="pv-panel" x="122" y="10" width="76" height="100" rx="10" />
      <line className="pv-line" x1="148" y1="18" x2="172" y2="18" />

      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect
            className="pv-drop"
            x="132"
            y={30 + i * 14}
            width={i % 2 ? 42 : 56}
            height="8"
            rx="2"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
          <circle
            className="pv-tick"
            cx="188"
            cy={34 + i * 14}
            r="3"
            style={{ animationDelay: `${i * 0.5 + 0.25}s` }}
          />
        </g>
      ))}

      <rect className="pv-track" x="132" y="92" width="56" height="9" rx="4.5" />
      <rect className="pv-fill pv-fill--slow" x="132" y="92" width="56" height="9" rx="4.5" />
      <text className="pv-txt pv-txt--dim" x="160" y="99.5" textAnchor="middle">
        paid
      </text>

      <text className="pv-txt pv-txt--dim" x="16" y="60">
        3 venues
      </text>
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          className="pv-pulse"
          x="16"
          y={68 + i * 11}
          width="52"
          height="6"
          rx="3"
          style={{ animationDelay: `${i * 0.6}s` }}
        />
      ))}
    </Frame>
  )
}

/* ---------------------------------------------------------------------------
   Airline warehouse — rows through ETL into a star schema, then a dashboard.
   ------------------------------------------------------------------------ */
function Airline() {
  const spokes = [
    [0, -20],
    [19, -6],
    [12, 17],
    [-12, 17],
    [-19, -6],
  ]

  return (
    <Frame id="airline">
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          className="pv-pulse"
          x="12"
          y={30 + i * 15}
          width="34"
          height="7"
          rx="2"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
      <text className="pv-txt pv-txt--dim" x="12" y="24">
        130K rows
      </text>

      <line className="pv-line" x1="50" y1="60" x2="86" y2="60" />
      <circle className="pv-pkt pv-pkt--short" cx="0" cy="60" r="3" />
      <Node x="86" y="48" w={44} h={24} label="ETL" />

      {/* star schema: a fact table with five dimensions */}
      <g transform="translate(178 60)">
        {spokes.map(([dx, dy], i) => (
          <g key={i}>
            <line className="pv-line" x1="0" y1="0" x2={dx} y2={dy} />
            <circle
              className="pv-dim"
              cx={dx}
              cy={dy}
              r="4"
              style={{ animationDelay: `${i * 0.28}s` }}
            />
          </g>
        ))}
        <rect className="pv-node pv-fact" x="-11" y="-8" width="22" height="16" rx="3" />
      </g>
      <line className="pv-line" x1="130" y1="60" x2="159" y2="60" />

      {/* dashboard */}
      <g transform="translate(226 0)">
        {[26, 44, 16, 36, 52].map((h, i) => (
          <rect
            key={i}
            className="pv-bar"
            x={i * 14}
            y={86 - h}
            width="9"
            height={h}
            rx="2"
            style={{ animationDelay: `${i * 0.16}s`, transformOrigin: `0 86px` }}
          />
        ))}
        <line className="pv-line" x1="-4" y1="88" x2="72" y2="88" />
        <text className="pv-txt pv-txt--dim" x="0" y="102">
          Power BI
        </text>
      </g>
    </Frame>
  )
}

/* ---------------------------------------------------------------------------
   Jibly Taw — a driver moving along a route to a pin.
   ------------------------------------------------------------------------ */
function Jibly() {
  const route = 'M28 92 C 78 92, 74 34, 128 34 S 196 96, 250 96 L 284 96'

  // The driver moves via SMIL <animateMotion>, which CSS `animation: none`
  // cannot switch off — so honour reduced motion by not rendering it at all
  // and parking the marker on the route instead.
  const still = useMediaQuery('(prefers-reduced-motion: reduce)')

  return (
    <Frame id="jibly">
      {/* faint map grid */}
      <g className="pv-grid">
        {[0, 1, 2, 3].map((i) => (
          <line key={`h${i}`} x1="8" y1={24 + i * 24} x2="312" y2={24 + i * 24} />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`v${i}`} x1={28 + i * 52} y1="12" x2={28 + i * 52} y2="108" />
        ))}
      </g>

      <path className="pv-route" d={route} />
      <path className="pv-route pv-route--trace" d={route} />

      <circle className="pv-driver" r="4.5" cx={still ? 128 : 0} cy={still ? 34 : 0}>
        {!still && (
          <animateMotion dur="4.2s" repeatCount="indefinite" path={route} rotate="auto" />
        )}
      </circle>

      <circle className="pv-node pv-stop" cx="28" cy="92" r="5" />
      <g className="pv-pin">
        <circle cx="284" cy="96" r="5" />
        <circle className="pv-pin__halo" cx="284" cy="96" r="5" />
      </g>

      <text className="pv-txt pv-txt--dim" x="8" y="16">
        live tracking
      </text>
    </Frame>
  )
}

/* ---------------------------------------------------------------------------
   NeoLibrary — components in a shared grid lighting up one after another.
   ------------------------------------------------------------------------ */
function NeoLibrary() {
  const cells = Array.from({ length: 12 }, (_, i) => i)

  return (
    <Frame id="neolibrary">
      <text className="pv-txt pv-txt--dim" x="16" y="20">
        35 components
      </text>
      {cells.map((i) => {
        const col = i % 6
        const row = Math.floor(i / 6)
        return (
          <rect
            key={i}
            className="pv-cell"
            x={16 + col * 50}
            y={32 + row * 38}
            width="42"
            height="28"
            rx="4"
            style={{ animationDelay: `${(col * 0.14 + row * 0.3).toFixed(2)}s` }}
          />
        )
      })}
    </Frame>
  )
}

/* ---------------------------------------------------------------------------
   Migration tooling — XML/CSV definitions becoming spreadsheet rows.
   ------------------------------------------------------------------------ */
function Migration() {
  return (
    <Frame id="migration">
      <text className="pv-txt pv-txt--dim" x="14" y="22">
        XML · CSV
      </text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} className="pv-row" style={{ animationDelay: `${i * 0.5}s` }}>
          <rect className="pv-src" x="14" y={34 + i * 18} width="72" height="11" rx="2" />
          <circle className="pv-pkt pv-pkt--row" cx="96" cy={39.5 + i * 18} r="2.8" />
          <rect className="pv-dst" x="188" y={34 + i * 18} width="34" height="11" rx="2" />
          <rect className="pv-dst" x="226" y={34 + i * 18} width="34" height="11" rx="2" />
          <rect className="pv-dst" x="264" y={34 + i * 18} width="34" height="11" rx="2" />
        </g>
      ))}
      <line className="pv-line" x1="90" y1="60" x2="184" y2="60" />
      <text className="pv-txt pv-txt--dim" x="188" y="22">
        NeoForm build
      </text>
    </Frame>
  )
}

/* ---------------------------------------------------------------------------
   neo-pdf-viewer — pages rendering as the viewport scrolls.
   ------------------------------------------------------------------------ */
function PdfViewer() {
  return (
    <Frame id="pdf">
      <rect className="pv-panel" x="98" y="10" width="124" height="100" rx="6" />
      <g className="pv-pages">
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect
              className="pv-page"
              x="112"
              y={18 + i * 30}
              width="96"
              height="24"
              rx="2"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
            <text className="pv-txt pv-txt--dim" x="212" y={33 + i * 30} textAnchor="end">
              {i + 1}
            </text>
          </g>
        ))}
      </g>
      {/* scrollbar thumb */}
      <rect className="pv-track" x="228" y="14" width="4" height="92" rx="2" />
      <rect className="pv-thumb" x="228" y="14" width="4" height="30" rx="2" />
      <text className="pv-txt pv-txt--dim" x="16" y="60">
        PDF.js
      </text>
    </Frame>
  )
}

const PREVIEWS = {
  fast: Fast,
  neoform: NeoForm,
  ordering: Ordering,
  airline: Airline,
  jibly: Jibly,
  neolibrary: NeoLibrary,
  migration: Migration,
  pdf: PdfViewer,
}

/** Renders the preview named by a project's `preview` key, or nothing. */
export default function Preview({ kind }) {
  const Component = PREVIEWS[kind]
  return Component ? <Component /> : null
}
