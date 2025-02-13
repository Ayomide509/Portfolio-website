"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById("hero");
            if (!heroSection) return;

            const heroHeight = heroSection.offsetHeight;
            setIsVisible(window.scrollY < heroHeight - 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navbar */}
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="hidden md:flex shadow-lg p-3 fixed top-4 left-1/2 transform -translate-x-1/2 w-[85%] max-w-2xl rounded-full bg-white px-8 z-50"
            >
                <ul className="flex justify-center w-full space-x-6">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <li key={item}>
                            <Link
                                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                                className="text-violet-600 font-semibold hover:text-violet-800 transition-colors"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.nav>

            {/* Mobile Navbar - Menu Button */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="bg-white p-3 rounded-full shadow-lg"
                >
                    {isMenuOpen ? <X className="w-6 h-6 text-violet-600" /> : <Menu className="w-6 h-6 text-violet-600" />}
                </button>
            </div>

            {/* Mobile Sidebar Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed top-0 right-0 h-screen w-4/5 max-w-xs bg-white shadow-lg p-6 z-50 flex flex-col space-y-6 items-start"
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="self-end text-gray-700"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        {["Home", "About", "Projects", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                                className="text-violet-600 font-semibold text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
