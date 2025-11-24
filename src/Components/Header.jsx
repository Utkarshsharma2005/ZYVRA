import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { MOCK_PRODUCTS_DATA } from '../data/products';
import AuthModal from './AuthModal';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { cartItems } = useCart();
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const itemCount = cartItems.reduce((total, item) => total + item.qty, 0);

    const searchResults = useMemo(() => {
        if (!searchTerm) return [];
        const query = searchTerm.toLowerCase();
        const results = MOCK_PRODUCTS_DATA.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
        return results.slice(0, 5);
    }, [searchTerm]);

    const handleSearchClick = (product) => {
        setIsSearchOpen(false);
        setSearchTerm('');
        navigate(`/products/${product.id}`);
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.length > 0 && searchResults.length > 0) {
            handleSearchClick(searchResults[0]);
        } else if (searchTerm.length > 0) {
            setIsSearchOpen(false);
            const q = encodeURIComponent(searchTerm);
            setSearchTerm('');
            navigate(`/shop?q=${q}`);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    return (
        <>
            <header className="bg-black text-white p-4 fixed w-full z-50 top-0 border-b border-gray-800">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-xl font-bold tracking-widest">
                        <Link to="/">ZYVRA</Link>
                    </div>

                    <nav className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide">
                        <Link to="/" className="hover:text-gray-400 transition">Home</Link>
                        <Link to="/shop" className="hover:text-gray-400 transition">Shop</Link>
                        <Link to="/about" className="hover:text-gray-400 transition">About</Link>
                        <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <button
                            className="text-white hover:text-gray-400 transition focus:outline-none"
                            onClick={() => {
                                setIsSearchOpen(!isSearchOpen);
                                setSearchTerm('');
                            }}
                            aria-label="Search"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>

                        <Link to="/cart" className="text-white hover:text-gray-400 transition relative" aria-label="Cart">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            {itemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs w-5 h-5 flex items-center justify-center rounded-full text-black font-bold">
                                    {itemCount}
                                </span>
                            )}
                        </Link>

                        {currentUser ? (
                            <button
                                onClick={handleLogout}
                                className="text-sm font-semibold hover:text-gray-400 transition"
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                onClick={() => setIsAuthModalOpen(true)}
                                className="text-sm font-semibold hover:text-gray-400 transition"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>

                {isSearchOpen && (
                    <div className="absolute left-0 right-0 top-16 bg-black p-4 border-t border-gray-800 shadow-xl z-50">
                        <form onSubmit={handleInputSubmit} className="relative">
                            <input
                                type="text"
                                placeholder="Search for rings, chains, bracelets..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white"
                            />
                            <button type="submit" className="hidden" />

                            {searchTerm && searchResults.length > 0 && (
                                <div className="absolute top-full left-0 right-0 bg-gray-900 border border-gray-700 mt-1 shadow-2xl z-50 max-h-60 overflow-y-auto">
                                    {searchResults.map(product => (
                                        <div
                                            key={product.id}
                                            onClick={() => handleSearchClick(product)}
                                            className="p-3 hover:bg-gray-800 cursor-pointer flex items-center transition"
                                        >
                                            <img src={product.imageUrl} alt={product.name} className="w-8 h-8 object-cover rounded mr-3" />
                                            <div className="text-sm">
                                                <p className="font-semibold">{product.name}</p>
                                                <p className="text-pink-500 text-xs">in {product.category}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <button type="button" onClick={() => { setIsSearchOpen(false); setSearchTerm(''); }} className="absolute right-3 top-3 text-gray-500 hover:text-white">
                                &times;
                            </button>
                        </form>
                    </div>
                )}
            </header>
            <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        </>
    );
};

export default Header;
