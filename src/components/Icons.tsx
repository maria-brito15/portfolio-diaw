import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>
const base = (p: P): P => ({
  width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: false, ...p,
})

export const MailIcon = (p: P) => (<svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></svg>)
export const GithubIcon = (p: P) => (<svg {...base(p)}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.500 2.800 5.400 3.100 5.400 3.100a4.200 4.200 0 0 0-.1 3.200A4.600 4.600 0 0 0 4 9.500c0 4.600 2.700 5.700 5.500 6-.6.600-.6 1.200-.5 2V21" /></svg>)
export const LinkedinIcon = (p: P) => (<svg {...base(p)}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>)
export const WhatsappIcon = (p: P) => (<svg {...base(p)}><path d="M3 21l1.7-5A8.500 8.500 0 1 1 8 19.300L3 21Z" /><path d="M9 9.500c0 3 2.500 5.500 5.500 5.500l1-1.300-1.800-1-.8.600a4 4 0 0 1-1.700-1.700l.6-.8-1-1.800L9 9.500Z" /></svg>)
export const SunIcon = (p: P) => (<svg {...base(p)}><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.900 4.900l1.400 1.400m11.400 11.400 1.400 1.400M2 12h2m16 0h2M4.900 19.100l1.400-1.400M17.700 6.300l1.400-1.400" /></svg>)
export const MoonIcon = (p: P) => (<svg {...base(p)}><path d="M20 14.500A8 8 0 0 1 9.500 4 8 8 0 1 0 20 14.500Z" /></svg>)
export const MenuIcon = (p: P) => (<svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>)
export const CloseIcon = (p: P) => (<svg {...base(p)}><path d="m6 6 12 12M18 6 6 18" /></svg>)
export const ExternalIcon = (p: P) => (<svg {...base({ width: 16, height: 16, ...p })}><path d="M14 4h6v6m0-6L10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>)
export const ArrowIcon = (p: P) => (<svg {...base({ width: 18, height: 18, ...p })}><path d="M5 12h14m-6-6 6 6-6 6" /></svg>)
export const ArrowUpIcon = (p: P) => (<svg {...base({ width: 18, height: 18, ...p })}><path d="M12 19V5m-6 6 6-6 6 6" /></svg>)
