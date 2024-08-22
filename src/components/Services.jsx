import React from 'react';
import { faReact, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faPalette, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import SericeCard from './SericeCard';

function Services() {
    return (
        <div className='min-h-screen bg-white'>
            <div className='px-8 md:px-24 mb-20'>
                <h2 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600 text-center mt-14">Services</h2>
                <div className='py-8 mt-20 md:mt-24 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 lg:space-x-52'>
                    <div>
                        <div className='flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0'>
                            <SericeCard
                                name="Web Development"
                                description="Creating high-quality, responsive websites using modern technologies like React.js, ensuring seamless user experiences across all devices."
                                icon={faReact}
                            />
                            <SericeCard
                                name="Android Development"
                                description="Building efficient, user-friendly Android applications tailored to your needs, ensuring performance and scalability."
                                icon={faAndroid}
                            />
                        </div>
                        <div className='flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 mt-10'>
                            <SericeCard
                                name="UI/UX Design"
                                description="Designing intuitive and visually appealing user interfaces that provide excellent user experiences, keeping your users engaged."
                                icon={faPalette}
                            />
                            <SericeCard
                                name="Digital Marketing"
                                description="Crafting digital marketing strategies to enhance your online presence, boost engagement, and drive business growth."
                                icon={faBullhorn}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-5xl md:text-5xl font-semibold mt-10 md:mt-32 text-gray-700'>Why Choose Me</h2>
                        <p className='w-full text-base md:text-lg font-sans py-3 text-gray-700'>
                            With a strong background in web development, I deliver quality web applications and services
                            to meet your business and project needs.

                        </p>
                        <button
                            type='submit'
                            className='px-8 md:px-10 mt-4 md:mt-2 py-2 rounded-3xl ring-2 ring-gray-700 hover:text-gray-700 hover:bg-white font-semibold text-xl md:text-2xl bg-gray-700 text-white'>
                            Hire Me
                        </button>
                        <img src="images/lufy.png" alt="" className='h-16 mt-10 md:mt-20' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
