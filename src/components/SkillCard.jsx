import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

function SkillCard({ icon, color }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className='rounded-xl border w-full sm:w-5/12 md:w-2/6 lg:w-1/5 p-4 bg-white'>
            <div className='justify-center mx-auto text-center'>
                <FontAwesomeIcon icon={icon} className='text-5xl py-7' style={{ color }} />
            </div>
        </motion.div>
    );
}

export default SkillCard;
