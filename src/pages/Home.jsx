import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import { MOCK_PRODUCTS_DATA } from '../data/products';
import Marquee from 'vanilla-marquee';

// Mock Data for Featured Products (Video mein 3 items hain)
const featuredProducts = MOCK_PRODUCTS_DATA.filter(product => [1, 2, 3].includes(product.id));

const Home = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        if (marqueeRef.current) {
            new Marquee(marqueeRef.current, {
                speed: 35,
                gap: 0,
                duplicated: false,
                startVisible: true,
            });
        }
    }, []);

    return (
        <div className="bg-black text-white min-h-screen">

            <div className="pt-1"></div>

            {/* Infinite Marquee Section */}
            <div className="bg-black text-white overflow-hidden py-2 border-b border-gray-800 relative z-20">
                <div ref={marqueeRef} className="whitespace-nowrap flex items-center">
                    {[...Array(10 * 2)].map((_, i) => (
                        <span key={`marquee-${i}`} className="text-sm font-bold tracking-widest uppercase mx-8">
                            50% OFF ON ANY JEWELRY!
                        </span>
                    ))}
                </div>
            </div>

            {/* 1. Hero Section 1: Image Background */}
            <section
                className="relative h-screen flex items-center justify-start p-8 md:p-16"
                style={{ backgroundImage: `url(./public/zyvarimg.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {/* Dark overlay jaisa video mein dikh raha hai */}
                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="relative max-w-lg z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter">
                        Elevate The Basics. Own The Detail.
                    </h1>
                    <Link to="/shop" className="mt-8 inline-block px-8 py-3 text-sm font-semibold bg-white text-black hover:bg-gray-200 transition">
                        SHOP NOW
                    </Link>
                </div>
            </section>

            {/* 2. Hero Section 2: Bold Text */}
            <section className="py-20 text-center bg-black border-b border-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight">
                        STATEMENT PIECES. <br /> EVERYDAY ICONS.
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg">
                        Jewelry Designed To Elevate The Everyday. Made For Him — Built To Stand Apart.
                    </p>
                </div>
            </section>

            {/* 3. Deals/Promotion Section */}
            <section
                className="relative py-16 text-center border-b border-gray-800 overflow-hidden"
            >
                {/* Comic Background Lines (Tailwind Custom Styling) */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        // Simulate Comic/Speed lines
                        backgroundImage: `url('../public/home-banner2.webp')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                ></div>

                <div className="relative z-10 container mx-auto px-4">
                    {/* Title/CTA */}
                    <p className="text-4xl font-black text-white uppercase tracking-widest mb-4 animate-pulse">
                        MASSIVE DROP ALERT!
                    </p>

                    {/* BOLD 50% OFF TEXT with Comic Outline */}
                    <h2 className="text-8xl md:text-9xl font-black tracking-tighter text-white">
                        <span className="text-white">50%</span> OFF
                    </h2>

                    <p className="mt-6 text-2xl text-black uppercase font-extrabold">
                        ALL STATEMENT PIECES
                    </p>

                    {/* Button: Match the Vibe (Black/White/Pink Pop) */}
                    <Link
                        to="/shop"
                        className="mt-10 inline-block px-12 py-5 text-lg font-bold bg-white text-pink-600 rounded-lg shadow-2xl border-4 border-black transition transform hover:scale-105 hover:bg-gray-100"
                        style={{ boxShadow: '5px 5px 0px #000' }} // Button ka bhi pop effect
                    >
                        SHOP NOW!
                    </Link>
                </div>
            </section>

            {/* 4. Featured Products Section */}
            <section className="py-20 bg-black border-b border-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-10 text-center">Featured Items</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} data={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why Zyvra Section */}
            <section className="py-20 text-center bg-black border-b border-gray-800">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-widest text-yellow-500">WHY ZYVRA?</h2>
                    <h3 className="text-2xl font-semibold mt-4">
                        Luxury Isn't Loud. It's Worn Well.
                    </h3>
                    <ul className="mt-8 space-y-4 text-left text-gray-300 list-none">
                        <li className="flex items-start">
                            <span className="mr-3 text-pink-500">•</span>
                            <span>Minimal Designs with Maximum Edge</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-pink-500">•</span>
                            <span>Crafted With Premium Hypoallergenic Metals</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-pink-500">•</span>
                            <span>Designed For All-Day Flex And Shine</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 6. CTA Sections (Refer & Earn / Join The Team) */}
            <section className="py-20 text-center bg-black border-b border-gray-800">
                <div className="container mx-auto px-4">
                    {/* Refer & Earn */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold tracking-wider">REFER <span className="text-pink-500">&</span> EARN</h2>
                        <p className="mt-2 text-gray-400">
                            Share The Love And Get Rewarded When Your Friends Make A Purchase!
                        </p>
                        <button className="mt-6 px-10 py-3 text-sm font-semibold border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                            Become A Member
                        </button>
                    </div>

                    {/* Join The Team */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-wider">JOIN THE TEAM</h2>
                        <p className="mt-2 text-gray-400">
                            Be The First In Line For New Drops, Limited Offers, And VIP Community Events
                        </p>
                    </div>
                </div>
            </section>

            {/* Note: Footer is outside Home.jsx, probably in App.jsx */}
        </div>
    );
};

export default Home;