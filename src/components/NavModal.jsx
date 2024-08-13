import React, { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const NavModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleNavigation = (to) => {
        setIsModalOpen(false);
        navigate(to);
    };

    const FlipLink = ({ children, to }) => {
        return (
            <motion.div
                initial="initial"
                whileHover="hovered"
                className='relative block overflow-hidden whitespace-nowrap text-4xl font-serif uppercase sm:text-6xl md:text-7xl lg:text-8xl'
                onClick={() => handleNavigation(to)}
            >
                <motion.div
                    variants={{
                        initial: { y: 0 },
                        hovered: { y: "-100%" },
                    }}
                >
                    {children}
                </motion.div>
                <motion.div
                    className='absolute inset-0'
                    variants={{
                        initial: { y: "100%" },
                        hovered: { y: 0 },
                    }}
                >
                    {children}
                </motion.div>
            </motion.div>
        );
    };

    // Determine whether to show the logo
    const shouldShowLogo = location.pathname === '/contact' || location.pathname === '/all-work';

    return (
        <div>
            <div className='flex items-center'>
                <FontAwesomeIcon
                    icon={faBars}
                    className='text-3xl md:text-7xl hover:text-gray-400 transition absolute 
                    right-4 top-4 md:right-10 md:top-10 cursor-pointer'
                    onClick={toggleModal}
                />
                {shouldShowLogo && (
                    <div className='ml-10 mt-10'>
                        <div>
                            <h2 className='text-2xl text-center font-serif'>farirai</h2>
                            <h2 className='text-3xl text-center font-extrabold'>Masocha</h2>
                        </div>
                    </div>
                )}
            </div>

            {isModalOpen && (
                <div className='fixed inset-0 bg-yel z-50'>
                    <div className='absolute top-4 right-4'>
                        <FontAwesomeIcon
                            icon={faTimes}
                            className='text-5xl px-5 py-5 text-darky1 cursor-pointer transition'
                            onClick={toggleModal}
                        />
                    </div>
                    <div className='flex items-center justify-center h-full'>
                        <section className='grid h-screen place-content-center gap-2 text-black'>
                            <FlipLink to="/">Home</FlipLink>
                            <FlipLink to="/all-work">All work</FlipLink>
                            <FlipLink to="/about">About</FlipLink>
                            <FlipLink to="/contact">Contact</FlipLink>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavModal;
