"use client"

import Image from 'next/image'

import {motion} from 'framer-motion'

import {fadeIn} from './varients'


export default function Cta() {
    return (
        <section className="pt-24 xl:pt-48 flex items-end pb-0 bg-[#b2b7c2]/10" id="contact">
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row xl:items-center'>
                <div className='flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0'>
                    <div className='max-w-[520px] mx-auto order-2 xl:order-none '>
                        <h2 className='h2'>Download our App now and hit the road with ease</h2>
                        <p className='mb-10'>
                        Voyager's app is designed with you in mind. It's intuitive, easy to navigate,
                        and packed with features to streamline your rental experience.
                        </p>
                        <motion.div 
                        variants={fadeIn('up',0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.6}}
                        className='flex gap-x-3 justify-center md:justify-start mb-20'>
                            <button className='btn-cta'>
                                <Image
                                src={'/icons/buttons/google-play.svg'}
                                width={132}
                                height={36}
                                alt=''
                                />
                            </button>
                            <button className='btn-cta'>
                                <Image
                                 src={'/icons/buttons/app-store.svg'}
                                 width={132}
                                 height={36}
                                 alt=''
                                 />
                            </button>
                        </motion.div>
                    </div>
                </div>

                <motion.div 
                variants={fadeIn('up', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className='flex-1 flex justify-center order-1 md:order-none'>
                </motion.div>
            <motion.div
            variants={fadeIn('up', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className='mb-20 xl:relative xl:right-40'>
                <Image
                src={'/images/carSlider/mercedes01.png'}
                width={520}
                height={840}
                alt=''
                />
            </motion.div>
            </div>
        </div>
    </section>
    )
}