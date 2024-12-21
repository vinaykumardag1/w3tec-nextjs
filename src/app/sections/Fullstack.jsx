'use client'
import React from 'react'
import Image from 'next/image'
import student_image from '../public/Images/student.png'

import HTML_logo from '../public/Images/html.svg'
import CSS_logo from '../public/Images/css.svg'
import javascript_logo from '../public/Images/javascript.svg'
import Bootstrap_logo from '../public/Images/bootstrap.svg'

import tailwind_logo from '../public/Images/tailwindcss.svg'
import python_logo from '../public/Images/python (1).svg'
import php_logo from '../public/Images/php.svg'
import mysql_logo from '../public/Images/mysql.svg'

import django_logo from '../public/Images/django.svg'
import react_logo from '../public/Images/react.js.svg'
import nodejs_logo from '../public/Images/node.js.svg'
import laravel_logo from '../public/Images/laravel.svg'

const Fullstack = () => {
  const list={
   list1:[
    {
      id:1,
      image:HTML_logo,
      alt:"html logo"
    },
    {
      id:2,
      image:CSS_logo,
      alt:"css logo"
    },
    {
      id:3,
      image:javascript_logo,
      alt:"javascript logo"
    },
    {
      id:4,
      image:Bootstrap_logo,
      alt:"Boostrap logo"
    }],
    list2:[
      {
        id:5,
        image:tailwind_logo,
        alt:"tailwind logo"
      },
      {
        id:6,
        image:python_logo,
        alt:"python logo"
      },
      {
        id:7,
        image:php_logo,
        alt:"php logo"
      },
      {
        id:8,
        image:mysql_logo,
        alt:"mysql logo"
      }],
    list3:[
      {
        id:9,
        image:django_logo,
        alt:'dajango logo'
      },
      {
        id:10,
        image:react_logo,
        alt:"react logo"
      },
      {
        id:11,
        image:nodejs_logo,
        alt:"nodejs logo"
      },
      {
        id:12,
        image:laravel_logo,
        alt:"laravel logo"
      }
    ]
    
  }
  return (
    <div className=' full-stack my-10  px-12'>
      <div className='flex flex-col gap-3 lg:gap-10 lg:flex-row'>
        <div className='pt-14'>
            <Image src={student_image} loading="eager" alt='student image'/>
        </div>
        <div className='w-full lg:w-[80%]'>
          <ul type='none' className='py-10 text-white'>
            <li className='text-5xl font-bold py-3'>Full Stack <br /> <span className='text-yellow-400'>Development</span></li>
            <li className='py-3'>Full stack development refers to the ability to work on both the front-end (the client-side) and back-end (the server-side) portions of an application. It involves designing user interfaces, creating databases, and writing server-side logic.</li>
            <li className='py-3'>Full stack developers are proficient in multiple programming languages and frameworks, allowing them to handle all aspects of web development, from concept to deployment.</li>
            <li className='py-3'>
                <ul type="none" className='flex '>
                    {list.list1.map((item)=>(
                      <li key={item.id}><Image src={item.image} loading="eager" alt={item.alt}/></li>
                    ))}
                 </ul>
                 <ul type="none" className='flex'>
                    {list.list2.map((item)=>(
                      <li key={item.id}><Image src={item.image} loading="eager" alt={item.alt}/></li>
                    ))}
                 </ul>
                 <ul type="none" className='flex'>
                    {list.list3.map((item)=>(
                      <li key={item.id}><Image src={item.image} loading="eager" alt={item.alt}/></li>
                    ))}
                 </ul>
             </li>
            <li className='flex justify-start py-5 gap-4'>
              <button className='px-6 py-4 bg-yellow-400 rounded-xl text-black font-extrabold text-2xl'>Explore</button>
              <p className='font-bold'>All Full Stack Development <br /> <span className='font-light'> Internships & Courses</span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Fullstack
