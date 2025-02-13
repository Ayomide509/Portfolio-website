"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <div id="about" className="h-screen flex items-center justify-center bg-gray-100 px-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12 max-w-4xl">

                {/* Floating SVG Image on Scroll */}
                <motion.div
                    className="w-48 md:w-96 flex-shrink-0"
                    animate={{ y: [0, -10, 0] }} // Floating effect
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} // Looping animation
                >
                    <img src="./pfp.svg" alt="An Image" className="w-full h-auto shadow-2xl rounded-full py-16" />
                </motion.div>

                {/* Text Content with Fade-In on Scroll */}
                <motion.div
                    className="max-w-sm md:max-w-lg text-center md:text-left w-full"
                    whileInView={{ y: [50, 0], opacity: [0, 1] }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }} // Triggers when 30% is visible
                >
                    <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">About Me</h1>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                        I’m an aspiring full-stack developer passionate about building robust web applications.
                        I specialize in <span className="font-semibold">React.js, Next.js, Tailwind CSS, and TypeScript</span>
                        on the frontend, and I'm expanding my skills in <span className="font-semibold">Node.js, Express, MongoDB, and Python</span>
                        for backend development.
                    </p>
                    <p className="text-base md:text-lg text-gray-800 mt-4 leading-relaxed">
                        Currently, I’m studying <span className="font-semibold">Software Engineering at Babcock University</span>
                        and interning at a bank’s tech department, applying my learning to real-world projects.
                        Beyond coding, I love music, gaming, and keeping up with automotive trends. Let’s connect
                        and build something innovative together!
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
