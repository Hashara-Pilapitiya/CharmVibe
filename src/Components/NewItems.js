import React from 'react';
import {newInStore} from '../data';

const NewItems = () => {

  const {title, subtitle, link, icon} = newInStore;

  return (
    <section className='section'>
        <div className='container mx-auto'>
            <div>

                <div>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                    <div>
                        <a href='#'>{link}</a>
                    </div>
                </div>

                <NewItemsSlider />

            </div>
        </div>
    </section>
  )
}

export default NewItems;