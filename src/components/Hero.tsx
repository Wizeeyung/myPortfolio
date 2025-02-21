import { Spotlight } from '@/ui/Spotlight';
import React from 'react';
import { TextGenerateEffect } from '@/ui/TextGenerate';
import Magicbutton from '@/ui/Magicbutton';
import { FaLocationArrow } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className='pb-20 pt-28 sm:pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white'/>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill='purple'/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill='blue'/>
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0  flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className='flex justify-center z-10 relative my-20'>
          <div className='max-w-[89vw] flex flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]'>
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi, i am samson based in London, UK</p>
            <TextGenerateEffect className='lg:text-6xl text-[40px] text-center md:text-5xl' words='Crafting Digital Experiences with Code and Creativity'/>
            <h2 className='tracking-widest text-[12px] text-center mb-2 sm:mb-0 max-w-[70vw] sm:max-w-[50vw] text-blue-100 opacity-50'>A passionate web developer dedicated to turning ideas into impactful digital solutions.</h2>
            <a href='#projects'><Magicbutton title='Show my work' icon={<FaLocationArrow className='ml-2'/>} position='right'/></a>
          </div>
        </div>
    </div>

    
  )
}

export default Hero