import Image from 'next/image'
import Header from "../app/components/Header"
import Hero from "../app/components/Hero"
import Cars from './components/Cars'
import About from './components/About'
import Why from './components/Why'
import Testimonial from './components/Testimonials'

export default function Home() {
  return (
    <main className="max-w-[1920px]  mx-auto">
        <Header/>
        <Hero/>
        <Cars/>
        <About/>
        <Why/>
        <Testimonial/>
        
        <div className='h-[4000px]'></div>
    </main>
  )
}
