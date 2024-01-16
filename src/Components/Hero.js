import React from 'react';
import {hero} from '../data';
import Neck from '../Assets/neck.avif';

const Hero = () => {

  const {title, subtitle, buttonText} = hero;

  return (
    <section className='bg-gradient-to-tr from-yellow-400 h-[700px] w-full relative'>

      <img src={Neck} alt=''className='w-full h-full object-cover absolute mix-blend-overlay' />

      <div className='pt-[250px] text-center'>

        <h1 className='text-2xl mx-auto font-semibold mb-[30px] lg:text-[54px] lg:leading-tight lg:max-w-[888px]'>
          {title}
        </h1>

        <h2 className='mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl'>
          {subtitle}
        </h2>

        <button className='bg-orange-100 hover:bg-yellow-100 px-[35px] py-[9px] mb-[160px] text-xl font-semibold rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]'>
          {buttonText}
        </button>

        <div>Status</div>

      </div>
      
    
    </section>
  )
}

export default Hero;