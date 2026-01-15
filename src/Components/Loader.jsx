import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] w-full bg-black">
            <div className="relative flex items-center justify-center">
                {/* Outer Rotating Ring - Dashed */}
                <div className="w-24 h-24 border-4 border-gray-800 border-dashed rounded-full animate-spin-slow"></div>

                {/* Inner Reverse Rotating Ring - Accent Color */}
                <div className="absolute w-16 h-16 border-4 border-t-yellow-500 border-r-transparent border-b-pink-500 border-l-transparent rounded-full animate-spin"></div>

                {/* Center Pulsating Core */}
                <div className="absolute w-4 h-4 bg-white rounded-full animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
            </div>

            {/* Loading Text with Tracking Animation */}
            <div className="mt-8 text-center">
                <p className="text-sm font-black text-gray-400 tracking-[0.3em] animate-pulse">
                    LOADING ASSETS
                </p>
            </div>
        </div>
    );
};

export default Loader;
