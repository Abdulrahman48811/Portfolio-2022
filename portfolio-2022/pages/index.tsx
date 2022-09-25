import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import About from '../components/About'
const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandotory 
    overflow-scroll z-0'>
      <Head>
        <title>Abdulrahman's Portfolio</title>
      </Head>

      <Header />
      
      {/* {hero} */}  
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      {/* {about} */}  
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* {experience} */}  
      
      {/* {skills} */}  
      
      {/* {projects} */}  
      
      {/* {contact me} */}  
      
    </div>
  )
}

export default Home
