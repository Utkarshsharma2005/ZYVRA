import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ data }) => {
    const { id, name, price, imageUrl } = data;
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(data, 1);
    };

    return (
        <div className="group relative block bg-black border border-gray-800 hover:border-white transition-colors duration-500">
            {/* Image Container - Adjusted Aspect Ratio to 3/4 */}
            <div className="relative aspect-[3/4] overflow-hidden w-full bg-gray-900">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />

                {/* Overlay Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* Quick Add Button - Slides up on Hover */}
                <button
                    onClick={handleAddToCart}
                    className="absolute bottom-0 left-0 right-0 bg-white text-black font-bold uppercase tracking-widest py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out hover:bg-red-500 hover:text-white"
                >
                    Quick Add +
                </button>
            </div>

            {/* Product Info - Minimalist & Bold */}
            <div className="p-5 flex justify-between items-start relative z-10 bg-black">
                <div className="flex-1 pr-4">
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-none mb-1 group-hover:text-yellow-500 transition-colors">
                        <Link to={`/products/${id}`}>
                            {name}
                        </Link>
                    </h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Limited Edition</p>
                </div>
                <div className="text-right">
                    <p className="text-lg font-bold text-white tabular-nums">Rs.{price}</p>
                </div>
            </div>

            {/* Decorative Corner Borders (Optional "Tech/Cyber" feel) */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-transparent group-hover:border-pink-500 transition-colors duration-300"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-transparent group-hover:border-yellow-400 transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-transparent group-hover:border-yellow-400 transition-colors duration-300"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-transparent group-hover:border-pink-500 transition-colors duration-300"></div>
        </div>
    );
};

export default ProductCard;