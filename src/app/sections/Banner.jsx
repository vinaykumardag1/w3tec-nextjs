"use client"
import React from 'react'
import Image from 'next/image'
import python_icon from '../public/Images/Python.svg'
import front_end_icon from '../public/Images/Front-End.svg'
import fullstack_icon from '../public/Images/Full-Stack.svg'
import Digital_img from '../public/Images/Digital-Marketing.svg'
import class_img from '../public/Images/class.png'
import kick_start_img from '../public/Images/kick-start.png'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

const Banner = () => {
  return (
    <div className="pt-28">
      <div className="mx-[30px] lg:mx-[90px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left section */}
          <div className="py-20 relative">
            <h1 className="text-5xl font-bold">
              <span className="text-red-600">Learn from</span> <br />
              INDUSTRY EXPERTS <br /> To Start Your <br />
              <span className="text-red-600"> IT Career</span>
            </h1>

            {/* Icons */}
            <Image src={python_icon} alt="Python icon" className="absolute -top-0 left-1/2"  />
            <Image src={front_end_icon} alt="Front end icon" className="absolute top-1/4 right-20 pt-10"  />
            <Image src={fullstack_icon} alt="Full-Stack" className="absolute right-40 left-1/4"  />

            {/* Buttons */}
            <div className="flex gap-10 py-20">
              <button className="bg-red-600 text-white px-6 py-3 rounded-xl">
                <a href="tel:+91741-693-9333">call +91 741-693-9333</a>
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-xl">
                Register Now
              </button>
            </div>
          </div>

          {/* Right section */}
          <div className="py-10">
            <Image src={Digital_img} alt="Digital Marketing"  />
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                <CarouselItem className="relative">
                  <Image src={class_img} alt="Class image"  />
                  <p className="text-2xl text-white absolute bottom-11 left-14 font-bold">
                    #<span className="text-yellow-500">INTERACTIVE</span> COURSES
                  </p>
                </CarouselItem>
                <CarouselItem>
                  <Image src={kick_start_img} alt="Kick start image"  />
                  <p className="text-2xl w-full text-white text-center absolute bottom-11 font-bold">
                    #<span className="text-yellow-500">JOIN</span> WITH US
                  </p>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
