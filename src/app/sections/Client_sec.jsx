'use client'

import React from 'react'
import Image from 'next/image'

import axzons_image from '../public/Images/axzons.png'
import corsult_image from '../public/Images/corsult.png'
import vertex_image from '../public/Images/vertex.png'
import aetos_image from '../public/Images/aetos.png'
import safwan_image from '../public/Images/safwan.png'
import kdssg_image from '../public/Images/kdssg.png'
import pickleball_image from '../public/Images/pickleball.png'
import hotstone_image from '../public/Images/hotstone.png'
import visonics_image from '../public/Images/visonics.png'
import ashbe_image from '../public/Images/ashbe.png'
import riet_image from '../public/Images/riet.png'
import behara_image from '../public/Images/behara.png'
import swarna_andhra_image from '../public/Images/swarnandhra.png'
import visakha_image from '../public/Images/visakha.png'
import svcollege_image from '../public/Images/sv-college.png'
import Haranmayan_image from '../public/Images/haramayn.png'
import dmk_image from '../public/Images/dmk.png'
import digdo_image from '../public/Images/digdo.png'
import lawoffice_image from '../public/Images/law-office.png'
import mars_image from '../public/Images/mars-marketers.png'
import mksn_image from '../public/Images/mksn.png'
import midcourt_image from '../public/Images/mid-court.png'
import houtonfood_image from '../public/Images/foodbank.png'
import tennisclub_image from '../public/Images/tennis-club.png'
import xit_image from '../public/Images/xit.png'
import iac_image from '../public/Images/iac.png'
import nature_image from '../public/Images/natures-living.png'

const Client_sec = () => {
    const list=[ axzons_image,corsult_image,
        vertex_image,aetos_image,safwan_image,kdssg_image,pickleball_image,
        hotstone_image,visonics_image,ashbe_image,riet_image,behara_image,
        swarna_andhra_image,visakha_image,svcollege_image,Haranmayan_image,
        dmk_image,digdo_image,lawoffice_image,mars_image,mksn_image,midcourt_image,
        houtonfood_image,tennisclub_image,xit_image
     ]
  return (
    <div className='mx-[30px] lg:mx-[90px] py-10'>
      <p className='text-center text-5xl'>Our <span className=' text-white bg-blue-500 p-4 px-5'>Clients</span> we work with</p>
      <div className='grid grid-cols-5 py-10 place-items-center '>
        {list.map((item,index)=>(
            
             <Image key={index} src={item} alt="company logo" className='client-images my-3'/>
            
        ))}
      </div>
      <div className='flex gap-10 justify-center'>
        <Image src={iac_image} alt='iac image' className='client-images'/>
        <Image src={nature_image} alt='nature image' className='client-images'/>
      </div>
    </div>
  )
}

export default Client_sec
