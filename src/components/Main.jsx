import React from 'react';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import NavModal from './NavModal';

function Main() {
    const handleScroll = () => {
        const nextSection = document.getElementById('services'); // ID of the next section
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='relative h-screen flex flex-col items-center justify-center bg-darky1 border-b-2 border-darky2'>
            <NavModal />
            <div className='flex flex-col items-center justify-center text-center'>
                <motion.h1
                    className='font-serif text-5xl md:text-7xl lg:text-9xl text-white mb-4'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Farirai
                </motion.h1>
                <motion.h1
                    className='font-extrabold text-5xl md:text-7xl lg:text-9xl text-white mb-6'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Masocha
                </motion.h1>
                <div className='flex flex-col md:flex-row space-y-4 md:space-x-8 md:space-y-0 items-center'>
                    <motion.div
                        whileTap={{ scale: 0.85 }}
                        whileHover={{ scale: 1.2 }}
                        onClick={handleScroll}
                        className='cursor-pointer'
                    >
                        <FontAwesomeIcon
                            icon={faChevronCircleDown}
                            className='text-4xl md:text-5xl lg:text-6xl text-white hover:text-gray-300 transition-transform transform hover:scale-125 animate-bounce'
                        />
                    </motion.div>
                    <div className='text-white font-sans text-lg md:text-xl'>
                        <h1 className='text-2xl md:text-3xl font-semibold'>SOFTWARE</h1>
                        <h1 className='text-2xl md:text-3xl font-semibold'>DEVELOPER</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
