import React, { useState } from 'react';

const Contact = () => {
    // Netlify Forms ke liye state aur handleSubmit function ki zaroorat nahi hai, 
    // kyunki Netlify form submission ko khud hi handle karta hai. 
    // Hum sirf ek success message ka state rakhenge jo Netlify se redirect hone ke baad show ho sakta hai, 
    // ya fir simply Netlify ka default success page use kar sakte hain.

    // Abhi hum client-side success message ko hata dete hain, kyunki Netlify default behaviour use karega.
    
    return (
        <div className="container mx-auto p-4 md:p-12 min-h-screen">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-widest text-pink-500">ZYVRA</h1>
                <h2 className="text-5xl font-extrabold mt-4">Get in Touch</h2>
                <p className="mt-3 text-gray-400">We'd love to hear from you! Please fill out the form below.</p>
            </header>

            <div className="flex flex-col lg:flex-row gap-12 bg-gray-900 p-8 md:p-12 rounded-lg shadow-2xl">
                
                {/* Left Column: Contact Details (Same as before) */}
                <div className="lg:w-1/3 space-y-8">
                    {/* ... (Address, Email, Phone details yahan aayenge) ... */}
                     <div className="flex items-start"><span className="text-pink-500 text-2xl mr-4 mt-1">📍</span><div><h3 className="font-semibold text-xl">Address</h3><p className="text-gray-400">New Delhi, DELHI, PIN code-110085</p></div></div>
                     <div className="flex items-start"><span className="text-pink-500 text-2xl mr-4 mt-1">📧</span><div><h3 className="font-semibold text-xl">Email</h3><p className="text-gray-400">support@zyvra.com</p></div></div>
                     <div className="flex items-start"><span className="text-pink-500 text-2xl mr-4 mt-1">📞</span><div><h3 className="font-semibold text-xl">Phone</h3><p className="text-gray-400">+91-1234567891</p></div></div>
                </div>

                {/* Right Column: Contact Form (Netlify ready) */}
                <div className="lg:w-2/3">
                    {/* IMPORTANT: 
                        1. method="POST"
                        2. name="contact"
                        3. data-netlify="true"
                        4. Saare inputs mein 'name' attribute zaroori hai
                    */}
                    <form 
                        name="contact" 
                        method="POST" 
                        data-netlify="true" 
                        className="space-y-6"
                        // Agar tum chahte ho ki submit ke baad user Home page par redirect ho jaaye:
                        // action="/"
                    >
                        {/* Netlify ko pata chale ki form kahan se aaya hai */}
                        <input type="hidden" name="form-name" value="contact" />
                        
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                            <input type="text" id="name" name="name" required className="mt-1 w-full p-3 bg-gray-800 border border-gray-700 rounded text-white focus:ring-pink-500 focus:border-pink-500" />
                        </div>
                        
                        {/* Email Address */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email address</label>
                            <input type="email" id="email" name="email" required className="mt-1 w-full p-3 bg-gray-800 border border-gray-700 rounded text-white focus:ring-pink-500 focus:border-pink-500" />
                        </div>
                        
                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                            <input type="text" id="subject" name="subject" required className="mt-1 w-full p-3 bg-gray-800 border border-gray-700 rounded text-white focus:ring-pink-500 focus:border-pink-500" />
                        </div>
                        
                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                            <textarea id="message" name="message" rows="4" required className="mt-1 w-full p-3 bg-gray-800 border border-gray-700 rounded text-white focus:ring-pink-500 focus:border-pink-500"></textarea>
                        </div>
                        
                        {/* Submission Button */}
                        <button type="submit" className="w-full py-3 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;