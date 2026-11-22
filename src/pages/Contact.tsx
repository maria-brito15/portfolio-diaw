import { useEffect } from 'react'
import { useLang } from '../context/lang'
import { ui } from '../data/ui'
import SocialLinks from '../components/SocialLinks'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  const { t, lang } = useLang()
  useEffect(() => { document.title = `${t(ui.contact.title)} · Maria Eduarda Brito` }, [t, lang])
  return (
    <div className="container">
      <header className="page-head">
        <h1>{t(ui.contact.headline)}</h1>
        <p className="lead">{t(ui.contact.intro)}</p>
      </header>
      <div className="contact">
        <section aria-labelledby="ch-h">
          <h2 id="ch-h" className="sr-only">{t(ui.contact.channels)}</h2>
          <SocialLinks />
        </section>
        <section aria-labelledby="fm-h">
          <h2 id="fm-h" className="contact__form-title">{t(ui.contact.form)}</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  )
}
