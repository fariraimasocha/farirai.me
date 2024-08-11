import React, { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Main from './Main';
import Projects from './Projects';
import Footer from './Footer';

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
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
                <div className='fixed inset-0 bg-chel z-50'>
                    <div className='absolute top-4 right-4'>
                        <FontAwesomeIcon
                            icon={faTimes}
                            className='text-5xl px-5 py-5 text-white cursor-pointer hover:text-red-500 transition'
                            onClick={toggleModal}
                        />
                    </div>
                    <div className='flex items-center justify-center h-full'>
                        <div className='text-center text-white'>
                            {/* Content for modal */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
