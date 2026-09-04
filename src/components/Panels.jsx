import {
  education,
  experience,
  languages,
  now,
  profile,
  projects,
  skillGroups,
} from '../data/profile.js'
import { useSheen } from '../hooks.js'
import { ArrowIcon, Chips } from './Chrome.jsx'

/* ------------------------------------------------------------------ Now --- */
export function Now() {
  return (
    <div className="now">
      {now.map((item) => (
        <article className="now__card" key={item.title}>
          <p className="now__state">
            <span className="pulse" aria-hidden="true" />
            {item.state}
          </p>
          <h3 className="now__title">{item.title}</h3>
          <p className="now__blurb">{item.blurb}</p>
        </article>
      ))}
    </div>
  )
}

/* ---------------------------------------------------------------- About --- */
export function About() {
  return (
    <div className="about">
      <div className="about__body">
        {profile.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="about__side">
        <div className="about__block">
          <span className="eyebrow">Education</span>
          {education.map((e) => (
            <div className="about__row" key={e.school}>
              <span className="about__key">
                {e.school}
                {e.detail && <span className="about__sub">{e.detail}</span>}
              </span>
              <span className="about__val">{e.period}</span>
            </div>
          ))}
        </div>

        <div className="about__block">
          <span className="eyebrow">Languages</span>
          {languages.map((l) => (
            <div className="about__row" key={l.name}>
              <span className="about__key">{l.name}</span>
              <span className="about__val">{l.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------- Work --- */
function Panel({ project, index, wide }) {
  const sheen = useSheen()

  // A project with several live deployments lists them individually. The panel
  // itself must then stay an <article>, since anchors cannot nest.
  const hasLinks = project.links?.length > 0
  const Tag = project.href && !hasLinks ? 'a' : 'article'
  const linkProps =
    project.href && !hasLinks
      ? { href: project.href, target: '_blank', rel: 'noreferrer noopener' }
      : {}

  return (
    <Tag
      className={`panel${wide ? ' panel--wide' : ''}`}
      {...linkProps}
      {...sheen}
    >
      <div className="panel__top">
        <span className="panel__no">{String(index + 1).padStart(2, '0')}</span>
        <span className="panel__no">{project.year}</span>
      </div>

      <h3 className="panel__title">{project.title}</h3>
      <p className="panel__kind">{project.kind}</p>
      <p className="panel__desc">{project.description}</p>

      {project.highlights?.length > 0 && (
        <ul className="panel__points">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}

      <div className="panel__foot">
        <Chips items={project.tech} />

        {hasLinks && (
          <ul className="panel__links">
            {project.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noreferrer noopener">
                  {l.label} <ArrowIcon />
                </a>
              </li>
            ))}
          </ul>
        )}

        {project.href && !hasLinks && (
          <span className="panel__go">
            View project <ArrowIcon />
          </span>
        )}
      </div>
    </Tag>
  )
}

export function Work() {
  // Half-width panels only pair up if they are adjacent. Authoring a half-width
  // project between two full-width ones used to leave it alone beside a column
  // of dead space, so layout is derived here rather than left to array order:
  // full-width panels first, then half-width ones. The sort is stable, so the
  // order written in profile.js still holds within each tier.
  const ordered = [...projects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  )

  // An odd number of half-width panels would still strand the last one, so it
  // spans the full row instead of sitting beside a gap.
  const strays = ordered.filter((p) => !p.featured).length % 2 === 1

  return (
    <div className="work">
      {ordered.map((project, i) => (
        <Panel
          key={project.title}
          project={project}
          index={i}
          wide={project.featured || (strays && i === ordered.length - 1)}
        />
      ))}
    </div>
  )
}

/* ----------------------------------------------------------- Experience --- */
export function Experience() {
  return (
    <div className="xp">
      {experience.map((job) => (
        <article className="xp__item" key={`${job.company}-${job.start}`}>
          <div className="xp__when">
            <span>
              {job.start}
              <br />
              <i>— {job.end}</i>
            </span>
            {job.end === 'Present' && (
              <span className="xp__now">
                <span className="pulse" aria-hidden="true" />
                Current
              </span>
            )}
          </div>

          <div>
            <h3 className="xp__role">{job.role}</h3>
            <p className="xp__org">
              <b>{job.company}</b>
              {job.team && ` · ${job.team}`}
            </p>
            {job.contract && <p className="xp__contract">{job.contract}</p>}
            {job.summary && <p className="xp__summary">{job.summary}</p>}

            {job.highlights?.length > 0 && (
              <ul className="xp__points">
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}

            <Chips items={job.tech} />
          </div>
        </article>
      ))}
    </div>
  )
}

/* ---------------------------------------------------------------- Stack --- */
export function Stack() {
  return (
    <div className="stack">
      {skillGroups.map((group) => (
        <div
          className={`stack__group${group.accent === 'model' ? ' stack__group--model' : ''}`}
          key={group.label}
        >
          <p className="eyebrow">{group.label}</p>
          <Chips items={group.items} accent={group.accent} />
        </div>
      ))}
    </div>
  )
}

/* -------------------------------------------------------------- Contact --- */
export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="shell">
        <span className="eyebrow">Contact</span>

        <h2 className="contact__lead">
          Let&rsquo;s build something <em>worth shipping.</em>
        </h2>

        <p className="contact__note">
          Open to engineering roles and collaborations across full stack, data
          engineering and applied AI. Email is the fastest way to reach me.
        </p>

        <a className="contact__mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <div className="contact__grid">
          <div className="contact__cell">
            <span className="eyebrow">Phone</span>
            <a className="link" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              {profile.phone}
            </a>
          </div>

          <div className="contact__cell">
            <span className="eyebrow">Location</span>
            <span className="contact__value">{profile.location}</span>
          </div>

          {profile.links
            .filter((l) => l.label !== 'Email')
            .map((l) => (
              <div className="contact__cell" key={l.label}>
                <span className="eyebrow">{l.label}</span>
                <a
                  className="link"
                  href={l.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {l.href.replace(/^https?:\/\/(www\.)?/, '')}
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
