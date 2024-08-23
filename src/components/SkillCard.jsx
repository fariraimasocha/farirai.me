import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

function SkillCard({ icon, color, backgroundColor = 'bg-white', textColor = 'text-gray-700' }) {
    return (
        <motion.div
            whileHover={{ scale: 1.3, rotate: 5, translateY: -5 }}
            className={`rounded-xl border w-full sm:w-5/12 md:w-2/6 lg:w-1/5 p-6 sm:p-4 ${backgroundColor} shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out`}
        >
            <div className='justify-center mx-auto text-center'>
                <FontAwesomeIcon icon={icon} className={`text-5xl py-4 ${textColor}`} style={{ color }} />
            </div>
        </motion.div>
    );
}

export default SkillCard;
