import React from 'react';
import { features } from '../data';

const FeaturesSecond = () => {

    const { title, subtitle, image } = features.feature2;

  return (
    <section className='section'>
        <div className='container mx-auto mt-20'>
            <div className='flex flex-col lg:flex-row lg:gap-x-[100px] mt-[-50px]'>

                <div className='flex-1 flex flex-col justify-end'>
                    <h2 className='title tracking-wide leading-normal'>{title}</h2>
                    <p className='subtitle text-[16px] leading-8 tracking-wide'>{subtitle}</p>
                </div>

                <div className='flex-1'>
                    <img src={image.type} alt='' className='rounded'/>
                </div>

                
            </div>
        </div>
    </section>
  )
}

export default FeaturesSecond;