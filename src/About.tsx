import { useState } from 'react'
import AboutImg from './assets/general.webp'

function About() {

  return (
    <div id='about' className=''>
        <div>
            <h1 className='mt-8 text-center text-4xl lg:text-6xl font-extrabold'>Reliable, Delicious - Healthy</h1>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 p-4 m-4 lg:gap-8 lg:p-8 lg:m-8'>
             <div className='md:max-w-md'>
                <div className='p-2 m-2 
                transition-all duration-900 hover:bg-gradient-to-l hover:from-green-100 hover:to-green-200 rounded-sm'>   
                    <div className='flex gap-2'>
                        <div className='flex items-center justify-center gap-2'>
                             <i className="fa-solid fa-carrot text-2xl bg-red-300 rounded-full p-2"></i>               
                             <h2 className='text-xl font-bold'>Natural Food</h2>
                        </div>
                       
                        </div>       
                    <p>We believe in the power of natural ingredients. Our menu is crafted with fresh,
                        organic produce, ensuring that every bite is packed with nutrients and flavor.</p>
                </div>

                <div className='p-2 m-2
                transition-all duration-900 hover:bg-gradient-to-l hover:from-green-100 hover:to-green-200 rounded-sm'>   
                    <div className='flex gap-2'>
                        <div className='flex items-center justify-center gap-2'>
                            <i className="fa-solid fa-bowl-food text-2xl bg-red-300 rounded-full p-2"></i>               
                            <h2 className='text-xl font-bold'>Macros Calculated</h2>
                        </div>            
                        </div>       
                    <p>Each dish includes it's Macros, so you can choose the one that meets your personal goals.</p>
                </div>

                <div className='p-2 m-2
                transition-all duration-900 hover:bg-gradient-to-l hover:from-green-100 hover:to-green-200 rounded-sm'>   
                    <div className='flex gap-2'>
                        <div className='flex items-center justify-center gap-2'>
                            <i className="fa-solid fa-utensils text-2xl bg-red-300 rounded-full p-2"></i>               
                            <h2 className='text-xl font-bold'>Good Taste</h2>
                        </div>
                        
                        </div>       
                    <p>Healthy food doesn't have to be bland. Our chefs create delicious recipes that are as satisfying as they are nutritious.</p>
                </div>
            </div>
            <div className=''>
                <img src={AboutImg}
                alt='Healthy Food'
                className='w-full object-cover rounded-full shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square'
                />
            </div>

        </div>
       
        
    </div>
  )
}

export default About;
