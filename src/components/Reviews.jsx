import React from 'react';
import { motion } from 'framer-motion';
import ReviewCard from './ReviewCard'; // Import the ReviewCard component

function Reviews() {
    const reviews = [
        {
            name: 'Anne White',
            imageSrc: 'https://i.pravatar.cc/100?img=1',
            reviewText: 'Farirai Masocha is an exceptional developer with a keen eye for detail. Their work on my website was not only top-notch but also delivered ahead of schedule. I highly recommend Farirai for any software development needs.',
            delay: 0.2,
        },
        {
            name: 'Tommie Ewart',
            imageSrc: 'https://i.pravatar.cc/100?img=3',
            reviewText: 'I hired Farirai Masocha to develop a chatbot for my business, and I couldn’t be happier with the results. The chatbot works flawlessly, and it’s clear that Farirai has a deep understanding of user experience and backend integration.',
            delay: 0.6,
        },
        {
            name: 'Godknows Aresho',
            imageSrc: 'https://i.pravatar.cc/100?img=4',
            reviewText: 'Farirai is not just a developer but a problem-solver. They helped me with a complex issue in my codebase, and their solution was both elegant and efficient. If you’re looking for someone who can tackle any challenge, Farirai is the developer you need.',
            delay: 0.8,
        },
        {
            name: 'Jade Ling',
            imageSrc: 'https://i.pravatar.cc/100?img=5',
            reviewText: 'Farirai Masocha has an impressive portfolio and unmatched dedication to their craft. They built a responsive and dynamic website for my business, and the results exceeded my expectations. Highly recommended!',
            delay: 1.0,
        },
    ];

    return (
        <div className='min-h-screen bg-white'>
            <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                    <div className="w-full max-w-6xl mx-auto">
                        <motion.div
                            className="text-center max-w-xl mx-auto"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
                                What people <br />are saying.
                            </h1>
                            <h3 className="text-xl mb-5 font-light">
                                Here’s what my clients and colleagues have to say about my work.
                            </h3>
                            <motion.div
                                className="text-center mb-10"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            </motion.div>
                        </motion.div>
                        <div className="-mx-3 md:flex items-start flex-wrap">
                            {reviews.map((review, index) => (
                                <ReviewCard
                                    key={index}
                                    name={review.name}
                                    imageSrc={review.imageSrc}
                                    reviewText={review.reviewText}
                                    delay={review.delay}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
