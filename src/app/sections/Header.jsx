// components/Header.js

import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'

const Header = () => {
  return (
    <div className='bg'>
      <video className='' autoPlay muted loop>
        <source src='https://www.w3tec.com/assets/institute-video-4.mp4' type="video/mp4" />
      </video>
      <div className="box-effect"></div>
      <Navbar/>
      <Banner/>
    </div>
  )
}

export default Header
