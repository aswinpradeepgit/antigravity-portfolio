import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Brain } from 'lucide-react';

const skills = [
    {
        category: "AI & Data Engineering",
        icon: <Brain className="w-8 h-8 text-pink-500" />,
        items: ["RAG Systems", "Agentic AI", "LLM Integration", "LangChain", "Data Pipelines"]
    },
    {
        category: "Backend Architecture",
        icon: <Server className="w-8 h-8 text-blue-500" />,
        items: ["Python (FastAPI)", "Java (Spring Boot)", "Microservices", "PostgreSQL", "Redis"]
    },
    {
        category: "Frontend Experience",
        icon: <Code2 className="w-8 h-8 text-purple-500" />,
        items: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"]
    }
];

const About = () => {
    return (
        <section id="about" className="container mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-gray-900">
                    Technical <span className="text-gradient">Expertise</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel p-8 hover:bg-white/40 transition-all duration-300 group"
                        >
                            <div className="mb-6 p-4 bg-white/50 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-6 text-gray-900">{skill.category}</h3>
                            <ul className="space-y-3">
                                {skill.items.map((item) => (
                                    <li key={item} className="text-gray-600 font-medium flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-blue-400/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="p-10 md:p-14 glass-panel text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-50" />
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Future Focus</h3>
                    <p className="text-xl text-gray-700 leading-relaxed font-light max-w-3xl mx-auto">
                        "I'm really into building B2B products for those niche business processes most people don't even know exist.
                        I love finding those hidden inefficiencies and building AI tools to fix them.
                        I'm also exploring how AI can help a single person go from idea to execution—building a product as a one-man team.
                        If you're into that kind of stuff, hit me up. Let's collaborate."
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
