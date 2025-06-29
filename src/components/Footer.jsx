import React from 'react';
import { Mail } from 'lucide-react';
import { FaBitcoin,FaPaypal,FaCcVisa } from "react-icons/fa";
import { GrAmex } from "react-icons/gr";
import { RiMastercardFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white text-sm p-16 ">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 grid sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-3xl font-bold">
            Male <span className="text-red-600">fashion</span>
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            The customer is at the heart of our unique business model, which includes design.
          </p>

          {/* Payment Icons */}
          <div className="flex gap-2 mt-6">
            <FaBitcoin />
            <GrAmex />
            <FaPaypal />
            <RiMastercardFill />
            <FaCcVisa />
          </div>
        </div>

        {/* Shopping Column */}
        <div>
          <h4 className="font-bold mb-4 text-white uppercase text-lg tracking-widest">Shopping</h4>
          <ul className="space-y-2 text-gray-400 cursor-pointer">
            <li>Clothing Store</li>
            <li>Trending Shoes</li>
            <li>Accessories</li>
            <li>Sale</li>
          </ul>
        </div>

        {/* Info Column */}
        <div>
          <h4 className="font-bold mb-4 text-white uppercase text-lg tracking-widest">Shopping</h4>
          <ul className="space-y-2 text-gray-400 cursor-pointer ">
            <li>Contact Us</li>
            <li>Payment Methods</li>
            <li>Delivery</li>
            <li>Return & Exchanges</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-4 text-white uppercase tracking-widest text-lg">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Be the first to know about new arrivals, look books, sales & promos!
          </p>
          <div className="relative border-b border-gray-400 pb-2 flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent outline-none text-gray-300 w-full placeholder-gray-500"
            />
            <Mail size={18} className="absolute right-0 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 py-6 text-sm">
        Copyright © 20252020 All rights reserved | 
        This template is made with <span className="text-red-500">♥</span> by 
        <span className="text-red-500 ml-1">KOJO'S INCOP.</span>
      </div>
    </footer>
  );
};

export default Footer;
