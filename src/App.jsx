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
    /* h-screen + flex-col: This locks the app to the viewport.
       overflow-hidden: Prevents the main body from scrolling (we only want the content to scroll).
    */
    <div className='h-screen flex flex-col bg-[#020202] text-white overflow-hidden font-sans'>
      
      {/* 1. Navbar: Height is 80px (h-20) */}
      <Navbar />

      {/* 2. Main Content Area: 
         flex-1: Takes up all available space between Nav and Footer.
         overflow-y-auto: Only this section scrolls if content is long.
      */}
      <main className='flex-1 overflow-y-auto custom-scrollbar'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      {/* 3. Footer: Height is 80px (h-20) */}
      <Footer />

    </div>
  )
}

export default App