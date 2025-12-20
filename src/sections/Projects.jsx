import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Second Brain SaaS",
        description: "A digital extension of your mind. This SaaS application captures links, PDFs, voice notes, and more. The AI understands context, categorizes content, and proactively reminds you of important information so nothing slips through the cracks.",
        tags: ["Python", "FastAPI", "React", "LLMs"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "E-Commerce Microservices",
        description: "A robust, scalable backend architecture for high-volume e-commerce. Deployed on AWS with Kafka for event streaming and Java Spring Boot services. Designed for reliability and performance.",
        tags: ["Java Spring Boot", "Kafka", "AWS", "Microservices"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "AI RFP Automation",
        description: "Currently in development. A B2B SaaS product designed to automate the Request for Proposal (RFP) process using advanced AI, streamlining complex business workflows.",
        tags: ["B2B SaaS", "AI Automation", "Product Development"],
        links: { demo: "#", github: "#" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="container mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-gray-900">
                    Selected <span className="text-gradient">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel p-10 group relative overflow-hidden hover:bg-white/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowUpRight className="w-6 h-6 text-gray-400" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mb-10">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-semibold px-4 py-1.5 rounded-full bg-white/50 border border-white/60 text-gray-600 shadow-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-6 mt-auto">
                                <a
                                    href={project.links.github}
                                    className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors"
                                >
                                    <Github size={18} />
                                    Source Code
                                </a>
                                <a
                                    href={project.links.demo}
                                    className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors"
                                >
                                    <ExternalLink size={18} />
                                    Live Preview
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
