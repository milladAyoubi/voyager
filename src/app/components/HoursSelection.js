'use client'

import React,{useState} from 'react'
import {Menu} from '@headlessui/react'
import {FaClock} from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

const hours = ['10:00 AM - 11:00AM', '12:00PM - 1:00PM', '3:00PM - 4:00PM', '7:00PM - 8:00PM']


export default function HoursSelection() {
  const [hour, setHour] = useState('10:00 AM - 11:00AM')
  return (
    <Menu as='div' className='w-full h-full flex xl:flex-row'>
        
      <div className='relative flex-1'>
        <Menu.Button className='dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8'>
        <div className='w-full h-16 xl:h-full flex justify-center xl:justify-start '>
          <div className='flex flex-col justify-center'>
            <div className='flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0'>
              <FaClock className='text-accent text-[24px]'/>
              <div className='text-[15px] uppercase font-bold'>
                Select Hours
              </div>
            </div>

            <div className='flex items-center gap-x-3 xl:ml-6'>
            <div className='uppercase font-medium text-[13px] text-seconday text-center xl:ml-6 xl:text-left'>
              {hour.split('-')[0]}
            </div>
            <FaArrowRightLong className='text-accent text-[12px]'/>
            <div className='uppercase font-medium text-[13px] text-seconday text-center  xl:text-left'>
              {hour.split('-')[1]}
            </div>
            </div>
          </div>
        </div>
        
        </Menu.Button>
        <Menu.Items className='dropdown-menu shadow-lg absolute -top-82 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2
        xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] rounded-[10px] overflow-hidden'>
        {hours.map((hour,index)=> {
                return (
                  <div onClick={()=> setHour(hour)} 
                  key={index} 
                  className='cursor-pointer py-4 text-center hover:bg-gray-50'>
                    {hour}
                  </div> 
                )
              })}        </Menu.Items>
      </div>
      
      </Menu>
  )
}
