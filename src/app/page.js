import Image from 'next/image'
import Header from "../app/components/Header"
import Hero from "../app/components/Hero"
import Cars from './components/Cars'
import About from './components/About'
import Why from './components/Why'
import Testimonial from './components/Testimonials'
import Cta from './components/Cta'
import Footer from './components/Footer'


export default function Home() {
  return (
    <main className="max-w-[1920px]  mx-auto">
        <Header/>
        <Hero/>
        <Cars/>
        <About/>
        <Why/>
        <Testimonial/>
        <Cta/>
        <Footer/>
        <div className='h-[auto]'></div>
    </main>
  )
}
