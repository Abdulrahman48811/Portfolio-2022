import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
type Props = {}

function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl
     px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
     Contact Me
    </h3>

    <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
            I have got just what you need. {" "}
            <span className='decoration-[#f7ab0a]/50 underline'>
                Lets Talk.
            </span>
        </h4>

        <div>
        
        <div className='flex items-center space-x-5 justify-center'>
        <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
        <p className='text-2xl'>+1(619)-855-2160</p>
        </div>

        </div>
    </div>
    </div>
  )
}

export default ContactMe