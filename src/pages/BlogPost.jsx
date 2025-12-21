import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../data/blogs';

const BlogPost = () => {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === id);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
                    <Link to="/blog" className="text-blue-400 hover:underline">
                        Return to Blog List
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen pt-32 pb-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
            >
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft size={20} /> Back to Blogs
                </Link>

                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                        {blog.title}
                    </h1>

                    <div className="flex items-center gap-6 text-gray-500 border-b border-gray-800 pb-8">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{blog.readTime}</span>
                        </div>
                    </div>
                </div>

                <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden glass-panel p-2">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>

                <div className="prose prose-lg max-w-none">
                    <ReactMarkdown
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800" {...props} />,
                            p: ({ node, ...props }) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4 text-gray-700" {...props} />,
                            li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-bold text-gray-900" {...props} />,
                            a: ({ node, ...props }) => <a className="text-blue-600 hover:text-blue-500 underline transition-colors" target="_blank" rel="noopener noreferrer" {...props} />,
                        }}
                    >
                        {blog.content}
                    </ReactMarkdown>
                </div>
            </motion.div>
        </article>
    );
};

export default BlogPost;
