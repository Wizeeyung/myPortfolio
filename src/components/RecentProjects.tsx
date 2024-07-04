import React from 'react'
import { projects } from '../../data'
import { PinContainer } from '../ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'
import Magicbutton from '@/ui/Magicbutton'
import CardMagicBtn from '@/ui/CardMagicBtn'

const RecentProjects = () => {
  return (
    <div className='py-20'>
      <h1 className='heading'>
        Some Selections of {' '}
        <span className='text-purple'>recent project</span>
      </h1>
      
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 '>
        {projects.map(({id, title, des,img, iconLists, link})=>(
          <div key={id} className='sm:h-[41rem]  lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[80vw] w-[80vw] lg:w-[300px]'>
            <PinContainer title='visit' href={link}>
            <div className='relative flex items-center justify-center sm:w-[80vw] sm:h-[35vh] w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] lg:w-[300px]'>
              <div className='relative w-full h-full overflow-hidden  rounded-lg border-white/[0.9]'>
                <img src='/bg.png' alt='bg-img'/>
              </div>
              <img src={img} alt={title} className=' absolute  border-white/[0.4] w-full h-full object-contain  rounded-lg'/>
            </div>
            <h1 className='font-bold lg:text-xl md:text-xl text-base line-clamp-1 mb-2'>{title}</h1>
            <p className='lg:text-[14px] lg:font-normal font-light text-sm line-clamp-2 mb-2'>{des}</p>
            <div className='flex items-center'>
              {iconLists.map((icon)=>(
                <div key={icon} className='border border-white/[0.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center'>
                  <img src={icon} alt='icon' className='p-2'/>
                </div>
              ))}         
            </div>
            <CardMagicBtn title='Show Live Site' icon={<FaLocationArrow />} position='right'/>
            
            </PinContainer>
          </div>
        ))}
      </div>
      

    </div>
  )
}

export default RecentProjects