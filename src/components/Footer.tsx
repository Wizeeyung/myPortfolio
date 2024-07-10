import Magicbutton from '@/ui/Magicbutton';
import React from 'react';
import { BiMailSend } from 'react-icons/bi';
import { MdOutlineDateRange } from "react-icons/md";
import { socialMedia } from '../../data';

const Footer = () => {
  return (
    <footer className='w-full pt-20 ' id='contact'>
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img  src='/footer-grid.svg' alt='grid' className='w-full h-full opacity-50'/>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to us today let&apos;s achieve your dream website</p>
        <div className='flex items-center gap-3 z-10'>
          {socialMedia.map((media)=>(
            <a key={media.id} href={media.link} target='_blank'>
              <img src={media.img} alt={media.img} className='cursor-pointer opacity-50 w-8 h-8'/>
            </a>
          ))}
        </div>
        <div className='flex gap-6'>
        <a href="mailto:ogunbanwosamson@gmail.com">
          <Magicbutton  title="Let's get in touch"
            icon={<BiMailSend />}
            position='right'
          />
        </a>
        <a href="https://calendly.com/ogunbanwosamson" target='_blank'>
          <Magicbutton  title="Book a session with us"
            icon={<MdOutlineDateRange />}
            position='right'
          />
        </a>
        </div>
      </div>
      <div className='text-center py-3 mt-10'>
        <p className='md:text-base text-sm md:font-normal font-light opacity-50'>Copywright © 2024 Wizeeyung</p>
      </div>
    </footer>
  )
}

export default Footer