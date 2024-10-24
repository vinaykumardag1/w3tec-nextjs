'use client'
import React from 'react'
import Image from 'next/image'
import certificate_img from '../public/Images/Certificate.png'
import certificate_award_icon from '../public/Images/certificate-award-icon.svg'
import employee_icon from '../public/Images/employee-icon.svg'
import suitcase_icon from '../public/Images/breifcase-icon.svg'
const Certificate = () => {
  return (
    <div className="certificate-sec">
    <div className='container certificate-sec mx-auto py-10'>
      <div className="flex justify-start gap-10 align-middle">
        <div className=''>
            <Image src={certificate_img} alt='certifcate image'/>
        </div>
        <div className='certificate-col-2 text-white py-10'>
           <p className='text-5xl py-8'>Elevate your presence <br /> with <strong>Certification!</strong> </p>
            <div className="certificate-icons grid grid-cols-3 px-16 py-4  place-items-center rounded-2xl">
                <div className='text-sm text-center'>
                <div className='dark-circle flex justify-center'>
                    <Image src={certificate_award_icon} alt='certificate-icon '/>
                </div>
                <p> <strong>Industry-Recognized <br />
                     Certificate </strong></p>
               </div>

               <div className='text-sm text-center'>
                <div className='dark-circle flex justify-center'>
                    <Image src={employee_icon} alt='employee icon'/>
                   
                </div> 
                <strong>Stand Out in Job <br />
                    Market</strong>
                </div>
                <div className='text-sm text-center'>
                <div className='dark-circle flex justify-center'><Image src={suitcase_icon} alt='suitcase icon'/>
                
                </div>
                <strong>Your Gateway <br />
                 to Career Advancement</strong>
                </div>
            </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Certificate