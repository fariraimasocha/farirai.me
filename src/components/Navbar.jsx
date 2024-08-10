import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
    return (
        <div>
            <nav className='h-20 py-2 px-5' >
                <FontAwesomeIcon icon={faBars} />
            </nav>
        </div>
    )
}

export default Navbar