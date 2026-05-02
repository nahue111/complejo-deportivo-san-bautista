import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight } from 'lucide-react'

// Cancha de fútbol real del complejo
const FIELD_IMG = '/cancha1.jpg'

const SPORTS = ['Pádel', 'Fútbol', 'Vóley', 'Eventos']

export default function Hero() {
  const panelRef = useRef(null)
  const imgRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // image zoom-in
      gsap.fromTo(imgRef.current,
        { scale: 1.07, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8, ease: 'power2.out', delay: 0.1 }
      )

      // left-panel children stagger
      gsap.fromTo('.hp-el',
        { x: -28, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.75, stagger: 0.1, ease: 'power3.out', delay: 0.3 }
      )

      // floating badges
      gsap.fromTo('.hp-badge',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out', delay: 1.2 }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="flex flex-col md:flex-row min-h-[100dvh] bg-[#09090B]">

      {/* ── LEFT PANEL ── */}
      <div
        ref={panelRef}
        className="
          w-full md:w-[44%] flex-shrink-0
          flex flex-col justify-between
          px-8 sm:px-12 md:px-14
          pt-28 pb-10 md:pt-0 md:pb-0 md:py-0
          bg-[#09090B]
        "
      >
        {/* Logo row */}
        <div className="hp-el flex items-center gap-3 md:pt-20">
          <img
            src="/logo-complejo.png"
            alt="San Bautista"
            className="w-11 h-11 rounded-full object-contain flex-shrink-0"
          />
          <div className="leading-none">
            <p className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.18em]">
              Complejo Deportivo
            </p>
            <p className="text-white font-black text-sm tracking-tight mt-0.5">
              San Bautista
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col gap-6 py-10 md:py-0">
          {/* Red accent bar */}
          <div className="hp-el w-10 h-[3px] bg-brand-red rounded-full" />

          {/* Headline */}
          <h1 className="hp-el text-[2.8rem] sm:text-5xl md:text-[3.2rem] lg:text-[3.8rem] xl:text-[4.2rem] font-black tracking-tighter leading-[0.88] text-white">
            Tu cancha.<br />Tu turno.<br />
            <span className="text-brand-red">Tu juego.</span>
          </h1>

          {/* Sport pills */}
          <div className="hp-el flex flex-wrap gap-2">
            {SPORTS.map(s => (
              <span
                key={s}
                className="
                  border border-white/[0.12] text-white/50
                  text-xs font-semibold px-4 py-1.5 rounded-full
                  hover:border-brand-red/60 hover:text-white
                  transition-all duration-200 cursor-default
                "
              >
                {s}
              </span>
            ))}
          </div>

          {/* Subtext */}
          <p className="hp-el text-white/40 text-sm leading-relaxed max-w-[38ch]">
            7 canchas iluminadas, salón de eventos y más.
            Abiertos los 7 días de la semana.
          </p>

          {/* CTA */}
          <a
            href="#contacto"
            className="
              hp-el group w-fit flex items-center gap-3
              bg-brand-red hover:bg-brand-red-hover
              text-white font-bold text-sm
              px-8 py-4 rounded-full
              transition-all duration-200 active:scale-[0.97]
            "
          >
            Reservar ahora
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        {/* Stats strip */}
        <div className="hp-el flex items-center gap-0 divide-x divide-white/[0.08] border-t border-white/[0.07] pt-7 md:pb-16">
          {[
            { v: '7',  l: 'Canchas' },
            { v: '4',  l: 'Disciplinas' },
            { v: '7',  l: 'Días / sem.' },
          ].map(s => (
            <div key={s.l} className="flex flex-col gap-1 pr-8 pl-0 first:pl-0 [&:not(:first-child)]:pl-8">
              <span className="text-[2rem] font-black text-white tracking-tighter leading-none">
                {s.v}
              </span>
              <span className="text-[9px] font-bold text-white/28 uppercase tracking-[0.18em]">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL — image ── */}
      <div className="relative w-full h-[46dvh] md:h-auto md:flex-1 overflow-hidden">
        {/* Thin red separator on desktop */}
        <div className="hidden md:block absolute left-0 inset-y-0 w-[3px] bg-brand-red z-10" />

        <img
          ref={imgRef}
          src={FIELD_IMG}
          alt="Canchas Complejo San Bautista"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle vignette bottom only */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(9,9,11,0.55) 0%, transparent 35%)' }}
        />

        {/* "Abierto" badge */}
        <div className="hp-badge absolute top-6 right-6 md:top-10 md:right-10 bg-black/55 backdrop-blur-md border border-white/[0.1] rounded-2xl px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse block" />
            <span className="text-white text-xs font-bold">Abierto ahora</span>
          </div>
          <p className="text-white/40 text-[10px] mt-0.5 pl-4">Hasta las 23:00 hs</p>
        </div>

        {/* Sport count badge */}
        <div className="hp-badge absolute bottom-8 right-6 md:bottom-12 md:right-10 bg-brand-red rounded-2xl px-5 py-3">
          <p className="text-white/70 text-[10px] font-semibold uppercase tracking-widest">Deportes</p>
          <p className="text-white font-black text-xl tracking-tight leading-none mt-0.5">3 en 1</p>
        </div>
      </div>
    </section>
  )
}
