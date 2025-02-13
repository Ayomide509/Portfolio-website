"use client";
import { motion } from "framer-motion";
import Button from "../button/button";

export default function CallToAction() {
    return (
        <motion.div
            id="contact"
            className="flex flex-col items-center justify-center bg-slate-600 text-white min-h-screen px-6 py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
        >
            {/* Text Section */}
            <motion.div
                className="text-center max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h1>
                <p className="text-lg md:text-xl mb-6">
                    Ready to bring your vision to life? Let's build something amazing together!
                </p>
            </motion.div>

            {/* Animated Button */}
            <motion.div
                className="flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button label="Contact Me" route="/contact" />
            </motion.div>
        </motion.div>
    );
}
