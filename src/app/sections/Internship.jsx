"use client"
import React from 'react'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
    
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import '../public/Styles/style.css'

import front_end_image from '../public/Images/front-end.png'
import designing_image from '../public/Images/desinging.png'
import digital_marketing from '../public/Images/digi-marketing.png'
const Internship = () => {

  return (
    <div className='bg-black text-white'>
    <div className='ml-28 flex gap-10 justify-between py-12 relative'>
      <div className='pt-16'>
        
        <h2 className='text-4xl py-5'>Internships & <br /><span className='text-yellow-500'>Courses</span></h2>
        <p>Live, interactive sessions guided by experts to enhance <br /> your expertise and skills in your chosen area of interest.</p>
       
      </div>
      <div className='w-[65%]'>
      <Carousel className='py-5' plugins={[
        Autoplay({
          delay: 3000,
        }),]} loop>
       <CarouselContent>
        <CarouselItem className="basis-1/3">
            <Image src={front_end_image} alt='' className='carousel-img rounded-3xl'/>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
            <Image src={front_end_image} alt='' className='carousel-img  rounded-3xl'/>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
            <Image src={designing_image} alt='' className='carousel-img  rounded-3xl'/>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
            <Image src={digital_marketing} alt='' className='carousel-img  rounded-3xl'/>
        </CarouselItem>
       </CarouselContent >
       <CarouselPrevious className="carousel-btn-prev carousel-btn" />
        <CarouselNext className="carousel-btn-next carousel-btn" />
     </Carousel>
      </div>
    </div>
    </div>
  )
}

export default Internship
