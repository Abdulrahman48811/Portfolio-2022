import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <div
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img 
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            opacity:1, x:0
        }}
        viewport={{
            once: true
        }}
        src="https://cdn.sanity.io/images/vleyd5bv/production/d55159e7a05a8683ee3f1a7121edb30655b4266e-243x320.png"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]'
        />

        <div>
            <h4 className='text-4xl '>Here is a little background</h4>
        </div>
    </div>
  )
}

