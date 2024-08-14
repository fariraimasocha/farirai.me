import React from 'react'
import NavModal from './NavModal'
import { Link } from 'react-router-dom'
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
        </div>
    )
}

export default About