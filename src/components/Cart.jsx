// components/Cart.jsx
import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SalesBag1 from '../assets/SalesBag1.png'
import SalesHat from '../assets/SalesHat.png'
import Jacket1 from '../assets/Jacket1.png'
import SalesJacket1 from '../assets/SalesJacket1.png'
import SalesJacket2 from '../assets/SalesJacket2.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const cartItems = [
  {
    id: 1,
    name: 'Chanel Leather Bag',
    price: 30.00,
    originalPrice: 98.49,
    image: SalesBag1
  },
  {
    id: 2,
    name: 'H&M Cujay',
    price: 32.50,
    originalPrice: 98.49,
    image: SalesHat
  },
  {
    id: 3,
    name: 'Gucci Leather Jacket',
    price: 47.00,
    originalPrice: 98.49,
    image: SalesJacket2
  },
  {
    id: 3,
    name: 'Calvin Klein Winter Coat',
    price: 44.00,
    originalPrice: 78.49,
    image: SalesJacket1
  }
];

const Cart = () => {
  return (
    <div className='mb-20'>
      <div className='bg-[#f3f2ee] py-8 pl-24 my-4'>
            <h2 className='text-2xl font-semibold my-2'>Shopping Cart</h2>
      
            <div className='flex items-center gap-1'>
              <span>Home</span>
              <MdOutlineKeyboardArrowRight className='mt-1' />
              <span>Shop</span>
              <MdOutlineKeyboardArrowRight className='mt-1' />
              <span className='text-[#b7b9c5]'>Shopping Cart</span>
            </div>
          </div>


          <div className='md:grid grid-cols-5 md:mr-20'>

                      <div className="py-6 px-8 col-span-3 md:px-20">
              {/* Header Row */}
             <div className="grid grid-cols-4 font-semibold text-sm uppercase pb-3 border-b">
              <div className="col-span-2">Product</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Total</div>
            </div>

              {/* Cart Items */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-4 items-center gap-4 py-6 border-b"
                >
                  {/* Product Info */}
                  <div className="col-span-2 md:flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-30 object-cover"
                    />
                    <div>
                      <h2>{item.name}</h2>
                      <p className="text-lg font-semibold">${item.originalPrice}</p>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center justify-center">
                    <div className="flex items-center border px-2 py-1">
                      <ChevronLeft className="w-4 h-4 cursor-pointer" />
                      <span className="px-2">1</span>
                      <ChevronRight className="w-4 h-4 cursor-pointer" />
                    </div>
                  </div>

                  {/* Total + Remove */}
                  <div className="flex items-center justify-end gap-4 ">
                    <p className="font-semibold text-lg">${item.price.toFixed(2)}</p>
                    <button className="bg-gray-100 rounded-full p-2">
                      <X className="w-5 h-5" strokeWidth={3}/>
                    </button>
                  </div>
                </div>
              ))}

              {/* Footer Buttons */}
              <div className="flex justify-between items-end mt-8">
                <button className="border border-[#e1e1e1] px-20 py-3 uppercase tracking-wider font-semibold">
                  Continue <br/> Shopping
                </button>
                <button className="bg-black text-white  uppercase tracking-wider flex items-center gap-2 px-6 py-3 ">
                  <span className="animate-spin rounded-full border-2 border-white border-t-transparent w-4 h-4"></span>
                  Update Cart
                </button>
              </div>
            </div>

            <div className='col-span-2'>
                   {/* Cart Summary */}
                      <div className="py-4 px-8 space-y-6 ">
          {/* Discount Code */}
                        <div>
                          <h2 className=" font-semibold mb-2 uppercase">Discount Codes</h2>
                          <div className="flex border border-[#e1e1e1] ">
                            <input
                              type="text"
                              placeholder="Coupon code"
                              className="flex-grow px-3 py-3 focus:outline-none "
                            />
                            <button className="bg-black text-white px-6 tracking-widest font-semibold uppercase">
                              Apply
                            </button>
                          </div>
                        </div>

          {/* Cart Total */}
                      <div className="bg-[#f3f2ee] px-6 py-8 space-y-4 my-16">
                        <h2 className=" text-lg uppercase">Cart Total</h2>
                        <div className="flex justify-between">
                          <span className='text-[#aaa9a5]'>Subtotal</span>
                          <span className="text-red-500 font-semibold">$ 169.50</span>
                        </div>
                        <div className="flex justify-between ">
                          <span className='text-[#aaa9a5]'>Total</span>
                          <span className="text-red-500 font-semibold">$ 169.50</span>
                        </div>
                        <button className="w-full bg-black text-white py-3 mt-4  font-semibold tracking-widest uppercase">
                          Proceed to Checkout
                        </button>
                          </div>
                        </div>
            </div>

          </div>
    </div>
  );
};

export default Cart;
