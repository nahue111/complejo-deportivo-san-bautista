import { Instagram, MessageCircle } from 'lucide-react'

const SOCIAL = {
  whatsapp:  'https://wa.me/59898884897',
  instagram: 'https://instagram.com/complejosanbautista',
}

const navLinks = [
  { href: '#deportes',      label: 'Deportes' },
  { href: '#instalaciones', label: 'Instalaciones' },
  { href: '#contacto',      label: 'Contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-900/[0.06] dark:border-white/[0.06] bg-zinc-100 dark:bg-brand-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16 items-start mb-14">

          <div className="flex flex-col gap-5 max-w-xs">
            <div className="flex items-center gap-3">
              <img src="/logo-complejo.png" alt="San Bautista" className="w-10 h-10 rounded-full object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-zinc-500 dark:text-white/65 text-[10px] font-semibold uppercase tracking-widest">Complejo Deportivo</span>
                <span className="text-zinc-900 dark:text-white font-black text-base tracking-tight">San Bautista</span>
              </div>
            </div>
            <p className="text-zinc-600 dark:text-white/82 text-sm leading-relaxed">
              Fútbol, pádel y vóley en un mismo lugar. Canchas iluminadas y reservas sin complicaciones.
            </p>
            <div className="flex items-center gap-3">
              <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-zinc-900/10 dark:border-white/10 hover:border-zinc-900/25 dark:hover:border-white/25 flex items-center justify-center transition-colors duration-200" aria-label="WhatsApp">
                <MessageCircle size={15} className="text-zinc-600 dark:text-white/72" />
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-zinc-900/10 dark:border-white/10 hover:border-zinc-900/25 dark:hover:border-white/25 flex items-center justify-center transition-colors duration-200" aria-label="Instagram">
                <Instagram size={15} className="text-zinc-600 dark:text-white/72" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-zinc-500 dark:text-white/78 text-[10px] font-semibold uppercase tracking-widest mb-3">Navegación</p>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-zinc-600 dark:text-white/72 hover:text-zinc-900 dark:hover:text-white text-sm py-1.5 transition-colors duration-200">{l.label}</a>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-zinc-500 dark:text-white/78 text-[10px] font-semibold uppercase tracking-widest mb-3">Deportes</p>
            {['Pádel', 'Fútbol', 'Fútbol 11', 'Vóley', 'Eventos'].map(d => (
              <a key={d} href="#deportes" className="text-zinc-600 dark:text-white/72 hover:text-zinc-900 dark:hover:text-white text-sm py-1.5 transition-colors duration-200">{d}</a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-8 border-t border-zinc-900/[0.06] dark:border-white/[0.06]">
          <p className="text-zinc-500 dark:text-white/72 text-xs">&copy; {year} Complejo Deportivo San Bautista. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-zinc-500 dark:text-white/72 text-xs">San Bautista, Buenos Aires</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
