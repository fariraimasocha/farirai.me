import React from 'react';
import Company from './Company';

function Projects() {
    return (
        <div className=' bg-pin transition'>
            <div className='flex space-x-5 mb-4 justify-center mx-auto text-7xl py-20 hover:animate-pulse'>
                <h2 className='font-light'>FEATURED</h2>
                <h2 className='font-light mt-10'>PROJECTS</h2>
            </div>
            <Company
                companyName="Flixtechs"
                project="Contractease website"
                field="WEB DEVELOPMENT"
                presentation="WEBSITE"
                bgClass="bg-yel"
            />
            <Company
                companyName="Codecrafters"
                project="Livestock tracking system"
                field="IOT"
                presentation="PRODUCT"
                bgClass="bg-chel"
            />
            <Company
                companyName="Tirelo Capital"
                project="Satechi E Learning website"
                field="WEB DESIGN"
                presentation="WEBSITE"
                bgClass="bg-peach"
            />
            <div className='flex items-center justify-center px-20 border-b hover:bg-darky py-40 transition'>
                <a href="#">
                    <button className='px-6 py-2 rounded-3xl ring-2 ring-darky1 text-darky1 font-semibold text-2xl hover:bg-black hover:text-white'>All Work</button>
                </a>
            </div>
        </div>
    );
}

export default Projects;
