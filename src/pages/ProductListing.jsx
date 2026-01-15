import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS_DATA } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../Components/ProductCard';
import Loader from '../Components/Loader';

const CATEGORIES = [...new Set(MOCK_PRODUCTS_DATA.map(p => p.category))];
const METALS = [...new Set(MOCK_PRODUCTS_DATA.map(p => p.metal))];

function ProductListing() {
    const [loading, setLoading] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState(10000);
    const [sortBy, setSortBy] = useState('default');

    // Simulate loading with new aesthetic loader
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500); // Increased slightly to show off the animation
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev => {
            if (prev.includes(category)) {
                return prev.filter(c => c !== category);
            } else {
                return [...prev, category];
            }
        });
    };

    const filteredProducts = useMemo(() => {
        let result = [...MOCK_PRODUCTS_DATA];

        // Filter by Category
        if (selectedCategories.length > 0) {
            result = result.filter(p => selectedCategories.includes(p.category));
        }

        // Filter by Price
        result = result.filter(p => p.price <= priceRange);

        // Sort
        if (sortBy === 'price-low-high') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high-low') {
            result.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'newest') {
            result.sort((a, b) => b.id - a.id); // Assuming higher ID is newer
        }

        return result;
    }, [selectedCategories, priceRange, sortBy]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="bg-black container mx-auto p-4 md:p-12 min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-white uppercase tracking-wider">Shop Collection</h1>

            <div className="flex flex-col lg:flex-row">
                {/* Sidebar Filters */}
                <div className="w-full lg:w-1/4 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-gray-800 mb-8 lg:mb-0">
                    <h2 className="text-xl font-semibold mb-6 text-yellow-500 uppercase tracking-widest">Filter By</h2>
                    <div className="space-y-8">
                        <div>
                            <p className="font-bold text-white mb-3 uppercase text-sm tracking-wide">Category</p>
                            <ul className="text-sm text-gray-400 space-y-3">
                                {CATEGORIES.map(category => (
                                    <li key={category} className="flex items-center hover:text-white transition-colors">
                                        <input
                                            type="checkbox"
                                            className="mr-3 accent-yellow-500 w-4 h-4 cursor-pointer"
                                            checked={selectedCategories.includes(category)}
                                            onChange={() => handleCategoryChange(category)}
                                        />
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="font-bold text-white mb-3 uppercase text-sm tracking-wide">Max Price: Rs. {priceRange}</p>
                            <input
                                type="range"
                                min="0"
                                max="10000"
                                step="100"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                className="w-full accent-yellow-500 cursor-pointer"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                                <span>Rs. 0</span>
                                <span>Rs. 10000</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="w-full lg:w-3/4 lg:pl-8">
                    <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                        <p className="text-gray-400 text-sm font-mono uppercase">
                            Showing <span className="text-white font-bold">{filteredProducts.length}</span> products
                        </p>
                        <select
                            className="bg-black text-white p-2 text-sm border border-gray-700 focus:outline-none focus:border-yellow-500 uppercase tracking-wide cursor-pointer"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="default">Sort by: Default</option>
                            <option value="price-low-high">Price: Low to High</option>
                            <option value="price-high-low">Price: High to Low</option>
                            <option value="newest">Newest First</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <ProductCard key={product.id} data={product} />
                            ))
                        ) : (
                            <div className="col-span-3 text-center py-20 border border-dashed border-gray-800 rounded-lg">
                                <p className="text-xl text-gray-500 mb-4 uppercase tracking-widest">No products found</p>
                                <button
                                    onClick={() => {
                                        setSelectedCategories([]);
                                        setPriceRange(10000);
                                        setSortBy('default');
                                    }}
                                    className="text-yellow-500 hover:text-yellow-400 font-bold uppercase tracking-wider underline underline-offset-4"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductListing;
