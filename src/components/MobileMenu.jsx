import React, { useState } from 'react';
import { Search, ShoppingCart, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ open, onClose }) => {
  const [activeLink, setActiveLink] = useState('Home');
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);

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
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

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
          <Search className="w-5 h-5 cursor-pointer" />
          <div className="relative flex items-center cursor-pointer">
            <ShoppingCart className="w-5 h-5" />
          </div>
        </div>

        {/* Nav Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="flex flex-col gap-6 text-md font-medium text-black">
            {navLinks.map((item, index) => (
  <li key={index} onClick={onClose}>
    <div className="relative inline-block group">
      <Link
        to={item.path}
        className={`transition duration-300 ${
          activeLink === item.name ? 'text-black' : ''
        }`}
        onClick={() => setActiveLink(item.name)}
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
                    <li key={i} onClick={onClose}>
                      <Link
                        to={item.path}
                        onClick={() => setActiveLink(item.name)}
                        className={`px-2 py-1 rounded-md transition block ${
                          activeLink === item.name ? 'text-black bg-gray-100' : 'hover:bg-gray-100'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
