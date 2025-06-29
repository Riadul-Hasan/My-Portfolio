import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiX, HiChevronLeft, HiChevronRight, HiEye, HiArrowRight } from 'react-icons/hi';
import { FaGithub, FaRegWindowMaximize } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalImageIndex, setModalImageIndex] = useState(0);

    const projects = [
        {
            id: 1,
            title: 'Functional Gardening Community',
            tagline: 'Share your gardening thoughts',
            description: 'Functional Gardening Community bridges gardening enthusiasts by providing a space to share gardening thoughts, track plant care, and receive personalized gardening tips. ',
            images: [
                'https://i.ibb.co/PsCRxPc6/Screenshot-2025-06-29-100455.png',
                'https://i.ibb.co/fdByqn8p/Screenshot-2025-06-29-100608.png',
                'https://i.ibb.co/Sg4CMsj/dashboard.png',
                'https://i.ibb.co/cSXJkwYK/Screenshot-2025-06-29-101138.png'
            ],
            technologies: [
                { name: 'React', color: 'bg-blue-500/20 text-blue-300' },
                { name: 'Firebase', color: 'bg-orange-500/20 text-orange-300' },
                { name: 'MongoDB', color: 'bg-emerald-500/20 text-emerald-300' },
                { name: 'NodeJs', color: 'bg-green-500/20 text-emerald-300' },
                { name: 'MongoDB', color: 'bg-emerald-500/20 text-emerald-300' },
                { name: 'Tailwind CSS', color: 'bg-sky-500/20 text-sky-300' }
            ],
            features: [
                'Plant care tracking with reminders',
                'Community post sharing for gardening tips and experiences',
                'Seasonal planting guidance based on location',
                'User profiles for managing shared posts and preferences',
                'Responsive design across all devices',
                'Expert advice section with Q&A',
                'Secure login with Google Authentication (Firebase)'
            ],
            challenges: [
                'Building a community sharing structure with post moderation',
                'Implementing personalized seasonal tips based on user data',
                'Ensuring a smooth, mobile-friendly experience for plant tracking',
                'Managing real-time updates and notifications within the community'
            ],
            liveLink: 'https://gardening-auth.web.app/',
            githubLink: 'https://github.com/Riadul-Hasan/gardenify-client-view',
        },
        {
            id: 2,
            title: 'ShareBite - Community Food Sharing',
            tagline: 'Reducing food waste together',
            description: 'ShareBite is a community-driven platform connecting food donors with recipients to reduce food waste. It offers real-time surplus listings, location-based donor matching.',
            images: [
                'https://i.ibb.co/S47dmQCD/Screenshot-2025-06-29-102238.png',
                'https://i.ibb.co/RGmP0nbM/Screenshot-2025-06-29-102307.png',
                'https://i.ibb.co/TMGHVdwf/Screenshot-2025-06-29-102614.png',
            ],
            technologies: [
                { name: 'React', color: 'bg-blue-500/20 text-blue-300' },
                { name: 'Firebase', color: 'bg-amber-500/20 text-amber-300' },
                { name: 'JavaScript', color: 'bg-yellow-500/20 text-amber-300' },
                { name: 'NodeJs', color: 'bg-green-500/20 text-emerald-300' },
                { name: 'Tailwind CSS', color: 'bg-sky-500/20 text-sky-300' }
            ],
            features: [
                'Real-time food surplus listings with images and details',
                'Location-based donor and recipient matching',
                'Smart color-coded expiration alerts',
                'Food request management with update/cancel options',
                'Secure Google/Firebase authentication',
                'Responsive mobile-first design for all devices'
            ],
            challenges: [
                'Implementing secure, real-time updates for food listings',
                'Building an intuitive matching system based on user location',
                'Designing a clear urgency indicator for expiry alerts',
                'Managing user state and authentication flows effectively'
            ],
            liveLink: 'https://food-sharing-auth-ee4f1.web.app/',
            githubLink: 'https://github.com/Riadul-Hasan/ShareBite',
        },

        {
            id: 3,
            title: 'JobTrack - Application Tracker',
            tagline: 'Organize your job hunt seamlessly',
            description: 'JobTrack is a personal job application tracking platform designed to simplify and organize your job search journey. It allows users to track applied jobs.',
            images: [
                'https://i.ibb.co/WNj9VMw2/Screenshot-2025-06-29-103144.png',
                'https://i.ibb.co/PG8xTPgC/Screenshot-2025-06-29-103252.png',
            ],
            technologies: [
                { name: 'React', color: 'bg-blue-500/20 text-blue-300' },
                { name: 'Firebase', color: 'bg-orange-500/20 text-orange-300' },
                { name: 'Tailwind CSS', color: 'bg-sky-500/20 text-sky-300' }
            ],
            features: [
                'Track job applications with statuses and notes',
                'Visualize application progress with charts',
                'Set interview and follow-up reminders',
                'Filter and categorize applications by company, role, and status',
                'Responsive design for seamless mobile and desktop use'
            ],
            challenges: [
                'Managing and updating user-specific application data securely',
                'Building clear and responsive data visualizations for progress tracking',
                'Implementing effective filtering and search across job applications'
            ],
            liveLink: 'https://job-track-auth.web.app/',
            githubLink: 'https://github.com/Riadul-Hasan/JobTrack',
        }

    ];

    const openModal = (project, index = 0) => {
        setSelectedProject(project);
        setModalImageIndex(index);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const navigateImage = (direction) => {
        setModalImageIndex(prev => {
            if (direction === 'next') {
                return (prev + 1) % selectedProject.images.length;
            } else {
                return (prev - 1 + selectedProject.images.length) % selectedProject.images.length;
            }
        });
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
        hidden: { y: 50, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        }
    };

    const cardHoverVariants = {
        hover: {
            y: -8,
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const modalVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    const floatVariants = {
        float: {
            y: [-5, 5, -5],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="projects" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
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
                {/* Section Header */}
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
                            <FaRegWindowMaximize className="text-white text-3xl" />
                        </div>
                    </motion.div>
                    <motion.h2
                        className="text-2xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Project Showcase
                    </motion.h2>
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
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Explore my featured work with interactive previews and detailed case studies
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover="hover"
                            className="group"
                        >
                            {/* Project Card */}
                            <motion.div
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden flex flex-col md:flex-row h-full"
                                variants={cardHoverVariants}
                            >
                                {/* Image Slider - Left Side */}
                                <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                                    <Swiper
                                        modules={[Autoplay, EffectCreative]}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false
                                        }}
                                        effect={'creative'}
                                        creativeEffect={{
                                            prev: {
                                                shadow: true,
                                                translate: [0, 0, -400],
                                            },
                                            next: {
                                                translate: ['100%', 0, 0],
                                            },
                                        }}
                                        loop={true}
                                        className="h-full w-full"
                                    >
                                        {project.images.map((image, idx) => (
                                            <SwiperSlide
                                                key={idx}
                                                onClick={() => openModal(project, idx)}
                                                className="cursor-pointer"
                                            >
                                                <motion.div
                                                    className="h-full w-full bg-gray-700"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`${project.title} screenshot ${idx + 1}`}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </motion.div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-transparent to-transparent md:bg-gradient-to-r md:from-gray-900/70 md:via-transparent" />
                                </div>

                                {/* Content - Right Side */}
                                <div className="md:w-1/2 p-6 flex flex-col">
                                    <div className="flex-1">
                                        <motion.h3
                                            className="text-xl md:text-2xl font-bold text-white mb-2"
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                        >
                                            {project.title}
                                        </motion.h3>
                                        <motion.p
                                            className="text-blue-400 font-medium mb-3"
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.15 }}
                                        >
                                            {project.tagline}
                                        </motion.p>
                                        <motion.p
                                            className="text-gray-300 mb-4"
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                        >
                                            {project.description}
                                        </motion.p>

                                        {/* Features */}
                                        <motion.div
                                            className="mb-4"
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.25 }}
                                        >
                                            <h4 className="text-white font-medium mb-2">Key Features:</h4>
                                            <ul className="space-y-2">
                                                {project.features.slice(0, 3).map((feature, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        className="flex items-start text-gray-300"
                                                        initial={{ opacity: 0, x: 10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                                                    >
                                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                                        <span>{feature}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>

                                    {/* Footer */}
                                    <div className="mt-auto">
                                        {/* Technologies */}
                                        <motion.div
                                            className="mb-4"
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.5 }}
                                        >
                                            <h4 className="text-white font-medium mb-2">Technologies:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, idx) => (
                                                    <motion.span
                                                        key={idx}
                                                        className={`px-2.5 py-1 ${tech.color} border border-gray-600/30 rounded-full text-xs`}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.3, delay: 0.55 + idx * 0.1 }}
                                                    >
                                                        {tech.name}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </motion.div>

                                        {/* Action Buttons */}
                                        <motion.div
                                            className="flex space-x-3"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.6 }}
                                        >
                                            <motion.button
                                                onClick={() => openModal(project)}
                                                className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg"
                                                whileHover={{
                                                    scale: 1.03,
                                                    boxShadow: "0 5px 15px -3px rgba(59, 130, 246, 0.3)"
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <HiEye className="mr-2" size={16} />
                                                View Details
                                            </motion.button>
                                            <motion.a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center px-3 py-2 bg-gray-700/50 border border-gray-600/30 text-gray-300 rounded-lg"
                                                whileHover={{
                                                    backgroundColor: 'rgba(55, 65, 81, 0.5)',
                                                    scale: 1.05
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <HiExternalLink size={16} />
                                            </motion.a>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-md"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div
                        className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/70 border border-gray-700/50 rounded-xl p-8 overflow-hidden"
                        whileHover={{
                            scale: 1.01,
                            boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.2)"
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Floating tech icons background */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            {['</>', '{ }', 'React', 'JS', 'CSS'].map((tech, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute text-blue-400/10 font-mono text-xl"
                                    initial={{
                                        x: Math.random() * 100,
                                        y: Math.random() * 100,
                                        rotate: Math.random() * 360
                                    }}
                                    animate={{
                                        rotate: 360,
                                        transition: {
                                            duration: Math.random() * 30 + 30,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }
                                    }}
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </div>

                        <div className="relative z-10">
                            <motion.h3
                                className="text-2xl md:text-3xl font-bold text-white mb-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Want to see <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">more projects</span>?
                            </motion.h3>

                            <motion.p
                                className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Explore my GitHub profile for additional projects, open-source contributions, and code samples.
                            </motion.p>

                            <motion.div
                                className="flex justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <motion.a
                                    href="https://github.com/Riadul-Hasan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-8 py-3.5 bg-gray-800 border border-gray-700 text-white font-medium rounded-lg group"
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: 'rgba(30, 41, 59, 0.8)',
                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FaGithub className="mr-3 text-2xl text-purple-400 group-hover:text-purple-300 transition-colors" />
                                    <span className="text-lg">
                                        View More on GitHub
                                        <HiArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
                                    </span>
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Enhanced Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-gray-900/90 backdrop-blur-lg"
                            onClick={closeModal}
                        />

                        {/* Main Modal Container */}
                        <motion.div
                            className="relative bg-gray-900 border border-gray-800 rounded-xl w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row shadow-2xl shadow-indigo-900/30 overflow-hidden"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                        >
                            {/* Close Button */}
                            <motion.button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-50 p-2 bg-gray-800/80 hover:bg-gray-700/90 border border-gray-700 rounded-full text-gray-300 hover:text-white transition-all"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <HiX size={24} />
                            </motion.button>

                            {/* Image Gallery */}
                            <div className="md:w-1/2 h-64 md:h-full bg-gray-800 relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={modalImageIndex}
                                        src={selectedProject.images[modalImageIndex]}
                                        alt={`${selectedProject.title} screenshot`}
                                        className="w-full h-full object-contain object-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </AnimatePresence>

                                {selectedProject.images.length > 1 && (
                                    <>
                                        <motion.button
                                            onClick={() => navigateImage('prev')}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-800/80 hover:bg-gray-700/90 border border-gray-700 rounded-full text-gray-300 hover:text-white z-10"
                                            whileHover={{ x: -4 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <HiChevronLeft size={24} />
                                        </motion.button>
                                        <motion.button
                                            onClick={() => navigateImage('next')}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-800/80 hover:bg-gray-700/90 border border-gray-700 rounded-full text-gray-300 hover:text-white z-10"
                                            whileHover={{ x: 4 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <HiChevronRight size={24} />
                                        </motion.button>
                                    </>
                                )}

                                {/* Image Dots */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                    {selectedProject.images.map((_, idx) => (
                                        <motion.button
                                            key={idx}
                                            onClick={() => setModalImageIndex(idx)}
                                            className={`w-2 h-2 rounded-full ${idx === modalImageIndex ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'}`}
                                            animate={{
                                                width: idx === modalImageIndex ? 16 : 8,
                                                opacity: idx === modalImageIndex ? 1 : 0.7
                                            }}
                                            transition={{ type: "spring", stiffness: 500 }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        {selectedProject.title}
                                    </h2>
                                    <p className="text-blue-400 text-lg mb-4">
                                        {selectedProject.tagline}
                                    </p>
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </motion.div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {/* Features */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                            Key Features
                                        </h3>
                                        <ul className="space-y-2">
                                            {selectedProject.features.map((feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    className="text-gray-300 pl-4 relative"
                                                    initial={{ x: -10, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                                >
                                                    <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {/* Technologies */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                            Technologies
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    className={`px-3 py-1 ${tech.color} border border-gray-700 rounded-full text-sm`}
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{
                                                        type: "spring",
                                                        delay: 0.4 + idx * 0.05,
                                                        stiffness: 300
                                                    }}
                                                    whileHover={{ y: -2 }}
                                                >
                                                    {tech.name}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Buttons */}
                                <motion.div
                                    className="flex flex-col sm:flex-row gap-3"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <motion.a
                                        href={selectedProject.liveLink}
                                        target="_blank"
                                        className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-lg transition-all"
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow: "0 4px 20px -6px rgba(59, 130, 246, 0.5)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <HiExternalLink size={18} className="mr-2" />
                                        View Live
                                    </motion.a>
                                    <motion.a
                                        href={selectedProject.githubLink}
                                        target="_blank"
                                        className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium rounded-lg transition-all"
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow: "0 4px 20px -6px rgba(17, 24, 39, 0.3)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <FaGithub size={18} className="mr-2" />
                                        View Code
                                    </motion.a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;