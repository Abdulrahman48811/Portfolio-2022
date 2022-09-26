import React from 'react'
import { motion } from "framer-motion"
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1, x: 0
                }}
                viewport={{
                    once: true
                }}
                src="https://cdn.sanity.io/images/vleyd5bv/production/d55159e7a05a8683ee3f1a7121edb30655b4266e-243x320.png"
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-3xl foont-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
                <p text-sm>I'm Abdulrahman. Over the past couple of years I have been interested in tech
                    and was learning through free resources online such as Youtube, FreeCodeCamp, CodeCademy, etc... In the year 2021 I decided to attend a coding bootcamp;
                    The Lighthouse Labs Web Development Bootcamp, based in CANADA. LHL is the main
                    source of my education and after graduating I had the opportunity to work as a Freelancer for a couple of
                    companies. I also completed some projects of my own, that I am really proud of. Projects that helped me learn a lot more new tech stacks, languages, and libraries.
                    With this motivation, I believe that I am ready to take on what is to come and accomplish my goals in life.</p>
            </div>
        </motion.div>
    )
}

