"use client"

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css';

import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

import {FaQuoteLeft} from 'react-icons/fa'

import {motion} from 'framer-motion'

import {fadeIn} from './varients'

import Image from 'next/image'

const testimonialData = [
    {
        message: 'They truly exceeded my expectation with the quality service. My retan experience was truely a delight.',
        imageava: '/images/testimonial/avatar.png',
        name: 'Sarah Morgen',
        job: 'Manager of Client Relations at Meta'
    },
    {
        message: 'They truly exceeded my expectation with the quality service. My retan experience was truely a delight.',
        imageava: '/images/testimonial/avatar.png',
        name: 'Sarah Morgen',
        job: 'Manager of Client Relations at Meta'
    },
    {
        message: 'They truly exceeded my expectation with the quality service. My retan experience was truely a delight.',
        imageava: '/images/testimonial/avatar.png',
        name: 'Sarah Morgen',
        job: 'Manager of Client Relations at Meta'
    }

]

export default function TestimonialSlider() {
    return (
        <div>
            <Swiper pagination={{
                clickable: true,
                dynamicBullets: true,
            }} 

            style={{
                "--swiper-pagination-color": "#ed1d24",
                "--swiper-pagination-bullet-inactive-color": "#888888",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "12px",
                "--swiper-pagination-bullet-horizontal-gap": "5px"
              }}
            modules={[Pagination]}
            className='h-[450px] xl:h-[400px]'>
                {testimonialData.map((person,index) => {
                    const {message, imageava, name, job} = person;
                    return (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <FaQuoteLeft className='text-6xl text-accent mb-6'/>
                                <div className='text-2xl xl:text-2xl max-w-[874px] m-4 mb-8 font-bold'>{message}</div>
                                <Image src={imageava} width={64} height={64} alt=''/>
                                <div className='text-lg font-medium'>{name}</div>
                                <div className='text-secondary'>{job}</div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}