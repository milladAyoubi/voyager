"use client"

import Image from 'next/image'
import {motion} from 'framer-motion'
import {fadeIn} from './varients'


export default function Brands() {
    return (
        <section className='xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between'>
                    <div>
                        <Image
                        src={'icons/brands/ford.svg'}
                        width={85}
                        height={32}
                        alt=''
                        />
                    </div>
                    <div>
                        <Image
                        src={'icons/brands/mercedes.svg'}
                        width={85}
                        height={32}
                        alt=''
                        />
                    </div>
                    <div>
                        <Image
                        src={'icons/brands/bmw.svg'}
                        width={85}
                        height={32}
                        alt=''
                        />
                    </div>
                    <div>
                        <Image
                        src={'icons/brands/audi.svg'}
                        width={85}
                        height={32}
                        alt=''
                        />
                    </div>
                    <div>
                        <Image
                        src={'icons/brands/vw.svg'}
                        width={85}
                        height={32}
                        alt=''
                        />
                    </div>
                    <div>
                        <Image
                        src={'icons/brands/mazda.svg'}
                        width={85}
                        height={32}
                        alt=''
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}