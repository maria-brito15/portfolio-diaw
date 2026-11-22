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
    <>
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

        <section className="about" aria-labelledby="bio-h">
          <div>
            <h2 id="bio-h" className="about__label">{t(ui.about.bio)}</h2>
            <div className="prose">
              {t(about.bio).map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              <details className="lang-alt">
                <summary lang={other}>{lang === 'pt' ? 'Read this in English' : 'Ler em português'}</summary>
                <div lang={other}>
                  {about.bio[other].map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
                </div>
              </details>
            </div>
          </div>

          <div className="about__aside">
            <div>
              <h3 className="mini">{t(ui.about.education)}</h3>
              <ul className="plain">
                {about.education.map((e) => (
                  <li key={e.degree.pt}>
                    <strong>{t(e.degree)}</strong>
                    <span className="muted">{e.school}, {t(e.period)}</span>
                  </li>
                ))}
              </ul>
            </div>
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
      </div>

      <section className="band" aria-labelledby="focus-h">
        <div className="container band__inner">
          <div>
            <h2 id="focus-h" className="band__title">{t(ui.about.focus)}</h2>
            <ol className="band__list">
              {t(about.focus).map((i, n) => (
                <li key={i}>
                  <span className="band__num" aria-hidden="true">{String(n + 1).padStart(2, '0')}</span>
                  <span>{i}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="band__title">{t(ui.about.goal)}</h2>
            <p className="band__goal"><mark>{t(about.goal)}</mark></p>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="skills-section" aria-labelledby="skills-h">
          <h2 id="skills-h" className="section-title">{t(ui.about.skills)}</h2>
          <dl className="skills-grid">
            {about.skills.map((g) => (
              <div key={g.group.en}>
                <dt>{t(g.group)}</dt>
                <dd>{g.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </>
  )
}
