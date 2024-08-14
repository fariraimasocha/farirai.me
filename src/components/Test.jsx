import React from 'react';
import { useParams } from 'react-router-dom';
import NavModal from './NavModal';
import Footer from './Footer';

function ProjectPage() {
    const { projectId } = useParams();

    const projectDetails = {
        "flixtechs": {
            companyName: "Flixtechs",
            overview: "At Flixtechs, I played a pivotal role as a Full-Stack Developer, here I utilized a range of technologies to build and deploy various projects. I developed a platform for connecting users with household professionals, integrating third-party systems like Ecocash to enhance functionality. Notable projects included contractease.co.zw. My work spanned across four programming languages. ",
            projectType: "Web Development",
            role: "Laravel Developer",
            imageSrc: "images/favicon/favicon.png",
            description: "Contractease website",
        },
        "codecrafters": {
            companyName: "Codecrafters",
            overview: "My journey as a Full-Stack Web Developer has been remarkable, particularly in the realm of building DeFi crypto platforms. I developed scalable backend services using Node.js, Express, and PostgreSQL, which were later transitioned to a serverless architecture. For the front-end, I utilized React for dynamic interfaces, Framer Motion for engaging animations, and Tailwind CSS for styling. I managed the deployment of both the front-end and backend, including the database, to AWS, ensuring a robust and efficient infrastructure.",
            projectType: "Web Development",
            role: "Laravel Developer",
            imageSrc: "images/favicon/favicon.png",
            description: "Contractease website",
        },
    };

    const project = projectDetails[projectId];

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div className='min-h-screen flex flex-col'>
            <NavModal />
            <div className='bg-darky1 px-20 flex justify-between'>
                <div className='md:w-8/12'>
                    <h1 className='font-serif bg-gradient-to-r mt-10 md:mt-80 from-blue-500 to-red-500 bg-clip-text text-transparent text-5xl md:text-9xl font-bold'>
                        {project.companyName}
                    </h1>
                    <h2 className='uppercase font-light bg-gradient-to-r mt-5 md:mt-40 from-blue-500 to-red-500 bg-clip-text text-transparent text-4xl md:text-6xl'>
                        Overview
                    </h2>
                    <p className='text-gray-500 mt-4 md:mt-8 font-light w-full md:w-9/12 font-serif text-xl md:text-2xl'>
                        {project.overview}
                    </p>

                    <div className='py-6 md:py-10'>
                        <button
                            type='submit'
                            className='px-4 md:px-6 rounded-3xl bg-darky ring-2 ring-darky text-darky2 py-2 font-semibold text-lg md:text-2xl hover:bg-black hover:text-white font-serif'>
                            Send Message
                        </button>
                    </div>
                </div>
                <div className='md:mr-20 mt-20 md:mt-80 md:py-80 md:mb-10 sm:mb-10'>
                    <div className='mt-5'>
                        <h2 className='uppercase py-4 md:py-2 tracking-wider font-light bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent text-lg md:text-xl'>
                            Focus
                        </h2>
                        <p className='font-sans text-lg md:text-xl text-darky'>{project.projectType}</p>
                    </div>
                    <div className='mt-5'>
                        <h2 className='uppercase py-4 md:py-2 tracking-wider font-light bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent text-lg md:text-xl'>
                            Role
                        </h2>
                        <p className='font-sans text-lg md:text-xl text-darky'>{project.role}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProjectPage;
