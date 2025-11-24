import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS_DATA } from '../data/products';
import { useCart } from '../context/CartContext';

const CATEGORIES = [...new Set(MOCK_PRODUCTS_DATA.map(p => p.category))];
const METALS = [...new Set(MOCK_PRODUCTS_DATA.map(p => p.metal))];

const ProductCard = ({ data }) => {
    const { id, name, price, imageUrl } = data;
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(data, 1);
    };

    return (
        <Link
            to={`/products/${id}`}
            className="product-card bg-gray-900 shadow-lg text-white group cursor-pointer block hover:shadow-white transition duration-300"
        >
            <div className="relative overflow-hidden">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-4 border-t border-gray-700">
                <h3 className="text-lg font-semibold truncate hover:text-yellow-500 transition">
                    {name}
                </h3>
                <p className="text-lg font-bold mt-1 text-gray-300">
                    Rs. {price}
                </p>

                <button
                    className="mt-4 w-full py-2 border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition focus:outline-none"
                    onClick={handleAddToCart}
                >
                    ADD TO CART
                </button>
            </div>
        </Link>
    );
};

function ProductListing() {
    const [loading, setLoading] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState(5000);
    const [sortBy, setSortBy] = useState('default');

    // Simulate loading
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
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
        return <div className=" text-4xl text-style-italic p-12 text-center text-yellow-500">PLEASE WAIT...LOADING...</div>;
    }

    return (
        <div className="bg-black container mx-auto p-4 md:p-12 min-h-screen">
            <h1 className="text-4xl font-bold mb-8">SHOP COLLECTION</h1>

            <div className="flex flex-col lg:flex-row">
                {/* Sidebar Filters */}
                <div className="w-full lg:w-1/4 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-gray-800 mb-8 lg:mb-0">
                    <h2 className="text-xl font-semibold mb-4 text-yellow-500">Filter By</h2>
                    <div className="space-y-6">
                        <div>
                            <p className="font-medium mb-2">Category</p>
                            <ul className="text-sm text-gray-400 space-y-2">
                                {CATEGORIES.map(category => (
                                    <li key={category} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="mr-2 accent-yellow-500"
                                            checked={selectedCategories.includes(category)}
                                            onChange={() => handleCategoryChange(category)}
                                        />
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium mb-2">Max Price: Rs. {priceRange}</p>
                            <input
                                type="range"
                                min="0"
                                max="10000"
                                step="100"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                className="w-full accent-yellow-500"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>0</span>
                                <span>10000</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="w-full lg:w-3/4 lg:pl-8">
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-gray-400 text-sm">
                            Showing {filteredProducts.length} products
                        </p>
                        <select
                            className="bg-gray-800 p-2 rounded text-sm border border-gray-700 focus:outline-none focus:border-yellow-500"
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
                            <div className="col-span-3 text-center py-12">
                                <p className="text-xl text-gray-400 mb-2">No products found.</p>
                                <button
                                    onClick={() => {
                                        setSelectedCategories([]);
                                        setPriceRange(10000);
                                        setSortBy('default');
                                    }}
                                    className="text-white hover:underline"
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
