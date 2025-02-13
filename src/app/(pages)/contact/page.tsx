"use client";
import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-6 py-16">
            {/* Header */}
            <header className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
                <p className="text-lg text-gray-600 mt-2 font-semibold">Let's connect and build something amazing together!</p>
            </header>

            {/* Contact Illustration */}
            <motion.img

                src="./contact.svg"
                alt="Contact Illustration"
                className="w-48 md:w-64 mb-6 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}

            />

            {/* Contact Options */}
            <div className="mb-6 text-center flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                    href="https://wa.me/2348071858887"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-green-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                    <Phone className="w-5 h-5" /> WhatsApp
                </a>

                <a
                    href="tel:+2348071858887"
                    className="w-full sm:w-auto bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                    <Phone className="w-5 h-5" /> Call Now
                </a>
            </div>



            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
                <a href="https://github.com/Ayomide509" className="text-gray-700 hover:text-black transition">
                    <Github size={30} />
                </a>
                <a href="https://x.com/yomii_bat4?s=11" className="text-gray-700 hover:text-blue-500 transition">
                    <Twitter size={30} />
                </a>
                <a href="https://www.linkedin.com/in/olusesan-ayomide-22b33225b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-700 hover:text-blue-700 transition">
                    <Linkedin size={30} />
                </a>
            </div>
        </div>
    );
}
