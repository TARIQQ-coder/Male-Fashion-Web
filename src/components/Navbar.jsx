// components/Navbar.jsx
import React, { useState } from 'react'
import { Menu, Search, Heart, ShoppingBag } from 'lucide-react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-sm relative">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-4xl font-bold">M</span>
        <span className="text-2xl font-semibold">ale fashion</span>
        <span className="w-2 h-2 bg-red-500 inline-block ml-1"></span>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-8 text-sm font-medium text-black">
        {['Home', 'Shop', 'Pages', 'Blog', 'Contacts'].map((item, index) => (
          // group allows children to react to the parent’s hover.
          // group-hover applies a hover effect from the parent to a child.
          <li key={index} className="relative group cursor-pointer">
            <span className="transition duration-300 group-hover:text-orange-500">
              {item}
            </span>
            {/* The underline starts invisible and animates into view when hovered. */}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-6">
        <Search className="w-5 h-5 cursor-pointer" />
        <Heart className="w-5 h-5 cursor-pointer" />
        <div className="flex items-center gap-1 cursor-pointer">
          <ShoppingBag className="w-5 h-5" />
          <span className="text-sm font-medium">$0.00</span>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsMobileOpen(true)} />
      </div>

      {/* Mobile Slide-In Menu Component */}
      <MobileMenu open={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </nav>
  )
}

export default Navbar
