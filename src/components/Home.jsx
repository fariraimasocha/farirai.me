import React from 'react'
import Navbar from './Navbar'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Home() {
    return (
        <div className='text-4xl font-semibold '>
            <FontAwesomeIcon icon={faBars} className='text-6xl' />
        </div>
    )
}

export default Home
