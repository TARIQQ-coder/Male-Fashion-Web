import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import Footer from './components/Footer'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
         {/* Navbar on all pages */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        {/* Main Navigation Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contact />} />

        {/* Pages Dropdown Routes */}
        <Route path="/about-us" element={<About />} />
        <Route path="/shopping-cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      {/* Footer on all pages */}
      <Footer />
    </div>
  )
}

export default App
