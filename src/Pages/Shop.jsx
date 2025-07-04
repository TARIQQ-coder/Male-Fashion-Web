// src/Pages/Shop.jsx
import React, { useState } from 'react';
import { LiaSearchSolid } from 'react-icons/lia';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SalesJacket1 from '../assets/SalesJacket1.png';
import SalesJacket2 from '../assets/SalesJacket2.png';
import SalesCap1 from '../assets/SalesCap1.png';
import SalesCap2 from '../assets/SalesCap2.png';
import SalesShoe1 from '../assets/SalesShoe1.png';
import SalesShoe2 from '../assets/SalesShoe2.png';
import SalesShoe3 from '../assets/SalesShoe3.png';
import SalesBag1 from '../assets/SalesBag1.png';
import SalesHoodie from '../assets/SalesHoodie.png';
import SalesHat from '../assets/SalesHat.png';
import SalesBoot from '../assets/SalesBoot.png';
import SalesScarf from '../assets/SalesScarf.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useCart } from '../context/CartContext';
import {Link} from 'react-router-dom';

const Shop = () => {
  const { addToCart } = useCart();

  const [openCategories, setOpenCategories] = useState(true);
  const [openBranding, setOpenBranding] = useState(true);
  const [openPrices, setOpenPrices] = useState(true);
  const [openColors, setOpenColors] = useState(true);
  const [openSizes, setOpenSizes] = useState(true);
  const [openTags, setOpenTags] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Men (20)', 'Women (20)', 'Bags (20)', 'Clothing (20)',
    'Shoes (20)', 'Accessories (20)', 'Kids (20)', 'Watches (20)',
    'Beauty (20)', 'Jewelry (20)', 'Sportswear (20)', 'Others (20)',
  ];

  const brands = ['Louis Vuitton', 'Chanel', 'Hermès', 'Gucci'];

  const priceRanges = [
    '$0.00 - $50.00',
    '$50.00 - $100.00',
    '$100.00 - $150.00',
    '$150.00 - $200.00',
    '$200.00 - $250.00',
    '250.00+',
  ];

  const colors = [
    { name: 'Black', code: '#000000' },
    { name: 'Red', code: '#FF0000' },
    { name: 'Blue', code: '#0000FF' },
    { name: 'Green', code: '#008000' },
    { name: 'Yellow', code: '#FFFF00' },
    { name: 'White', code: '#FFFFFF', border: true },
    { name: 'Purple', code: '#800080' },
    { name: 'Orange', code: '#FFA500' },
  ];

  const tags = ['Product', 'Bags', 'Clothing', 'Shoes', 'Accessories', 'Men', 'Women', 'Kids'];

  const sizes = ['XS', 'S', 'M', 'XL', '2XL', 'XXL', '3XL', '4XL'];

  const products = [
    { id: 1, name: 'Piqué Biker Jacket', price: 67.24, image: SalesJacket1 },
    { id: 2, name: 'Diagonal Leather Jacket', price: 60.90, image: SalesJacket2, tag: 'SALE', rating: 3 },
    { id: 3, name: 'Simon Baker Cap', price: 67.24, image: SalesCap1, tag: 'SALE', rating: 4 },
    { id: 4, name: 'Nike Max Shoe Black', price: 60.90, image: SalesShoe1 },
    { id: 5, name: 'Nike Max Shoe Green', price: 67.24, image: SalesShoe3 },
    { id: 6, name: 'Diagonal Leather Bag', price: 60.90, image: SalesBag1, tag: 'SALE', rating: 4 },
    { id: 7, name: 'Piqué Biker Cap Black', price: 67.24, image: SalesCap2 },
    { id: 8, name: 'Dopamine Honnex Canvas', price: 60.90, image: SalesShoe2 },
    { id: 9, name: 'Winter Hoodie', price: 72.00, image: SalesHoodie, rating: 3 },
    { id: 10, name: 'Wool Hat', price: 24.50, image: SalesHat, rating: 4 },
    { id: 11, name: 'Nike Max Shoe Blue', price: 60.90, image: SalesShoe1 },
    { id: 12, name: 'Piqué Biker Cap Gray', price: 67.24, image: SalesCap2 },
    { id: 13, name: 'Ankle Boots', price: 98.49, image: SalesBoot, tag: 'SALE', rating: 4 },
    { id: 14, name: 'Basic Flowing Scarf', price: 26.28, image: SalesScarf },
    { id: 15, name: 'Nike Max Shoe Red', price: 60.90, image: SalesShoe1 },
    { id: 16, name: 'Nike Max Shoe Green 2', price: 67.24, image: SalesShoe3 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="bg-[#f3f2ee] py-8 pl-24 my-4 mt-18">
        <h2 className="text-2xl font-bold my-2">Shop</h2>
        <div className="flex items-center gap-1">
          <Link to="/" className="hover:text-blue-500 hover:underline">
            Home
          </Link>
          <MdOutlineKeyboardArrowRight className="mt-1" />
          <span className="text-[#b7b9c5]">Shop</span>
        </div>
      </div>

      <div className="md:px-20">
        <div className="md:grid grid-cols-4">
          <div className="col-span-1">
            <div className="max-w-[530px] mx-auto p-4">
              <div className="max-w-[508px] mx-auto mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full border py-2 pl-4 border-[#e5e5e5] placeholder:text-xl placeholder:text-[#cabfbf] outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <LiaSearchSolid
                    className="w-6 h-6 absolute top-3.5 right-4 text-[#c4baba] cursor-pointer"
                    onClick={() => setSearchQuery('')}
                  />
                </div>
              </div>

              <div className={`w-full mt-8 font-semibold text-black ${openCategories ? 'border-b border-gray-300 pb-4' : ''}`}>
                <div
                  className="flex items-center justify-between cursor-pointer mb-4"
                  onClick={() => setOpenCategories(!openCategories)}
                >
                  <h2 className="text-lg">CATEGORIES</h2>
                  {openCategories ? <ChevronUp size={21} strokeWidth={3.5} /> : <ChevronDown size={21} strokeWidth={3.5} />}
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden pr-2 ${openCategories ? 'max-h-48 overflow-y-auto' : 'max-h-0'}`}
                >
                  <ul className="space-y-2 text-[#b6b2b2]">
                    {categories.map((cat, idx) => (
                      <li key={idx} className="hover:text-black cursor-pointer font-normal">
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`w-full mb-1 font-semibold text-black ${openBranding ? 'border-b border-gray-300 pb-4' : ''}`}>
                <div
                  className="flex items-center justify-between cursor-pointer mb-2"
                  onClick={() => setOpenBranding(!openBranding)}
                >
                  <h2 className="text-lg">BRANDING</h2>
                  {openBranding ? <ChevronUp size={21} strokeWidth={3.5} /> : <ChevronDown size={21} strokeWidth={3.5} />}
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden pr-2 ${openBranding ? 'max-h-48' : 'max-h-0'}`}
                >
                  <ul className="space-y-2 text-[#b6b2b2]">
                    {brands.map((brand, idx) => (
                      <li key={idx} className="hover:text-black cursor-pointer font-normal">
                        {brand}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`w-full mb-1 font-semibold text-black ${openPrices ? 'border-b border-gray-300 pb-4' : ''}`}>
                <div
                  className="flex items-center justify-between cursor-pointer mb-2"
                  onClick={() => setOpenPrices(!openPrices)}
                >
                  <h2 className="text-lg">FILTER PRICES</h2>
                  {openPrices ? <ChevronUp size={21} strokeWidth={3.5} /> : <ChevronDown size={21} strokeWidth={3.5} />}
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden pr-2 ${openPrices ? 'max-h-48' : 'max-h-0'}`}
                >
                  <ul className="space-y-2 text-[#b6b2b2]">
                    {priceRanges.map((range, idx) => (
                      <li key={idx} className="hover:text-black cursor-pointer font-normal">
                        {range}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`w-full font-semibold ${openSizes ? 'border-b border-gray-300 pb-4' : ''}`}>
                <div
                  className="flex items-center justify-between cursor-pointer mb-4"
                  onClick={() => setOpenSizes(!openSizes)}
                >
                  <h2 className="text-lg">SIZE</h2>
                  {openSizes ? <ChevronUp size={21} strokeWidth={3.5} /> : <ChevronDown size={21} strokeWidth={3.5} />}
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openSizes ? 'max-h-40' : 'max-h-0'}`}
                >
                  <ul className="flex gap-2 flex-wrap">
                    {sizes.map((size) => (
                      <li key={size} className="border w-fit border-[#b6b2b2]">
                        <button className="py-1 px-6 font-semibold cursor-pointer">{size}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`w-full mb-4 font-semibold text-black ${openColors ? 'border-b border-gray-300 pb-4' : ''}`}>
                <div
                  className="flex items-center justify-between cursor-pointer mb-2"
                  onClick={() => setOpenColors(!openColors)}
                >
                  <h2 className="text-lg">COLORS</h2>
                  {openColors ? <ChevronUp size={21} strokeWidth={4} /> : <ChevronDown size={21} strokeWidth={4} />}
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openColors ? 'max-h-48' : 'max-h-0'}`}
                >
                  <ul className="flex flex-wrap gap-4 pr-2">
                    {colors.map((color, idx) => (
                      <li key={idx} className="flex flex-col items-center space-y-1 cursor-pointer">
                        <div className="p-1 border border-[#eaeaea] rounded-full">
                          <div
                            className="w-8 h-8 rounded-full"
                            style={{
                              backgroundColor: color.code,
                              border: color.code === '#FFFFFF' ? '1px solid #ccc' : 'none',
                            }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`w-full my-6 font-semibold text-black ${openTags ? 'border-b border-gray-300 pb-4' : ''}`}>
                <div
                  className="flex items-center justify-between cursor-pointer mb-2"
                  onClick={() => setOpenTags(!openTags)}
                >
                  <h2 className="text-lg">TAGS</h2>
                  {openTags ? <ChevronUp size={21} strokeWidth={4} /> : <ChevronDown size={21} strokeWidth={4} />}
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openTags ? 'max-h-40' : 'max-h-0'}`}
                >
                  <div className="flex flex-wrap gap-2 pr-2">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-black hover:bg-black bg-[#eaf0f5] px-3 py-1 cursor-pointer hover:text-white uppercase hover:transition ease-out duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="px-8 flex justify-between my-6">
              <p>Showing 1-12 of {filteredProducts.length} results</p>
              <div>
                <span>
                  Sort by Price:{' '}
                  <select name="" className="font-semibold outline-none transition duration-300">
                    <option value="">Low to High</option>
                    <option value="">$0-$55</option>
                    <option value="">$55-$100</option>
                  </select>
                </span>
              </div>
            </div>

            <div className="px-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
                {filteredProducts.map((product, index) => {
                  const isHovered = hoveredIndex === index;

                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="group"
                    >
                      <div className="relative bg-[#f1eff2] p-4">
                        {product.tag && (
                          <span className="absolute top-6 left-0 bg-black text-white text-xs px-5 py-1 tracking-widest">
                            {product.tag}
                          </span>
                        )}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="mx-auto w-40 h-40 object-contain transition-opacity duration-300"
                        />
                      </div>

                      <div className="mt-4 h-6 overflow-hidden relative">
                        <p
                          onClick={() => {
                            console.log('Adding to cart:', product);
                            addToCart({ ...product, originalId: product.id });
                          }}
                          className={`absolute transition-all duration-300 font-medium left-0 right-0 cursor-pointer z-10 ${
                            isHovered ? 'translate-y-0 opacity-100 text-red-500 underline' : '-translate-y-6 opacity-0 text-black'
                          }`}
                        >
                          Add to Cart
                        </p>
                        <p
                          className={`absolute transition-all duration-300 font-medium left-0 right-0 ${
                            isHovered ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100 text-black'
                          }`}
                        >
                          {product.name}
                        </p>
                      </div>

                      {product.rating ? (
                        <div className="text-orange-400 mt-1">
                          {'★'.repeat(product.rating)}
                          {'☆'.repeat(5 - product.rating)}
                        </div>
                      ) : (
                        <div className="text-gray-300 mt-1">☆☆☆☆☆</div>
                      )}

                      <p className="mt-1 font-semibold">${product.price.toFixed(2)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-8 text-sm font-medium text-black">
          <button className="w-8 h-8 border border-black rounded-full flex items-center justify-center">
            1
          </button>
          <button className="hover:underline">2</button>
          <button className="hover:underline">3</button>
          <span>...</span>
          <button className="hover:underline">21</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;