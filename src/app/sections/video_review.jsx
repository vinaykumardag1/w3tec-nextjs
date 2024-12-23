'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import nandin_image from '../public/Images/Naga.jpg'
import chavika_image from '../public/Images/Chavikala Bhargavi.jpg'
import play_icon from '../public/Images/play_icon.png'

const VideoReviewItem = ({ image, videoSrc, altText }) => {
  const [showPlayButton, setShowPlayButton] = useState(true);

  const handlePlayButtonClick = () => setShowPlayButton(false);

  return (
    <CarouselItem className="relative">
      {showPlayButton && (
        <button
          onClick={handlePlayButtonClick}
          className="absolute left-[47%] top-[40%] transition-all hover:scale-[150%] z-20"
        >
          <Image src={play_icon} alt="play-icon" />
        </button>
      )}
      <Image src={image} alt={altText} className="absolute rounded-3xl" />
      <iframe
        className="rounded-3xl w-full h-[500px] lg:h-[700px]"
        src={videoSrc}
        title={altText}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </CarouselItem>
  );
};

const VideoReview = () => {
  const reviews = [
    {
      id: 1,
      image: chavika_image,
      videoSrc: "https://www.youtube.com/embed/GZ4ig72fxYk",
      altText: "Our Happy Students Chavikala Bhargavi",
    },
    {
      id: 2,
      image: nandin_image,
      videoSrc: "https://www.youtube.com/embed/KaTjcByzPBc",
      altText: "Our Happy Students Naga Nandini M",
    },
  ];

  return (
    <div className="mx-[30px] lg:mx-[90px] py-24">
      <p className="text-center pb-20 text-5xl">
        What our <span className="bg-yellow-400 text-white">Students Say!</span>
      </p>
      <Carousel>
        <CarouselContent>
          {reviews.map((review) => (
            <VideoReviewItem
              key={review.id}
              image={review.image}
              videoSrc={review.videoSrc}
              altText={review.altText}
            />
          ))}
        </CarouselContent>
        <CarouselNext className="hidden lg:flex text-white bg-red-600 p-6" />
        <CarouselPrevious className="hidden lg:flex text-white bg-red-600 p-6" />
      </Carousel>
    </div>
  );
};

export default VideoReview;
