import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();



        const SERVICE_ID = 'service_kqxc8cc';
        const TEMPLATE_ID = 'template_mbxpujr';
        const PUBLIC_KEY = 'Cg7oX2LGfIcg2OYCR';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: 'Message Sent!',
                    text: 'We will get back to you shortly.',
                    icon: 'success',
                    confirmButtonColor: '#ec4899', // pink-500
                    background: '#111827', // gray-900
                    color: '#fff'
                });
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    title: 'Error!',
                    text: `Failed to send: ${error.text}`, // Show actual error message
                    icon: 'error',
                    confirmButtonColor: '#ec4899',
                    background: '#111827',
                    color: '#fff'
                });
            });
    };

    return (
        <div className="container mx-auto p-4 md:p-12 min-h-screen">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-widest text-pink-500">ZYVRA</h1>
                <h2 className="text-5xl font-extrabold mt-4">Get in Touch</h2>
                <p className="mt-3 text-gray-400">We'd love to hear from you! Please fill out the form below.</p>
            </header>

            <div className="flex flex-col lg:flex-row gap-12 bg-gray-900 p-8 md:p-12 rounded-lg shadow-2xl">

                {/* Left Column: Contact Details */}
                <div className="lg:w-1/3 space-y-8">
                    <div className="flex items-start"><span className="text-pink-500 text-2xl mr-4 mt-1">📍</span><div><h3 className="font-semibold text-xl">Address</h3><p className="text-gray-400">New Delhi, DELHI, PIN code-110085</p></div></div>
                    <div className="flex items-start"><span className="text-pink-500 text-2xl mr-4 mt-1">📧</span><div><h3 className="font-semibold text-xl">Email</h3><p className="text-gray-400">support@zyvra.com</p></div></div>
                    <div className="flex items-start"><span className="text-pink-500 text-2xl mr-4 mt-1">📞</span><div><h3 className="font-semibold text-xl">Phone</h3><p className="text-gray-400">+91-1234567891</p></div></div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="lg:w-2/3">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-6"
                    >
                        {/* Name */}
                        <div>
                            <label htmlFor="user_name" className="block text-sm font-medium text-gray-300">Name</label>
                            <input type="text" name="user_name" required className="mt-1 w-full p-3 bg-gray-800 border border-gray-700 rounded text-white focus:ring-pink-500 focus:border-pink-500" />
                        </div>

                        {/* Email Address */}
                        <div>
                            <label htmlFor="user_email" className="block text-sm font-medium text-gray-300">Email address</label>
                            <input type="email" name="user_email" required className="mt-1 w-full p-3 bg-gray-800 border border-gray-700 rounded text-white focus:ring-pink-500 focus:border-pink-500" />
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                            <input type="text" name="subject" required className="mt-1 w-full p-3 bg-gray-800 border border-gray-700 rounded text-white focus:ring-pink-500 focus:border-pink-500" />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                            <textarea name="message" rows="4" required className="mt-1 w-full p-3 bg-gray-800 border border-gray-700 rounded text-white focus:ring-pink-500 focus:border-pink-500"></textarea>
                        </div>

                        {/* Submission Button */}
                        <button type="submit" value="Send" className="w-full py-3 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;