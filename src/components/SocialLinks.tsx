import { useLang } from '../context/lang'
import { profile } from '../data/profile'
import { ui } from '../data/ui'
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from './Icons'

export default function SocialLinks() {
  const { t } = useLang()
  const items = [
    { label: t(ui.contact.emailPersonal), value: profile.emailPersonal, href: `mailto:${profile.emailPersonal}`, icon: <MailIcon />, external: false },
    { label: t(ui.contact.emailPro), value: profile.emailProfessional, href: `mailto:${profile.emailProfessional}`, icon: <MailIcon />, external: false },
    { label: 'LinkedIn', value: 'maria-eduarda-p-brito', href: profile.linkedin, icon: <LinkedinIcon />, external: true },
    { label: 'GitHub', value: 'maria-brito15', href: profile.github, icon: <GithubIcon />, external: true },
    ...(profile.whatsapp
      ? [{ label: 'WhatsApp', value: 'wa.me', href: `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`, icon: <WhatsappIcon />, external: true }]
      : []),
  ]
  return (
    <ul className="channels">
      {items.map((i) => (
        <li key={i.label}>
          <a className="channel" href={i.href} {...(i.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            <span className="channel__icon">{i.icon}</span>
            <span className="channel__label">{i.label}</span>
            <span className="channel__value">{i.value}</span>
            {i.external && <span className="sr-only"> (abre em nova aba)</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}
