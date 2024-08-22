import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Card = ({ title, description, imageSrc, link }) => {
    const handleClick = () => {
        window.location.href = link;
    };

    return (
        <div
            className="bg-white border border-gray-200 rounded-lg shadow cursor-pointer"
            onClick={handleClick}
        >
            <img className="rounded-t-lg" src={imageSrc} alt={title} />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                <p className="mb-3 font-normal text-gray-700">{description}</p>
                <motion.button
                    whileTap={{
                        scale: 0.85
                    }}
                    className="inline-flex space-x-3 items-center px-5 py-2 text-sm font-medium text-center text-white bg-darky1 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    onClick={handleClick}
                >
                    <h1 className='tracking-wider'>Visit</h1>
                    <FontAwesomeIcon icon={faArrowRight} />
                </motion.button>
            </div>
        </div>
    );
};

export default Card;
