import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { useLang } from '../context/lang'
import { profile } from '../data/profile'
import { ui } from '../data/ui'

interface Values { name: string; email: string; message: string; website: string }
type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error'

const env = import.meta.env as Record<string, string | undefined>
const SERVICE = env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE = env.VITE_EMAILJS_TEMPLATE_ID
const KEY = env.VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_READY = Boolean(SERVICE && TEMPLATE && KEY)

export default function ContactForm() {
  const { t } = useLang()
  const [status, setStatus] = useState<Status>('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Values>({ mode: 'onTouched' })

  const onSubmit = async (v: Values) => {
    if (v.website) return // honeypot: bots preenchem, humanos não veem
    setStatus('sending')
    try {
      if (EMAILJS_READY) {
        await emailjs.send(SERVICE!, TEMPLATE!, { from_name: v.name, reply_to: v.email, message: v.message, to_name: profile.shortName }, { publicKey: KEY! })
        setStatus('sent')
      } else {
        // Fallback sem backend: abre o cliente de e-mail com a mensagem preenchida.
        const subject = encodeURIComponent(`Contato pelo portfólio — ${v.name}`)
        const body = encodeURIComponent(`${v.message}\n\n— ${v.name} (${v.email})`)
        window.location.assign(`mailto:${profile.emailProfessional}?subject=${subject}&body=${body}`)
        setStatus('mailto')
      }
      reset()
    } catch {
      setStatus('error')
    }
  }

  const err = (id: string, msg?: string) => msg && <p className="field__error" id={id} role="alert">{msg}</p>

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="field">
        <label htmlFor="name">{t(ui.contact.name)}</label>
        <input id="name" type="text" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined}
          {...register('name', { required: t(ui.contact.errName), minLength: { value: 2, message: t(ui.contact.errName) }, setValueAs: (s: string) => s.trim() })} />
        {err('name-err', errors.name?.message)}
      </div>

      <div className="field">
        <label htmlFor="email">{t(ui.contact.email)}</label>
        <input id="email" type="email" inputMode="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined}
          {...register('email', { required: t(ui.contact.errEmailReq), pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: t(ui.contact.errEmail) } })} />
        {err('email-err', errors.email?.message)}
      </div>

      <div className="field">
        <label htmlFor="message">{t(ui.contact.message)}</label>
        <textarea id="message" rows={6} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined}
          {...register('message', { required: t(ui.contact.errMsg), minLength: { value: 10, message: t(ui.contact.errMsg) }, maxLength: { value: 2000, message: t(ui.contact.errMsgMax) } })} />
        {err('message-err', errors.message?.message)}
      </div>

      <div className="hp" aria-hidden="true">
        <label>Website<input type="text" tabIndex={-1} autoComplete="off" {...register('website')} /></label>
      </div>

      <button className="submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? t(ui.contact.sending) : t(ui.contact.send)}
      </button>

      <div className="form__status" role="status" aria-live="polite">
        {status === 'sent' && <p className="ok">{t(ui.contact.okSent)}</p>}
        {status === 'mailto' && <p className="ok">{t(ui.contact.okMailto)}</p>}
        {status === 'error' && <p className="bad">{t(ui.contact.fail)}</p>}
      </div>
    </form>
  )
}
