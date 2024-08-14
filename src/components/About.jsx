import React from 'react'
import NavModal from './NavModal'
import { Link } from 'react-router-dom'
import CompanyCard from './CompanyCard'

function About() {
    return (
        <div className='flex flex-col bg-lighty'>
            <NavModal />
            <div className='flex-grow px-6 md:px-10 py-10'>
                <h2 className='font-serif text-red-400 text-5xl md:text-7xl lg:text-9xl mt-16 md:mt-32 text-center md:text-left'>About</h2>
                <div className='mt-10 md:mt-16 text-center md:text-left'>
                    <p className='text-ech1 text-lg md:text-xl lg:text-2xl mx-auto md:ml-11 md:w-8/12 lg:w-6/12 font-serif'>
                        Farirai is a Software Developer with over 4 years industry experience, focusing on crafting powerful,
                        full-stack web applications through innovative and interaction technologies..
                    </p>
                    <p className='text-gray-500 mt-8 text-lg md:text-xl lg:text-2xl mx-auto md:ml-11 md:w-8/12 lg:w-6/12 font-light'>
                        My expertise encompasses visual, UI, and interaction design, with a strong emphasis
                        on crafting aesthetically pleasing and engaging experiences.
                    </p>
                    <p className='text-gray-500 mt-8 text-lg md:text-xl lg:text-2xl mx-auto md:ml-11 md:w-8/12 lg:w-6/12 font-light'>
                        I thrive in collaborative environments and enjoy working directly with clients to bring projects to life.
                        My skill set includes developing pattern libraries,
                        style guides, conceptualising designs and delving into branding.
                    </p>
                    <p className='text-gray-500 mt-8 text-lg md:text-xl lg:text-2xl mx-auto md:ml-11 md:w-8/12 lg:w-6/12 font-light'>
                        I am also passionate about animation, prototyping and illustration and have a proven track record in large-scale
                        web and platform builds, app design and content creation for social media.
                    </p>

                    <p className='text-gray-500 mt-8 text-lg md:text-xl lg:text-2xl mx-auto md:ml-11 md:w-8/12 lg:w-6/12 font-light'>
                        In my spare time, I enjoy teaching and sharing; others about Software development on my linkedln.
                    </p>

                    <Link>
                        <p className='text-blue-300 mt-8 text-lg md:text-xl lg:text-2xl mx-auto md:ml-11 md:w-8/12 lg:w-6/12 font-serif hover:underline'>
                            My Linkedln
                        </p>
                    </Link>
                </div>
            </div>
            <div className='bg-blue-300 mt-20 min-h-screen'>
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
                    <CompanyCard
                        field="iot tag"
                        presentation="visual"
                        imageSrc="images/favicon/favicon.png"
                        companyName="Coderafters"
                        description="Livestock Antitheft System"
                        mt="" />

                </div>

                <div className='flex items-center justify-center px-20 border-b py-20 transition'>
                    <Link to="/all-work">
                        <button className='px-6 py-2 rounded-3xl ring-2 ring-darky1 text-darky1 font-semibold text-2xl hover:bg-black hover:text-white'>All Work</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default About