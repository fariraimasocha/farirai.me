import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Card = ({ title, description, imageSrc, link }) => {
    const handleClick = () => {
        window.location.href = link;
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative group bg-white border border-gray-200 rounded-lg shadow cursor-pointer overflow-hidden transition-transform duration-300"
            onClick={handleClick}
        >
            <img className="w-full h-64 object-cover rounded-t-lg" src={imageSrc} alt={title} />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                <p className="mb-3 font-normal text-gray-700">{description}</p>
            </div>
            {/* Overlay with opacity */}
            <motion.div
                className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                <FontAwesomeIcon icon={faArrowRight} className="text-white text-4xl" />
            </motion.div>
        </motion.div>
    );
};

export default Card;
