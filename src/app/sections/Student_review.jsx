'use client'
import React from 'react'
import Image from 'next/image'

import student1_image from '../public/Images/review-images/Sameera-SK.png'
import student2_image from '../public/Images/review-images/Anjana-Devi.png'
import student3_image from '../public/Images/review-images/Bibeejan-Sk.png'
import student4_image from '../public/Images/review-images/Divya-V.png'
import student5_image from '../public/Images/review-images/Naveen-Segu.png'
import student6_image from '../public/Images/review-images/Rekha-Sree.png'
import student7_image from '../public/Images/review-images/rohit.png'
import student8_image from '../public/Images/review-images/Sravani-Bai.png'

import review_head_icon from '../public/Images/review-images/heading-style.png'

import review_text_style_icon from '../public/Images/review-images/review-text-style.svg'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselDots
    
  } from "@/components/ui/carousel"
  
import Autoplay from "embla-carousel-autoplay"
import {
    Card,
   
    
  } from "@/components/ui/card"


    

const Student_review = () => {
    const list=[
        {
            id:1,
            name:"Divya",
            role:"ASSOCIATIVE RECRUITER",
            student_images:student4_image,
            description:"The MS Office course at W3Technologies was incredibly informative and practical. The instructors made learning the software straightforward and accessible, even for beginners. The course was packed with hands-on exercises that helped me master essential tools like Word, Excel, and PowerPoint. This training has significantly improved my productivity and efficiency, equipping me with skills that are crucial for any professional environment."
            

        },
        {
            id:2,
            name:"Rohit",
            role:"DIGITAL MARKETING EXECUTIVE",
            student_images:student7_image,
            description:"The digital marketing course at W3Technologies was incredibly insightful and practical. The instructors were very knowledgeable and engaging, making complex topics easy to grasp. The hands-on projects were particularly beneficial in applying theoretical knowledge to real-world scenarios. Overall, it was a valuable learning experience that has equipped me well for pursuing a career in digital marketing."
            

        },
        {
            id:3,
            name:"Anjana Devi",
            role:"Jr Frontend Developer",
            student_images:student2_image,
            description:"The Frontend Development course at W3Technologies was an outstanding experience. The instructors were experts in their field, breaking down complex concepts into easy-to-understand lessons. The emphasis on practical, hands-on projects was invaluable, allowing me to translate theory into real-world applications. This course has provided me with the confidence and skills needed to excel in a career in Frontend Development"
            ,

        },{
            id:4,
            name:"Naveen",
            role:"Full Stack Developer ",
            student_images:student1_image,
            description:"The Full Stack Development course at W3Technologies was an exceptional learning experience. The instructors were highly skilled and made even the most challenging concepts accessible and understandable. The course's focus on hands-on projects allowed me to apply what I learned in a practical setting, which was incredibly valuable. Overall, it was an empowering experience that has thoroughly prepared me for a successful career in Full Stack Development."
            

        },{
            id:5,
            name:"Sameera Sk",
            role:"Digital Marketer",
            student_images:student5_image,
            description:"The Digital Marketing course at W3Technologies was an exceptional learning journey. The instructors were industry experts who made complex strategies and tools easy to understand. The course was filled with practical exercises that helped me apply what I learned to real-world digital marketing campaigns. This experience has thoroughly prepared me to thrive in the digital marketing field."
            ,

        },{
            id:6,
            name:"Bebeejan",
            role:"SEO Specialist",
            student_images:student3_image,
            description:"The Digital Marketing Internship at W3Technologies was an enriching and hands-on experience. The mentors were highly knowledgeable, providing valuable insights into the latest industry trends and strategies. The real-world projects allowed me to apply theoretical knowledge effectively, enhancing my skills in SEO, social media marketing, and content creation. This internship has significantly prepared me for a successful career in digital marketing"
        },{
            id:7,
            name:"Sravani",
            role:"Jr web developer",
            student_images:student8_image,
            description:"The Web Development course at W3Technologies was a game-changer for me. The instructors broke down intricate coding concepts into digestible lessons, making the learning process smooth and enjoyable. The hands-on projects were especially valuable, allowing me to build and deploy real websites. This course has provided me with the skills and confidence to kickstart my career in web development."
        },{
            id:8,
            name:"Rekhasree",
            role:"Graphic Designer",
            student_images:student6_image,
            description:"The Graphic Design Internship at W3Technologies was a transformative experience. The mentors were skilled professionals who guided me through the intricacies of design principles and tools. Working on real client projects allowed me to refine my creativity and technical skills, particularly in Adobe Creative Suite. This internship has given me the confidence and expertise to excel in the graphic design industry "
        }
    ]

  return (
    <div className='student-review py-10'>
    <div className='mx-[30px]  lg:mx-[90px]'>
        <div className='flex flex-col lg:flex-row justify-center items-center  mb-4 lg:text-4xl'>
               <Image loading="eager" src={review_head_icon} alt='icon' className='w-[50px]' />Reviews from 
        </div>
       <p className='text-center text-4xl'> W3 Technologies <span className='bg-red-500  lg:py-3 lg:px-5'>Students</span></p>

      <Carousel className='py-10'>
     <CarouselContent>
      {list.map((item)=>(
        <CarouselItem key={item.id} className=' carousel-item-1'>
            <Card className='flex justify-center bg-inherit border-none text-white'>
                <div className="card-background-1 card-background flex flex-col lg:flex-row  justify-between gap-8 items-center w-full lg:w-1/2">                  
                           <div className='card-image'>                
                          <Image loading="eager" src={item.student_images} alt={item.name} className='w-32'/>
                        </div>
                        <ul type='none' className=' lg:ml-20'>
                            <li className='flex gap-3 flex-col lg:flex-row  items-start'><Image loading="eager" src={review_text_style_icon} alt='icon'/>{item.description}</li>
                            <li className='lg:pl-20 pt-5'>{item.name}</li>
                            <li className='lg:pl-20'>{item.role}</li>
                        </ul>
                    </div>
            
            </Card>
        </CarouselItem>
      ))}
    
     </CarouselContent>
      <CarouselDots />
    </Carousel>
    </div>
    </div>
  )
}

export default Student_review
