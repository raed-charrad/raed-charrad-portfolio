import { metrics, profile } from '../data/profile.js'
import { useCountUp, useCycle } from '../hooks.js'
import Pipeline from './Pipeline.jsx'

/**
 * The focus line. Every value stays in the DOM and only the active one is
 * shown, so the line always occupies its space and is never briefly empty.
 */
function Focus() {
  const i = useCycle(profile.focuses.length, 2600)
  const width = Math.max(...profile.focuses.map((f) => f.length))

  return (
    <p className="hero__focus">
      <span>Working in</span>
      <span className="hero__slot" style={{ minWidth: `${width}ch` }}>
        {profile.focuses.map((f, n) => (
          <span key={f} data-on={n === i ? 'true' : undefined} aria-hidden={n !== i}>
            {f}
          </span>
        ))}
      </span>
    </p>
  )
}

function Metric({ value, suffix, label }) {
  const [ref, shown] = useCountUp(value)

  return (
    <div className="metric" ref={ref}>
      <p className="metric__value">
        {shown}
        <em>{suffix}</em>
      </p>
      <p className="metric__label">{label}</p>
    </div>
  )
}

export default function Hero() {
  const parts = profile.name.trim().split(/\s+/)
  const surname = parts.length > 1 ? parts.pop() : null
  const given = parts.join(' ')

  return (
    <div className="hero" id="top">
      <div className="shell">
        <p className="hero__status">
          <span className="pulse" aria-hidden="true" />
          {/* Open to opportunities ·  */}
          {profile.location}
        </p>

        <h1 className="hero__name">
          <span>{given}</span>
          {surname && <span className="is-flow">{surname}</span>}
        </h1>

        <Focus />

        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a className="btn btn--solid" href="#work">
            See the work
          </a>
          {profile.links.map((l) => (
            <a
              key={l.label}
              className="btn"
              href={l.href}
              {...(l.href.startsWith('http')
                ? { target: '_blank', rel: 'noreferrer noopener' }
                : {})}
            >
              {l.label}
            </a>
          ))}
        </div>

        <Pipeline />

        <div className="metrics">
          {metrics.map((m) => (
            <Metric key={m.label} {...m} />
          ))}
        </div>
      </div>
    </div>
  )
}
