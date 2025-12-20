import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="container mx-auto px-6 py-32">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-12 md:p-24 text-center max-w-5xl mx-auto relative overflow-hidden"
            >
                {/* Decorative background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-200/30 to-purple-200/30 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                    <span className="inline-block py-2 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-8">
                        Currently Building
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
                        Building a <span className="text-gradient">Second Brain</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        I'm developing a smart SaaS product that acts as a second brain for your digital life.
                        It categorizes links, PDFs, and notes, using AI to provide context and reminders.
                        <br /><br />
                        <span className="text-gray-900 font-semibold">Sounds interesting? Let's collaborate.</span>
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                        <a
                            href="mailto:aswinpradeep15@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl"
                        >
                            <Mail size={20} />
                            aswinpradeep15@gmail.com
                        </a>
                        <a
                            href="tel:6282442055"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-md hover:shadow-lg"
                        >
                            <Phone size={20} />
                            +91 6282442055
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
