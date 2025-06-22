import {  useEffect, useState } from 'react'
import './App.css'
import './index.css'
import Header from './Header.tsx'
import Hero from './Hero.tsx'
import Menu from './Menu.tsx'
import About from './About.tsx'
import Reservation from './Reservation.tsx'
import Footer from './Footer.tsx'


function App() {
 const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = raw !== null ? raw === 'true' : prefersDark;

    setIsDarkMode(initial);
    document.documentElement.classList.toggle('dark', initial);
    localStorage.setItem('darkMode', String(initial));
  }, []);
  

  const toggleDark = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('darkMode', String(next));
      return next;
    });
  };

  return (
    <>
      <div className='selection:bg-secondary bg-bg'>
        <Header isDarkMode={isDarkMode} toggleDark={toggleDark}/>
        <Hero />
        <main>
          <Menu />
          <About />
          <Reservation />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
