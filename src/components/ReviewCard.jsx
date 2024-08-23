import React from 'react';
import { motion } from 'framer-motion';

const ReviewCard = ({ name, imageSrc, reviewText, delay }) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.90
            }}
            className="px-3 md:w-1/3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src={imageSrc} alt={name} />
                    </div>
                    <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">{name}</h6>
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-sm leading-tight">
                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                        {reviewText}
                        <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default ReviewCard;
