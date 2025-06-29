import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiColorSwatch, HiStar, HiSparkles, HiLightningBolt, HiGlobeAlt } from 'react-icons/hi';

const About = () => {
    const highlights = [
        {
            icon: HiCode,
            title: 'Programming Journey',
            description: 'Started coding with curiosity and passion, constantly learning new technologies.',
            color: 'from-blue-500 to-indigo-600'
        },
        {
            icon: HiColorSwatch,
            title: 'Creative Work',
            description: 'I create intuitive interfaces with exceptional user experiences.',
            color: 'from-purple-500 to-pink-600'
        },
        {
            icon: HiStar,
            title: 'Hobbies',
            description: 'Love sports and painting when not coding.',
            color: 'from-amber-500 to-orange-600'
        },
    ];

    const stats = [
        { value: '3+', label: 'Years Exp', icon: HiSparkles },
        { value: '50+', label: 'Projects', icon: HiLightningBolt },
        { value: 'Global', label: 'Clients', icon: HiGlobeAlt }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                duration: 0.4
            }
        }
    };

    return (
        <section id="about" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="inline-block mb-3"
                    >
                        <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow">
                            About Me
                        </span>
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital Experiences</span>
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <motion.div
                        className="order-2 md:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative group">
                            <motion.div
                                className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-1 backdrop-blur-sm border border-gray-700/50 shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.img
                                    src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                                    alt="Working"
                                    className="w-full h-72 object-cover rounded-xl"
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="order-1 md:order-2"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="space-y-4 mb-6">
                            <motion.p
                                className="text-gray-300 text-base md:text-lg leading-relaxed"
                                variants={itemVariants}
                            >
                                MERN Stack developer passionate about building elegant solutions to complex problems. I combine technical expertise with creative design to craft seamless digital experiences that users love.
                            </motion.p>

                            <motion.p
                                className="text-gray-300 text-base md:text-lg leading-relaxed"
                                variants={itemVariants}
                            >
                                My approach balances clean code with intuitive interfaces, delivering both functionality and aesthetic appeal.
                            </motion.p>
                        </div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-3 mb-8"
                            variants={containerVariants}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 text-center"
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -3,
                                        borderColor: 'rgba(99, 102, 241, 0.5)'
                                    }}
                                >
                                    <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                                    <h3 className="text-xl font-bold text-white">{stat.value}</h3>
                                    <p className="text-xs text-gray-300">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Highlights */}
                <motion.div
                    className="mt-12 grid md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <div className={`relative bg-gradient-to-br ${item.color}/10 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full`}>
                                <motion.div
                                    className={`inline-flex items-center justify-center p-2 rounded-lg bg-gradient-to-r ${item.color} mb-4`}
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                >
                                    <item.icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-300">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;