import React from 'react'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Services() {
    return (
        <div className='min-h-screen bg-white'>
            <div className='px-24'>
                <h2 className="font-serif text-8xl text-darky1 text-center mt-32">Services</h2>
                <div className='py-1 mt-40 flex space-x-52'>
                    <div>
                        <div className='flex space-x-10'>
                            <div className='rounded-lg w-72 ring-2 text-center hover:bg-darky1 hover:text-white text-darky1 ring-darky1'>
                                < FontAwesomeIcon icon={faReact} className='text-5xl' />
                                <h2 className='text-2xl font-semibold py-2'>Web Development</h2>
                                <p className='py-2 font-sans text-lg px-2'>Specialize in crafting welt built web applications</p>
                            </div>
                            <div className='rounded-lg w-72 ring-2 text-center hover:bg-darky1 hover:text-white text-darky1 ring-darky1'>
                                < FontAwesomeIcon icon={faReact} className='text-5xl' />
                                <h2 className='text-2xl font-semibold py-2'>Web Development</h2>
                                <p className='py-2 font-sans text-lg px-2'>Specialize in crafting welt built web applications</p>
                            </div>
                        </div>
                        <div className='flex space-x-10 mt-10'>
                            <div className='rounded-lg w-72 ring-2 text-center hover:bg-darky1 hover:text-white text-darky1 ring-darky1'>
                                < FontAwesomeIcon icon={faReact} className='text-5xl' />
                                <h2 className='text-2xl font-semibold py-2'>Web Development</h2>
                                <p className='py-2 font-sans text-lg px-2'>Specialize in crafting welt built web applications</p>
                            </div>
                            <div className='rounded-lg w-72 ring-2 text-center hover:bg-darky1 hover:text-white text-darky1 ring-darky1'>
                                < FontAwesomeIcon icon={faReact} className='text-5xl' />
                                <h2 className='text-2xl font-semibold py-2'>Web Development</h2>
                                <p className='py-2 font-sans text-lg px-2'>Specialize in crafting welt built web applications</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h2 className='text-7xl font-semibold mt-16'>Why Choose Me</h2>
                        <p className='w-7/12 text-lg font-sans py-3'>Have a good background in web development so i can deliver quality web applications and
                            services to cater for your buisness and project needs</p>
                        <button
                            type='submit'
                            className='px-10 mt-2 py-2 rounded-3xl ring-2 ring-darky1 text-darky1 font-semibold text-2xl hover:bg-black hover:text-white'>
                            Hire Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services