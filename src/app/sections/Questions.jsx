
import Image from 'next/image'
import React from 'react'
import phone_icon from '../public/Images/phone-icon.svg'
import '../public/Styles/style.css'

const Questioning = () => {
  return (
    <>
    <div className='doubt-sec py-10'>
     <div className='mx-[30px] lg:mx-[90px]'>
        <p className="text-black text-5xl font-bold py-11"><strong>Have any <span className='bg-yellow-400 my-5 lg:my-0 py-2 px-4'>Questions?</span></strong></p>
        <p className='text-3xl '>Do you want to take advantage of our <strong>Special Offers?</strong><br /></p>
        <p className='text-3xl '>Please Call us today</p>
      <div className="flex flex-col lg:flex-row py-10 gap-9">
      <button className='bg-red-600 text-white px-5 py-3 flex  justify-center items-center rounded-2xl'><Image src={phone_icon} alt="phone icon"  /><a href="tel:+917416939333"><strong>+91 741-693-9333</strong></a></button>
      <button className='bg-black px-5 py-3 text-white rounded-2xl'>Request A Call Back</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Questioning
