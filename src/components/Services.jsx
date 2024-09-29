import React from 'react';
import { faReact, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faPalette, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import SericeCard from './SericeCard';
import { motion } from 'framer-motion';

const scaleRevealVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

function Services() {
    return (
        <div className='min-h-screen bg-white'>
            <div className='px-8 md:px-20 mb-20'>
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={scaleRevealVariant}
                    className="text-6xl md:text-7xl font-bold mb-5 text-gray-600 text-center mt-14"
                >
                    Services
                </motion.h2>
                <div className='py-8 mt-20 md:mt-24 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 lg:space-x-52'>
                    <div>
                        <div className='flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0'>
                            <motion.div
                                variants={scaleRevealVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <SericeCard
                                    name="Web Development"
                                    description="Creating high-quality, responsive websites using modern technologies like React.js, ensuring seamless user experiences across all devices."
                                    icon={faReact}
                                    color="#3776AB"
                                />
                            </motion.div>
                            <motion.div
                                variants={scaleRevealVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <SericeCard
                                    name="Android Development"
                                    description="Building efficient, user-friendly Android applications tailored to your needs, ensuring performance and scalability."
                                    icon={faAndroid}
                                    color="#68A063"
                                />
                            </motion.div>
                        </div>
                        <div className='flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 mt-10'>
                            <motion.div
                                variants={scaleRevealVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <SericeCard
                                    name="UI/UX Design"
                                    description="Designing intuitive and visually appealing user interfaces that provide excellent user experiences, keeping your users engaged."
                                    icon={faPalette}
                                    color="#1572B6"
                                />
                            </motion.div>
                            <motion.div
                                variants={scaleRevealVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <SericeCard
                                    name="Digital Marketing"
                                    description="Crafting digital marketing strategies to enhance your online presence, boost engagement, and drive business growth."
                                    icon={faBullhorn}
                                    color="#181532"
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center md:flex-row md:justify-between md:text-left">
                        <div>
                            <motion.h2
                                variants={scaleRevealVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className='text-5xl md:text-4xl font-bold mt-10 md:mt-20 text-gray-700'
                            >
                                Why Choose Me
                            </motion.h2>
                            <motion.p
                                variants={scaleRevealVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className='w-full text-base md:text-lg font-sans py-3 text-gray-700'
                            >
                                With a strong background in web app development, I deliver quality web applications and services
                                to meet your business and project needs.
                            </motion.p>
                            <motion.button
                                whileTap={{ scale: 0.85 }}
                                type='submit'
                                className='px-8 md:px-6 mt-4 md:mt-2 py-0.5 rounded-3xl ring-2 ring-gray-700 hover:text-gray-700 hover:bg-white font-semibold text-xl md:text-2xl bg-gray-700 text-white'
                            >
                                Hire Me
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
