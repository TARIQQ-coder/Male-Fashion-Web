// src/Pages/Checkout.jsx
import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { LiaTagSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Checkout() {
  const { cartItems, setCartItems } = useCart();
  console.log('Checkout cartItems:', cartItems); // Debug log

  // Calculate subtotal
  const subtotal = cartItems
    .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  // Handle Place Order (placeholder: logs order and clears cart)
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      console.log('No items in cart to place order.');
      alert('Your cart is empty. Please add items to proceed.');
      return;
    }

    const orderDetails = {
      items: cartItems.map((item, index) => ({
        position: index + 1,
        name: item.name,
        quantity: item.quantity || 1,
        price: item.price,
        total: (item.price * (item.quantity || 1)).toFixed(2),
      })),
      subtotal: subtotal,
      timestamp: new Date().toISOString(),
    };
    console.log('Order placed:', orderDetails);

    // Optionally clear cart after order (uncomment if desired)
    // setCartItems([]);
    alert('Order placed successfully! Check console for details.');
  };

  return (
    <div>
      <div className="bg-[#f3f2ee] py-8 pl-24 my-4 mt-18">
        <h2 className="text-2xl font-semibold my-2">Check Out</h2>
        <div className="flex items-center gap-1">
          <Link to="/" className="hover:text-blue-500 hover:underline">
            Home
          </Link>
          <MdOutlineKeyboardArrowRight className="mt-1" />
          <Link to="/shop" className="hover:text-blue-500 hover:underline">
            Shop
          </Link>
          <MdOutlineKeyboardArrowRight className="mt-1" />
          <span className="text-[#b7b9c5]">Check Out</span>
        </div>
      </div>

      <div>
        <div className="md:grid grid-cols-5">
          <div className="max-w-4xl mx-auto px-25 bg-white col-span-3">
            <div className="my-6 relative">
              <input
                type="text"
                className="border-t-2 w-full bg-[#f5f5f5] py-4 pl-14 border-green-600 text-sm placeholder:text-black outline-none"
                placeholder=" Have a coupon? Click here to enter your code"
              />
              <LiaTagSolid className="w-5 h-5 absolute top-4.5 left-5" />
            </div>

            <h2 className="text-lg font-semibold mb-4 border-b pb-4 border-gray-300">
              BILLING DETAILS
            </h2>
            <form className="space-y-6 my-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg text-gray-700 mb-1 font-medium">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-lg text-gray-700 mb-1 font-medium">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg text-gray-700 mb-1 font-medium">
                  Country<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full mb-2 border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Street Address"
                />
                <input
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Apartment, suite, unite ect (optional)"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Town/City<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Town/City"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Country/State<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Country/State"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Postcode/ZIP<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg text-gray-700 mb-1 font-medium">
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-lg text-gray-700 mb-1 font-medium">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    id="create-new-account"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="create-new-account" className="text-gray-700">
                    Create an account?
                  </label>
                </div>
                <p className="text-sm font-medium">
                  Create an account by entering the information below. If you are a returning
                  customer please login at the top of the page
                </p>
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Account Password<span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="*****"
                />
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    id="order-note"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="order-note" className="text-gray-700">
                    Note about your order, e.g, special note for delivery
                  </label>
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">
                    Order notes<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Note about your order, eg. special note for delivery."
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Payment summary */}
          <div className="flex justify-center items-start col-span-2 mt-6">
            <div className="max-w-lg p-6 bg-[#f3f2ee]">
              <h2 className="text-2xl font-semibold mb-6">YOUR ORDER</h2>
              <hr className="mb-4 text-gray-400" />

              <div className="flex justify-between mb-6">
                <span>Product</span>
                <span>Total</span>
              </div>

              <div className="space-y-4 text-gray-800">
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <div key={item.id} className="flex justify-between text-lg">
                      <span>
                        {index + 1}. {item.name} x {item.quantity || 1}
                      </span>
                      <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-lg">No items in cart.</div>
                )}
              </div>

              <hr className="my-6 text-gray-400" />

              <div className="flex justify-between space-y-4">
                <span>Subtotal</span>
                <span className="text-red-500 font-semibold">${subtotal}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span className="text-red-500 font-semibold">${subtotal}</span>
              </div>

              <hr className="mb-6 text-gray-400" />

              <div className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  id="create-account"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="create-account" className="text-gray-700">
                  Create an account?
                </label>
              </div>

              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  id="check-payment"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="check-payment" className="text-gray-700">
                  Check Payment
                </label>
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <input
                  type="checkbox"
                  id="paypal"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="paypal" className="text-gray-700">
                  Paypal
                </label>
              </div>

              <div className="flex justify-center py-4">
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="w-2/3 bg-black text-white font-semibold py-3 hover:bg-gray-800 transition"
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;