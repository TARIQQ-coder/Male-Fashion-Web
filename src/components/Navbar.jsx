// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, ShoppingCart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  console.log('Navbar cartItems:', cartItems, 'Length:', cartItems.length); // Enhanced debug log

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacts', path: '/contacts' },
  ];

  const pageLinks = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Shopping-Cart', path: '/shopping-cart' },
    { name: 'Checkout', path: '/checkout' },
  ];

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white relative">
      <Link to="/" className="flex items-center" onClick={() => setActiveLink('Home')}>
        <span className="text-4xl font-bold">M</span>
        <span className="text-2xl font-semibold">ale fashion</span>
        <span className="w-2 h-2 bg-red-500 inline-block ml-1"></span>
      </Link>

      <ul className="hidden md:flex gap-8 font-medium text-black relative">
        {mainLinks.map((item, index) => (
          <li key={index} className="relative group cursor-pointer">
            <Link
              to={item.path}
              onClick={() => setActiveLink(item.name)}
              className={`transition duration-300 ${
                activeLink === item.name ? 'text-black' : ''
              }`}
            >
              {item.name}
            </Link>
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-orange-500 transition-all duration-300 ${
                activeLink === item.name ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </li>
        ))}

        <li className="relative group cursor-pointer">
          <div className="flex items-center gap-1">
            <span className="transition duration-300">Pages</span>
            <ChevronDown className="w-4 h-4" />
          </div>

          <ul className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-10">
            {pageLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => setActiveLink(item.name)}
                  className={`block px-4 py-2 whitespace-nowrap transition duration-200 ${
                    activeLink === item.name ? 'text-black bg-gray-100' : 'hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      <div className="hidden md:flex items-center gap-6">
        <Link to="/shopping-cart" className="relative flex items-center cursor-pointer">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full z-10">
            {cartItems.length}
          </span>
        </Link>
      </div>

      <div className="md:hidden">
        <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsMobileOpen(true)} />
      </div>

      <MobileMenu open={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </nav>
  );
};

export default Navbar;