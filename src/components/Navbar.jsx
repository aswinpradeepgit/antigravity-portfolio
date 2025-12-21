import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Projects', href: '/#projects', id: 'projects' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
    { name: 'Blog', href: '/blog', id: 'blog' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, link) => {
        e.preventDefault();
        setIsOpen(false);

        if (link.id === 'blog') {
            navigate('/blog');
            window.scrollTo(0, 0);
            return;
        }

        if (link.id === 'home') {
            if (location.pathname !== '/') {
                navigate('/');
                window.scrollTo(0, 0);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            return;
        }

        // For other hash links
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(link.id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(link.id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
                }`}
        >
            <div className={`mx-auto max-w-7xl px-6 md:px-12`}>
                <div className={`relative flex items-center justify-between rounded-full px-8 py-4 transition-all duration-300 ${isScrolled || isOpen ? 'glass-panel bg-opacity-80' : 'bg-transparent'
                    }`}>
                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold tracking-tighter text-gray-900">
                        aswinpradeep<span className="text-blue-500">.xyz</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link)}
                                className={`text-sm font-medium transition-colors relative group ${location.pathname === link.href ? 'text-blue-500' : 'text-gray-600 hover:text-black'
                                    }`}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-gray-800 p-1"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-6 right-6 mt-4 glass-panel p-8 md:hidden flex flex-col gap-6 shadow-xl"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-700 hover:text-black"
                                    onClick={(e) => handleNavClick(e, link)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
