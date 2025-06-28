
import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiCalendar, HiStar } from 'react-icons/hi';

const Education = () => {
    const educationData = [
        {
            degree: 'Bachelor of Computer Science & Engineering',
            institution: 'Northern University Bangladesh',
            year: '2023 - 2027',
            description: 'Specialized in Software Engineering with focus on Web Development and Data Structures.',
            grade: 'CGPA: 3.52/4.0',
            achievements: ['Dean\'s List', 'Best Project Award', 'Programming Contest Winner'],
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Government Laboratory High School, Cumilla',
            year: '2019 - 2021',
            description: 'Science Group with Mathematics, Physics, Chemistry, and ICT.',
            grade: 'GPA: 5.0/5.0',
            achievements: ['Merit Position', 'Science Fair Winner'],
        },
        // {
        //     degree: 'Secondary School Certificate (SSC)',
        //     institution: 'Government High School',
        //     year: '2015 - 2017',
        //     description: 'Completed secondary education with distinction in Science subjects.',
        //     grade: 'GPA: 5.0/5.0',
        //     achievements: ['Golden GPA', 'Student of the Year'],
        // },
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
        <section id="education" className="py-20 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
                        Education
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-md">
                        My academic journey and educational achievements
                    </p>
                </motion.div>

                <motion.div
                    className="space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {educationData.map((edu, index) => (
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
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Left Column - Icon and Year */}
                                <div className="md:col-span-1">
                                    <div className="flex items-center mb-4">
                                        <motion.div
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4"
                                            whileHover={{ scale: 1.1, rotate: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <HiAcademicCap className="text-white" size={24} />
                                        </motion.div>
                                        <div className="flex items-center text-blue-400">
                                            <HiCalendar size={16} className="mr-2" />
                                            <span className="font-medium">{edu.year}</span>
                                        </div>
                                    </div>
                                    <motion.div
                                        className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mb-4"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="flex items-center text-green-400">
                                            <HiStar size={16} className="mr-2" />
                                            <span className="font-medium">{edu.grade}</span>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Right Column - Details */}
                                <div className="md:col-span-2">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {edu.degree}
                                    </h3>
                                    <h4 className="text-blue-400 font-medium mb-3">
                                        {edu.institution}
                                    </h4>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {edu.description}
                                    </p>

                                    {/* Achievements */}
                                    <div>
                                        <h5 className="text-white font-medium mb-2">Key Achievements:</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.achievements.map((achievement, achIndex) => (
                                                <motion.span
                                                    key={achIndex}
                                                    className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    {achievement}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Certifications */}
                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        Certifications & Courses
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {[
                            'Programming Hero Web Course',
                            'Phitron (Not finished at all)',
                            'Frontend Web Development',
                            // 'UI/UX Design Fundamentals',
                        ].map((cert, index) => (

                            <motion.div
                                key={index}
                                className="bg-gray-800/30 border border-gray-700/50  rounded-lg p-4 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: 'rgba(59, 130, 246, 0.5)',
                                    y: -5
                                }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="text-blue-400 mb-2"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <HiStar size={32} className="mx-auto" />
                                </motion.div>
                                <h4 className="text-white font-medium">{cert}</h4>
                            </motion.div>

                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;