import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SericeCard({ icon, name, description }) {
    return (
        <div className='rounded-lg w-80 ring-2 transition text-center hover:bg-darky1 hover:ring-white  hover:text-white text-darky1 ring-darky1'>
            < FontAwesomeIcon icon={icon} className='text-5xl mt-4' />
            <h2 className='text-2xl font-semibold py-2'>{name}</h2>
            <p className='py-2 font-sans text-lg px-2'>{description}</p>
        </div>
    )
}

export default SericeCard