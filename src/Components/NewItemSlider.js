import React, { useRef, useState } from 'react';
import Pendant from '../Assets/pendant.avif';
import Charms from '../Assets/charms.avif';
import Choker from '../Assets/choker.jpg';
import Collar from '../Assets/collar.avif';
import Opera from '../Assets/opera.avif';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Pendant} />
          <p>Pendant</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Charms} />
          <p>Charms</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Choker} />
          <p>Choker</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Collar} />
          <p>Collar</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Opera} />
          <p>Opera</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}