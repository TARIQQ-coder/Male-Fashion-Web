// components/MobileMenu.jsx
import React from 'react'
import { Menu,Search, Heart, ShoppingBag, X } from 'lucide-react'

const MobileMenu = ({ open, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Slide-in Menu from Left */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        {/* Close Button */}
        <div className="flex justify-end mb-6">
          <X className="w-6 h-6 cursor-pointer" onClick={onClose} />
        </div>

        {/* Icons Row */}
        <div className="flex justify-end gap-6 mb-8">
          <Search className="w-5 h-5 cursor-pointer" />
          <Heart className="w-5 h-5 cursor-pointer" />
          <div className="flex items-center gap-1 cursor-pointer">
            <ShoppingBag className="w-5 h-5" />
            <span className="text-sm font-medium">$0.00</span>
          </div>
        </div>

        {/* Nav Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="flex flex-col gap-4 text-md font-medium text-gray-800">
            {['Home', 'Shop', 'Pages', 'Blog', 'Contacts'].map((item, index) => (
              <li key={index} className="hover:text-orange-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
