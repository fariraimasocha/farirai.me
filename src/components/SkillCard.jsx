import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

function SkillCard({ icon, color, backgroundColor = '', textColor = 'text-gray-700' }) {
    return (
        <motion.div
            whileHover={{ scale: 1.3, rotate: 5, translateY: -5, translateX: -5 }}
            className={`rounded-xl ${backgroundColor}transition-shadow duration-300 ease-in-out`}
        >
            <div className='justify-center mx-auto text-center'>
                <FontAwesomeIcon icon={icon} className={`text-5xl ${textColor}`} style={{ color }} />
            </div>
        </motion.div>
    );
}

export default SkillCard;
