import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiCalendar, HiStar, HiLightBulb, HiBookOpen } from 'react-icons/hi';
import { FaGraduationCap, FaCertificate, FaLaptopCode, FaTrophy, FaAward } from 'react-icons/fa';

const Education = () => {
    const educationData = [
        {
            degree: 'Bachelor of Computer Science & Engineering',
            institution: 'Northern University Bangladesh',
            year: '2023 - 2027',
            description: 'Specialized in Software Engineering with focus on Web Development and Data Structures.',
            grade: 'CGPA: 3.52/4.0',
            achievements: ['Dean\'s List', 'Best Project Award', 'Programming Contest Winner'],
            icon: <FaGraduationCap className="text-blue-400" />
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Government Laboratory High School, Cumilla',
            year: '2019 - 2021',
            description: 'Science Group with Mathematics, Physics, Chemistry, and ICT.',
            grade: 'GPA: 5.0/5.0',
            achievements: ['Merit Position', 'Science Fair Winner'],
            icon: <HiBookOpen className="text-purple-400" />
        },
    ];

    const certifications = [
        {
            title: 'Programming Hero Web Course',
            icon: <FaLaptopCode className="text-green-400" />,
            highlight: true
        },
        {
            title: 'Phitron (Not finished at all)',
            icon: <FaCertificate className="text-yellow-400" />,
            highlight: false
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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.5
            }
        }
    };

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    };

    const floatVariants = {
        initial: { y: 0 },
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
        <section id="education" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
            {/* Animated background elements */}
            <motion.div
                className="absolute top-20 left-10 w-16 h-16 rounded-full bg-blue-500/10 blur-xl"
                variants={floatVariants}
                initial="initial"
                animate="float"
            />
            <motion.div
                className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-purple-500/10 blur-xl"
                variants={floatVariants}
                initial="initial"
                animate="float"
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
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full inline-block">
                            <HiAcademicCap className="text-white text-3xl" />
                        </div>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Education Journey
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    <motion.p
                        className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg"
                        variants={fadeInVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        My academic path, achievements, and continuous learning endeavors
                    </motion.p>
                </motion.div>

                <motion.div
                    className="space-y-8 relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/4 h-full w-0.5 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-transparent top-0"></div>

                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 pl-12 md:pl-16"
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                borderColor: 'rgba(59, 130, 246, 0.5)',
                                boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                                y: -5
                            }}
                            transition={{ duration: 0.3, type: "spring" }}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 -ml-3 md:-ml-4 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center border-4 border-gray-900">
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Left Column - Icon and Year */}
                                <div className="md:col-span-1">
                                    <div className="flex items-center mb-4">
                                        <motion.div
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4"
                                            whileHover={{ scale: 1.1, rotate: 10 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            {edu.icon}
                                        </motion.div>
                                        <div className="flex items-center text-blue-400">
                                            <HiCalendar size={16} className="mr-2" />
                                            <span className="font-medium">{edu.year}</span>
                                        </div>
                                    </div>
                                    <motion.div
                                        className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mb-4"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-green-400">
                                                <HiStar size={16} className="mr-2" />
                                                <span className="font-medium">{edu.grade}</span>
                                            </div>
                                            <motion.div
                                                whileHover={{ rotate: 15, scale: 1.2 }}
                                                transition={{ type: "spring" }}
                                            >
                                                <FaTrophy className="text-yellow-400" />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Right Column - Details */}
                                <div className="md:col-span-2">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {edu.degree}
                                    </h3>
                                    <h4 className="text-blue-400 font-medium mb-3 flex items-center">
                                        <HiLightBulb className="mr-2" /> {edu.institution}
                                    </h4>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {edu.description}
                                    </p>

                                    {/* Achievements */}
                                    <div>
                                        <h5 className="text-white font-medium mb-2 flex items-center">
                                            <HiStar className="mr-2 text-yellow-400" /> Key Achievements:
                                        </h5>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.achievements.map((achievement, achIndex) => (
                                                <motion.span
                                                    key={achIndex}
                                                    className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/30 rounded-full text-purple-100 text-sm flex items-center"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    whileHover={{
                                                        scale: 1.1,
                                                        background: "linear-gradient(to right, rgba(124, 58, 237, 0.4), rgba(59, 130, 246, 0.4))"
                                                    }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 300,
                                                        delay: achIndex * 0.1
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    <FaAward className="mr-1 text-yellow-300 text-xs" /> {achievement}
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
                    className="mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h3 className="text-2xl font-bold text-white mb-8 text-center flex justify-center items-center">
                        <FaCertificate className="mr-3 text-blue-400" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            Certifications & Courses
                        </span>
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className={`relative rounded-xl p-6 overflow-hidden border ${cert.highlight ?
                                    "border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-blue-900/10" :
                                    "border-gray-700/50 bg-gray-800/30"}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    scale: 1.03,
                                    y: -5,
                                    boxShadow: cert.highlight ?
                                        "0 10px 30px -10px rgba(59, 130, 246, 0.5)" :
                                        "0 10px 20px -10px rgba(156, 163, 175, 0.2)"
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.15,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                viewport={{ once: true }}
                            >
                                {/* Decorative elements */}
                                {cert.highlight && (
                                    <>
                                        <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-blue-500/10 blur-xl"></div>
                                        <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-purple-500/10 blur-xl"></div>
                                    </>
                                )}

                                <motion.div
                                    className={`text-4xl mb-4 ${cert.highlight ?
                                        "text-blue-400" : "text-gray-400"}`}
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: cert.highlight ? 15 : 5
                                    }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {cert.icon}
                                </motion.div>
                                <h4 className={`text-lg font-semibold ${cert.highlight ?
                                    "text-white" : "text-gray-300"}`}>
                                    {cert.title}
                                </h4>
                                {cert.highlight && (
                                    <motion.div
                                        className="absolute top-3 right-3 bg-blue-500/20 px-2 py-1 rounded-full text-xs text-blue-300"
                                        animate={{
                                            opacity: [0.6, 1, 0.6],
                                            scale: [0.95, 1, 0.95]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        Featured
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;