import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sports from './components/Sports'
import Stats from './components/Stats'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Sports />
      <Stats />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}
