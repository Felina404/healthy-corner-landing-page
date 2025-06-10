import { useState } from 'react'
import './App.css'
import Header from './Header.tsx'
import Hero from './Hero.tsx'
import Menu from './Menu.tsx'
import About from './About.tsx'
import Reservation from './Reservation.tsx'
import Footer from './Footer.tsx'
function App() {

  return (
    <>
      <div>
        <Header />
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
