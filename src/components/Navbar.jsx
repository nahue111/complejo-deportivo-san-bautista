import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#deportes',      label: 'Deportes' },
  { href: '#instalaciones', label: 'Instalaciones' },
  { href: '#contacto',      label: 'Contacto' },
]

// UPDATE: Replace with real WhatsApp number
const WA_LINK = 'https://wa.me/59898884897'

export default function Navbar() {
  const wrapRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    gsap.fromTo(
      wrapRef.current,
      { y: -90, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.9 }
    )

    const onScroll = () => setScrolled(window.scrollY > 55)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header ref={wrapRef} className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className={[
          'max-w-5xl mx-auto px-5 py-3 rounded-full flex items-center justify-between',
          'transition-all duration-500',
          scrolled
            ? 'bg-[#0D0303]/88 backdrop-blur-2xl border border-white/[0.07] shadow-[0_8px_48px_rgba(196,30,58,0.12)]'
            : 'bg-transparent border border-transparent',
        ].join(' ')}
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/logo-complejo.png"
            alt="San Bautista"
            className="w-9 h-9 rounded-full object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="text-white/82 font-medium text-[10px] tracking-widest uppercase">
              Complejo Deportivo
            </span>
            <span className="text-white font-black text-sm tracking-tight">
              San Bautista
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/78 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 active:scale-[0.97]"
          >
            Reservar
          </a>
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden text-white/70 hover:text-white p-1 transition-colors"
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={[
          'md:hidden max-w-5xl mx-auto mt-2 rounded-3xl',
          'bg-[#0D0303]/95 backdrop-blur-2xl border border-white/[0.07]',
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-80 opacity-100 px-5 pt-5 pb-5' : 'max-h-0 opacity-0 px-5 pt-0 pb-0',
        ].join(' ')}
      >
        <div className="flex flex-col gap-3">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/65 hover:text-white text-base font-medium py-1 border-b border-white/5 last:border-0 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red text-white text-sm font-bold px-5 py-3.5 rounded-full text-center mt-2 transition-colors hover:bg-brand-red-hover"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
