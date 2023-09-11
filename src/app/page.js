import Image from 'next/image'
import Header from "../app/components/Header"
import Hero from "../app/components/Hero"
import Cars from './components/Cars'
import About from './components/About'


export default function Home() {
  return (
    <main className="max-w-[1920px]  mx-auto">
        <Header/>
        <Hero/>
        <Cars/>
        <About/>
        <div className='h-[4000px]'></div>
    </main>
  )
}
