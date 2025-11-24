import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Shipping Information</a></li>
              <li><a href="#" className="hover:text-white transition">Return & Exchange Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Order Status</a></li>
            </ul>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">EXPLORE</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">The Movie So Far</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms Of Business</a></li>
            </ul>
          </div>

          {/* Column 3: Shop */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">SHOP</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">View All</a></li>
              <li><a href="#" className="hover:text-white transition">Chains</a></li>
              <li><a href="#" className="hover:text-white transition">New This Week</a></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter/Socials - Video mein ye section hai */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">JOIN OUR COMMUNITY</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get exclusive deals and be the first to know about new drops.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex space-x-3 text-2xl">
                <a href="#" className="hover:text-pink-500 transition">FB</a>
                <a href="https://www.instagram.com/itz_utkarsh_005/?hl=en" className="hover:text-pink-500 transition">IG</a>
                <a href="https://www.linkedin.com/in/utkarsh-sharma-7649a2328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-pink-500 transition">in</a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10 border-t border-gray-800 pt-4 text-xs text-gray-600">
            &copy; {new Date().getFullYear()} ZYVRA. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;