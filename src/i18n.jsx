import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import ar from './locales/ar.js'
import de from './locales/de.js'
import en from './locales/en.js'
import fr from './locales/fr.js'
import * as core from './data/core.js'

export const LOCALES = { en, fr, ar, de }
export const DEFAULT_LOCALE = 'en'
const STORAGE_KEY = 'portfolio.locale'

/**
 * Picks a locale from the browser's language preferences.
 *
 * `navigator.languages` is ordered by preference, so the first entry we can
 * serve wins. Region subtags are stripped: "fr-CA" and "de-AT" should get
 * French and German rather than falling through to English. An explicit choice
 * in localStorage always beats detection — someone on a French laptop may still
 * want to read the English version, and that decision should stick.
 */
export function detectLocale() {
  // An explicit ?lang= wins over everything, so a link can be shared in a
  // chosen language ("?lang=ar" for an Arabic-speaking recruiter) and so the
  // language can be forced when testing.
  try {
    const asked = new URLSearchParams(window.location.search).get('lang')
    if (asked && LOCALES[asked]) return asked
  } catch {
    // No URL available (non-browser context): carry on.
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && LOCALES[saved]) return saved
  } catch {
    // Private mode or blocked storage: fall through to detection.
  }

  const preferences =
    typeof navigator === 'undefined'
      ? []
      : navigator.languages?.length
        ? navigator.languages
        : [navigator.language].filter(Boolean)

  for (const tag of preferences) {
    const base = String(tag).toLowerCase().split('-')[0]
    if (LOCALES[base]) return base
  }

  return DEFAULT_LOCALE
}

/** Reads `path` from the active locale, falling back to English per key. */
function pick(locale, path) {
  const walk = (root) =>
    path.reduce((node, key) => (node == null ? undefined : node[key]), root)
  const value = walk(LOCALES[locale])
  return value === undefined ? walk(LOCALES[DEFAULT_LOCALE]) : value
}

/**
 * Joins the language-neutral structure in data/core.js with the strings from
 * the active locale. Components then read one already-merged object and never
 * have to know a locale exists.
 */
function buildContent(locale) {
  const t = (...path) => pick(locale, path)
  const ui = { ...LOCALES[DEFAULT_LOCALE].ui, ...(LOCALES[locale].ui || {}) }
  const meta = LOCALES[locale].meta

  return {
    locale,
    dir: meta.dir,
    ui,

    profile: {
      ...core.identity,
      name: t('profile', 'name'),
      role: t('profile', 'role'),
      location: t('profile', 'location'),
      focuses: t('profile', 'focuses'),
      tagline: t('profile', 'tagline'),
      bio: t('profile', 'bio'),
      links: core.identity.links.map((l) => ({
        ...l,
        label: t('ui', 'linkLabels', l.id),
      })),
    },

    pipeline: core.pipeline.map((s) => ({ id: s.id, ...t('pipeline', s.id) })),

    metrics: core.metrics.map((m) => ({ ...m, label: t('metrics', m.id) })),

    now: core.now.map((n) => ({ id: n.id, ...t('now', n.id) })),

    experience: core.experience.map((job) => ({
      ...job,
      ...t('experience', job.id),
      // A null end date means "still there", worded in the active language.
      end: job.end ?? ui.present,
      isCurrent: job.end == null,
    })),

    projects: core.projects.map((p) => ({ ...p, ...t('projects', p.id) })),

    skillGroups: core.skillGroups.map((g) => ({ ...g, label: t('skillGroups', g.id) })),

    education: core.education.map((e) => ({ ...e, ...t('education', e.id) })),

    spokenLanguages: core.spokenLanguages.map((l) => ({ ...l, ...t('spokenLanguages', l.id) })),

    nav: core.nav.map((n) => ({
      id: n.id,
      label: t('ui', 'navLabels', n.id),
      title: t('ui', 'sectionTitles', n.id),
    })),

    previews: LOCALES[locale].previews || LOCALES[DEFAULT_LOCALE].previews,
  }
}

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(detectLocale)

  // The <html> element carries the language and direction for the whole
  // document: it drives font selection, hyphenation, the RTL mirroring of the
  // layout, and what a screen reader announces.
  useEffect(() => {
    const { dir } = LOCALES[locale].meta
    const root = document.documentElement
    root.lang = locale
    root.dir = dir

    // The tab title and the shared-link description follow the language too —
    // otherwise an Arabic page sits behind a Latin-script tab.
    const ui = LOCALES[locale].ui || {}
    if (ui.documentTitle) document.title = ui.documentTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta && ui.documentDescription) meta.content = ui.documentDescription
  }, [locale])

  const choose = useCallback((next) => {
    if (!LOCALES[next]) return
    setLocale(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Nothing to do: the choice still applies for this visit.
    }
  }, [])

  const value = useMemo(
    () => ({ ...buildContent(locale), setLocale: choose }),
    [locale, choose]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

/** All content for the active language, already merged with core.js. */
export function useContent() {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useContent must be used inside <LocaleProvider>')
  return value
}
