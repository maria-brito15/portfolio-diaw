import { useEffect, useRef, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useLang } from '../context/lang'
import { profile } from '../data/profile'
import { ui } from '../data/ui'
import { CloseIcon, MenuIcon } from './Icons'

const YEAR = new Date().getFullYear()

const links = [
  { to: '/', key: 'about' as const, end: true },
  { to: '/projetos', key: 'projects' as const },
  { to: '/experiencias', key: 'experience' as const },
  { to: '/contato', key: 'contact' as const },
]

const pageOf = (path: string) =>
  path.startsWith('/projetos') ? 'projetos' : path.startsWith('/experiencias') ? 'experiencias' : path.startsWith('/contato') ? 'contato' : 'sobre'

export default function Layout() {
  const { lang, t, toggle: toggleLang } = useLang()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const main = useRef<HTMLElement>(null)

  // Cada seção tem a sua cor; ao navegar, a folha muda de cor, o foco vai para o conteúdo.
  useEffect(() => {
    document.documentElement.dataset.page = pageOf(pathname)
    window.scrollTo(0, 0)
    main.current?.focus({ preventScroll: true })
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); main.current?.focus() }}>
        {t(ui.skip)}
      </a>

      <header className="header">
        <div className="container header__bar">
          <NavLink to="/" className="brand" aria-label={profile.name}>{profile.shortName}</NavLink>

          <nav id="primary-nav" className={`nav ${open ? 'nav--open' : ''}`} aria-label={t(ui.mainNav)}>
            <ul>
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.end} onClick={() => setOpen(false)} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
                    {t(ui.nav[l.key])}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__tools">
            <button type="button" className="textbtn" onClick={toggleLang} lang={lang === 'pt' ? 'en' : 'pt'} aria-label={t(ui.langSwitch)} title={t(ui.langSwitch)}>
              {lang === 'pt' ? 'English' : 'Português'}
            </button>
            <button type="button" className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="primary-nav" aria-label={open ? t(ui.menuClose) : t(ui.menuOpen)}>
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <main id="main" ref={main} tabIndex={-1} className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p>© {YEAR} {profile.name}. {t(ui.footer.built)}</p>
          <a href="#top" className="footer__top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            {t(ui.footer.top)}
          </a>
        </div>
      </footer>
    </>
  )
}
