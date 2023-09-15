"use client"
import React from 'react'
import Image from 'next/image'

import {MdOutlineMapsHomeWork,MdOutlineBuildCircle,MdOutlineDirectionsCar, MdOutlineStar} from 'react-icons/md'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from './varients'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section flex items-center' id="about" ref={ref}>
        <div className="container mx-auto">
          <div className='flex flex-col xl:flex-row xl:justify-between'>
            <div className='flex-1 mb-8 xl:mb-0'>
              <Image className='rounded-[20px]' src={'/images/about/car01.png'}
              width={600} 
              height={448}
              alt=''
              />
            </div>

            <div className='flex-1 flex items-center xl:justify-center'>
              <div className='xl:max-w-[520px]'>
                <p className='bg-accent/10 w-[180px] text-accent/90 font-bold py-2 px-6 rounded-full my-4 flex gap-x-1'>Trusted Globally</p>
                <h2 className='h2'>Car Services Simplified </h2>
                <p>Rent, Choose and repair with ease. Our convenient location, diverse car types, and reliable repairs points ensure a seamless car experience.</p>
                <div className='flex items-center gap-x-8 mb-12'>
                  <div className='flex flex-col w-[100px]'>
                    <MdOutlineDirectionsCar className='text-5xl text-accent mb-2'/>
                    <div className='text-3xl font-black mb-2'>
                      {inView ? <CountUp start={0} end={50} duration={3} delay={1}/> : null} +
                    </div>
                    <div className='uppercase text-[13px] font-semibold text-seconday'>
                      car <br/> types
                    </div>
                  </div>
                  <div className='flex flex-col w-[100px]'>
                    <MdOutlineMapsHomeWork className='text-5xl text-accent mb-2'/>
                    <div className='text-3xl font-black mb-2'>
                      {inView ? <CountUp start={0} end={135} duration={3} delay={1}/> : null}
                    </div>
                    <div className='uppercase text-[13px] font-semibold text-seconday'>
                      rental <br/> locations
                    </div>
                  </div>
                  <div className='flex flex-col w-[100px]'>
                    <MdOutlineBuildCircle className='text-5xl text-accent mb-2'/>
                    <div className='text-3xl font-black mb-2'>
                      {inView ? <CountUp start={0} end={35} duration={3} delay={1}/> : null} 
                    </div>
                    <div className='uppercase text-[13px] font-semibold text-seconday'>
                      car <br/> types
                    </div>
                  </div>
                </div>
                <button className='hidden xl:block bg-accent hover:bg-accent-hover
                rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]'>
                  See All Cars
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About
