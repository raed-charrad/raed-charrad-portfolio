import { Backdrop, Bar, Rail, Section } from './components/Chrome.jsx'
import Hero from './components/Hero.jsx'
import { About, Contact, Experience, Now, Stack, Work } from './components/Panels.jsx'
import { profile } from './data/profile.js'
import { usePointerGlow } from './hooks.js'

export default function App() {
  usePointerGlow()

  return (
    <>
      <a className="skip-link" href="#now">
        Skip to content
      </a>

      <Backdrop />
      <Rail />

      <div className="page">
        <Bar />
        <Hero />

        <main>
          <Section id="now" title="What I’m building now">
            <Now />
          </Section>

          <Section id="about" title="About">
            <About />
          </Section>

          <Section id="work" title="Selected work">
            <Work />
          </Section>

          <Section id="experience" title="Experience">
            <Experience />
          </Section>

          <Section id="stack" title="Stack">
            <Stack />
          </Section>

          <Contact />
        </main>

        <footer className="foot">
          <div className="shell foot__inner">
            <span>
              © {new Date().getFullYear()} {profile.name}
            </span>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </>
  )
}
