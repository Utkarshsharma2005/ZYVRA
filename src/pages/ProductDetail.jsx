import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS_DATA } from '../data/products';
import { useCart } from '../context/CartContext'; // <--- NEW IMPORT

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();

    // Find product or fallback to first item
    const product = MOCK_PRODUCTS_DATA.find(p => p.id === parseInt(id)) || MOCK_PRODUCTS_DATA[0];

    // State for selected quantity
    const [qty, setQty] = useState(1);
    

    function handleAddToCart() {
        if (product) {
            addToCart(product, qty);
        }
    }

    const handleBuyNow = () => {
        if (product) {
            addToCart(product, qty);
            alert('Item added and redirecting to Checkout!');
            // navigate to checkout can be added here later
        }
    };

    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side: Image */}
                <div className="lg:w-1/2 flex justify-center">
                    <div className="w-full max-w-xs">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-auto object-cover rounded-lg shadow-xl"
                        />
                    </div>
                </div>

                {/* Right Side: Details */}
                <div className="lg:w-1/2 text-white">
                    <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                    <p className="text-3xl font-light text-yellow-500 mb-6 font-semibold">Rs. {product.price}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

                    {/* Add to Cart/Quantity aur Buy Now Buttons */}
                    <div className="flex items-center space-x-4 mb-8">
                        <input
                            type="number"
                            value={qty}
                            onChange={e => setQty(Math.max(1, parseInt(e.target.value || '1')))}
                            min="1"
                            className="w-20 p-2 bg-gray-800 border border-gray-700 text-center text-white rounded focus:ring-white focus:border-white px-2"
                        />

                        <button
                            type="button"
                            className="flex-grow py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition px-2 align-center"
                            onClick={handleAddToCart}
                        >
                            ADD TO CART
                        </button>

                        <button
                            type="button"
                            className="flex-grow py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-700 transition px-2 mr-4"
                            onClick={handleBuyNow}
                        >
                            BUY NOW
                        </button>
                    </div>

                    {/* Features List */}
                    <div className="border-t border-gray-700 pt-6">
                        <h2 className="text-xl font-semibold mb-3">Product Specifications</h2>
                        <ul className="space-y-2 text-gray-400">
                            {product.details && product.details.map((detail, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="text-pink-500 mr-2">•</span>{detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
