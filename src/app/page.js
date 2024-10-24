import React from 'react'

import Internship from './sections/Internship'
import Skills from './sections/Skills'
import Reesan from './sections/Reesan'
import Questioning from './sections/questions'
import Certificate from './sections/Certificate'
import Reviews from './sections/reviews'
import Video_review from './sections/video_review'
import Student_review from './sections/Student_review'
import Services_sec from './sections/Services_sec'
import Client_sec from './sections/Client_sec'
import Footer_sec from './sections/Footer_sec'

// import Navbar from './sections/Navbar'
// import Banner from './sections/Banner'
import Header from './sections/Header'

const page = () => {
  return (
    <>
    {/* <Navbar/>
    <Banner/> */}
    <Header/>
   <Internship /> 
    <Skills/>
    <Reesan/>
    <Questioning/>
    <Certificate/>
    <Reviews/>
    <Video_review/>
    <Student_review/>
    <Services_sec/>
    <Client_sec/>
    <Footer_sec/>
    
    </>
  )
}

export default page
