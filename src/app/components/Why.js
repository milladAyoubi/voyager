"use client"

import Image from "next/image"
import React from 'react'

import {motion} from 'framer-motion'

import {fadeIn} from './varients'

import {MdHandshake, MdKey, MdTrendingUp} from 'react-icons/md'


export default function Why() {
  return (
    <section className='section my-20 flex items-center bg-green' id='why'>
      <div className="container mx-auto mt-20">
        <motion.h2 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.6}}
        className="h2 text-center">Unmatched Excellence and Customer Satisfaction
        </motion.h2>
        <motion.p 
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.6}}
        className="max-w-[680px] text-center mx-auto mb-2">
          Our dedication to providing exceptional services sets us apart from the compitition. From the moment you engage with us,
          we strive to exceed your expectations in every interaction. 
        </motion.p>
        <motion.div 
        variants={fadeIn('up', 0.8)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.6}}
        className='md:flex justify-center mb-6 xl:mb-2'>
          <Image src={'/images/why/acura.png'} width={1060} height={420} alt=''/>
        </motion.div>
        <div 
        
        className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-4">
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p2 xl:p-0">
              <MdKey className="text-[38px] text-accent mb-4"/>
              <h3 className="h3">Quick & Easy</h3>
              <p className="hidden xl:flex">
              Swift bookings, refined pickups. Access our premium fleet for your sophisticated travels. Your luxury journey matters – experience the ease at Voyager.
              </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p2 xl:p-0">
              <MdTrendingUp className="text-[38px] text-accent mb-4"/>
              <h3 className="h3">Modern Inventory</h3>
              <p className="hidden xl:flex">
              Contemporary Fleet. Explore our cutting-edge selection for your style and needs. Find modern vehicles tailored to elevate your journey – because sophistication never goes out of style.
              </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p2 xl:p-0">
              <MdHandshake className="text-[38px] text-accent mb-4"/>
              <h3 className="h3">Flexible Services</h3>
              <p className="hidden xl:flex">
              Discover flexibility at its finest. With customizable options, we cater to your unique preferences. Your convenience matters – experience tailored services with Voyager.
              </p>
          </div>
        </div>
      </div>
    </section>
  )
}
