"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import pythonIcon from "../public/Images/Python.svg";
import frontEndIcon from "../public/Images/Front-End.svg";
import fullstackIcon from "../public/Images/Full-Stack.svg";
import digitalImg from "../public/Images/Digital-Marketing.svg";
import classImg from "../public/Images/class.png";
import kickStartImg from "../public/Images/kick-start.png";

// Dynamically import Carousel to reduce bundle size
const Carousel = dynamic(() => import("@/components/ui/carousel"), { ssr: false });
const CarouselContent = dynamic(() => import("@/components/ui/carousel").then(mod => mod.CarouselContent), { ssr: false });
const CarouselItem = dynamic(() => import("@/components/ui/carousel").then(mod => mod.CarouselItem), { ssr: false });
const Autoplay = dynamic(() => import("embla-carousel-autoplay"), { ssr: false });

const Banner = () => {
  return (
    <div className="pt-28">
      <div className="mx-8 lg:mx-24">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Section */}
          <div className="py-20 relative">
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className="text-red-600">Learn from</span> <br />
              INDUSTRY EXPERTS <br />
              To Start Your <br />
              <span className="text-red-600">IT Career</span>
            </h1>

            {/* Icons */}
            <Image src={pythonIcon} alt="Learn Python from experts" className="absolute -top-0 left-1/2" />
            <Image src={frontEndIcon} alt="Front-end development icon" className="absolute top-1/4 right-20" />
            <Image src={fullstackIcon} alt="Full-Stack development icon" className="absolute right-40 left-1/4" />

            {/* Buttons */}
            <div className="flex gap-6 py-20">
              <a href="tel:+917416939333">
                <button className="bg-red-600 text-white px-6 py-3 rounded-xl">
                  Call +91 741-693-9333
                </button>
              </a>
              <button className="bg-black text-white px-6 py-3 rounded-xl">Register Now</button>
            </div>
          </div>

          {/* Right Section */}
          <div className="py-10">
            <Image src={digitalImg} alt="Digital Marketing Training" priority />
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                <CarouselItem className="relative">
                  <Image src={classImg} alt="Interactive courses in IT" />
                  <p className="text-2xl text-white absolute bottom-11 left-14 font-bold">
                    #<span className="text-yellow-500">INTERACTIVE</span> COURSES
                  </p>
                </CarouselItem>
                <CarouselItem>
                  <Image src={kickStartImg} alt="Kick-start your IT career" />
                  <p className="text-2xl text-white text-center absolute bottom-11 font-bold">
                    #<span className="text-yellow-500">JOIN</span> WITH US
                  </p>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
