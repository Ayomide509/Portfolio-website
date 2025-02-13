"use client";
import { motion } from "framer-motion";
import Button from "@/app/components/button/button";

export default function HomePage() {
    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Hero Image */}
            <motion.div
                className="py-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <img src="./profile.svg" alt="icon" className="w-40 md:w-64 h-auto mx-auto" />
            </motion.div>

            {/* Hero Section */}
            <motion.div
                className="max-w-xs md:max-w-md"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
                <h3 className="font-semibold text-lg md:text-xl text-gray-700">Hi There</h3>
                <h1 className="font-bold text-3xl md:text-5xl text-gray-900 mt-2">
                    I'm Olusesan Ayomide
                </h1>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-4">
                    "An Aspiring Full Stack Developer"
                </p>

                {/* Button with Hover Animation */}
                <motion.div
                    className="font-semibold text-white mt-6 flex justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button label="About Me" route="#about" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
