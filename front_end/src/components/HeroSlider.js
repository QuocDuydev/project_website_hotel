import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
//import swiper style
import 'swiper/css'

import 'swiper/css/effect-fade'
import Img1 from '../assets/img/heroSlider/1.jpg';
import Img2 from '../assets/img/heroSlider/2.jpg';
import Img3 from '../assets/img/heroSlider/3.jpg';
import { Autoplay, EffectFade } from 'swiper/modules';
const slides=[
  {
    title:'Your Luxury Hotel For Vacation',
    bg:Img1,
    btnText:'See Rooms Nows',
  },
  {
    title:'Hotel with reasonable price',
    bg:Img2,
    btnText:'See Rooms Nows',
  }
  ,{
    title:'Great Vacation Experience',
    bg:Img3,
    btnText:'See Rooms Nows',
  }
]
const HeroSlider = () => {
  return (
    <Swiper
    modules={[EffectFade,Autoplay]}
    effect={'fade'}
    loop={true}
    autoplay={{
      delay:5000,
      disableOnInteraction:false
    }}
     className='heroSlider  h-[600px]   lg:h-[860px]'>
      {slides.map((slide,index)=>{
        const {title,bg,btnText}=slide;
        return (
          <SwiperSlide 
          key={index} 
          className='h-full relative flex justify-center items-center'>
            <div className='absolute top-0 w-full h-full'>
              <img className='object-cover  w-full h-[80%]'
              src={bg} 
                alt=""/>
            </div>
              <div className='absolute w-full h-[80%] bg-black/70'>
              <div className='z-20 text-white text-center m-40'>
                <div className='uppercase font-tertiary tracking-[10px] mb-5 mt-5'>
                Wellcome to Website Booking
                </div>
                  <h1 className='text-[25px] font-primary uppercase tracking-[10px] lg:text-[60px]  mb-5'>
                    {title}
                  </h1>
                  <button className='btn btn-lg btn-primary  mx-auto' >{btnText}</button>
              </div>
            </div>
          </SwiperSlide>
        )

      })}
    </Swiper>

 );
};

export default HeroSlider;
