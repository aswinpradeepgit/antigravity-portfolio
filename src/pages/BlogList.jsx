import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogs } from '../data/blogs';

const BlogList = () => {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                    My Thoughts & Writings
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Musings on code, design, and the future of technology.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {blogs.map((blog, index) => (
                    <motion.article
                        key={blog.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="glass-panel p-6 group hover:border-blue-500/30 transition-all duration-300"
                    >
                        <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock size={14} />
                                <span>{blog.readTime}</span>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                            {blog.title}
                        </h2>

                        <p className="text-gray-700 mb-6 line-clamp-3">
                            {blog.excerpt}
                        </p>

                        <Link
                            to={`/blog/${blog.id}`}
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                        >
                            Read Article <ArrowRight size={16} />
                        </Link>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default BlogList;
