"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import w3tec_logo from '../public/Images/w3tech-logo.svg';
import Popover from '@/components/Navigation';


const Navbar = () => {
  const [color, setColor] = useState('transparent'); 

  const navStyle = 'border-2 py-3 px-5 border-black rounded-3xl  font-bold';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setColor('white');
      } else {
        setColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const Hover_msg=(
    <div className="w-[600px] flex  justify-between bg-white rounded-2xl p-[20px] text-xl">
    <ul>
      <li>C programming</li>
      <li>C++ Programming</li>
      <li>C and C++</li>
      <li>Python</li>
      <li>PHP & MySql</li>
    </ul>
    <ul>
      <li>MERN Stack</li>
      <li>DSA</li>
      <li>Java</li>
      <li>Laravel</li>
      <li>Digital Marketing</li>
    </ul>
    <ul>
      <li>Graphic Designing</li>
      <li>UI/UX Designing</li>
      <li>SQL</li>
      <li>WordPress</li>
      <li>Ms Office</li>
    </ul>
  </div>  
  )

  const Hover_msg2=(
    <ul className="w-[230px] bg-white rounded-3xl p-[20px] text-xl">
    <li>Web Development</li>
    <li>Internship Programs</li>
    <li>Digital Marketing</li>
  </ul>
  )
  return (
    <>
      <div className="fixed w-full top-0 z-10" style={{background:color}}>
        <div className=" mx-[30px] lg:mx-[90px] w-full flex py-3 lg:py-10 gap-10">
         <Image  layout="intrinsic" priority src={w3tec_logo} alt="w3tec logo" />
           <ul type='none' className='w-full hidden text-lg lg:flex gap-10 items-center' >
            <li>
            <Popover content={Hover_msg} >
             <a className={navStyle}>Explore Courses</a>
            </Popover>
            </li>
            <li>
            <Popover content={Hover_msg2}>
             <a className={navStyle}>Services</a>
            </Popover>
            </li>
            <li>
            <a href='#'>Know about us</a>
            </li>
            <li>
            <a href="#">Contact Us</a>
            </li>
           </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
