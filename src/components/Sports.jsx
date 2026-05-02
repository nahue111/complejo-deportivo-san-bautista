import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const u = (id, w, h) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=82`

const sports = [
  {
    id: 'padel',
    num: '01',
    name: 'Pádel',
    tag: '2 canchas · vidrio panorámico',
    desc: 'Canchas vidriadas con piso de arena de alta calidad. Ideal para todos los niveles — alquilá raquetas y pelotas en el complejo.',
    features: ['Piso de arena reglamentario', 'Vidrio panorámico 360°', 'Alquiler de equipos'],
    img: '/cancha3.jpg',
    imgSide: 'left',
    accent: 'brand-sky',
    bg: '#0C0C0E',
  },
  {
    id: 'futbol',
    num: '02',
    name: 'Fútbol',
    tag: '4 canchas · césped sintético',
    badge: 'El más reservado',
    desc: 'Canchas de 5 y 7 jugadores con césped sintético de última generación, iluminadas para que no haya excusas de jugar de noche.',
    features: ['Fútbol 5 y Fútbol 7', 'Turnos fijo y libre', 'Iluminación LED'],
    img: '/cancha1.jpg',
    imgPosition: 'center 20%',
    imgSide: 'right',
    accent: 'brand-red',
    bg: '#09090B',
  },
  {
    id: 'voley',
    num: '03',
    name: 'Vóley',
    tag: '1 cancha · arena fina',
    desc: 'Cancha de vóley playa con arena fina de primer nivel. Torneos internos todos los fines de semana, abiertos para cualquier nivel.',
    features: ['Arena fina oficial', 'Torneos semanales', 'Apta para beach vóley'],
    img: '/voley.jpg',
    imgSide: 'left',
    accent: 'brand-gold',
    bg: '#0C0C0E',
  },
  {
    id: 'eventos',
    num: '04',
    name: 'Eventos',
    tag: 'Salón · capacidad completa',
    desc: 'Nuestro salón de eventos es el espacio ideal para celebraciones, reuniones corporativas y fiestas privadas. Equipado para que tu evento sea memorable.',
    features: ['Capacidad para grupos grandes', 'Cocina y parrilla equipada', 'Estacionamiento propio'],
    img: '/cancha2.jpg',
    imgSide: 'right',
    accent: 'brand-sky',
    bg: '#09090B',
  },
]

function SportRow({ sport, index }) {
  const rowRef = useRef(null)
  const isLeft = sport.imgSide === 'left'

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.sr-img',
        { scale: 1.06, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out',
          scrollTrigger: { trigger: rowRef.current, start: 'top 80%' },
        }
      )
      gsap.fromTo('.sr-text > *',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: rowRef.current, start: 'top 78%' },
        }
      )
    }, rowRef)
    return () => ctx.revert()
  }, [])

  const accentColor = {
    'brand-red': '#C41E3A',
    'brand-sky': '#71C4E4',
    'brand-gold': '#F5C842',
  }[sport.accent]

  const ImagePanel = (
    <div className="relative w-full md:w-[54%] min-h-[52vw] md:min-h-0 overflow-hidden flex-shrink-0">
      <img
        src={sport.img}
        alt={sport.name}
        className="sr-img absolute inset-0 w-full h-full object-cover"
        style={sport.imgPosition ? { objectPosition: sport.imgPosition } : undefined}
      />
      {/* Number watermark */}
      <span
        className="absolute bottom-5 right-7 font-black text-[5rem] md:text-[7rem] leading-none select-none pointer-events-none"
        style={{ color: `${accentColor}18` }}
      >
        {sport.num}
      </span>
    </div>
  )

  const ContentPanel = (
    <div
      className="sr-text w-full md:w-[46%] flex flex-col justify-center gap-6 px-8 sm:px-12 md:px-14 lg:px-20 py-14 md:py-24"
      style={{ background: sport.bg }}
    >
      {/* Number + tag */}
      <div className="flex items-center gap-3">
        <span className="font-black text-xs tabular-nums" style={{ color: accentColor }}>
          {sport.num}
        </span>
        <div className="h-px flex-1 max-w-[2rem]" style={{ backgroundColor: accentColor }} />
        <span className="text-white/35 text-[10px] font-semibold uppercase tracking-widest">
          {sport.tag}
        </span>
      </div>

      {/* Name */}
      <h2 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-none text-white">
        {sport.name}
      </h2>

      {sport.badge && (
        <span
          className="w-fit text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest"
          style={{ background: `${accentColor}18`, color: accentColor }}
        >
          {sport.badge}
        </span>
      )}

      {/* Description */}
      <p className="text-white/45 text-sm leading-relaxed max-w-[42ch]">
        {sport.desc}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {sport.features.map(f => (
          <li key={f} className="flex items-center gap-3 text-sm text-white/60">
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contacto"
        className="group w-fit flex items-center gap-2.5 text-white font-bold text-sm border border-white/12 hover:border-white/30 px-6 py-3 rounded-full transition-all duration-200"
      >
        {sport.id === 'eventos' ? 'Consultar disponibilidad' : `Reservar ${sport.name}`}
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
      </a>
    </div>
  )

  return (
    <div
      ref={rowRef}
      id={index === 0 ? 'deportes' : undefined}
      className={`flex flex-col ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[70vh] border-t border-white/[0.05]`}
    >
      {ImagePanel}
      {ContentPanel}
    </div>
  )
}

export default function Sports() {
  return (
    <section className="bg-[#09090B]">
      {/* Section header */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 pt-24 pb-14">
        <span className="text-brand-sky text-xs font-semibold tracking-[0.2em] uppercase">
          Disciplinas
        </span>
        <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
          Todo en un<br />solo lugar.
        </h2>
      </div>

      {/* Sport rows */}
      {sports.map((sport, i) => (
        <SportRow key={sport.id} sport={sport} index={i} />
      ))}
    </section>
  )
}
