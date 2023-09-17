"use client"


import Image from 'next/image'

import {FaPhone, FaEnvelope} from 'react-icons/fa6'



import {motion} from 'framer-motion'

import {fadeIn} from './varients'

import {Link} from 'react-scroll'


export default function Footer() {
    return (
        <footer className='pt-20 bg-white z-20'>
        <div className='container mx-auto mb-24'>
            <motion.div 
             variants={fadeIn('up', 0.2)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once:false, amount: 0.6}}
             className='flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'>
        
                <div className='flex flex-col flex-1 gap-y-8'>
                    <Link to={'home'} smooth={true} spy={true} className='cursor-pointer'>
                    <Image src={'/icons/logo01.svg'} width={200} height={200} alt=''/>
                    </Link>
                    <div className='text-secondary'>
                    Voyager offers an extensive fleet of vehicles to suit every traveler's needs.
                    </div>
                    <div className='flex flex-col gap-y-4 font-semibold'>
                        <div className='flex items-center gap-x-2'>
                            <FaPhone/>
                            <div>(416) 456-7816</div>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <FaEnvelope/>
                            <div>voyager@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </motion.div>
        </div>
        </footer>
    )
}