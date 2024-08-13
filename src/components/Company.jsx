import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Company({ companyName, project, field, presentation, onHover, onHoverOut }) {
    const FlipText = ({ children, hoverText }) => {
        return (
            <motion.div
                className='relative block overflow-hidden text-xl'
                initial="initial"
                whileHover="hovered"
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
                    className='absolute inset-0 flex items-center space-x-2'
                    variants={{
                        initial: { y: "100%" },
                        hovered: { y: 0 },
                    }}
                >
                    <span>{hoverText}</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </motion.div>
            </motion.div>
        );
    };

    return (
        <div
            className={`flex justify-between px-20 border-b-2 border-pink py-40 transition`}
            onMouseEnter={onHover}
            onMouseLeave={onHoverOut}
        >
            <div>
                <h1 className='text-8xl font-black hover:text-darky1 transition'>
                    {companyName}
                </h1>
                <p className='text-2xl font-semibold tracking-widest'>
                    {project}
                </p>
            </div>
            <div className='tracking-widest'>
                <h1 className='text-2xl font-semibold'>
                    {field}
                </h1>
                <FlipText hoverText="Click Me">
                    <p className='text-2xl font-semibold mt-1'>
                        {presentation}
                    </p>
                </FlipText>
            </div>
        </div>
    );
}

export default Company;
