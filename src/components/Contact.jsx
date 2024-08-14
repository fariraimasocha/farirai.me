import React from 'react';
import NavModal from './NavModal';
import Footer from './Footer';

function Contact() {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavModal />
            <div className='flex-grow px-6 md:px-10 py-10'>
                <h2 className='font-serif text-red-400 text-5xl md:text-7xl lg:text-9xl mt-16 md:mt-32 text-center md:text-left'>Contact</h2>
                <div className='mt-10 md:mt-16 text-center md:text-left'>
                    <p className='text-ech1 text-lg md:text-xl lg:text-2xl mx-auto md:ml-11 md:w-8/12 lg:w-6/12 font-serif'>
                        I'm currently available for freelance work whilst considering my next permanent position.
                    </p>
                    <p className='text-gray-500 mt-8 text-lg md:text-xl lg:text-2xl mx-auto md:ml-11 md:w-8/12 lg:w-6/12 font-light'>
                        If you would like to catch up to discuss any opportunities, please send me a message.
                    </p>
                </div>
                <div className='mt-16 md:mt-24 cursor-default'>
                    <form className='max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <input
                                type='text'
                                placeholder='Your Name'
                                className='border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400'
                            />
                            <input
                                type='email'
                                placeholder='Your Email'
                                className='border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400'
                            />
                        </div>
                        <div className='mt-8'>
                            <textarea
                                placeholder='Your Message'
                                rows='6'
                                className='border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400'
                            />
                        </div>
                        <div className='mt-8 text-center'>
                            <button
                                type='submit'
                                className='px-6 py-2 rounded-3xl ring-2 ring-darky1 text-darky1 font-semibold text-2xl hover:bg-black hover:text-white'>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
