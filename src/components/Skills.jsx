import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs,
    FaGitAlt, FaGithub,
} from 'react-icons/fa';
import {
    SiTypescript, SiTailwindcss, SiExpress, SiMongodb,
    SiVisualstudiocode, SiFigma,
    SiJsonwebtokens,
    SiNewjapanprowrestling,
} from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: <FaReact className="text-blue-400" />,
            skills: [
                { name: 'React', level: 90, icon: <FaReact className="text-blue-400" /> },
                { name: 'JavaScript', level: 85, icon: <FaJs className="text-yellow-400" /> },
                { name: 'TypeScript', level: 40, icon: <SiTypescript className="text-blue-600" /> },
                { name: 'HTML5', level: 95, icon: <FaHtml5 className="text-orange-500" /> },
                { name: 'CSS3', level: 95, icon: <FaCss3Alt className="text-blue-500" /> },
                { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss className="text-cyan-400" /> },
            ],
        },
        {
            title: 'Backend Development',
            icon: <FaNodeJs className="text-green-500" />,
            skills: [
                { name: 'Node.js', level: 90, icon: <FaNodeJs className="text-green-500" /> },
                { name: 'Express.js', level: 70, icon: <SiExpress className="text-gray-300" /> },
                { name: 'MongoDB', level: 80, icon: <SiMongodb className="text-green-600" /> },
                { name: 'JWT Auth', level: 60, icon: <SiJsonwebtokens className="text-pink-500" /> },
                { name: 'REST APIs', level: 80, icon: <SiNewjapanprowrestling className="text-purple-400" /> },
            ],
        },
        {
            title: 'Tools & Others',
            icon: <SiVisualstudiocode className="text-blue-500" />,
            skills: [
                { name: 'Git', level: 85, icon: <FaGitAlt className="text-orange-500" /> },
                { name: 'GitHub', level: 85, icon: <FaGithub className="text-gray-300" /> },
                { name: 'VS Code', level: 90, icon: <SiVisualstudiocode className="text-blue-500" /> },
                { name: 'Figma', level: 75, icon: <SiFigma className="text-purple-500" /> },
                { name: 'Version Control', level: 70, icon: <FaGithub className="text-gray-300" /> },
            ],
        },
    ];

    const ProgressBar = ({ skill, index }) => (
        <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <span className="mr-2 text-lg">{skill.icon}</span>
                    <span className="text-white font-medium">{skill.name}</span>
                </div>
                <span className="text-blue-400 text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                        duration: 1,
                        delay: index * 0.1,
                        type: "spring",
                        damping: 10
                    }}
                    viewport={{ once: true }}
                />
            </div>
        </motion.div>
    );

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
        hidden: { y: 30, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.6
            }
        }
    };

    const floatVariants = {
        float: {
            y: [-5, 5, -5],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="skills" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
            {/* Animated background elements */}
            <motion.div
                className="absolute top-20 left-10 w-16 h-16 rounded-full bg-blue-500/10 blur-xl"
                animate="float"
                variants={floatVariants}
            />
            <motion.div
                className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-purple-500/10 blur-xl"
                animate="float"
                variants={floatVariants}
                transition={{ delay: 0.5 }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div
                        className="inline-block mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full inline-block">
                            <div className="text-white text-3xl">💻</div>
                        </div>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Technical Skills
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    <motion.p
                        className="text-gray-300 mt-6 max-w-2xl mx-auto text-md"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        My technical toolkit for building modern, performant applications
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 relative overflow-hidden"
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                borderColor: 'rgba(59, 130, 246, 0.5)',
                                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Decorative glow */}
                            <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-blue-500/10 blur-xl"></div>
                            <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-purple-500/10 blur-xl"></div>

                            <div className="flex items-center justify-center mb-6">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mr-3">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <ProgressBar key={skillIndex} skill={skill} index={skillIndex} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Skills */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h3 className="text-2xl font-bold text-white mb-8">Additional Capabilities</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { name: 'Responsive Design', icon: '📱' },
                            { name: 'Performance Optimization', icon: '⚡' },
                            { name: 'Testing', icon: '🧪' },
                            { name: 'Problem Solving', icon: '🧩' },
                            { name: 'Team Collaboration', icon: '👥' },
                            { name: 'UI/UX Design', icon: '🎨' },
                            { name: 'Cross-browser Compatibility', icon: '🌐' },
                        ].map((skill, index) => (
                            <motion.span
                                key={index}
                                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 flex items-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -3,
                                    background: "linear-gradient(to right, rgba(37, 99, 235, 0.3), rgba(124, 58, 237, 0.3))"
                                }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 300
                                }}
                                viewport={{ once: true }}
                            >
                                <span className="mr-2">{skill.icon}</span>
                                {skill.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;