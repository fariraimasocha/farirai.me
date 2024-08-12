import React from 'react';
import Company from './Company';

function Projects() {
    return (
        <div className=' bg-pin hover:bg-blue-200 transition'>
            <div className='flex space-x-5 mb-4 justify-center mx-auto text-7xl py-20'>
                <h2 className='font-light'>FEATURED</h2>
                <h2 className='font-light mt-10'>PROJECTS</h2>
            </div>
            {/* <div className='flex justify-between px-20 border-b py-40 transition'>
                <div>
                    <h1 className='text-8xl font-black'>
                        Company Name
                    </h1>
                    <p className='text-2xl font-semibold tracking-widest'>
                        Project
                    </p>
                </div>
                <div className='tracking-widest'>
                    <h1 className='text-2xl font-semibold'>
                        FIELD
                    </h1>
                    <p className='text-2xl font-semibold'>
                        PRESENTATION
                    </p>
                </div>
            </div>
            <div className='flex justify-between px-20 border-b hover:bg-chel py-40 transition'>
                <div>
                    <h1 className='text-8xl font-black'>
                        Company Name
                    </h1>
                    <p className='text-2xl font-semibold tracking-widest'>
                        Project
                    </p>
                </div>
                <div className='tracking-widest'>
                    <h1 className='text-2xl font-semibold'>
                        FIELD
                    </h1>
                    <p className='text-2xl font-semibold'>
                        PRESENTATION
                    </p>
                </div>
            </div>
            <div className='flex justify-between px-20 border-b hover:bg-yel py-40 transition'>
                <div>
                    <h1 className='text-8xl font-black'>
                        Company Name
                    </h1>
                    <p className='text-2xl font-semibold tracking-widest'>
                        Project
                    </p>
                </div>
                <div className='tracking-widest'>
                    <h1 className='text-2xl font-semibold'>
                        FIELD
                    </h1>
                    <p className='text-2xl font-semibold'>
                        PRESENTATION
                    </p>
                </div>
            </div> */}
            <Company
                companyName="Company Name 1"
                project="Project 1"
                field="FIELD 1"
                presentation="PRESENTATION 1"
                bgClass="bg-chel"
            />
            <div className='flex items-center justify-center px-20 border-b hover:bg-darky py-40 transition'>
                <a href="#">
                    <button className='px-6 py-2 rounded-3xl ring-2 ring-darky1 text-darky1 font-semibold text-2xl hover:animate-bounce transition'>All Work</button>
                </a>
            </div>
        </div>
    );
}

export default Projects;
