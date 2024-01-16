import React from 'react';
import { stats } from '../data';

const Stats = () => {
  return (
    <div className='bg-accent rounded-[20px] p-12 m-20 mt-15'>
      <div className='flex flex-wrap gap-y-8'>
        {stats.map((item, index) => {
          return (
            <div className='min-h-[70px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none' key={index}>

              <div className='text-2xl text-center text-white font-semibold lg:text-4xl'>{item.value}</div>

              <div className='text-base text-center text-white font-light max-w-[110px] mx-auto lg:text-xl'>{item.text}</div>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Stats;