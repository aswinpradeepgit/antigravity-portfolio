import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#f5f5f7]">
            {/* Pastel Gradient Blobs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply will-change-transform"
            />

            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.5, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply will-change-transform"
            />

            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="absolute top-[40%] left-[30%] w-[50vw] h-[50vw] bg-pink-200/40 rounded-full blur-[100px] mix-blend-multiply will-change-transform"
            />

            {/* Subtle Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none translate-z-0"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />
        </div>
    );
};

export default Background;
