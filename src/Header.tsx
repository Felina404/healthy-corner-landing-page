import React, {useState, useEffect, useRef} from 'react';
import logo from './assets/header-logo.png';

function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <header className='flex items-center justify-between px-6 py-4'>
        <div className='flex items-center space-x-3 mx-auto md:mx-0'>
            <img src={logo} alt="Healthy Corner Logo" 
            className='h-12 w-12 object-contain'
            />
            <h1 className='text-2xl font-bold text-gray-800'>Healthy Corner</h1>
        </div>
        <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                <i className='fas fa-bars text-2xl'></i>
            </button>
        </div>
        {/* desktop navigation */}
        <div className='hidden md:flex items-center space-x-6'>
            <nav className='flex space-x-4'>
                <a href="#" className='text-gray-600 hover:text-gray-800'>Menu</a>
                <a href="#" className='text-gray-600 hover:text-gray-800'>Offers</a>
                <a href="#" className='text-gray-600 hover:text-gray-800'>About us</a>
                <a href="#" className='text-gray-600 hover:text-gray-800'>Contact</a>
            </nav>
            <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
                Make A reservation
            </button>
        </div> 
          {/* Mobile Navigation */}
      {isMenuOpen && (
        <>
          {/* Overlay (Grey background when menu is open) */}
          <div 
            className='md:hidden fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 z-10'
            onClick={toggleMenu} // Close menu if clicked on the overlay
          />

          {/* Sidebar (Mobile Menu) */}
          <div 
            className='md:hidden absolute top-0 left-0 h-full w-1/2 bg-white 
            shadow-lg rounded-lg p-4 z-20 flex flex-col items-center'>
            <div className='w-full flex flex-col items-center space-x-3 mb-4 header-logo-line'>
                <img src={logo} alt="Healthy Corner Logo" 
                className='h-20 w-20 object-contain'
                />
                <h1 className='text-2xl font-bold text-gray-800'>Healthy Corner</h1>
            </div>
            <nav className='w-full flex flex-col justify-center items-center space-y-4 mb-4 header-logo-line'>   
              <a href="#" className='text-gray-600 hover:text-gray-800'>Menu</a>
              <a href="#" className='text-gray-600 hover:text-gray-800'>Offers</a>
              <a href="#" className='text-gray-600 hover:text-gray-800'>About us</a>
              <a href="#" className='text-gray-600 hover:text-gray-800'>Contact</a>
            </nav>
            <button className='flex justify-center items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
                Make A reservation
              </button>
          </div>
        </>
      )}
       
    </header>
  )
}

export default Header;