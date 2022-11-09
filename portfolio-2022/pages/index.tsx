import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocials'


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


const Home = ({pageInfo, experiences, projects, socials, skills}: Props) => {
  return (
    <div className='z-0 bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandotory 
    overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Abdulrahman's Portfolio</title>
      </Head>

      <Header socials={socials}/>

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

      <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
      </section>

      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
      <footer className='sticky bottom-9 w-full cursor-pointer '>
        <div className='flex items-center justify-center '>
          <img className='h-10 w-10 rounded-full object-cover filter grayscale hover:grayscale-0 cursor-pointer'
          src="https://cdn.sanity.io/images/vleyd5bv/production/d55159e7a05a8683ee3f1a7121edb30655b4266e-243x320.png"/>
        </div>
      </footer>
      </Link>

    </div>
  )
}

export default Home;


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

  revalidate: 10, 
  };
};