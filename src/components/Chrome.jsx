import { useEffect, useRef, useState } from 'react'
import { asset } from '../asset.js'
import { nav as navCore } from '../data/core.js'
import { LOCALES, useContent } from '../i18n.jsx'
import { useActiveSection, useReveal, useScrolled } from '../hooks.js'

// Section ids are structural, not linguistic — they stay the same in every
// language so anchors and deep links survive a language switch.
const NAV_IDS = navCore.map((n) => n.id)

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
  const { nav, ui } = useContent()
  const active = useActiveSection(NAV_IDS)

  return (
    <nav className="rail" aria-label={ui.sectionNav}>
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

function GlobeIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M1 6h10M6 1c1.6 1.4 1.6 8.6 0 10M6 1C4.4 2.4 4.4 9.6 6 11"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  )
}

/**
 * Language picker. Detection sets the initial language, but a visitor on a
 * French laptop may still want the English version, so the choice stays
 * available and is remembered across visits.
 */
function LanguagePicker() {
  const { locale, setLocale, ui } = useContent()
  const [open, setOpen] = useState(false)
  const boxRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (!boxRef.current?.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="lang" ref={boxRef}>
      <button
        type="button"
        className="btn lang__btn"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={ui.language}
        onClick={() => setOpen((v) => !v)}
      >
        <GlobeIcon />
        {LOCALES[locale].meta.short}
      </button>

      {open && (
        <ul className="lang__menu" role="listbox" aria-label={ui.language}>
          {Object.values(LOCALES).map(({ meta }) => (
            <li key={meta.code}>
              <button
                type="button"
                role="option"
                aria-selected={meta.code === locale}
                // Each option is written in its own language: someone looking
                // for Arabic scans for العربية, not for "Arabic".
                lang={meta.code}
                dir={meta.dir}
                className="lang__item"
                onClick={() => {
                  setLocale(meta.code)
                  setOpen(false)
                }}
              >
                <span className="lang__code">{meta.short}</span>
                {meta.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/**
 * Small screens hide both the left rail and the inline bar links, which would
 * otherwise leave a phone with no way to reach any section. This strip takes
 * over there: a horizontally scrollable row of section chips that keeps the
 * current one scrolled into view.
 */
function SectionStrip({ active }) {
  const { nav, ui } = useContent()
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    // Only worth doing while the strip is the visible navigation. An ancestor
    // set to display:none leaves this element's own computed display intact,
    // so test for a rendered box instead.
    if (!track.clientWidth) return

    const chip = track.querySelector('[aria-current="true"]')
    if (!chip) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // scrollIntoView on the chip would also scroll the page; move the track.
    const target = chip.offsetLeft - track.clientWidth / 2 + chip.offsetWidth / 2
    track.scrollTo({ left: target, behavior: reduced ? 'auto' : 'smooth' })
  }, [active, nav])

  return (
    <nav className="bar__strip" aria-label={ui.sections}>
      <div className="bar__track" ref={trackRef}>
        {nav.map((item) => (
          <a
            key={item.id}
            className="bar__chip"
            href={`#${item.id}`}
            aria-current={active === item.id ? 'true' : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export function Bar() {
  const { nav, ui, profile } = useContent()
  const active = useActiveSection(NAV_IDS)
  const stuck = useScrolled()

  return (
    <header className="bar" data-stuck={stuck}>
      <div className="shell bar__inner">
        <a className="bar__mark" href="#top">
          <b>{profile.name}</b>
          <i>/ {profile.role}</i>
        </a>

        <nav className="bar__links" aria-label={ui.sections}>
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

        <div className="bar__end">
          <LanguagePicker />
          {profile.resume ? (
            <a className="btn" href={asset(profile.resume)} download>
              {ui.cv}
            </a>
          ) : (
            <a className="btn" href={`mailto:${profile.email}`}>
              {ui.contact}
            </a>
          )}
        </div>
      </div>

      <SectionStrip active={active} />
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
