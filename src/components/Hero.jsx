import { asset } from '../asset.js'
import { useContent } from '../i18n.jsx'
import { useCountUp, useCycle } from '../hooks.js'
import Pipeline from './Pipeline.jsx'

/**
 * The focus line. Every value stays in the DOM and only the active one is
 * shown, so the line always occupies its space and is never briefly empty.
 */
function Focus() {
  const { profile, ui } = useContent()
  const i = useCycle(profile.focuses.length, 2600)
  // Reserve the widest option so the line never reflows mid-cycle. `ch` is a
  // rough measure in a proportional face, but it only needs to be generous.
  const width = Math.max(...profile.focuses.map((f) => f.length))

  return (
    <p className="hero__focus">
      <span>{ui.workingIn}</span>
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
        {/* Digits follow the document language, so Arabic gets Arabic numerals
            if the font provides them; the value itself is locale-formatted. */}
        {shown.toLocaleString()}
        <em>{suffix}</em>
      </p>
      <p className="metric__label">{label}</p>
    </div>
  )
}

export default function Hero() {
  const { profile, metrics, ui } = useContent()

  const parts = profile.name.trim().split(/\s+/)
  const surname = parts.length > 1 ? parts.pop() : null
  const given = parts.join(' ')

  return (
    <div className="hero" id="top">
      <div className="shell">
        {/* Flat grid on purpose: the portrait has to be a sibling of the name
            so the two can share a row on narrow screens. Arrangement lives in
            grid-template-areas, which differ per breakpoint. */}
        <div className="hero__grid">
          <p className="hero__status">
            <span className="pulse" aria-hidden="true" />
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
              {ui.seeWork}
            </a>
            {profile.links.map((l) => (
              <a
                key={l.id}
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

          {profile.portrait && (
            <figure className="hero__portrait">
              <img
                src={asset(profile.portrait)}
                alt={profile.name}
                width="760"
                height="1140"
                loading="eager"
              />
              <figcaption className="eyebrow">{profile.role}</figcaption>
            </figure>
          )}
        </div>

        <Pipeline />

        <div className="metrics">
          {metrics.map((m) => (
            <Metric key={m.id} {...m} />
          ))}
        </div>
      </div>
    </div>
  )
}
