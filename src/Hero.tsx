import { useState } from 'react'

import heroImg from './assets/hero-img.jpg'

function Hero() {

  return (
    <div className='w-full round-xl p-4'>
       <img src={heroImg}></img>
    </div>
     
    
  )
}

export default Hero
