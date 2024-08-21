import React, { useState } from 'react';
import Company from './Company';
import { Link } from 'react-router-dom';

function Projects() {
    const [bgClass, setBgClass] = useState('bg-blue-300');

    return (
        <div className={`transition ${bgClass}`}>
            <div className="flex flex-col md:flex-row md:space-x-5 mb-4 justify-center mx-auto text-4xl md:text-7xl py-10 md:py-20 hover:animate-pulse">
                <h2 className="font-light text-center md:text-left">FEATURED</h2>
                <h2 className="font-light mt-5 md:mt-10 text-center md:text-left">PROJECTS</h2>
            </div>

            <div className='justify-center mx-auto w-11/12'>
                <Link to="/project/flixtechs">
                    <Company
                        companyName="Flixtechs"
                        project="Contractease website"
                        field="WEB DEVELOPMENT"
                        presentation="WEBSITE"
                        onHover={() => setBgClass('bg-yel')}
                        onHoverOut={() => setBgClass('bg-blue-300')}
                    />
                </Link>
                <Link to="/project/codecrafters">
                    <Company
                        companyName="Codecrafters"
                        project="Livestock tracking system"
                        field="IOT"
                        presentation="PRODUCT"
                        onHover={() => setBgClass('bg-peach')}
                        onHoverOut={() => setBgClass('bg-blue-300')}
                    />
                </Link>
                <Link to="/project/metbank">
                    <Company
                        companyName="Metbank"
                        project="Emphaya website"
                        field="BACKEND DEVELOPMENT"
                        presentation="WEBSITE"
                        onHover={() => setBgClass('bg-pin')}
                        onHoverOut={() => setBgClass('bg-blue-300')}
                    />
                </Link>

            </div>
            <div className='flex items-center justify-center px-20 border-b hover:bg-darky py-40 transition'>
                <Link to="/all-work">
                    <button className='px-6 py-2 rounded-3xl ring-2 ring-darky1 text-darky1 font-semibold text-2xl hover:bg-black hover:text-white'>All Work</button>
                </Link>
            </div>
        </div>
    );
}

export default Projects;
