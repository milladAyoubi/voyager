"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import Search from './Search'
import { SearchContext } from './SearchContext'

import {motion, easeInOut} from 'framer-motion'
import {fadeIn} from './varients';
export default function Hero() {
 const {searchActive} = useContext(SearchContext)
  return (
    <section className='h-screen xl:h-[90vh]' id='home'>
      <div className='container mx-auto  h-full xl:pt-10'>
        <div className='flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full'>
          <div className='text-center xl:max-w-4xl xl:text-left mt-16  xl:mt-0'>
            <motion.h1 variants={fadeIn('down',0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.6}} className='h1'>Explore The <span className='text-accent'>Finest Global Offers</span> With Voyager</motion.h1>
            <motion.p variants={fadeIn('down',0.4)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.6}} className='description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10'>Find your ideal ride for any adventure you desire. With our divers range of vehicles for any occasion.</motion.p>
            <motion.div variants={fadeIn('down',0.6)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.8}} className='flex gap-x-3 justify-center xl:justify-start'>
              <button className='btn-cta'>
                <Image src={'/icons/buttons/google-play.svg'} width={132} height={36} alt=''></Image>
              </button>
              <button className='btn-cta'>
                <Image src={'/icons/buttons/app-store.svg'} width={132} height={36} alt=''></Image>
              </button>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('up',0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.6}} className='relative w-full h-full max-w-[50vh] md:max-w-[70vw] xl:max-w-[1180px] xl:max-h-[452px] xl:absolute min-[80px] right-[0px] xl:top-38  '>
            <Image src={'/images/hero/car.png'} fill alt='' style={{objectFit: 'contain'}} priority className='xl:!left-[420px] xl:!absolute' ></Image>
          </motion.div>
        </div>
      </div>
      {
        searchActive ? (
         <div className='fixed top-[80px] z-10 w-full max-w-[1920px]'>
           <Search/>
        </div>
        ) : (
          <motion.div variants={fadeIn('up',0.4)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.6}} className='-mt-12 w-full max-w-[1300px] mx-auto'>
           <Search/>
          </motion.div>
        )
      }
     
    </section>
  )
}

