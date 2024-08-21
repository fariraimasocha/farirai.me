import React from 'react'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SericeCard from './SericeCard'

function Services() {
    return (
        <div className='min-h-screen bg-white'>
            <div className='px-24'>
                <h2 className="font-serif text-8xl text-darky1 text-center mt-32">Services</h2>
                <div className='py-1 mt-40 flex space-x-52'>
                    <div>
                        <div className='flex space-x-10'>
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
                        <div className='flex space-x-10 mt-10'>
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
                        <h2 className='text-7xl font-semibold mt-16 text-darky1'>Why Choose Me</h2>
                        <p className='w-7/12 text-lg font-sans py-3 text-gray-700'>Have a good background in web development so i can deliver quality web applications and
                            services to cater for your buisness and project needs</p>
                        <button
                            type='submit'
                            className='px-10 mt-2 py-2 rounded-3xl ring-2 ring-darky1 hover:text-darky1 hover:bg-white font-semibold text-2xl bg-darky1 text-white'>
                            Hire Me
                        </button>
                        <img src="images/lufy.png" alt="" className='h-16  mt-20' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services