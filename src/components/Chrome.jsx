import { nav, profile } from '../data/profile.js'
import { useActiveSection, useReveal, useScrolled } from '../hooks.js'

const NAV_IDS = nav.map((n) => n.id)

/** Fixed dot-grid canvas plus the glow that tracks the pointer. Purely visual. */
export function Backdrop() {
  return (
    <div className="canvas" aria-hidden="true">
      <div className="canvas__grid" />
      <div className="canvas__glow" />
    </div>
  )
}

/** Chips shared by experience, work and stack. */
export function Chips({ items, accent }) {
  if (!items?.length) return null
  return (
    <ul className={`chip-row${accent === 'model' ? ' chip-row--model' : ''}`}>
      {items.map((t) => (
        <li key={t} className="chip">
          {t}
        </li>
      ))}
    </ul>
  )
}

export function ArrowIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M1 9L9 1M9 1H3.5M9 1V6.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** The left spine. Each section is a node; the current one lights up. */
export function Rail() {
  const active = useActiveSection(NAV_IDS)

  return (
    <nav className="rail" aria-label="Section navigation">
      <span className="rail__thread" aria-hidden="true" />
      {nav.map((item) => (
        <a
          key={item.id}
          className="rail__link"
          href={`#${item.id}`}
          aria-current={active === item.id ? 'true' : undefined}
        >
          <span className="rail__dot" aria-hidden="true" />
          <span className="rail__tip">{item.label}</span>
          <span className="sr-only">{item.label}</span>
        </a>
      ))}
    </nav>
  )
}

export function Bar() {
  const active = useActiveSection(NAV_IDS)
  const stuck = useScrolled()

  return (
    <header className="bar" data-stuck={stuck}>
      <div className="shell bar__inner">
        <a className="bar__mark" href="#top">
          <b>{profile.name}</b>
          <i>/ {profile.role}</i>
        </a>

        <nav className="bar__links" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.id}
              className="bar__link"
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {profile.resume ? (
          <a className="btn" href={profile.resume} download>
            CV
          </a>
        ) : (
          <a className="btn" href={`mailto:${profile.email}`}>
            Contact
          </a>
        )}
      </div>
    </header>
  )
}

/** Section wrapper: heading, trailing rule, and a staggered reveal of children. */
export function Section({ id, title, children }) {
  const ref = useReveal()

  return (
    <section className="section" id={id}>
      <div className="shell">
        <div className="section__head">
          <h2 className="section__title">{title}</h2>
          <span className="section__rule" aria-hidden="true" />
        </div>
        <div ref={ref} className="reveal">
          {children}
        </div>
      </div>
    </section>
  )
}
