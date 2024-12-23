'use client';

import React from 'react';
import Image from 'next/image';

import studentImage from '../public/Images/student (1).png';
import adobeLogo from '../public/Images/adobe-xd.svg';
import figmaLogo from '../public/Images/figma.svg';
import illustratorLogo from '../public/Images/illustartor.svg';
import photoshopLogo from '../public/Images/photoshop.svg';

const Designing = () => {
  const designTools = [
    { id: 1, image: adobeLogo, alt: 'Adobe XD Logo' },
    { id: 2, image: figmaLogo, alt: 'Figma Logo' },
    { id: 3, image: illustratorLogo, alt: 'Illustrator Logo' },
    { id: 4, image: photoshopLogo, alt: 'Photoshop Logo' },
  ];

  return (
    <div className="designing my-10 px-12">
      {/* Layout Container */}
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Left Section */}
        <div className="pt-14">
          <Image src={studentImage} alt="Student" priority />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[80%] text-white">
          <ul className="py-10 space-y-3">
            {/* Heading */}
            <li className="text-5xl font-bold">
              Full Stack <br />
              <span className="designing-head">Development</span>
            </li>

            {/* Description */}
            <li>
              Graphic design focuses on visual communication and aesthetics. It involves creating visually appealing graphics and layouts for various purposes, such as logos, advertisements, and print materials.
            </li>
            <li>
              UI (User Interface) design and UX (User Experience) design focus on enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction with a product.
            </li>
            <li>
              UI designers create interfaces that are intuitive and visually appealing, while UX designers ensure smooth, seamless user experiences with the product.
            </li>

            {/* Design Tools */}
            <li>
              <ul className="flex gap-4">
                {designTools.map((tool) => (
                  <li key={tool.id}>
                    <Image src={tool.image} alt={tool.alt} width={50} height={50} />
                  </li>
                ))}
              </ul>
            </li>

            {/* Call-to-Action */}
            <li className="flex items-center gap-4 py-5">
              <button className="px-6 py-4 bg-yellow-400 rounded-xl text-black font-extrabold text-2xl">
                Explore
              </button>
              <p className="font-bold">
                All Graphic & UI/UX Designing
                <br />
                <span className="font-light">Internships & Courses</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Designing;
