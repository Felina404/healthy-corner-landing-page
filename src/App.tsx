import { useState } from 'react'
import './App.css'
import Header from './Header.tsx'
import Hero from './Hero.tsx'
function App() {

  return (
    <>
      <div>
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </>
  )
}

export default App
