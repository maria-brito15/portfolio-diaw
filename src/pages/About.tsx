import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useLang } from '../context/lang'
import { about, pillars, profile } from '../data/profile'
import { ui } from '../data/ui'

export default function About() {
  const { t, lang } = useLang()
  const other = lang === 'pt' ? 'en' : 'pt'
  useEffect(() => { document.title = `${t(ui.nav.about)} · Maria Eduarda Brito` }, [t, lang])

  return (
    <div className="container">
      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title" className="hero__name">
          <span>Maria Eduarda</span>
          <span>de Paula Brito</span>
        </h1>
        <p className="hero__role">{t(profile.role)}, {profile.university}</p>
        <p className="hero__statement">{t(about.statement)}</p>
        <p className="hero__links">
          <Link to="/projetos">{t(ui.about.ctaProjects)}</Link>
          <Link to="/contato">{t(ui.about.ctaContact)}</Link>
        </p>
      </section>

      <section className="block" aria-labelledby="bio-h">
        <h2 id="bio-h" className="block__title">{t(ui.about.bio)}</h2>
        <div className="block__body prose">
          {t(about.bio).map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          <details className="lang-alt">
            <summary lang={other}>{lang === 'pt' ? 'Read this in English' : 'Ler em português'}</summary>
            <div lang={other}>
              {about.bio[other].map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
          </details>
        </div>
      </section>

      <section className="block" aria-labelledby="areas-h">
        <h2 id="areas-h" className="block__title">{t(ui.about.pillars)}</h2>
        <ul className="block__body areas">
          {pillars.map((p) => (
            <li key={p.id} className="area">
              <h3>{t(p.title)}</h3>
              <p>{t(p.text)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="block" aria-labelledby="goal-h">
        <h2 id="goal-h" className="block__title">{t(ui.about.goal)}</h2>
        <p className="block__body goal"><mark>{t(about.goal)}</mark></p>
      </section>

      <section className="block" aria-labelledby="edu-h">
        <h2 id="edu-h" className="block__title">{t(ui.about.education)}</h2>
        <div className="block__body cols">
          <ul className="plain">
            {about.education.map((e) => (
              <li key={e.degree.pt}>
                <strong>{t(e.degree)}</strong>
                <span className="muted">{e.school}, {t(e.period)}</span>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="mini">{t(ui.about.languages)}</h3>
            <ul className="plain">
              {about.languages.map((l) => (
                <li key={l.name.en}><strong>{t(l.name)}</strong> <span className="muted">{t(l.level)}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="focus-h">
        <h2 id="focus-h" className="block__title">{t(ui.about.focus)}</h2>
        <div className="block__body cols">
          <ul className="dashes">{t(about.focus).map((i) => <li key={i}>{i}</li>)}</ul>
          <div>
            <h3 className="mini">{t(ui.about.interests)}</h3>
            <ul className="dashes">{t(about.interests).map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="skills-h">
        <h2 id="skills-h" className="block__title">{t(ui.about.skills)}</h2>
        <dl className="block__body skills">
          {about.skills.map((g) => (
            <div key={g.group.en}>
              <dt>{t(g.group)}</dt>
              <dd>{g.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  )
}
