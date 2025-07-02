import React, { useState } from 'react';
import { Menu, Search, Heart, ShoppingBag } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = ['Home', 'Shop', 'Pages', 'Blog', 'Contacts'];

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white relative">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-4xl font-bold">M</span>
        <span className="text-2xl font-semibold">ale fashion</span>
        <span className="w-2 h-2 bg-red-500 inline-block ml-1"></span>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-8 font-medium text-black">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setActiveLink(item)}
          >
            <span className={`transition duration-300 ${activeLink === item ? 'text-black' : ''}`}>
              {item}
            </span>
            {/* Hover underline & active underline */}
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-orange-500 transition-all duration-300
                ${activeLink === item ? 'w-full' : 'w-0 group-hover:w-full'}
              `}
            ></span>
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

      {/* Mobile Slide-In Menu */}
      <MobileMenu open={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </nav>
  );
};

export default Navbar;
