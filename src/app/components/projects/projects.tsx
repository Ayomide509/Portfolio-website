"use client";
import { motion } from "framer-motion";
import { Wrench, Hammer } from "lucide-react"; // Icons for "Work in Progress"

export default function Projects() {
    return (
        <div id="projects" className="h-screen flex flex-col items-center justify-center px-6 py-8 bg-gray-100">
            {/* Title Animation */}
            <motion.h1
                className="text-2xl md:text-4xl font-bold text-gray-900 mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                Projects
            </motion.h1>

            {/* Subtitle with Subtle Fade Animation */}
            <motion.p
                className="text-base md:text-lg text-gray-600 font-medium mb-5 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
                I'm currently building something amazing... Stay tuned!
            </motion.p>

            {/* Hammer & Wrench Animation */}
            <motion.div
                className="flex space-x-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Hammer className="h-10 w-10 md:h-12 md:w-12 text-gray-700" />
                <Wrench className="h-10 w-10 md:h-12 md:w-12 text-gray-700" />
            </motion.div>
        </div>
    );
}
