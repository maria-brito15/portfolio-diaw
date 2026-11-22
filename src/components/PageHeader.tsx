import { useEffect } from 'react'

export default function PageHeader({ title, intro }: { title: string; intro: string }) {
  useEffect(() => {
    document.title = `${title} · Maria Eduarda Brito`
  }, [title])
  return (
    <header className="page-head">
      <h1>{title}</h1>
      <p className="lead">{intro}</p>
    </header>
  )
}
