import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

function ServiceCard({ icon, name, description, textColor, color }) {
    return (
        <motion.div
            className='w-full mx-auto rounded-lg bg-white border border-gray-200 p-6 text-gray-800 font-light mb-6 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl'
            whileHover={{ scale: 1.05, translateY: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="w-full flex flex-col items-center">
                <FontAwesomeIcon icon={icon} className={`text-5xl ${textColor}`} style={{ color }} />
                <h2 className='text-2xl font-semibold text-gray-700 mb-2'>{name}</h2>
                <p className='text-lg text-gray-600 text-center'>{description}</p>
            </div>
        </motion.div>
    );
}

export default ServiceCard;
