import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import NavModal from './NavModal';
import CompanyCard from './CompanyCard';
import Footer from './Footer';

function ProjectPage() {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavModal />
            <div className='bg-darky1 px-4 md:px-20 mt-10 md:mt-20 min-h-screen flex flex-col md:flex-row justify-between'>
                <div className='md:w-8/12'>
                    <h1
                        className='font-serif bg-gradient-to-r mt-10 md:mt-80 from-blue-500 to-red-500 bg-clip-text text-transparent text-5xl md:text-9xl font-bold'
                    >
                        Company
                    </h1>
                    <h2 className='uppercase font-light bg-gradient-to-r mt-5 md:mt-40 from-blue-500 to-red-500 bg-clip-text text-transparent text-4xl md:text-6xl'>
                        Overview
                    </h2>
                    <p className='text-gray-500 mt-4 md:mt-8 font-light w-full md:w-9/12 font-serif text-xl md:text-2xl'>
                        I am also passionate about animation, prototyping, and illustration and have a proven track record in large-scale
                        web and platform builds, app design, and content for social media.
                    </p>

                    <p className='text-gray-500 mt-4 md:mt-8 font-light w-full md:w-9/12 font-sans text-xl md:text-2xl'>
                        During my time working with Apple, I was a lead designer on various campaign landing
                        pages featured on Apple.com. contact me directly to discuss.
                    </p>
                    <div className='py-6 md:py-10'>
                        <button
                            type='submit'
                            className='px-4 md:px-6 rounded-3xl bg-darky ring-2 ring-darky text-darky2 py-2 font-semibold text-lg md:text-2xl hover:bg-black hover:text-white font-serif'>
                            Send Message
                        </button>
                    </div>
                </div>
                <div className='md:mr-20 mt-20 md:mt-80 md:mb-10 sm:mb-10'>
                    <div className='mt-20 md:mt-96'>
                        <h2 className='uppercase py-4 md:py-2 tracking-wider font-light bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent text-lg md:text-xl'>
                            Client
                        </h2>
                        <p className='font-sans text-lg md:text-xl text-darky'>Apple</p>
                    </div>
                    <div className='mt-5'>
                        <h2 className='uppercase py-4 md:py-2 tracking-wider font-light bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent text-lg md:text-xl'>
                            Project Type
                        </h2>
                        <p className='font-sans text-lg md:text-xl text-darky'>Apple</p>
                    </div>
                    <div className='mt-5'>
                        <h2 className='uppercase py-4 md:py-2 tracking-wider font-light bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent text-lg md:text-xl'>
                            Role
                        </h2>
                        <p className='font-sans text-lg md:text-xl text-darky'>Apple</p>
                    </div>
                </div>
            </div>
            <div className='bg-blue-300 min-h-screen'>
                <div className="flex flex-col md:flex-row md:space-x-5 mb-4 justify-center mx-auto mt-10 text-4xl md:text-7xl py-10 md:py-20 hover:animate-pulse bg-blue-300">
                    <h2 className="font-light text-center md:text-left">ALL</h2>
                    <h2 className="font-light mt-5 md:mt-10 text-center md:text-left">WORK</h2>
                </div>

                <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 px-4 md:px-16 py-10'>

                    <CompanyCard
                        field="website"
                        presentation="visual"
                        imageSrc="images/favicon/favicon.png"
                        companyName="Flixtechs"
                        description="Contractease website"
                        mt="" />
                    {/* <CompanyCard
                        field="iot tag"
                        presentation="visual"
                        imageSrc="images/favicon/favicon.png"
                        companyName="Coderafters"
                        description="Livestock Antitheft System"
                        mt="" /> */}

                </div>

                <Link to="/all-work">
                    <div className='flex items-center justify-center px-20 border-b py-20 transition'>
                        <button className='px-6 py-2 rounded-3xl ring-2 ring-darky1 text-darky1 font-semibold text-2xl hover:bg-black hover:text-white'>All Work</button>
                    </div>
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default ProjectPage;
