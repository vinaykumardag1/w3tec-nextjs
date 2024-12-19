'use client'
import Image from 'next/image'
import React from 'react'
import '../public/Styles/style.css'

import head_style_left from '../public/Images/head-style-left.png'
import head_style_right from '../public/Images/head-style-right.png'

import student1_image from '../public/Images/divya.png'
import student2_image from '../public/Images/rohit.png'
import student3_image from '../public/Images/Anjana-Devi0.png'
import student4_image from '../public/Images/Naveen-Segu.png'
import student5_image from '../public/Images/Kalyalni.png'
import student6_image from '../public/Images/Bibeejan0.png'

import company1_image from '../public/Images/iconma-logo.svg'
import company2_image from '../public/Images/y-axis-logo.svg'
import company3_image from '../public/Images/anjana-logo.svg'
import company4_image from '../public/Images/Naveen-Segu-logo.png'
import company5_image from '../public/Images/punarjan-ayurvedic-hospitals-logo.svg'
import company6_image from '../public/Images/Bibeejan-logo_2.png'


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
    
  } from "@/components/ui/carousel"
  
import Autoplay from "embla-carousel-autoplay"
import {
    Card,
   
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
const Reviews = () => {

    const list=[
        {
            id:1,
            name:"Divya",
            role:"ASSOCIATIVE RECRUITER",
            student_images:student1_image,
            image:company1_image,
            lpa:'2.9 LPA',

        },
        {
            id:2,
            name:"Rohit",
            role:"DIGITAL MARKETING EXECUTIVE",
            student_images:student2_image,
            image:company2_image,
            lpa:'3.2 LPA',

        },
        {
            id:3,
            name:"Anjana Devi",
            role:"Jr Frontend Developer",
            student_images:student3_image,
            image:company3_image,
            lpa:'1.80 LPA',

        },{
            id:4,
            name:"Naveen",
            role:"Full Stack Developer ",
            student_images:student4_image,
            image:company4_image,
            lpa:'8.5 LPA',

        },{
            id:5,
            name:"Kalyani",
            role:"ASSOCIATIVE RECRUITER",
            student_images:student5_image,
            image:company5_image,
            lpa:'2.76 LPA',

        },{
            id:6,
            name:"Bebeejan",
            role:"SEO Specialist",
            student_images:student6_image,
            image:company6_image,
            lpa:'1.4 LPA',

        }
    ]

    let carouselbtn_style='bg-regular-brown hover:bg-bg-regular-brown border-none p-4 text-white'

  return (
    <div className='reviews-sec bg-yellow-300 py-20'>
      <div className="mx-[30px] lg:mx-[90px] relative">
        <div className='flex justify-center lg:text-5xl  text-orange-800'>
          <Image src={head_style_left} alt='icon ' className='hidden lg:block'/>
            <p >Our Students <span className='bg-orange-800 text-white p-1 lg:p-3'>Placed</span></p> 
          <Image src={head_style_right} alt='icon' className='hidden lg:block'/>
        </div>
        <p className='text-center my-3 lg:my-10 text-orange-800'>IN COMAPANIES</p>

        
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),]}

      className='relative'
    >
      <CarouselContent>
      {list.map((item)=>(
        <CarouselItem className="xl:basis-1/3 lg:basis-1/2 pt-36 relative" key={item.id}>
          <div className='flex justify-center '>
             <Image src={item.student_images} alt={item.name} className='w-28 student-image absolute top-10'/>
          </div>
        <Card className="pt-10 rounded-2xl">
         <CardHeader>
            <CardTitle className="text-center py-3">{item.name}</CardTitle>
            <CardDescription className="text-center">{item.role}</CardDescription>
         </CardHeader>
          <CardFooter className="flex justify-between pr-0">
             <div>
               <Image src={item.image} alt={item.name} className='w-36 h-10'/> 
             </div>
             <div className='student-lpa'>
                <p>{item.lpa}</p>
             </div>
          </CardFooter>
         </Card>
        </CarouselItem>
      ))}
      
        </CarouselContent>
        <div className='hidden md:flex justify-evenly items-center lg:items-end  absolute lg:right-5 lg:bottom-[-30px]'>
           <CarouselNext className={carouselbtn_style}/>
           <CarouselPrevious className={carouselbtn_style}/>
           </div>
       </Carousel>          
      </div>
    </div>
  )
}

export default Reviews
