'use client'
import React from 'react'
import Image from 'next/image'
import student_image from '../public/Images/student (1).png'

import adobe_logo from '../public/Images/adobe-xd.svg'
import figma_logo from '../public/Images/figma.svg'
import illustrator_logo from '../public/Images/illustartor.svg'
import photoshop_logo from '../public/Images/photoshop.svg'

const Designing = () => {
  const list={
   list1:[
    {
      id:1,
      image:adobe_logo,
      alt:"adobe_logo"
    },
    {
      id:2,
      image:figma_logo,
      alt:"figma_logo "
    },
    {
      id:3,
      image:illustrator_logo,
      alt:"illustrator logo"
    },
    {
      id:4,
      image:photoshop_logo,
      alt:"photoshop_logo"
    }]
    
  }
  return (
    <div className='  designing my-10  px-12'>
      <div className='flex flex-col gap-3 lg:gap-10 lg:flex-row'>
        <div className='pt-14'>
            <Image src={student_image} alt='student image' loading="eager"/>
        </div>
        <div className='w-full lg:w-[80%]'>
          <ul type='none' className='py-10 text-white'>
            <li className='text-5xl font-bold py-3'>Full Stack <br /> <span className='designing-head'>Development</span></li>
            <li className='py-3'>Graphic design focuses on visual communication and aesthetics. It involves creating visually appealing graphics and layouts for various purposes, such as logos, advertisements, and print materials.</li>
            <li className='py-3'>UI (User Interface) design and UX (User Experience) design focus on enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction with a product.</li>
            <li className='py-3'>UI designers create interfaces that are intuitive and visually appealing, while UX designers ensure smooth, seamless user experiences with the product</li>
            <li className='py-3'>
                <ul type="none" className='flex '>
                    {list.list1.map((item)=>(
                      <li key={item.id}><Image src={item.image} alt={item.alt} loading="eager"/></li>
                    ))}
                 </ul> 
             </li>
            <li className='flex justify-start py-5 gap-4'>
              <button className='px-6 py-4 bg-yellow-400 rounded-xl text-black font-extrabold text-2xl'>Explore</button>
              <p className='font-bold'>All Graphic & UI/UX Designing<br /> <span className='font-light'> Internships & Courses</span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Designing
