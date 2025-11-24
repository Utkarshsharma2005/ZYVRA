import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // <-- Context hook

const Cart = () => {
    // Context se zaroori data aur functions nikaale
    const { cartItems, cartTotal, removeFromCart } = useCart();
    
    // Taxes aur Shipping calculation
    const TAX_RATE = 0.10; // 10% tax
    const subtotal = cartTotal / (1 + TAX_RATE);
    const taxAmount = cartTotal - subtotal;
    const shipping = cartTotal > 0 ? 0 : 0; // Free shipping for simplicity

    return (
        <div className="container mx-auto p-4 md:p-12 min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center">Your Shopping Cart</h1>

            {cartItems.length === 0 ? (
                // Jab Cart Khaali Ho
                <div className="text-center py-20 bg-gray-900 rounded-lg">
                    <p className="text-2xl text-gray-400">Your shopping bag is empty.</p>
                    <Link to="/shop" className="mt-4 inline-block text-pink-500 hover:underline">Start Shopping Now</Link>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Side: Cart Items List */}
                    <div className="lg:w-3/4 space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center bg-gray-900 p-4 rounded-lg shadow-md border border-gray-800">
                                {/* Item Image */}
                                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                                
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-400">Rs. {item.price.toFixed(2)}</p>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    {/* Quantity */}
                                    <span className="text-white">Qty: {item.qty}</span>
                                    <span className="text-yellow-500 font-bold">Rs. {(item.price * item.qty).toFixed(2)}</span>
                                    
                                    {/* Remove Button */}
                                    <button 
                                        className="text-red-500 hover:text-red-400 p-2 border border-red-500 rounded text-sm"
                                        onClick={() => removeFromCart(item.id)} // <-- Context function connected
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Cart Summary */}
                    <div className="lg:w-1/4 bg-gray-900 p-6 rounded-lg shadow-xl h-fit">
                        <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-3">Order Summary</h2>
                        
                        <div className="flex justify-between mb-2">
                            <span>Subtotal:</span>
                            <span>Rs. {subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Tax:</span>
                            <span>Rs. {taxAmount.toFixed(2)}</span>
                        </div>
                         <div className="flex justify-between mb-4">
                            <span>Shipping:</span>
                            <span>{shipping === 0 ? 'Free' : `Rs. ${shipping.toFixed(2)}`}</span>
                        </div>

                        <div className="flex justify-between text-xl font-bold pt-3 border-t border-gray-700">
                            <span>Order Total:</span>
                            <span>Rs. {cartTotal.toFixed(2)}</span>
                        </div>
                        
                        <button className="mt-6 w-full py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-pink-600 transition">
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;