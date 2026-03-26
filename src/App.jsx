import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    /* min-h-screen: Ensures the app is at least the height of the screen.
       flex-col: Stacks Nav, Main, and Footer.
    */
    <div className='min-h-screen flex flex-col bg-[#020202] text-white font-sans'>
      
      {/* 1. Navbar */}
      <Navbar />
<br />
<br />
<br />
      {/* 2. Main Content Area: 
          flex-1: Pushes the footer down if content is short.
          No 'overflow-y-auto' here unless you want a scrollbar inside a scrollbar.
      */}
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      {/* 3. Footer: Will stay at the bottom of the viewport on short pages 
          and stay at the bottom of the document on long pages. */}
      <Footer />

    </div>
  )
}

export default App
