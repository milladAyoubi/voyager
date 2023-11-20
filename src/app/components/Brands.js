"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from './varients'

import CountUp from 'react-countup'

export default function Brands() {
    return ( <
        section className = 'lg:pt-16 lg:h-[200px] bg-white flex flex-col justify-center mt-12 text-center' >

        <
        motion.div variants = { fadeIn('up', 0.4) }
        initial = 'hidden'
        whileInView = { 'show' }
        viewport = {
            { once: false, amount: 0.6 } }
        className = 'container mx-auto text-primary/40' >

        <
        h2 className = 'h2 mb-12' > Trusted By Over < CountUp start = { 0 }
        end = { 20 }
        duration = { 2 }
        delay = { 2 }
        className = 'font-bold' / > +Auto Makers < /h2> <
        div className = 'grid grid-cols-3 gap-6 place-items-center lg:flex lg:flex-wrap lg:gap-x-6 lg:justify-between' >
        <
        div >
        <
        Image src = { 'icons/brands/ford.svg' }
        width = { 85 }
        height = { 32 }
        alt = '' /
        >
        <
        /div> <
        div >
        <
        Image src = { 'icons/brands/mercedes.svg' }
        width = { 85 }
        height = { 32 }
        alt = '' /
        >
        <
        /div> <
        div >
        <
        Image src = { 'icons/brands/bmw.svg' }
        width = { 85 }
        height = { 32 }
        alt = '' /
        >
        <
        /div> <
        div >
        <
        Image src = { 'icons/brands/audi.svg' }
        width = { 85 }
        height = { 32 }
        alt = '' /
        >
        <
        /div> <
        div >
        <
        Image src = { 'icons/brands/vw.svg' }
        width = { 85 }
        height = { 32 }
        alt = '' /
        >
        <
        /div> <
        div >
        <
        Image src = { 'icons/brands/mazda.svg' }
        width = { 85 }
        height = { 32 }
        alt = '' /
        >
        <
        /div> <
        /div> <
        /motion.div> <
        /section>
    )
}