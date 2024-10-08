import React, { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';

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

    const shouldShowLogo = location.pathname === '/contact' || location.pathname === '/all-work' || location.pathname === '/about' || location.pathname === '/project' || location.pathname === '/project/flixtechs' || location.pathname === '/project/codecrafters' || location.pathname === '/project/metbank';

    return (
        <div>
            <div className='flex items-center bg-darky1'>
                <FontAwesomeIcon
                    icon={faBars}
                    className='text-3xl md:text-6xl text-white transition absolute hover:scale-125
                    right-4 top-4 md:right-20 md:top-10 cursor-pointer'
                    onClick={toggleModal}
                />
                {shouldShowLogo && (
                    < Link to="/">
                        <div className='ml-20 text-white mb-10 mt-10'>
                            <div>
                                <h2 className='text-2xl text-center font-serif'>farirai</h2>
                                <h2 className='text-3xl text-center font-extrabold'>Masocha</h2>
                            </div>
                        </div>
                    </Link>

                )}
            </div>

            {isModalOpen && (
                <div className='fixed inset-0 bg-darky1 to to-black z-50'>
                    <div className='absolute top-4 right-4'>
                        <FontAwesomeIcon
                            icon={faTimes}
                            className='text-5xl px-5 py-5 text-white cursor-pointer transition'
                            onClick={toggleModal}
                        />
                    </div>
                    <div className='flex items-center justify-center h-full'>
                        <section className='grid h-screen place-content-center gap-2 text-white cursor-pointer'>
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
