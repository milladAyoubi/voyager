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

                <div className='flex-1 flex flex-col xl:items-center'>
                    <div>
                        <h3 className='h3 font-bold mb-8'>Company</h3>
                        <ul className='flex flex-col gap-y-4 font-medium'>
                            <li><a href="#">Toronto</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex-1'>
                    <h3 className='h3 font-bold mb-8'>Opening Hours</h3>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-2'>
                            <div className='text-secondary'>Mon-Fri:</div>
                            <div>9:00AM - 10:00PM</div>
                        </div>
                        <div className='flex gap-x-2'>
                            <div className='text-secondary'>Sat & Sun:</div>
                            <div>9:00AM - 6:00PM</div>
                        </div>
                       
                    </div>
                </div>
                <div className='flex-1'>
                    <h3 className='h3 font-bold mb-8'>Newsletter</h3>
                    <div className='mb-9 text-secondary'>You'll be the first to know about our special promotions and discounts.</div>
                    <form className='flex gap-x-2 h-14'>
                        <input type='text' placeholder='Your Email' className='outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent'/>
                            <button type='submit' className='btn btn-sm btn-accent w-24'>Sign Up</button>
                
                    </form>
                </div>
              
            </motion.div>
        </div>
        </footer>
    )
}