import React from 'react'

function SericeCard({ icon, name, description }) {
    return (
        <div className='rounded-lg w-72 ring-2 text-center hover:bg-darky1 hover:ring-white  hover:text-white text-darky1 ring-darky1'>
            < FontAwesomeIcon icon={icon} className='text-5xl' />
            <h2 className='text-2xl font-semibold py-2'>{name}</h2>
            <p className='py-2 font-sans text-lg px-2'>{description}</p>
        </div>
    )
}

export default SericeCard