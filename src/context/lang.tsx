import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { L, Lang } from '../data/types'

interface LangCtx {
  lang: Lang
  toggle: () => void
  t: <T>(v: L<T>) => T
}

const Ctx = createContext<LangCtx | null>(null)

function initial(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') return saved
  } catch { /* ignore */ }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initial)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    try { localStorage.setItem('lang', lang) } catch { /* ignore */ }
  }, [lang])

  const toggle = useCallback(() => setLang((l) => (l === 'pt' ? 'en' : 'pt')), [])
  const t = useCallback(<T,>(v: L<T>) => v[lang], [lang])
  const value = useMemo(() => ({ lang, toggle, t }), [lang, toggle, t])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useLang(): LangCtx {
  const c = useContext(Ctx)
  if (!c) throw new Error('useLang must be used inside <LangProvider>')
  return c
}
