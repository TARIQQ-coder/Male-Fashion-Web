import React, { useState, useEffect } from 'react';
import { Menu, ShoppingCart, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const MobileMenu = ({ open, onClose }) => {
  const { cartItems } = useCart();

  const [activeLink, setActiveLink] = useState('Home');
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(false); // Toggle for nav links

  // Collapse dropdown and nav links when menu closes
  useEffect(() => {
    if (!open) {
      setShowPagesDropdown(false);
      setShowNavLinks(false);
    }
  }, [open]);

  const navLinks = [
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
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-6">
          <X className="w-6 h-6 cursor-pointer" onClick={onClose} />
        </div>

        {/* Icons */}
        <div className="flex justify-end gap-6 mb-8">
          <div className="relative flex items-center cursor-pointer">
            <Link to="/shopping-cart" onClick={onClose}>
              <ShoppingCart className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Menu Button and Descriptive Text */}
        <div className="mb-6">
          <button
            className="w-full bg-gray-700 text-white py-2 px-4 rounded-none flex items-center justify-center gap-2"
            onClick={() => setShowNavLinks(!showNavLinks)}
            aria-expanded={showNavLinks}
            aria-controls="nav-links"
          >
            <span className="text-lg font-semibold">MENU</span>
            <Menu className="w-5 h-5" />
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Explore our collections, shop the latest trends, and more!
          </p>
        </div>

        {/* Navigation Links (hidden until toggled) */}
        <ul
          id="nav-links"
          className={`flex flex-col gap-6 text-md font-medium text-black transition-all duration-300 ease-in-out ${
            showNavLinks ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          {navLinks.map((item, index) => (
            <li key={index}>
              <div className="relative inline-block group">
                <Link
                  to={item.path}
                  onClick={() => {
                    setActiveLink(item.name);
                    onClose();
                  }}
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
              </div>
            </li>
          ))}

          {/* Pages Dropdown */}
          <li>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setShowPagesDropdown(!showPagesDropdown)}
            >
              <span className="transition duration-300">Pages</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showPagesDropdown ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>

            {showPagesDropdown && (
              <ul className="mt-3 ml-4 flex flex-col gap-4">
                {pageLinks.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => {
                      setActiveLink(item.name);
                      setShowPagesDropdown(false);
                      onClose();
                    }}
                    className={`px-2 py-1 rounded-md transition block ${
                      activeLink === item.name ? 'text-black bg-gray-100' : 'hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;