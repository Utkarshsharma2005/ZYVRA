// src/pages/About.jsx

import React from 'react';

const About = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            
           
            <section className="relative pt-24 pb-20">
                {/* Background image + dark overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://t4.ftcdn.net/jpg/05/69/28/57/360_F_569285702_WAdBnbjWvFcxdBkV3wf4tBJuSlAm80un.jpg"
                        alt="About Us"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Foreground content */}
                <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white-500 mb-6">
                        OUR STORY
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-drake leading-relaxed">
                        We believe luxury isn't about being loud; it's about being worn well. ZYVRA was founded on the principle of crafting bold, minimalist jewelry built for the everyday journey.
                    </p>
                </div>
            </section>
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4 max-w-5xl">
                    
                    {/* Left/Right Text Block */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="lg:pr-8">
                            <h2 className="text-4xl font-bold mb-4">
                                The Vision: Built to Stand Apart.
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                Our journey started with a simple observation: men’s jewelry lacked pieces that were both durable and sophisticated. We decided to fill that gap, focusing on premium, hypoallergenic metals and timeless designs that transition effortlessly from day to night.
                               
                            </p>
                            <p className="text-gray-400 leading-relaxed mt-4">
                                Har ek piece ZYVRA mein sirf ek accessory nahi hai—yeh ek statement hai jo tumhari individuality ko amplify karta hai.
                            </p>
                        </div>
                        <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden shadow-2xl">
                             <img 
                                src="https://shop.gaatha.com/image/catalog/Gaatha/02_02_2023/Kanupriya-l-Vintage-Jewelry-Light-Weight-Hansli-Hollow-Necklace-Poli-Hansali-Hollow-Hansadi-Two-Size-Options.jpg" 
                                alt="Craftsmanship" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>
                    
                    {/* Core Values List */}
                    <div className="border-t border-gray-800 pt-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            
                            <div className="p-6 bg-gray-900 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-orange-500 mb-2">Quality First</h3>
                                <p className="text-gray-400 text-sm">We use only premium hypoallergenic stainless steel and PVD plating for maximum longevity and shine.</p>
                            </div>
                            
                            <div className="p-6 bg-gray-900 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-white-500 mb-2">Minimalist Edge</h3>
                                <p className="text-gray-400 text-sm">Designs that are minimal, bold, and modern, ensuring you always stand out without trying too hard.</p>
                            </div>
                            
                            <div className="p-6 bg-gray-900 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-green-500 mb-2">Wearability</h3>
                                <p className="text-gray-400 text-sm">Designed to be worn every day, everywhere—waterproof, sweatproof, life-proof.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;