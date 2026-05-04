import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const u = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`

const row1 = [
  { url: '/cancha1.jpg',                            label: 'Cancha de fútbol', fw: 396, fh: 253 },
  { url: '/cancha3.jpg',                            label: 'Cancha de pádel',  fw: 286, fh: 253 },
  { url: u('1676746424139-77f8bd8922a8', 720, 460), label: 'Fútbol nocturno',  fw: 396, fh: 253 },
  { url: u('1612872087720-bb876e2e67d1', 520, 460), label: 'Vóley playa',      fw: 286, fh: 253 },
  { url: '/cancha2.jpg',                            label: 'Instalaciones',    fw: 396, fh: 253 },
  { url: u('1646649853703-7645147474ba', 520, 460), label: 'Equipos de pádel', fw: 286, fh: 253 },
]

const row2 = [
  { url: u('1676746610993-fa0c050d1f6d', 700, 420), label: 'Campo de noche',   fw: 385, fh: 231 },
  { url: '/cancha3.jpg',                            label: 'Pádel cubierto',   fw: 319, fh: 231 },
  { url: u('1553778263-73a83bab9b0c',    700, 420), label: 'Fútbol en acción', fw: 385, fh: 231 },
  { url: u('1592656094267-764a45160876', 580, 420), label: 'Partido de vóley', fw: 319, fh: 231 },
  { url: '/cancha1.jpg',                            label: 'Césped sintético',  fw: 385, fh: 231 },
  { url: u('1517747614396-d21a78b850e8', 580, 420), label: 'Vista aérea',      fw: 319, fh: 231 },
]

function MarqueeRow({ items, dir }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-track overflow-hidden">
      <div className={`flex gap-3 w-max ${dir === 'ltr' ? 'marquee-ltr' : 'marquee-rtl'}`}>
        {doubled.map((img, i) => (
          <div key={i} className="relative flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer" style={{ width: img.fw, height: img.fh }}>
            <img src={img.url} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" loading="lazy" />
            <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60" style={{ background: 'linear-gradient(to top, rgba(9,9,11,0.7) 0%, transparent 55%)' }} />
            <span className="absolute bottom-3 left-4 text-white/60 text-[9px] font-bold uppercase tracking-widest">{img.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gal-header > *', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.gal-header', start: 'top 84%' } })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="instalaciones" ref={rootRef} className="py-24 md:py-32 overflow-hidden bg-zinc-100 dark:bg-[#09090B]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 mb-12">
        <div className="gal-header flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-brand-sky text-xs font-semibold tracking-[0.2em] uppercase">Instalaciones</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tighter leading-none text-zinc-900 dark:text-white">
              Hechas para<br /><span className="text-brand-red">jugar en serio.</span>
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-white/62 text-sm leading-relaxed max-w-[38ch] md:text-right">
            Canchas de primera calidad, iluminación profesional y un ambiente donde cada detalle importa.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <MarqueeRow items={row1} dir="ltr" />
        <MarqueeRow items={row2} dir="rtl" />
      </div>
    </section>
  )
}
