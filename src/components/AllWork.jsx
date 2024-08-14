// src/components/AllWork.jsx
import React from 'react';
import NavModal from './NavModal';
import Footer from './Footer';
import Card from './Card';


function AllWork() {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavModal />
            <div className='bg-blue-300 mt-20 min-h-screen'>
                <div className="flex flex-col md:flex-row md:space-x-5 mb-4 justify-center mx-auto mt-10 text-4xl md:text-7xl py-10 md:py-20 hover:animate-pulse bg-blue-300">
                    <h2 className="font-light text-center md:text-left">ALL</h2>
                    <h2 className="font-light mt-5 md:mt-10 text-center md:text-left">WORK</h2>
                </div>
                <div className='px-4 md:px-16 py-10'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Card
                            title="Noteworthy technology acquisitions 2021"
                            description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                            imageSrc="images/hello.jpg"
                            link="/detailed-project-page"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AllWork;
