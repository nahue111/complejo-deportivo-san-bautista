import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Lightbulb, CalendarCheck, ShieldCheck, Clock4 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const counters = [
  { target: 4,   suffix: '',   label: 'Canchas' },
  { target: 150, suffix: '+',  label: 'Jugadores activos' },
  { target: 3,   suffix: '',   label: 'Años de trayectoria' },
  { target: 15,  suffix: 'hs', label: 'De atención diaria' },
]

const features = [
  { Icon: Lightbulb,     title: 'Iluminación LED',        sub: 'Todas las canchas iluminadas hasta la noche.' },
  { Icon: CalendarCheck, title: 'Turno Fijo y Libre',      sub: 'Reserva semanal recurrente o turno puntual.' },
  { Icon: ShieldCheck,   title: 'Vestuarios Completos',    sub: 'Duchas y casilleros disponibles.' },
  { Icon: Clock4,        title: 'Abierto 7 Días',          sub: 'De lunes a domingo, mañana hasta la noche.' },
]

export default function Stats() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Number counters
      counters.forEach((c, i) => {
        const el = rootRef.current?.querySelector(`[data-counter="${i}"]`)
        if (!el) return
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            const obj = { val: 0 }
            gsap.to(obj, {
              val: c.target,
              duration: 1.8,
              ease: 'power2.out',
              onUpdate: () => { el.textContent = Math.round(obj.val) + c.suffix },
            })
          },
        })
      })

      // Feature cards
      gsap.fromTo('.feat-item',
        { y: 28, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.feat-grid', start: 'top 82%' },
        }
      )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-[#09090B]">

      {/* Red counter strip */}
      <div className="bg-brand-red px-8 md:px-14 py-14 md:py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0 md:divide-x divide-white/20">
          {counters.map((c, i) => (
            <div key={i} className="flex flex-col gap-1 md:px-12 first:pl-0 last:pr-0">
              <span
                data-counter={i}
                className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none"
              >
                0{c.suffix}
              </span>
              <span className="text-white/55 text-xs font-semibold uppercase tracking-widest mt-1">
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature cards */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-16 md:py-20">
        <div className="feat-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {features.map(({ Icon, title, sub }, i) => (
            <div
              key={i}
              className="feat-item flex flex-col gap-5 p-7 rounded-2xl border border-white/[0.07] hover:border-white/[0.13] hover:bg-white/[0.025] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center">
                <Icon size={17} className="text-brand-red" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">{title}</p>
                <p className="text-white/38 text-xs mt-1 leading-relaxed">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
