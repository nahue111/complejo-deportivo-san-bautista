import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  MessageCircle,
  Instagram,
  MapPin,
  Clock,
  Phone,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// UPDATE: Replace with real contact info
const CONTACT = {
  whatsapp: 'https://wa.me/59898884897',
  whatsappDisplay: '098 884 897',
  instagram: 'https://instagram.com/complejosanbautista',
  instagramDisplay: '@complejosanbautista',
  address: 'Av. San Martín 1234, San Bautista, Buenos Aires',
  phone: '098 884 897',
}

const hours = [
  { day: 'Lunes — Viernes', time: '08:00 — 23:00' },
  { day: 'Sábados',         time: '08:00 — 22:00' },
  { day: 'Domingos',        time: '09:00 — 21:00' },
]

const bookingSteps = [
  { n: '01', text: 'Escribinos por WhatsApp o llamá al complejo.' },
  { n: '02', text: 'Elegí el deporte, la cancha y el horario.' },
  { n: '03', text: 'Confirmá tu turno con una seña o pago completo.' },
  { n: '04', text: 'Llegá y jugá — sin más trámites.' },
]

export default function Contact() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ct-left > *',
        { y: 36, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.ct-left', start: 'top 82%' },
        }
      )
      gsap.fromTo('.ct-right > *',
        { y: 36, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.ct-right', start: 'top 82%' },
        }
      )
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contacto" ref={rootRef} className="py-24 md:py-36 bg-brand-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Section tag */}
        <div className="mb-14">
          <span className="text-brand-sky text-xs font-semibold tracking-[0.2em] uppercase">
            Contacto y Reservas
          </span>
          <h2 className="mt-3 text-4xl md:text-6xl font-black tracking-tighter leading-none text-white">
            ¿Listo para jugar?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16">

          {/* Left — CTA + contact info */}
          <div className="ct-left flex flex-col gap-8">

            {/* WhatsApp CTA */}
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-brand-surface hover:bg-[#120404] border border-white/[0.07] hover:border-brand-red/30 rounded-[1.75rem] p-6 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={26} className="text-[#25D366]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-base tracking-tight">Escribinos por WhatsApp</p>
                <p className="text-white/65 text-sm mt-0.5">{CONTACT.whatsappDisplay}</p>
              </div>
              <div className="flex-shrink-0 w-9 h-9 rounded-full border border-white/10 group-hover:border-brand-red/40 flex items-center justify-center transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/72 group-hover:text-brand-red transition-colors"/>
                </svg>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-brand-surface hover:bg-[#120404] border border-white/[0.07] hover:border-white/15 rounded-[1.75rem] p-6 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#E1306C]/15 flex items-center justify-center flex-shrink-0">
                <Instagram size={24} className="text-[#E1306C]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-base tracking-tight">Seguinos en Instagram</p>
                <p className="text-white/65 text-sm mt-0.5">{CONTACT.instagramDisplay}</p>
              </div>
            </a>

            {/* Address + Phone */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 py-4 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-brand-sky" />
                </div>
                <div>
                  <p className="text-white/82 text-xs uppercase tracking-widest font-semibold mb-0.5">Dirección</p>
                  <p className="text-white/80 text-sm">{CONTACT.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={16} className="text-brand-sky" />
                </div>
                <div>
                  <p className="text-white/82 text-xs uppercase tracking-widest font-semibold mb-0.5">Teléfono</p>
                  <p className="text-white/80 text-sm">{CONTACT.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Hours + Booking steps */}
          <div className="ct-right flex flex-col gap-8">

            {/* Hours */}
            <div className="bg-brand-surface border border-white/[0.07] rounded-[1.75rem] p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                  <Clock size={15} className="text-brand-gold" />
                </div>
                <h3 className="text-white font-bold text-base tracking-tight">Horarios</h3>
              </div>
              <div className="flex flex-col divide-y divide-white/[0.06]">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center py-3.5">
                    <span className="text-white/78 text-sm">{h.day}</span>
                    <span className="text-white font-semibold text-sm tabular-nums">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How to book */}
            <div>
              <p className="text-white/82 text-xs uppercase tracking-widest font-semibold mb-5">
                Cómo reservar
              </p>
              <div className="flex flex-col gap-4">
                {bookingSteps.map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-brand-red font-black text-xs tabular-nums mt-0.5 flex-shrink-0 w-6">
                      {s.n}
                    </span>
                    <p className="text-white/82 text-sm leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 active:scale-[0.97] text-center"
            >
              <MessageCircle size={16} />
              Reservar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
