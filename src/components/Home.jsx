import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Home() {
    return (
        <div>
            <div className='px-5'>
                <nav>
                    <FontAwesomeIcon icon={faBars} className='text-5xl hover:text-gray-500 
                    transition absolute right-0 mt-10 px-20 text-right' />
                </nav>
            </div>
        </div>
    )
}

export default Home
