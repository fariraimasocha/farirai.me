import React, { Children, useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Main from './Main';
import Projects from './Projects';
import Footer from './Footer';
import { motion } from 'framer-motion';

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const FlipLink = ({ children, href }) => {
        return <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className='relative block overflow-hidden
         whitespace-nowrap text-4xl font-serif  uppercase
         sm:text-6xl md:text-7xl lg:text-8xl
        '
        >
            <motion.div
                variants={{
                    initial: { y: 0 },
                    hovered: { y: "-100%" },
                }}>
                {children}
            </motion.div>
            <motion.div
                className='absolute inset-0'
                variants={{
                    initial: { y: "100%" },
                    hovered: { y: 0 },
                }}>
                {children}
            </motion.div>

        </motion.a>;
    };

    return (
        <div className='flex flex-col'>
            <nav className='px-4 md:px-10'>
                <FontAwesomeIcon
                    icon={faBars}
                    className='text-3xl md:text-4xl hover:text-gray-400 transition absolute right-4 top-4 md:right-10 md:top-10 cursor-pointer'
                    onClick={toggleModal}
                />
            </nav>
            <Main />
            <Projects />
            <Footer />

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
                            <FlipLink href="#">Home</FlipLink>
                            <FlipLink href="#">All work </FlipLink>
                            <FlipLink href="#">About</FlipLink>
                            <FlipLink href="#">Contact</FlipLink>

                        </section>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
