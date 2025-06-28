import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiColorSwatch, HiStar } from 'react-icons/hi';

const About = () => {
    const highlights = [
        {
            icon: HiCode,
            title: 'Programming Journey',
            description: 'Started coding with curiosity and passion, constantly learning new technologies and best practices.',
        },
        {
            icon: HiColorSwatch,
            title: 'Creative Work',
            description: 'I enjoy creating intuitive user interfaces that provide exceptional user experiences.',
        },
        {
            icon: HiStar,
            title: 'Hobbies',
            description: 'When not coding, I love playing sports and expressing creativity through painting.',
        },
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
        <section id="about" className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image */}
                    <motion.div
                        className="order-2 md:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <motion.div
                                className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.img
                                    src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                                    alt="Riadul working"
                                    className="w-full h-80 object-cover rounded-xl"
                                    whileHover={{ scale: 1.05 }}
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
                        <div className="space-y-6">
                            <motion.p
                                className="text-gray-300 text-lg leading-relaxed"
                                variants={itemVariants}
                            >
                                Hello! <span className='font-semibold'>I'm Riadul Hasan Riad</span>, a passionate MERN Stack Developer with a love for creating
                                beautiful and functional web applications. My journey in programming started with
                                curiosity and has evolved into a deep passion for crafting digital experiences.
                            </motion.p>

                            <motion.p
                                className="text-gray-300 text-lg leading-relaxed"
                                variants={itemVariants}
                            >
                                I specialize in modern web technologies and enjoy the challenge of turning complex
                                problems into simple, elegant solutions. My approach combines technical expertise
                                with creative thinking to deliver exceptional user experiences.
                            </motion.p>

                            <motion.p
                                className="text-gray-300 text-lg leading-relaxed"
                                variants={itemVariants}
                            >
                                Beyond coding, I'm an active person who enjoys sports and expressing creativity
                                through painting. These hobbies help me maintain a balanced perspective and often
                                inspire my work in unexpected ways.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-16 grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                borderColor: 'rgba(59, 130, 246, 0.5)',
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="text-blue-400 mb-4"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <item.icon size={40} />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;