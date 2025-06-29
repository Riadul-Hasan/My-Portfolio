import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';

const Experience = () => {
    const experiences = [
        {
            position: 'Mid MERN Stack Developer',
            company: 'Biz Smashers',
            location: 'Dhaka, Bangladesh',
            duration: '2023 - Present',
            type: 'Full-time',
            description: 'Leading frontend development team and architecting scalable web applications.',
            responsibilities: [
                'Working with a team of 4 frontend developers',
                'Architect and develop complex React applications',
                'Implement responsive designs and ensure cross-browser compatibility',
                'Optimize application performance and user experience',
                'Mentor junior developers and conduct code reviews',
            ],
            technologies: ['React', 'Node.js', 'JavaScript', 'Express.Js', 'Tailwind CSS'],
        },
        {
            position: 'Junior Shopify Theme Developer',
            company: 'Biz Smashers',
            location: 'Dhaka, Bangladesh',
            duration: '2022 - 2023',
            type: 'Part Time',
            description: 'Developed and maintained multiple client-facing Shopify applications.',
            responsibilities: [
                'Built responsive web applications using React and Shopify Liquid',
                'Collaborated with design team to implement pixel-perfect UIs',
                'Integrated RESTful APIs and managed application state',
                // 'Participated in agile development processes',
                'Contributed to component library development',
            ],
            technologies: ['React', 'Liquid', 'JavaScript', 'Shopify CLI'],
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
        <section id="experience" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                        Work Experience
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-md">
                        My professional journey and career progression in web development
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <motion.div
                        className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                    />

                    <motion.div
                        className="space-y-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                variants={itemVariants}
                            >
                                {/* Timeline dot */}
                                <motion.div
                                    className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                />

                                {/* Content */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                                    <motion.div
                                        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                                        whileHover={{
                                            scale: 1.02,
                                            borderColor: 'rgba(59, 130, 246, 0.5)',
                                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Header */}
                                        <div className="mb-4">
                                            <div className="flex items-center mb-2">
                                                <motion.div
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <HiBriefcase className="text-blue-400 mr-2" size={20} />
                                                </motion.div>
                                                <motion.span
                                                    className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {exp.type}
                                                </motion.span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-1">
                                                {exp.position}
                                            </h3>
                                            <h4 className="text-blue-400 font-medium mb-2">
                                                {exp.company}
                                            </h4>
                                            <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                                                <div className="flex items-center">
                                                    <HiCalendar size={16} className="mr-1" />
                                                    {exp.duration}
                                                </div>
                                                <div className="flex items-center">
                                                    <HiLocationMarker size={16} className="mr-1" />
                                                    {exp.location}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-300 mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Responsibilities */}
                                        <div className="mb-4">
                                            <h5 className="text-white font-medium mb-3">Key Responsibilities:</h5>
                                            <ul className="space-y-2">
                                                {exp.responsibilities.map((resp, respIndex) => (
                                                    <motion.li
                                                        key={respIndex}
                                                        className="flex items-start text-gray-300"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.3, delay: respIndex * 0.1 }}
                                                        viewport={{ once: true }}
                                                    >
                                                        <HiCheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                                                        <span className="text-sm">{resp}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h5 className="text-white font-medium mb-3">Technologies Used:</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, techIndex) => (
                                                    <motion.span
                                                        key={techIndex}
                                                        className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        whileHover={{ scale: 1.1 }}
                                                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                                                        viewport={{ once: true }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-gray-700/50 rounded-xl p-8"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready for New Opportunities
                        </h3>
                        <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
                            I'm always excited to work on challenging projects and collaborate with amazing teams.
                            Let's build something great together!
                        </p>
                        <motion.button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            Let's Connect
                        </motion.button>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Experience;