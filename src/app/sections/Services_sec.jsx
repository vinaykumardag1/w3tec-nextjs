"use client"

import React from 'react'
import Image from 'next/image'

import web_application_icon from '../public/Images/web-application-icon.svg'
import web_desiging_icon from '../public/Images/web-design-icon.svg'
import digital_marketing_icon from '../public/Images/digital-marketing-icon.svg'
import seo_icon from '../public/Images/seo-icon.svg'
import smo_icon from '../public/Images/smo-icon.svg'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

const Services_sec = () => {
    const list = [
        {
            id: 1,
            image: web_application_icon,
            text: "Web Application",
            desc: 'We transform your ideas & needs into robust web applications through tailored development solutions.'
        },
        {
            id: 2,
            image: web_desiging_icon,
            text: "Web Design",
            desc: "Creating visually stunning and user-centric web designs to elevate your online presence."
        },
        {
            id: 3,
            image: digital_marketing_icon,
            text: "Digital Marketing",
            desc: "Driving growth through targeted digital strategies tailored to amplify your brand."
        },
        {
            id: 4,
            image: seo_icon,
            text: "SEO",
            text_abrev: "Search Engine Optimization",
            desc: "Optimizing websites to boost search engine visibility and drive organic traffic growth."
        },
        {
            id: 5, 
            image: smo_icon,
            text: "SMO",
            text_abrev: "Social Media Optimization",
            desc: "Enhancing brand awareness and engagement through strategic social media optimization."
        }
    ]

    return (
        <>
        <div className='services-sec'>
        <div className="container mx-auto py-20">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                <Card className='flex justify-start items-center bg-inherit text-blue-500'>
               <p className='text-5xl border-l-4 pl-8 border-blue-500'> We Provide <br /> <strong>Services</strong> on</p>
                </Card>
                {list.map((item) => (
                    <Card key={item.id} className="services-card rounded-xl py-5 text-white">
                        <CardContent className="flex gap-3 justify-center items-center">
                            <Image src={item.image} alt={item.text} />
                            <p className='text-3xl'>{item.text} <br /><span className='text-sm'>{item.text_abrev}</span></p>
                        </CardContent>
                        <CardFooter>
                            <p className='text-center'>{item.desc}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className='text-center mt-6'>
                <a href="#" className="bg-black text-white rounded-3xl py-3 px-5">Contact us</a>
                <p className='mt-3'>for services</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default Services_sec
