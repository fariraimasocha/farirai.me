import React from 'react';
import Company from './Company';

function Projects() {
    return (
        <div className=' bg-pin hover:bg-blue-200 transition'>
            <div className='flex space-x-5 mb-4 justify-center mx-auto text-7xl py-20 hover:animate-pulse'>
                <h2 className='font-light'>FEATURED</h2>
                <h2 className='font-light mt-10'>PROJECTS</h2>
            </div>
            <Company
                companyName="Flixtechs"
                project="Contractease website"
                field="WEB DEVELOPMENT"
                presentation="PRODUCT"
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
