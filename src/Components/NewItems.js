import React from 'react';
import {newInStore} from '../data';
import NewItemsSlider from './NewItemSlider';

const NewItems = () => {

  const {title, subtitle, link, icon} = newInStore;

  return (
    <section className='section'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row'>

                <div className='flex items-baseline mb-6 md:flex-col gap-x-56 lg:mb-0'>
                    <h2 className='title max-w-[245px] lg:mt-[30px] lg:mb-[90px]'>{title}</h2>
                    <p className='max-w-[245px] lg:mb-12'>{subtitle}</p>
                    <div className='items-center hidden lg:flex'>
                        <a className='font-medium transition-all hover:border-b-[4px] border-accent lg:items-center' href='#'>{link}</a>
                    </div>
                </div>

                <NewItemsSlider />

            </div>
        </div>
    </section>
  )
}

export default NewItems;