

import React, { createContext, useState, useContext } from 'react';

// 1. Context create karna
const CartContext = createContext();

// 2. Custom Hook banana (easy use ke liye)
export const useCart = () => {
  return useContext(CartContext);
};

// 3. Provider Component (Jo data provide karega)
export const CartProvider = ({ children }) => {
  // Cart state: [ { id: 101, qty: 2, price: 1899, name: '...' }, ... ]
  const [cartItems, setCartItems] = useState([]);

  // --- Functions ---
  
  // A. Item Cart mein Add karna
  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        // Agar pehle se hai, toh sirf quantity badha do
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + quantity }
            : item
        );
      } else {
        // Agar naya item hai, toh add kar do
        return [...prevItems, { 
            id: product.id, 
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
            qty: quantity 
        }];
      }
    });
    alert(`${quantity} x ${product.name} Added to Cart!`);
  };

  // B. Item Cart se Remove karna (Abhi zaroori nahi, par pehle se daal dete hain)
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };
  
  // Cart ka total price calculate karna
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  // Saare values jo hum components ko provide karenge
  const value = {
    cartItems,
    cartTotal,
    addToCart,
    removeFromCart,
    // future mein updateQuantity, clearCart bhi daal sakte hain
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};