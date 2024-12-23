'use client';
import Image from 'next/image';
import React from 'react';
import '../public/Styles/style.css';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import head_style_left from '../public/Images/head-style-left.png';
import head_style_right from '../public/Images/head-style-right.png';

import studentImages from '../public/Images'; // Assuming you have an index file for easier imports
import companyImages from '../public/Images';

const Reviews = () => {
  const students = [
    { id: 1, name: "Divya", role: "ASSOCIATIVE RECRUITER", student_image: studentImages.divya, company_image: companyImages.iconma, lpa: '2.9 LPA' },
    { id: 2, name: "Rohit", role: "DIGITAL MARKETING EXECUTIVE", student_image: studentImages.rohit, company_image: companyImages.y_axis, lpa: '3.2 LPA' },
    { id: 3, name: "Anjana Devi", role: "Jr Frontend Developer", student_image: studentImages.anjana, company_image: companyImages.anjana, lpa: '1.80 LPA' },
    { id: 4, name: "Naveen", role: "Full Stack Developer", student_image: studentImages.naveen, company_image: companyImages.naveen, lpa: '8.5 LPA' },
    { id: 5, name: "Kalyani", role: "ASSOCIATIVE RECRUITER", student_image: studentImages.kalyani, company_image: companyImages.punarjan, lpa: '2.76 LPA' },
    { id: 6, name: "Bebeejan", role: "SEO Specialist", student_image: studentImages.bibeejan, company_image: companyImages.bibeejan, lpa: '1.4 LPA' },
  ];

  const carouselbtn_style = 'bg-regular-brown hover:bg-bg-regular-brown border-none p-4 text-white';

  return (
    <div className='reviews-sec bg-yellow-300 py-20'>
      <div className="mx-[30px] lg:mx-[90px] relative">
        <div className='flex justify-center lg:text-5xl text-orange-800'>
          <Image src={head_style_left} alt='icon' className='hidden lg:block' />
          <p>Our Students <span className='bg-orange-800 text-white p-1 lg:p-3'>Placed</span></p>
          <Image src={head_style_right} alt='icon' className='hidden lg:block' />
        </div>
        <p className='text-center my-3 lg:my-10 text-orange-800'>IN COMPANIES</p>

        <Carousel plugins={[Autoplay({ delay: 2000 })]} className='relative'>
          <CarouselContent>
            {students.map((student) => (
              <CarouselItem key={student.id} className="xl:basis-1/3 lg:basis-1/2 pt-36 relative">
                <div className='flex justify-center'>
                  <Image src={student.student_image} alt={student.name} className='w-28 student-image absolute top-10' />
                </div>
                <Card className="pt-10 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-center py-3">{student.name}</CardTitle>
                    <CardDescription className="text-center">{student.role}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between pr-0">
                    <div>
                      <Image src={student.company_image} alt={student.name} className='w-36 h-10' />
                    </div>
                    <div className='student-lpa'>
                      <p>{student.lpa}</p>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='hidden md:flex justify-evenly items-center lg:items-end absolute lg:right-5 lg:bottom-[-30px]'>
            <CarouselNext className={carouselbtn_style} />
            <CarouselPrevious className={carouselbtn_style} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
