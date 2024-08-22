import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

function ServiceCard({ icon, name, description }) {
    return (
        <motion.div
            className='rounded-lg w-80 ring-2 transition text-center hover:bg-darky1 hover:ring-white hover:text-white text-darky1 ring-darky1'
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <FontAwesomeIcon icon={icon} className='text-5xl mt-4' />
            <h2 className='text-2xl font-semibold py-2'>{name}</h2>
            <p className='py-2 font-sans text-lg px-2'>{description}</p>
        </motion.div>
    );
}

export default ServiceCard;
