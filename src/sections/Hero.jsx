import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-2 px-4 rounded-full bg-white/40 border border-white/60 text-sm font-medium text-blue-600 mb-8 backdrop-blur-md shadow-sm">
                        Hello, I'm Aswin Pradeep
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900"
                >
                    Software Engineer & <br />
                    <span className="text-gradient">Product Builder</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    With 4 years of experience, I build clean software and scalable AI products.
                    Specializing in Python, Java, and React to solve real business problems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col items-center gap-8"
                >
                    {/* Main CTA Button with Pulse Animation */}
                    <motion.a
                        href="#contact"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-3 shadow-lg"
                    >
                        <Sparkles size={20} className="text-yellow-300" />
                        See what I'm currently working on
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/aswinpradeepgit" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/40 hover:bg-white/60 border border-white/50 transition-all text-gray-700 hover:text-black shadow-sm hover:shadow-md">
                            <Github size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/aswinpradeep621/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/40 hover:bg-white/60 border border-white/50 transition-all text-gray-700 hover:text-black shadow-sm hover:shadow-md">
                            <Linkedin size={22} />
                        </a>
                        <a href="mailto:aswinpradeep15@gmail.com" className="p-4 rounded-full bg-white/40 hover:bg-white/60 border border-white/50 transition-all text-gray-700 hover:text-black shadow-sm hover:shadow-md">
                            <Mail size={22} />
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
