import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import { MOCK_PRODUCTS_DATA } from '../data/products';
import Marquee from 'vanilla-marquee';

// Mock Data for Featured Products (Video mein 3 items hain)
const featuredProducts = MOCK_PRODUCTS_DATA.filter(product => [1, 2, 3].includes(product.id));

const Home = () => {
    const marqueeRef = useRef(null);
    // Dynamic Element: Countdown Timer Logic
    const [timeLeft, setTimeLeft] = React.useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Set target time to midnight tonight (or any future date)
        const targetDate = new Date();
        targetDate.setHours(24, 0, 0, 0); // Next midnight

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ hours, minutes, seconds });
            } else {
                // If timer expires, maybe reset or show "LIV E"
                // For demo, let's just hold at 00
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

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
                style={{ backgroundImage: `url(/zvyra.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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

            {/* 3. Deals/Promotion Section - REDESIGNED with DYNAMIC TIMER */}
            <section
                className="relative py-24 text-center border-b border-gray-800 overflow-hidden flex items-center justify-center min-h-[600px]"
            >
                {/* Promo Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('/promo_banner_bg.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Gradient Overlay for Text Pop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">

                    {/* Pulsating Alert */}
                    <div className="inline-block bg-red-600 text-white font-bold px-4 py-1 rounded-full mb-6 animate-pulse uppercase tracking-widest text-sm">
                        🔴 Live Drop Countdown
                    </div>

                    {/* Dynamic Countdown Timer */}
                    <div className="flex space-x-4 md:space-x-8 mb-8 text-white">
                        <div className="flex flex-col items-center">
                            <span className="text-5xl md:text-7xl font-black tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</span>
                            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Hours</span>
                        </div>
                        <span className="text-4xl md:text-6xl font-thin text-gray-600">:</span>
                        <div className="flex flex-col items-center">
                            <span className="text-5xl md:text-7xl font-black tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Mins</span>
                        </div>
                        <span className="text-4xl md:text-6xl font-thin text-gray-600">:</span>
                        <div className="flex flex-col items-center">
                            <span className="text-5xl md:text-7xl font-black tabular-nums text-yellow-500">{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Secs</span>
                        </div>
                    </div>

                    {/* Typography */}
                    <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 leading-none">
                        50% OFF
                    </h2>

                    <p className="mt-4 text-2xl md:text-3xl text-gray-300 uppercase font-bold tracking-[0.2em]">
                        All Statement Pieces
                    </p>

                    {/* Primary Action Button */}
                    <Link
                        to="/shop"
                        className="mt-12 inline-block px-12 py-5 text-xl font-bold bg-white text-black rounded-none transition transform hover:scale-105 hover:bg-yellow-400 hover:text-black border-2 border-transparent hover:border-black shadow-[0px_0px_20px_rgba(255,255,255,0.2)]"
                    >
                        SHOP THE DROP
                    </Link>
                </div>
            </section>

            {/* 4. Featured Products Section - REDESIGNED */}
            <section className="py-24 bg-black border-b border-gray-800 relative z-10">
                {/* Small Marquee Top */}
                <div className="w-full border-b border-gray-800 mb-12 py-2 overflow-hidden bg-white text-black">
                    <div className="whitespace-nowrap animate-marquee flex items-center gap-12">
                        {[...Array(10)].map((_, i) => (
                            <span key={i} className="text-xs font-black uppercase tracking-[0.3em]">
                                Limited Stock • Exclusive Drop • Worldwide Shipping •
                            </span>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="mb-24 text-center relative pt-12">
                        {/* Background Text Overlay - Adjusted position and Z-index to prevent overlap */}
                        <h2 className="text-[4rem] md:text-[8rem] font-black text-gray-800 opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none tracking-tighter whitespace-nowrap z-0">
                            FEATURED
                        </h2>

                        <h2 className="relative text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 shadow-black drop-shadow-md">
                            Fresh <span className="text-yellow-500">Drops</span>
                        </h2>
                        <p className="text-gray-400 uppercase tracking-widest font-bold text-sm">
                            Curated pieces for the modern aesthetic.
                        </p>
                    </div>

                    {/* Grid updated to 3 columns but constrained max-width to keep cards smaller and centered */}
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} data={product} />
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link to="/shop" className="inline-block text-white border-b-2 border-white pb-1 text-xl font-bold uppercase tracking-widest hover:text-pink-500 hover:border-pink-500 transition-all">
                            View All Collection &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. Why Zyvra Section - REDESIGNED */}
            <section className="py-24 bg-black text-center border-b border-gray-800 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white mb-2">
                        WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">ZYVRA?</span>
                    </h2>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-widest mb-16">
                        Luxury Isn't Loud. It's Worn Well.
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="group border-2 border-white p-8 hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)]">
                            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💎</div>
                            <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">Minimal Edge</h4>
                            <p className="text-sm font-bold uppercase tracking-wide opacity-80">
                                Designs that speak without shouting. curated for the bold.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group border-2 border-white p-8 hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(236,72,153,0.5)]">
                            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                            <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">Premium Metal</h4>
                            <p className="text-sm font-bold uppercase tracking-wide opacity-80">
                                Hypoallergenic. Sweat-proof. Built for the daily grind.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group border-2 border-white p-8 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(250,204,21,0.5)]">
                            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
                            <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">All-Day Flex</h4>
                            <p className="text-sm font-bold uppercase tracking-wide opacity-80">
                                Comfort meets chaos. shine fully, from am to pm.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA Sections (Refer & Earn / Join The Team) - REDESIGNED */}
            <section className="py-24 bg-black border-b border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* REFER & EARN - BOX STYLE */}
                        <div className="relative border-4 border-dashed border-gray-700 p-12 text-center overflow-hidden group hover:border-pink-500 transition-colors duration-300">
                            {/* Background deco */}
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-pink-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>

                            <h2 className="text-5xl md:text-6xl font-black italic text-white mb-4 tracking-tighter">
                                REFER <span className="text-pink-500">&</span> EARN
                            </h2>
                            <p className="text-gray-400 text-lg font-bold uppercase tracking-wide mb-8">
                                Share The Love. Get Paid. Simple.
                            </p>
                            <button className="relative inline-block px-10 py-4 bg-transparent border-4 border-white text-white font-black text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all transform hover:scale-105 hover:shadow-[5px_5px_0px_0px_#ec4899]">
                                Become A Member
                            </button>
                        </div>

                        {/* JOIN THE TEAM - BOX STYLE */}
                        <div className="relative flex flex-col justify-center items-center p-12 text-center bg-gray-900 border-4 border-gray-900 hover:border-yellow-400 transition-colors duration-300">
                            <h2 className="text-5xl md:text-6xl font-black uppercase text-white mb-4 tracking-tighter">
                                JOIN THE TEAM
                            </h2>
                            <p className="text-gray-400 text-lg font-bold uppercase tracking-wide mb-8 max-w-md">
                                First in line for refined drops. VIP Access only.
                            </p>
                            <div className="flex gap-4">
                                <input type="email" placeholder="ENTER YOUR EMAIL" className="bg-black border-2 border-gray-700 text-white px-6 py-3 font-bold placeholder-gray-600 focus:outline-none focus:border-yellow-400 uppercase tracking-wide" />
                                <button className="bg-yellow-400 text-black border-2 border-yellow-400 px-6 py-3 font-black uppercase hover:bg-yellow-300 transition-colors">
                                    JOIN
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Note: Footer is outside Home.jsx, probably in App.jsx */}
        </div>
    );
};

export default Home;