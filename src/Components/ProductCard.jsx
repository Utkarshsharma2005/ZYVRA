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
        <div className="product-card bg-gray-900 shadow-lg text-white group cursor-pointer">
            {/* Product Image */}
            <div className="relative overflow-hidden">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Product Details - Video mein bottom bar type hai */}
            <div className="p-4 border-t border-gray-700">
                {/* Name */}
                <h3 className="text-lg font-semibold truncate">
                    <Link to={`/products/${id}`} className="hover:text-gray-400 transition">{name}</Link>
                </h3>

                {/* Price */}
                <p className="text-lg font-bold mt-1 text-gray-300">
                    Rs. {price}
                </p>

                {/* Add to Cart Button */}
                <button
                    className="mt-4 w-full py-2 border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition focus:outline-none"
                    onClick={handleAddToCart}
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default ProductCard;