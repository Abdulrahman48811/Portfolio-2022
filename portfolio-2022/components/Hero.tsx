import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
       words: [
        "Hi, my name is Abdulrahman Mohammed",
        "Guy-who-loves-basketball.tsx",
        "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
      })
  return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center 
        text-center overflow-hidden'>
            <BackgroundCircles />
            <img 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src="https://cdn.sanity.io/images/vleyd5bv/production/d55159e7a05a8683ee3f1a7121edb30655b4266e-243x320.png" alt=""/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'> Full-Stack Web-Developer</h2>
        <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#EEBC1D' />
        </h1>
        </div>

        <div className='pt-5'>
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>
            {/* <button className='heroButton'>Contact Me</button> */}
        </div>
    </div>
  )
}

 