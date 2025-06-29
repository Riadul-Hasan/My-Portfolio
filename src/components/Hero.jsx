import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaHtml5, FaJs, FaCss3 } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiNodedotjs } from 'react-icons/si';

const Hero = () => {
    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/Riadul-Hasan', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/riadul-hasan-riad-6b954a2b8/', label: 'LinkedIn' },
        { icon: FaTwitter, href: 'https://x.com/act_like_riadul', label: 'Twitter' },
    ];

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Tech icons configuration for background
    const techIcons = [
        { icon: FaReact, size: 24, color: 'text-blue-400', x: 10, y: 20, duration: 15 },
        { icon: FaHtml5, size: 24, color: 'text-orange-500', x: 85, y: 30, duration: 18 },
        { icon: FaJs, size: 24, color: 'text-yellow-400', x: 15, y: 70, duration: 20 },
        { icon: FaCss3, size: 24, color: 'text-blue-500', x: 80, y: 80, duration: 17 },
        { icon: SiTypescript, size: 24, color: 'text-blue-600', x: 25, y: 40, duration: 22 },
        { icon: SiNextdotjs, size: 24, color: 'text-white', x: 75, y: 60, duration: 19 },
        { icon: SiTailwindcss, size: 24, color: 'text-cyan-400', x: 40, y: 90, duration: 21 },
        { icon: SiNodedotjs, size: 24, color: 'text-green-500', x: 90, y: 10, duration: 16 },
    ];

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
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Animated tech icons in background */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                {techIcons.map((tech, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${tech.color} opacity-70`}
                        style={{
                            left: `${tech.x}%`,
                            top: `${tech.y}%`,
                            fontSize: `${tech.size}px`
                        }}
                        animate={{
                            y: [0, -20, 0, 20, 0],
                            x: [0, 10, -10, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: tech.duration,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    >
                        <tech.icon className="w-full h-full" />
                    </motion.div>
                ))}
            </div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-purple-900/20 to-gray-900/90 z-0" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Image */}
                    <motion.div
                        className="mb-8"
                        variants={itemVariants}
                    >
                        <div className="relative w-64 h-64 mx-auto">
                            <motion.div
                                className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.img
                                    src="https://i.ibb.co/Q3B3HYcG/profile-pic-9.png"
                                    alt="Riadul Hasan"
                                    className="w-full h-full rounded-full object-cover"
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="mb-8"
                        variants={itemVariants}
                    >
                        <motion.h1
                            className="text-3xl md:text-5xl font-bold text-white mb-4"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Riadul Hasan Riad
                        </motion.h1>
                        <motion.p
                            className="text-md md:text-xl text-blue-400 font-medium"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            MERN Stack Developer
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="mb-8 max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Passionate about creating beautiful, user-friendly web experiences.
                            I combine creativity with technical expertise to build modern, responsive applications.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="mb-8 flex flex-col sm:flex-row gap-4 justify-center"
                        variants={itemVariants}
                    >
                        <motion.button
                            onClick={handleDownloadResume}
                            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <HiDownload className="mr-2" size={20} />
                            Download Resume
                        </motion.button>
                        <motion.button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-medium rounded-lg"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: '#3B82F6',
                                color: '#FFFFFF'
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="flex justify-center space-x-6"
                        variants={itemVariants}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 p-3 rounded-full bg-gray-800/50"
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
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;