"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import Search from './Search'
import { SearchContext } from './SearchContext'

export default function Hero() {
 const {searchActive} = useContext(SearchContext)
  return (
    <section className='h-screen xl:h-[90vh]' id='home'>
      <div className='container mx-auto h-full xl:pt-10'>
        <div className='flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full'>
          <div className='text-center xl:max-w-4xl xl:text-left mt-16 xl:mt-8'>
            <h1 className='h1'>Explore The <span className='text-accent'>Finest Global Offers</span> With Voyager</h1>
            <p className='description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10'>Find your ideal ride for any adventure you desire. With our divers range of vehicles for any occasion.</p>
            <div className='flex gap-x-3 justify-center xl:justify-start'>
              <button className='btn-cta'>
                <Image src={'/icons/buttons/google-play.svg'} width={132} height={36} alt=''></Image>
              </button>
              <button className='btn-cta'>
                <Image src={'/icons/buttons/app-store.svg'} width={132} height={36} alt=''></Image>
              </button>
            </div>
          </div>
          <div className='relative w-full h-full max-w-[50vh] md:max-w-[70vw] xl:max-w-[760px] xl:max-h-[442px] xl:absolute min-[80px] right-[0px] xl:top-38'>
            <Image src={'/images/hero/car.svg'} fill alt='' style={{objectFit: 'contain'}} priority ></Image>
          </div>
        </div>
      </div>
      {
        searchActive ? (
         <div className='fixed top-[80px] z-10 w-full max-w-[1920px]'>
           <Search/>
        </div>
        ) : (
          <div className='-mt-12 w-full max-w-[1300px] mx-auto'>
           <Search/>
          </div>
        )
      }
     
    </section>
  )
}

