import { Backdrop, Bar, Rail, Section } from './components/Chrome.jsx'
import Hero from './components/Hero.jsx'
import { About, Contact, Experience, Now, Stack, Work } from './components/Panels.jsx'
import { useContent } from './i18n.jsx'
import { usePointerGlow } from './hooks.js'

export default function App() {
  usePointerGlow()
  const { nav, ui, profile } = useContent()

  // Section headings come from the nav table so the label in the rail and the
  // title on the section can never drift apart in any language.
  const title = (id) => nav.find((n) => n.id === id)?.title ?? id

  return (
    <>
      <a className="skip-link" href="#now">
        {ui.skipToContent}
      </a>

      <Backdrop />
      <Rail />

      <div className="page">
        <Bar />
        <Hero />

        <main>
          <Section id="now" title={title('now')}>
            <Now />
          </Section>

          <Section id="about" title={title('about')}>
            <About />
          </Section>

          <Section id="work" title={title('work')}>
            <Work />
          </Section>

          <Section id="experience" title={title('experience')}>
            <Experience />
          </Section>

          <Section id="stack" title={title('stack')}>
            <Stack />
          </Section>

          <Contact />
        </main>

        <footer className="foot">
          <div className="shell foot__inner">
            <span>
              © {new Date().getFullYear()} {profile.name}
            </span>
            <a href="#top">{ui.backToTop} ↑</a>
          </div>
        </footer>
      </div>
    </>
  )
}
