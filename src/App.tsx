import { useState } from 'react'
import './App.css'
import Header from './Header.tsx'
import Hero from './Hero.tsx'
import Menu from './Menu.tsx'
import About from './About.tsx'
import Reservation from './Reservation.tsx'
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
      </div>
    </>
  )
}

export default App
