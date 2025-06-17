import { useState } from 'react'

import heroImg from './assets/hero-img.jpg'

function Hero() {

  return (
    <div id='hero' className='p-8 bg-beige-100'>
      <div className="relative">  
        <img 
          src={heroImg} 
          className="w-full h-full object-cover rounded-xl object-contain md:max-h-[70vh]" 
          alt="Hero" 
        />
        <div className='absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full rounded-xl'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl text-white font-serif w-1/2 lg:w-[30%]'>Where every ingredient matters</h2>
          <button className='bg-white rounded-2xl p-2 m-2 cursor-pointer hover:bg-green-500'>View Our Menus</button>
        </div> 
      </div>
      
    </div>
     
    
  )
}

export default Hero
