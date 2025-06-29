import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaHeart } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaGithub, href: '#', label: 'GitHub' },
        { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
        { icon: FaTwitter, href: '#', label: 'Twitter' },
        { icon: FaFacebook, href: '#', label: 'Facebook' },
    ];

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    className="grid md:grid-cols-3 gap-8 mb-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Brand Section */}
                    <motion.div
                        className="md:col-span-1"
                        variants={itemVariants}
                    >
                        <motion.h3
                            className="text-2xl font-bold text-white mb-4"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            Riadul Hasan Riad
                        </motion.h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            MERN Stack Developer - passionate about creating beautiful,
                            user-friendly web experiences with modern technologies.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 p-2 rounded-full bg-gray-800/50"
                                    whileHover={{
                                        scale: 1.2,
                                        color: '#FFFFFF',
                                        backgroundColor: 'rgba(55, 65, 81, 0.8)',
                                        rotate: 10
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="md:col-span-1"
                        variants={itemVariants}
                    >
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <motion.button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-gray-300 hover:text-white block"
                                        whileHover={{ x: 5, color: '#FFFFFF' }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {link.name}
                                    </motion.button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="md:col-span-1"
                        variants={itemVariants}
                    >
                        <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
                        <div className="space-y-2 text-gray-300">
                            <p>📧 riadb468@gmail.com</p>
                            <p>📱 +880 1647380283</p>
                            <p>📍 Dhaka, Bangladesh</p>
                        </div>
                        <motion.div
                            className="mt-4 p-3 bg-blue-600/20 border border-blue-500/30 rounded-lg"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <p className="text-blue-300 text-sm">
                                💼 Available for freelance work and collaborations
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <motion.div
                    className="border-t border-gray-800 pt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <motion.div
                            className="flex items-center text-gray-300 mb-4 md:mb-0 "
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <span>© {currentYear} Riadul Hasan. Made with</span>
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    color: ['#EF4444', '#F59E0B', '#EF4444']
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <FaHeart className="mx-2" size={16} />
                            </motion.div>
                            <span>and lots of ☕</span>
                        </motion.div>

                        <motion.button
                            onClick={scrollToTop}
                            className="flex items-center text-gray-400 hover:text-white transition-colors group"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="mr-2">Back to top</span>
                            <motion.div
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                            >
                                <HiArrowUp size={16} />
                            </motion.div>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;