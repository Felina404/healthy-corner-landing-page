import {useState} from 'react';
import logo from './assets/header-logo.webp';

interface HeaderProps {
  isDarkMode: boolean
  toggleDark: () => void
}

function Header({isDarkMode, toggleDark} : HeaderProps) {
const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <header id='header' className='flex items-center justify-between px-6 py-4 bg-bg text-fg'>
        <div className='flex items-center space-x-3 mx-auto md:mx-0'>
            <img src={logo} alt="Healthy Corner Logo" 
            className='h-12 w-12 object-contain'
            />
            <h1 className='text-2xl font-bold'>Healthy Corner</h1>
        </div>
        <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu} className="text-fg hover:text-muted focus:outline-none cursor-pointer">
                <i className='fas fa-bars text-2xl'></i>
            </button>
        </div>
        
        {/* desktop navigation */}
        <div className='hidden md:flex items-center space-x-6 text-fg'>
            <nav className='flex space-x-4'>
                <a href="#menu" className='hover:text-muted'>Menu</a>
                <a href="#offers" className='hover:text-muted'>Offers</a>
                <a href="#about" className='hover:text-muted'>About</a>
                <a href="#footer" className='hover:text-muted'>Contact</a>
            </nav>
            <a href='#reservation'>
                <button className='bg-primary text-fg px-4 py-2 rounded hover:bg-secondary cursor-pointer'>
                  Make A reservation
              </button>
            </a>
            
            <button className="cursor-pointer" 
              onClick={toggleDark}>
                  <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
        </div> 
        
          {/* Mobile Navigation */}
      {isMenuOpen && (
        <>
          {/* Overlay (Grey background when menu is open) */}
          <div 
            className='md:hidden fixed top-0 left-0 right-0 bottom-0 bg-gray-500/50 z-10'
            onClick={toggleMenu} // Close menu if clicked on the overlay
          />

          {/* Sidebar (Mobile Menu) */}
          <div 
            className='md:hidden absolute top-0 left-0 h-full w-1/2 bg-bg text-fg
            shadow-lg rounded-lg p-4 z-20 flex flex-col items-center'>
            <div className='w-full flex flex-col items-center space-x-3 mb-4 header-logo-line bg-bg'>
                <img src={logo} alt="Healthy Corner Logo" 
                className='h-20 w-20 object-contain'
                />
                <h1 className='text-2xl font-bold'>Healthy Corner</h1>
            </div>
            <nav className='w-full flex flex-col justify-center items-center space-y-4 mb-4 header-logo-line'>   
                <a onClick={toggleMenu} href="#menu" className='hover:text-muted'>Menu</a>
                <a onClick={toggleMenu} href="#offers" className='hover:text-muted'>Offers</a>
                <a onClick={toggleMenu} href="#about" className='hover:text-muted'>About</a>
                <a onClick={toggleMenu} href="#footer" className='hover:text-muted'>Contact</a>
            </nav>
            <a href='#reservation' onClick={toggleMenu}>
                <button className='bg-primary text-fg px-4 py-2 rounded hover:bg-secondary cursor-pointer'>
                  Make A reservation
              </button>
            </a>

             <button className="mt-6 cursor-pointer" 
              onClick={toggleDark}>
                  <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
          </div>
        </>
      )}
      
    </header>
  )
}


export default Header;