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
            <img src="https://photos.app.goo.gl/FHNVp5q8u5oWUhQT8" alt=""/>
        <h1>
        <span>{text}</span>
        <Cursor cursorColor='#EEBC1D' />
        </h1>
    </div>
  )
}

 