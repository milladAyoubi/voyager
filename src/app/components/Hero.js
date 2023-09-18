"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import Search from '../components/Search'
import { SearchContext } from './SearchContext'
import {FaChevronDown, FaChevronCircleDown} from 'react-icons/fa'
import {motion, easeInOut} from 'framer-motion'
import {fadeIn} from './varients';
import {Link} from 'react-scroll'
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
            
            <button className=' bg-accent hover:bg-accent-hover
                rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[224px]'>
                 <Link
                 to={'cars'} smooth={true} spy={true} className='cursor-pointer'
                 >
                  <div className='flex items-center justify-center gap-x-2'>
                    View Collection
                    <FaChevronCircleDown className='text-[18px]'/>
                  </div>
                </Link> 
                </button>
              <button className='btn-cta hidden'>
                <Image src={'/icons/buttons/google-play.svg'} width={132} height={36} alt=''></Image>
              </button>
              <button className='btn-cta hidden'>
                <Image src={'/icons/buttons/app-store.svg'} width={132} height={36} alt=''></Image>
              </button>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('up',0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.6}} className='relative overflow-hidden w-full xl:h-full h-[40%] max-w-[50vh] md:max-w-[70vw] xl:max-w-[1280px] xl:max-h-[452px] xl:absolute min-[80px] right-[0px] xl:top-38  '>
            <Image src={'/images/hero/car.png'} fill alt='' style={{objectFit: 'contain'}} priority className='xl:!left-[460px] xl:fixed' ></Image>
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

