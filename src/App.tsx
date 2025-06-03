import { useState } from 'react'
import './App.css'
import Header from './Header.tsx'
import Hero from './Hero.tsx'
import Menu from './Menu.tsx'
function App() {

  return (
    <>
      <div>
        <Header />
        <Hero />
        <main>
          <Menu />
        </main>
      </div>
    </>
  )
}

export default App
