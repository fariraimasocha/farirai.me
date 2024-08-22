import React from 'react';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Main() {
    return (
        <div className='h-screen flex flex-col items-center justify-center bg-darky1 border-b-2 border-darky1'>
            <div className='flex-grow flex flex-col items-center justify-center'>
                <h1 className='font-serif text-5xl md:text-7xl lg:text-9xl text-white hover:text-darky2 hover:animate-pulse'>
                    farirai
                </h1>
                <img src="images/lufy.png" alt="" className='w-32 transition animate-pulse' />
                <h1 className='font-extrabold text-5xl md:text-7xl lg:text-9xl text-white hover:text-ech2 hover:animate-pulse transition'>
                    Masocha
                </h1>
                <div className='flex space-x-4 md:space-x-8 justify-center items-center mt-10'>
                    <FontAwesomeIcon
                        icon={faChevronCircleDown}
                        className='hover:text-ech2 transition text-4xl md:text-5xl lg:text-6xl text-white animate-bounce'
                    />
                    <div className='text-white font-sans text-lg md:text-xl'>
                        <h1 className='mt-4 md:mt-6'>SOFTWARE</h1>
                        <h1 className='mt-0.5'>DEVELOPER</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
