"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import Image from 'next/image'

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

import { motion } from 'framer-motion'

import { fadeIn } from './varients'


const cars = [
    {
    type: 'Hatchback',
    name: 'Ford Focus',
    price: 29,
    stars: 3.5,
    image: 'images/carSlider/car01.svg',
    info: [{
        icon: 'icons/carSlider/gearshift.svg',
        text: 'Manual',
    },
    {
        icon: 'icon/carSlider/seat.svg',
        text: '5 Seats'
    },
    {
        icon: 'icon/carSlider/gas.svg',
        text: 'Petrol'
    },
    {
        icon: 'icon/carSlider/engine.svg',
        text: '192 HP'
    },
    {
        icon: 'icon/carSlider/wheel.svg',
        text: 'Front Wheel Drive (FWD)'
    }

    ]
    },
    {
        type: 'Sedan',
        name: 'Toyota Corolla',
        price: 25,
        stars: 4.9,
        image: 'images/carSlider/car02.svg',
        info: [{
            icon: 'icons/carSlider/gearshift.svg',
            text: 'Automatic',
        },
        {
            icon: 'icon/carSlider/seat.svg',
            text: '5 Seats'
        },
        {
            icon: 'icon/carSlider/gas.svg',
            text: 'Petrol'
        },
        {
            icon: 'icon/carSlider/engine.svg',
            text: '152 HP'
        },
        {
            icon: 'icon/carSlider/wheel.svg',
            text: 'Front Wheel Drive (FWD)'
        }
    
        ] 
    },
    {
    type: 'SUV',
    name: 'Honda CR-V',
    price: 38,
    stars: 5,
    image: 'images/carSlider/car03.svg',
    info: [{
        icon: 'icons/carSlider/gearshift.svg',
        text: 'Automatic',
    },
    {
        icon: 'icon/carSlider/seat.svg',
        text: '5 Seats'
    },
    {
        icon: 'icon/carSlider/gas.svg',
        text: 'Petrol'
    },
    {
        icon: 'icon/carSlider/engine.svg',
        text: '206 HP'
    },
    {
        icon: 'icon/carSlider/wheel.svg',
        text: 'All Wheel Drive (AWD)'
    }

    ]
    },
    {
        type: 'Sedan',
        name: 'Toyota Corolla',
        price: 25,
        stars: 4.9,
        image: 'images/carSlider/car02.svg',
        info: [{
            icon: 'icons/carSlider/gearshift.svg',
            text: 'Automatic',
        },
        {
            icon: 'icon/carSlider/seat.svg',
            text: '5 Seats'
        },
        {
            icon: 'icon/carSlider/gas.svg',
            text: 'Petrol'
        },
        {
            icon: 'icon/carSlider/engine.svg',
            text: '152 HP'
        },
        {
            icon: 'icon/carSlider/wheel.svg',
            text: 'Front Wheel Drive (FWD)'
        }
    
        ] 
    },
    {
    type: 'SUV',
    name: 'Honda CR-V',
    price: 38,
    stars: 5,
    image: 'images/carSlider/car03.svg',
    info: [{
        icon: 'icons/carSlider/gearshift.svg',
        text: 'Automatic',
    },
    {
        icon: 'icon/carSlider/seat.svg',
        text: '5 Seats'
    },
    {
        icon: 'icon/carSlider/gas.svg',
        text: 'Petrol'
    },
    {
        icon: 'icon/carSlider/engine.svg',
        text: '206 HP'
    },
    {
        icon: 'icon/carSlider/wheel.svg',
        text: 'All Wheel Drive (AWD)'
    }

    ]
    }


]

export default function CarSlider() {
    return ( 
        <div className='container mx-auto'>
            <Swiper breakpoints={{

                320:{slidesPerView:1, spaceBetween:15},
                640:{slidesPerView:2, spaceBetween:32},
                1260:{slidesPerView:3, spaceBetween:32},
                                    
                 }}>
            
            {cars.map((car, index) => {
                return <SwiperSlide key={index}>
                    <div className='max-w-[385px] mx-auto sm:mx-0 bg-gray-100 h-[300px]'>
                        <Image src={car.image} width={380} height={284} alt=''/>
                        <div>
                            <div>
                                <div>{car.type}</div>
                                <div>{car.name}</div>
                                <div>{car.price}</div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            })}
            </Swiper>
        </div>

    )
}