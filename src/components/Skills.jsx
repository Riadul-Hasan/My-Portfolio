import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', level: 90 },
                { name: 'JavaScript', level: 85 },
                { name: 'TypeScript', level: 80 },
                { name: 'HTML/CSS', level: 95 },
                { name: 'Tailwind CSS', level: 88 },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', level: 90 },
                { name: 'Express.js', level: 70 },
                { name: 'MongoDB', level: 80 },
                { name: 'JWT Authentication', level: 60 },
                { name: 'REST APIs', level: 80 },
            ],
        },
        {
            title: 'Tools & Others',
            skills: [
                { name: 'Git/GitHub', level: 85 },
                { name: 'VS Code', level: 90 },
                { name: 'Figma', level: 75 },
                { name: 'Version Control', level: 70 },
                // { name: 'Docker', level: 60 },
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
            <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-blue-400 text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
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
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Skills & Expertise
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
                        Here are the technologies and tools I work with to bring ideas to life
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                borderColor: 'rgba(59, 130, 246, 0.5)',
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">
                                {category.title}
                            </h3>
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
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white mb-8">Additional Skills</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'Responsive Design',
                            'Performance Optimization',
                            'Testing',
                            // 'Agile/Scrum',
                            'Problem Solving',
                            'Team Collaboration',
                            'UI/UX Design',
                            'Cross-browser Compatibility',
                        ].map((skill, index) => (
                            <motion.span
                                key={index}
                                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;