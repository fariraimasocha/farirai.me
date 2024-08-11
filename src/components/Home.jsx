import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Main from './Main'

function Home() {
    return (
        <div className='flex flex-col min-h-screen'>
            <nav className='px-5 py-5'>
                <FontAwesomeIcon icon={faBars} className='text-4xl hover:text-gray-400 transition absolute right-0 top-0 mt-10 px-20' />
            </nav>
            <Main />
        </div>
    )
}

export default Home
