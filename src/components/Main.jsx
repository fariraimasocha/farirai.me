import React from 'react'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Main() {
    return (
        <div className='flex-grow mt-20 md:mt-40 lg:mt-60 flex flex-col items-center'>
            <h1 className='font-serif text-5xl md:text-7xl lg:text-9xl text-ech2 hover:text-ech1 hover:animate-pulse'>
                farirai
            </h1>
            <h1 className='font-extrabold text-5xl md:text-7xl lg:text-9xl text-ech1 hover:text-ech2 hover:animate-pulse transition'>
                Masocha
            </h1>
            <div className='flex space-x-4 md:space-x-8 justify-center items-center mt-10'>
                <FontAwesomeIcon
                    icon={faChevronCircleDown}
                    className='hover:text-ech2 transition text-4xl md:text-5xl lg:text-6xl text-ech1 animate-bounce'
                />
                <div className='text-ech1 font-sans text-lg md:text-xl'>
                    <h1 className='mt-4 md:mt-6'>SOFTWARE</h1>
                    <h1 className='mt-0.5'>DEVELOPER</h1>
                </div>
            </div>
        </div>
    )
}

export default Main
