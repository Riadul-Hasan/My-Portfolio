import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiChatAlt, HiPaperAirplane, HiLocationMarker, HiClock, HiOutlineSparkles } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@sweetalert2/theme-dark/dark.css';
import 'animate.css/animate.min.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://portfolio-server-eight-ebon.vercel.app/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            let data = {};
            const contentLength = response.headers.get('content-length');

            if (contentLength && contentLength !== '0') {
                try {
                    data = await response.json();
                } catch (jsonError) {
                    console.error('JSON parse error:', jsonError);
                    throw new Error('Invalid server response');
                }
            }

            if (!response.ok) {
                throw new Error(data.error || `Server responded with status ${response.status}`);
            }

            // Success Alert
            await Swal.fire({
                title: 'Success!',
                text: data.message || 'Your message has been sent successfully!',
                icon: 'success',
                background: '#1F2839',
                color: '#E5E7EB',
                iconColor: '#8B5CF6',
                confirmButtonColor: '#7C3AED',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown animate__faster'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp animate__faster'
                },
                customClass: {
                    confirmButton: 'px-4 py-2 rounded-lg font-medium shadow-lg transition hover:scale-105'
                }
            });

            setFormData({ name: '', email: '', subject: '', message: '' });

        } catch (error) {
            console.error('Error:', error);

            // Error Alert
            await Swal.fire({
                title: 'Error!',
                text: error.message || 'Failed to send message. Please try again.',
                icon: 'error',
                background: '#1F2839',
                color: '#E5E7EB',
                iconColor: '#EC4899',
                confirmButtonColor: '#DB2777',
                showClass: {
                    popup: 'animate__animated animate__shakeX animate__faster'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutDown animate__faster'
                },
                customClass: {
                    confirmButton: 'px-4 py-2 rounded-lg font-medium shadow-lg transition hover:scale-105'
                }
            });

        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: HiMail,
            label: 'Email',
            value: 'riadb468@gmail.com',
            href: 'https://mail.google.com/mail/u/0/#inbox',
            color: 'from-blue-500 to-blue-600',
        },
        // {
        //     icon: HiPhone,
        //     label: 'Phone',
        //     value: '+880 1647380283',
        //     href: 'tel:+8801XXXXXXXX',
        //     color: 'from-green-500 to-green-600',
        // },
        {
            icon: HiChatAlt,
            label: 'WhatsApp',
            value: '+880 1647380283',
            href: 'https://wa.me/8801XXXXXXXX',
            color: 'from-emerald-500 to-emerald-600',
        },
        {
            icon: HiLocationMarker,
            label: 'Location',
            value: 'Dhaka, Bangladesh',
            href: '#',
            color: 'from-amber-500 to-amber-600',
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
                damping: 10
            }
        }
    };

    // Special animation for Send Message div
    const sendMessageVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: 15,
            rotateY: -5,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.4
            }
        },
        hover: {
            y: -5,
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.2)",
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    return (
        <section id="contact" className="relative py-20 overflow-hidden bg-[#1F2839]">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-500/10 blur-xl"
                        style={{
                            width: Math.random() * 200 + 100,
                            height: Math.random() * 200 + 100,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, (Math.random() * 100) - 50],
                            x: [0, (Math.random() * 60) - 30],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div
                        className="inline-block mb-4"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <HiOutlineSparkles className="text-yellow-400 text-4xl mx-auto" />
                    </motion.div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Let's Connect
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-md leading-relaxed">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                        <br /> Let's create something <span className="text-blue-400 font-medium">amazing</span> together!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div
                            className="bg-gray-900/70 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 shadow-xl shadow-blue-900/10"
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.h3
                                className="text-2xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Contact Information
                            </motion.h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                            </p>

                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={index}
                                        href={info.href}
                                        className="flex items-center p-4 bg-gray-800/40 hover:bg-gray-800/60 rounded-xl group transition-all duration-300"
                                        variants={itemVariants}
                                        whileHover={{
                                            scale: 1.03,
                                            x: 10,
                                            backgroundColor: 'rgba(30, 41, 59, 0.5)'
                                        }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <motion.div
                                            className={`bg-gradient-to-r ${info.color} p-3 rounded-lg mr-4 shadow-md`}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <info.icon className="text-white" size={20} />
                                        </motion.div>
                                        <div>
                                            <p className="text-gray-400 text-sm">{info.label}</p>
                                            <p className="text-white font-medium">{info.value}</p>
                                        </div>
                                        <motion.div
                                            className="ml-auto opacity-0 group-hover:opacity-100 text-blue-400"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <FiSend />
                                        </motion.div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Availability */}
                            <motion.div
                                className="mt-8 p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/20 rounded-xl flex items-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.7, 1, 0.7]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <HiClock className="text-green-400 mr-3" size={24} />
                                </motion.div>
                                <div>
                                    <p className="text-green-400 font-medium">Currently Available</p>
                                    <p className="text-gray-300 text-sm">
                                        I typically respond within 24 hours
                                    </p>
                                </div>
                                <motion.div
                                    className="ml-auto h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_2px_rgba(74,222,128,0.5)]"
                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Send Message Form - Special Animation */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div
                            className="bg-gray-900/70 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 shadow-xl shadow-purple-900/10"
                            variants={sendMessageVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                        >
                            <motion.h3
                                className="text-2xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Send Me a Message
                            </motion.h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {['name', 'email'].map((field) => (
                                        <motion.div
                                            key={field}
                                            variants={itemVariants}
                                            whileHover={{ y: -3 }}
                                        >
                                            <label htmlFor={field} className="block text-sm font-medium text-gray-300 mb-2">
                                                {field === 'name' ? 'Full Name' : 'Email Address'}
                                            </label>
                                            <motion.input
                                                type={field === 'email' ? 'email' : 'text'}
                                                id={field}
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                placeholder={
                                                    field === 'name'
                                                        ? 'Your name'
                                                        : 'your.email@example.com'
                                                }
                                                whileFocus={{
                                                    scale: 1.02,
                                                    boxShadow: "0 0 0 2px rgba(168, 85, 247, 0.5)"
                                                }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            />
                                        </motion.div>
                                    ))}
                                </div>

                                {['subject', 'message'].map((field) => (
                                    <motion.div
                                        key={field}
                                        variants={itemVariants}
                                        whileHover={{ y: -3 }}
                                    >
                                        <label htmlFor={field} className="block text-sm font-medium text-gray-300 mb-2">
                                            {field === 'subject' ? 'Subject' : 'Message'}
                                        </label>
                                        {field === 'message' ? (
                                            <motion.textarea
                                                id={field}
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                                placeholder="Tell me about your project or just say hi!"
                                                whileFocus={{
                                                    scale: 1.02,
                                                    boxShadow: "0 0 0 2px rgba(168, 85, 247, 0.5)"
                                                }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            />
                                        ) : (
                                            <motion.input
                                                type="text"
                                                id={field}
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                placeholder="What's this about?"
                                                whileFocus={{
                                                    scale: 1.02,
                                                    boxShadow: "0 0 0 2px rgba(168, 85, 247, 0.5)"
                                                }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            />
                                        )}
                                    </motion.div>
                                ))}

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                                    whileHover={{
                                        scale: isSubmitting ? 1 : 1.05,
                                        boxShadow: "0 10px 25px -5px rgba(192, 38, 211, 0.3)"
                                    }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                    variants={itemVariants}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50"
                                                animate={{
                                                    x: ['-100%', '100%'],
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                            />
                                            <motion.div
                                                className="h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50"
                                                animate={{
                                                    x: ['-100%', '100%'],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                            />
                                            <HiPaperAirplane className="mr-2 relative z-10 group-hover:animate-bounce" size={20} />
                                            <span className="relative z-10">Send Message</span>
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;