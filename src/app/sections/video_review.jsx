'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
    
  } from "@/components/ui/carousel"
  
// import Autoplay from "embla-carousel-autoplay"
import nandin_image from'../public/Images/Naga.jpg'
import chavika_image from '../public/Images/Chavikala Bhargavi.jpg'

import play_icon from '../public/Images/play_icon.png'


const Video_review = () => {
  const [image,setImage]=useState('block')
 
    function imageBtn(){
      setImage('none')
      console.log("hello world")
    }
  
  return (
    <div className='container mx-auto py-24'>
        <p className='text-center pb-20 text-5xl'>What our <span className='bg-yellow-400 text-white'>Students Say!</span></p>
     <Carousel>
      <CarouselContent> 
        <CarouselItem className='relative'>
          <div  style={{display:image}} >
        <button onClick={imageBtn} className='absolute left-[47%] top-[40%] transition-all hover:scale-[150%] z-20' ><Image src={play_icon} alt='play-icon'/></button>
          <Image src={chavika_image} alt='chavika Image' className='absolute h-[99%] w-[99%] rounded-3xl ' />
          </div>
        <iframe className='rounded-3xl'  width="1296" height="640" src="https://www.youtube.com/embed/GZ4ig72fxYk" title="Our Happy Students Chavikala Bhargavi" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
       
        </iframe>
       
        </CarouselItem>
        
        <CarouselItem className='relative'>
        <div style={{display:image}} >
        <button onClick={imageBtn} className='absolute left-[47%] top-[40%] transition-all hover:scale-[150%] z-20'><Image src={play_icon} alt='play-icon'/></button>
          <Image src={nandin_image} alt='nandini Image' className='absolute'   />
          </div>
        <iframe width="1296" height="640" src="https://www.youtube.com/embed/KaTjcByzPBc" title="Our Happy Students Naga Nandini M" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </CarouselItem>
     </CarouselContent>
     <CarouselNext className='bg-red-600 p-6'/>
     <CarouselPrevious className='bg-red-600 p-6'/>
    </Carousel>
    </div>
  )
}

export default Video_review
