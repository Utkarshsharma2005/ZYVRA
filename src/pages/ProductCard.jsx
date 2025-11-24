import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // <--- NEW IMPORT

const ProductCard = ({ data }) => {
    // Destructure data
    const { id, name, price, imageUrl } = data;
    
    // Cart Context hook se addToCart function nikala
    const { addToCart } = useCart(); // <--- CONTEXT HOOK USE KIYA

    // Cart button click handler
    const handleAddToCart = (e) => {
        // Yeh do lines zaroori hain taaki button click se page redirect na ho
        e.preventDefault(); 
        e.stopPropagation(); 
        
        // --- Naya Cart Logic Yahan Aayega ---
        // addToCart function ko call kiya. Quantity 1 set ki.
        addToCart(data, 1); 
        // alert(`Added ${name} to cart! (ID: ${id})`); // Ab alert ki zaroorat nahi
    };

    return (
        // Poore card ko Link se wrap karo
        <Link 
            to={`/products/${id}`} 
            className="product-card bg-gray-900 shadow-lg text-white group cursor-pointer block hover:shadow-pink-500/30 transition duration-300"
        >
            
            {/* Product Image */}
            <div className="relative overflow-hidden">
                <img 
                    src={imageUrl} 
                    alt={name} 
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            
            {/* Product Details and Button */}
            <div className="p-4 border-t border-gray-700">
                {/* Name, Price (Theek hai) */}
                <h3 className="text-lg font-semibold truncate hover:text-pink-500 transition">
                    {name}
                </h3>
                <p className="text-lg font-bold mt-1 text-gray-300">
                    Rs. {price}
                </p>

                {/* ADD TO CART Button (Connected) */}
                <button 
                    className="mt-4 w-full py-2 border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition focus:outline-none"
                    onClick={handleAddToCart} // <--- Context handler connect kiya
                >
                    ADD TO CART
                </button>
            </div>
            
        </Link>
    );
};

export default ProductCard;