import React from 'react'
import Fullstack from './Fullstack'
import Marketing from './Marketing'
import Designing from './Designing'

const Skills = () => {
  return (
    <>
    <div className='mx-[30px] lg:mx-[90px]  py-12'>
      <div className='py-20'>
        <p className='text-black text-center text-5xl font-bold py-4'>Grow your skills with us</p>
        <p className='text-black text-center text-5xl'>We make you <span className='bg-red-500 text-white p-1'>Expertise</span> in</p>
      </div>
       <Fullstack/>
       <Marketing/>
       <Designing/>
    </div>
    
    </>
  )
}

export default Skills
