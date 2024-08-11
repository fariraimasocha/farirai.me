import React from 'react'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Main() {
    return (
        <div className='flex-grow mt-60 justify-center mx-auto'>
            <h1 className='font-serif text-9xl text-ech2'>farirai</h1>
            <h1 className='font-extrabold text-9xl text-ech1'>Masocha</h1>
            <div className='flex space-x-8 justify-center items-center ml-28'>
                <FontAwesomeIcon icon={faChevronCircleDown} className='hover:text-ech2 transition text-6xl text-ech1' />
                <div className='text-ech1 font-sans text-xl'>
                    <h1 className='mt-6'>SOFTWARE</h1>
                    <h1 className='mt-0.5'>DEVELOPER</h1>
                </div>

            </div>

        </div>
    )
}

export default Main
