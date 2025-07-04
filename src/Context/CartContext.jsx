// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log('CartProvider cartItems:', cartItems); // Debug: Log state on every render

  const addToCart = (product) => {
    console.log('addToCart called with product:', product);
    if (!product || !product.id) {
      console.error('Invalid product:', product);
      return;
    }
    setCartItems((prev) => {
      console.log('Previous cartItems:', prev);
      const existingItem = prev.find((item) => item.originalId === product.id);
      if (existingItem) {
        console.log('Item exists, incrementing quantity:', existingItem);
        const updatedItems = prev.map((item) =>
          item.originalId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        console.log('Updated cartItems:', updatedItems);
        return updatedItems;
      }
      const newItem = { ...product, id: uuidv4(), originalId: product.id, quantity: 1 };
      console.log('New item added:', newItem);
      const newCartItems = [...prev, newItem];
      console.log('New cartItems:', newCartItems);
      return newCartItems;
    });
  };

  const removeFromCart = (id) => {
    console.log('Removing item with id:', id);
    setCartItems((prev) => {
      const newItems = prev.filter((item) => item.id !== id);
      console.log('After remove cartItems:', newItems);
      return newItems;
    });
  };

  const updateQuantity = (id, quantity) => {
    console.log('Updating quantity for id:', id, 'to:', quantity);
    setCartItems((prev) => {
      const newItems = prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      );
      console.log('After updateQuantity cartItems:', newItems);
      return newItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};