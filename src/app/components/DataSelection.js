"use client"

import React,{useState} from 'react'
import {Menu} from '@headlessui/react'
import {FaCalendarAlt} from 'react-icons/fa'
import {FaArrowRightLong} from 'react-icons/fa6'


import {DateRange} from 'react-date-range'
import {format, addDays} from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


export default function DataSelection() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ])
  return (
    
      <Menu as='div' className='w-full h-full flex xl:flex-row'>
        
      <div className='relative flex-1'>
        <Menu.Button className='dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8'>
        <div className='w-full h-16 xl:h-full flex justify-center xl:justify-start xl:border-r xl:border-black/10'>
          <div className='flex flex-col justify-center'>
            <div className='flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0'>
              <FaCalendarAlt className='text-accent'/>
              <div className='text-[15px] uppercase font-bold'>Select Date</div>
            </div>
            <div className='uppercase font-medium text-[13px] text-seconday text-center xl:ml-6 xl:text-left'></div>
          </div>
        </div>
        
        </Menu.Button>
        <Menu.Items className='dropdown-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2
        xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]'>
          Menu Items
        </Menu.Items>
      </div>
      
      </Menu>
    
  )
}


