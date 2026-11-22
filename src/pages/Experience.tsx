import { useState } from 'react'
import { useLang } from '../context/lang'
import { experiences, kindLabels, type ExpKind } from '../data/experiences'
import { ui } from '../data/ui'
import PageHeader from '../components/PageHeader'

const kinds = Array.from(new Set(experiences.map((e) => e.kind))) as ExpKind[]

export default function Experience() {
  const { t } = useLang()
  const [filter, setFilter] = useState<ExpKind | 'all'>('all')
  const list = experiences.filter((e) => filter === 'all' || e.kind === filter)

  return (
    <div className="container">
      <PageHeader title={t(ui.experience.title)} intro={t(ui.experience.intro)} />

      <div className="filters" role="group" aria-label={t(ui.experience.filters)}>
        <button type="button" className="tab" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>{t(ui.experience.filterAll)}</button>
        {kinds.map((k) => (
          <button type="button" key={k} className="tab" aria-pressed={filter === k} onClick={() => setFilter(k)}>{t(kindLabels[k])}</button>
        ))}
      </div>

      <ul className="entries">
        {list.map((e) => (
          <li key={e.id} className="entry">
            <time className="entry__date">{t(e.period)}</time>
            <article className="entry__main" aria-labelledby={`e-${e.id}`}>
              <h2 id={`e-${e.id}`} className="entry__title entry__title--sm">{e.org}</h2>
              <p className="entry__sub">{t(e.role)}</p>
              <p className="marks">
                <span className="kind">{t(kindLabels[e.kind])}</span>
                {e.ongoing && <mark>{t(ui.experience.ongoing)}</mark>}
              </p>
              <p>{t(e.description)}</p>
              {e.link && (
                <a className="ulink" href={e.link} target="_blank" rel="noopener noreferrer">
                  {t(ui.experience.event)}<span className="sr-only"> (abre em nova aba)</span>
                </a>
              )}
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
