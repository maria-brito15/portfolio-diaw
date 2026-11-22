import { useLang } from '../context/lang'
import { projects } from '../data/projects'
import { ui } from '../data/ui'
import PageHeader from '../components/PageHeader'

const sorted = [...projects].sort((a, b) => a.sort.localeCompare(b.sort)) // mais antigo → mais recente

export default function Projects() {
  const { t } = useLang()
  return (
    <div className="container">
      <PageHeader title={t(ui.projects.title)} intro={t(ui.projects.intro)} />
      <ol className="entries">
        {sorted.map((p) => (
          <li className="entry" key={p.slug}>
            <time className="entry__date">{t(p.period)}</time>
            <article className="entry__main" aria-labelledby={`p-${p.slug}`}>
              <h2 id={`p-${p.slug}`} className="entry__title">{p.name}</h2>
              <p className="entry__sub">{t(p.subtitle)}</p>
              {(p.badge || p.status) && (
                <p className="marks">
                  {p.badge && <mark>{t(p.badge)}</mark>}
                  {p.status && <mark>{t(p.status)}</mark>}
                </p>
              )}
              <p>{t(p.description)}</p>
              <ul className="dashes">{t(p.highlights).map((h) => <li key={h}>{h}</li>)}</ul>
              <p className="entry__stack"><strong>{t(ui.projects.stack)}</strong> {p.stack.join(', ')}.</p>
              {p.repo ? (
                <a className="ulink" href={p.repo} target="_blank" rel="noopener noreferrer">
                  {t(ui.projects.repo)}<span className="sr-only"> (abre em nova aba)</span>
                </a>
              ) : (
                <p className="muted">{t(ui.projects.noRepo)}</p>
              )}
            </article>
          </li>
        ))}
      </ol>
    </div>
  )
}
