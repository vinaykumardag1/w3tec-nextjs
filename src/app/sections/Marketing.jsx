'use client'
import React from 'react'
import Image from 'next/image'
import student_image from '../public/Images/student1.png'

import Affiliate_marekting_logo from '../public/Images/affiliate-marketing.svg'
import Content_marketing_logo from '../public/Images/content-writing.svg'
import Email_marketing_logo from '../public/Images/email-marketing.svg'
import ga4_marketing_logo from '../public/Images/ga4.svg'

import sem_logo from '../public/Images/sem.svg'
import seo_logo from '../public/Images/seo.svg'
import smm_logo from '../public/Images/smm.svg'
import smo_logo from '../public/Images/smo.svg'

import whatsapp_marketing_logo from '../public/Images/whatsapp-marketing.svg'

const Marketing = () => {
  const list={
   list1:[
    {
      id:1,
      image:Affiliate_marekting_logo,
      alt:"Affiliate_marekting_logo"
    },
    {
      id:2,
      image:Content_marketing_logo,
      alt:"Content_marketing_logo"
    },
    {
      id:3,
      image:Email_marketing_logo,
      alt:"Email_marketing_logo"
    },
    {
      id:4,
      image:ga4_marketing_logo,
      alt:"ga4_marketing_logo"
    }],
    list2:[
      {
        id:5,
        image:sem_logo,
        alt:"sem logo"
      },
      {
        id:6,
        image:seo_logo,
        alt:"seo logo"
      },
      {
        id:7,
        image:smm_logo,
        alt:"seo logo"
      },
      {
        id:8,
        image:smo_logo,
        alt:"smo logo"
      }],
    
    
    
  }
  return (
    <div className=' marketing my-10 px-12'>
      <div className='flex flex-col-reverse gap-3 lg:gap-10 lg:flex-row'>
        
        <div className='w-full lg:w-[80%]'>
          <ul type='none' className='py-10 text-white'>
            <li className='text-5xl font-bold py-3'>Full Stack <br /> <span className='marketing-head'>Development</span></li>
            <li className='py-3'>Digital marketing encompasses all marketing efforts that utilize electronic devices and the internet. It includes various channels such as social media, search engines, email, and websites to connect with current and prospective customers.</li>
            <li className='py-3'>Key strategies include SEO (Search Engine Optimization), PPC (Pay-Per-Click advertising), content marketing, email marketing, and social media marketing. Digital marketing aims to increase brand awareness, drive traffic, generate leads, and ultimately, boost sales through targeted online campaigns.</li>
            <li className='py-3'>
                <ul type="none" className='flex '>
                    {list.list1.map((item)=>(
                      <li key={item.id}><Image src={item.image} alt={item.alt}/></li>
                    ))}
                 </ul>
                 <ul type="none" className='flex '>
                    {list.list2.map((item)=>(
                      <li key={item.id}><Image src={item.image} alt={item.alt}/></li>
                    ))}
                 </ul>
                 <ul type="none">
                    <li><Image src={whatsapp_marketing_logo} alt='whatsapp marketing logo'/></li>
                 </ul>
             </li>
            <li className='flex justify-start py-5 gap-4'>
              <button className='px-6 py-4 bg-yellow-400 rounded-xl text-black font-extrabold text-2xl'>Explore</button>
              <p className='font-bold'>All  Digital Marketing <br /> <span className='font-light'> Internships & Courses</span></p>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className='pt-14 pl-6'>
            <Image src={student_image} alt='student image'/>
        </div>
      </div>
    </div>
  )
}

export default Marketing
