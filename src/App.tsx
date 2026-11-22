import { HashRouter, Route, Routes } from 'react-router-dom'
import { LangProvider } from './context/lang'
import Layout from './components/Layout'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// HashRouter: funciona em Vercel, Render e GitHub Pages sem regras de rewrite.
export default function App() {
  return (
    <LangProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<About />} />
            <Route path="projetos" element={<Projects />} />
            <Route path="experiencias" element={<Experience />} />
            <Route path="contato" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </LangProvider>
  )
}
