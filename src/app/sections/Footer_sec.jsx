'use client'
import Image from 'next/image'
import React from 'react'
import w3tec_logo_white from '../public/Images/w3tech-logo-white.svg'

import insta_icon from '../public/Images/insta-icon.svg'
import facebook_icon from '../public/Images/fb-icon.svg'
import youtube_icon from '../public/Images/youtube-icon.svg'
import linkedIn_icon from '../public/Images/linkedin-icon.svg'

import phone_icon from '../public/Images/phone-icon.svg'
import email_icon from '../public/Images/email-icon.svg'
import location_icon from '../public/Images/location-icon.svg'


const Footer_sec = () => {
    const footer_style='flex flex-wrap gap-4 py-14'
    const footer_text_style='text-white text-2xl py-5'
    const footer_list_style='border-r-2 pr-4'
  return (

    <div className='bg-black text-regular-gray py-10'>
      <div className='mx-[30px] lg:mx-[90px] '>
        <div className='grid grid-cols-1 lg:grid-cols-4 py-14'>
         <ul type='none'>
            <li className='py-5'><Image src={w3tec_logo_white}  layout="intrinsic" priority alt='w3 logo white'/></li>
            <li className='pl-4 my-6 border-l-4 border-regular-gray'>Learn with w3 technologies <br />to start your career</li>
            <li className='flex gap-4'>
                <Image src={insta_icon} alt='insta icon'  layout="intrinsic" priority/>
                <Image src={facebook_icon} alt='facebook icon'  layout="intrinsic" priority/>
                <Image src={youtube_icon} alt='youtube icon'  layout="intrinsic" priority/>
                <Image src={linkedIn_icon} alt='linkdein icon'  layout="intrinsic" priority/>
            </li>
        </ul>
        
        <ul type='none' className='lg:pl-10' >
            <li className={footer_text_style}>Contact Us</li>
            <li className='flex gap-3'><Image src={phone_icon}  layout="intrinsic" priority alt='phone icon' /> <a href="tel:++91741693933">+91 741-693-9333</a></li>
            <li className='flex gap-3 py-3'><Image src={email_icon}  layout="intrinsic" priority alt='email icon'/> <a href="mailto:info@w3tec.com">info@w3tec.com</a></li>
            <li className='flex gap-3 items-start'><Image src={location_icon}  layout="intrinsic" priority alt='location icon'/>Above IDBI Bank, LR Shine Building 4th Floor, Beside 1-Town Police Station, VRC, Nellore, AP, India, 524001.</li>
        </ul>
        <div className='flex lg:justify-center'>
         <ul type='none'>
            <li className={footer_text_style}>Company</li>
            <li>About Us</li>
            <li className='py-2'>Blogs</li>
            <li>Careers</li>
         </ul>
        </div>
        <ul type='none'  >
            <li className={footer_text_style}>Support</li>
            <li>Privacy Policy</li>
            <li className='py-2'>Terms and Conitions</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <hr />

      <ul className={footer_style} type="none">
        <li className={footer_list_style}>Front-End Development</li>
        <li className={footer_list_style}>Back-End Development</li>
        <li className={footer_list_style}>PHP Full Stack</li>
        <li className={footer_list_style}>Python Full Stack</li>
        <li className={footer_list_style}>MERN Full Stack</li>
        <li className={footer_list_style}>Database Management</li>
        <li className={footer_list_style}>Javascript</li>
        <li className={footer_list_style}>Core Python</li>
        <li className={footer_list_style}>Advanced Python</li>
        <li className={footer_list_style}>PHP</li>
        <li className={footer_list_style}>ReactJS</li>
        <li className={footer_list_style}>Node.js</li>
        <li className={footer_list_style}>MySQL</li>
        <li>MongoDB</li>
      </ul>
      <hr />
      <ul className={footer_style} type="none">
        <li className={footer_list_style}>Search Engine Optimization (SEO)</li>
        <li className={footer_list_style}>Search Engine Marketing (SEM)</li>
        <li className={footer_list_style}>Social Media Optimization (SMO)</li>
        <li className={footer_list_style}>Social Media Marketing (SMM)</li>
        <li className={footer_list_style}>Content Marketing</li>
        <li className={footer_list_style}>Email Marketing</li>
        <li className={footer_list_style}>Whatsapp Marketing</li>
        <li>Affiliate Marketing</li>
      </ul>

      <hr />
      <ul className={footer_style} type="none">
        <li className={footer_list_style}>Graphic Designing</li>
        <li className={footer_list_style}>UI/UX Designing</li>
        <li className={footer_list_style}>Video Editing</li>
        <li className={footer_list_style}>2D Animation</li>
        <li className={footer_list_style}>Adobe Illustrator</li>
        <li className={footer_list_style}>Adobe XD</li>
        <li className={footer_list_style}>Figma</li>
        <li className={footer_list_style}>Adobe Premiere Pro</li>
        <li>Adobe After Effects</li>
      </ul>
      <hr />
    </div>
   
      <h6 className="text-center py-10">© Copyright 2024, All Rights Reserved w3tecnologies</h6>
    
    </div>
  )
}

export default Footer_sec
