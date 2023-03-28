import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { HouseContext } from '../components/HouseContext';

import { EffectCreative } from "swiper";

import "swiper/css";
import "swiper/css/effect-creative";
import MotionDiv from './MotionDiv.js';
import List from './SwipupMenu';
 


const PropertyDetails = () => {

  const {Houses} =useContext(HouseContext)

  const {id} =useParams()

   const home=Houses.find((i)=> i.id==id)


console.log(home);
  return(
  
  <div>

  
  <div className=' container mx-auto flex  flex-col lg:flex-row'>
<div className='w-full lg:w-5/12   lg:mt-10'>


<Swiper 
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2 w-full"
        >
        <SwiperSlide>    <img className=' rounded-xl' src={home.imageLg}/></SwiperSlide>
        <SwiperSlide>    <img className=' rounded-xl max-h-72' src="https://img.freepik.com/free-vector/house-rent-abstract-concept-vector-illustration-booking-house-online-best-rental-property-real-estate-service-accommodation-marketplace-rental-listing-monthly-rent-abstract-metaphor_335657-1954.jpg?w=2000"/></SwiperSlide>
        <SwiperSlide>    <img className='rounded-xl' src={home.imageLg}/></SwiperSlide>
 
      </Swiper>




          </div>
 
    
    <div className='m-12 space-y-4 text-lg font-semibold'>

        <p>{home.name}</p>
        <p>{home.country}</p>
        <p>{home.price}</p>
        <p className=' font-light'>{home.description
}</p>

    </div>            
    
    
    </div>

   <div  className='flex  items-center justify-evenly  '> 


    <MotionDiv  className=''    motionStyle={{
      img:'../assets/img/agents/undraw_family_vg76.svg',
      rotate:0,
      text:"",
      offx:-300,
      offy:0,
      onx:300,
      ony:0
    }} />


<div 
className='w-full'
>
<div className='bg-indigo-400 rounded-2xl w-5/12 text-white pl-11 text-xl'>


    <MotionDiv        motionStyle={{
      // img:'../assets/img/agents/undraw_family_vg76.svg',
      rotate:0,
      text:"Happy family . Have a nice trips , enjoy you journy",
      offx:300,
      offy:0,
      onx:0,
      ony:0
    }} />
    </div>
    </div>
    </div>
    
    <div>
      <List/> 
    </div>
    
        </div>)
};

export default PropertyDetails;
 