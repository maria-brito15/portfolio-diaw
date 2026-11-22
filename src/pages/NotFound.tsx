import { Link } from 'react-router-dom'
import { useLang } from '../context/lang'
import { ui } from '../data/ui'

export default function NotFound() {
  const { t } = useLang()
  return (
    <div className="container">
      <header className="page-head">
        <h1>{t(ui.notFound.title)}</h1>
        <p><Link className="ulink" to="/">{t(ui.notFound.back)}</Link></p>
      </header>
    </div>
  )
}
