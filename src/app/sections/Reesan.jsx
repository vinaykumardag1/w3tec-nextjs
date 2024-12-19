"use client"
import Image from 'next/image'
import React from 'react'

import quote_image from '../public/Images/,,.png'
import '../public/Styles/style.css'
import reesan_logo from '../public/Images/Reesan-Logo.png'
import reesan_team from '../public/Images/reesanit-team.png'
const Reesan = () => {
  return (
    <div className='mx-[30px] lg:mx-[90px]'>
      <div className='flex flex-col lg:flex-row justify-center items-center'>
       <Image src={quote_image} alt=",," />\
       <span className='text-4xl ml-3 pt-4 reesan-text'>We are not just trainers, we are <strong> Real-Time Employees</strong> form  Our </span><br/>
      </div>
       <p className="text-center text-4xl reesan-text"><strong>Parent IT Company</strong></p>
        <div className='flex justify-center py-10'>
         <Image src={reesan_logo} alt='reesan logo'/>
       </div>
       <Image src={reesan_team} alt='reesan team'/>
    </div>
  )
}

export default Reesan
