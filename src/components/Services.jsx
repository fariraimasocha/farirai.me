import React from 'react'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SericeCard from './SericeCard'

function Services() {
    return (
        <div className='min-h-screen bg-white'>
            <div className='px-8 md:px-24'>
                <h2 className="font-serif text-5xl md:text-8xl text-darky1 text-center mt-16 md:mt-32">Services</h2>
                <div className='py-8 mt-20 md:mt-40 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 lg:space-x-52'>
                    <div>
                        <div className='flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0'>
                            < SericeCard
                                name="Name"
                                description=" description description description description description description description description"
                                icon={faReact}
                            />
                            < SericeCard
                                name="Name"
                                description=" description description description description description description description description"
                                icon={faReact}
                            />
                        </div>
                        <div className='flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 mt-10'>
                            < SericeCard
                                name="Name"
                                description=" description description description description description description description description"
                                icon={faReact}
                            />
                            < SericeCard
                                name="Name"
                                description=" description description description description description description description description"
                                icon={faReact}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-5xl md:text-7xl font-semibold mt-10 md:mt-16 text-darky1'>Why Choose Me</h2>
                        <p className='w-full md:w-7/12 text-base md:text-lg font-sans py-3 text-gray-700'>Have a good background in web development so I can deliver quality web applications and services to cater for your business and project needs</p>
                        <button
                            type='submit'
                            className='px-8 md:px-10 mt-4 md:mt-2 py-2 rounded-3xl ring-2 ring-darky1 hover:text-darky1 hover:bg-white font-semibold text-xl md:text-2xl bg-darky1 text-white'>
                            Hire Me
                        </button>
                        <img src="images/lufy.png" alt="" className='h-16 mt-10 md:mt-20' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
