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
            <img src="https://cdn.sanity.io/images/vleyd5bv/production/d55159e7a05a8683ee3f1a7121edb30655b4266e-243x320.png" alt=""/>
        <h1>
        <span>{text}</span>
        <Cursor cursorColor='#EEBC1D' />
        </h1>
    </div>
  )
}

 