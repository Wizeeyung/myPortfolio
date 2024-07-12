import { InfiniteMovingCards } from '@/ui/InfiniteMovingCards'
import React from 'react'
import { testimonials } from '../../data'

const Clients = () => {
  return (
    <div className='pt-[40px] flex flex-col justify-center' id='testimonials'>
      <h1 className='heading'>
        Testimonials {' '}
        <span className='text-purple'>from Clients</span>
      </h1>
      
      <div className='flex flex-col items-center  '>
        <div className='h-fit md:h-[30rem] rounded-md flex
        flex-col antialiased items-center relative overflow-hidden'>
          <InfiniteMovingCards items={testimonials} direction='left' speed='slow' />
        </div>
      </div>
    </div>
  )
}

export default Clients