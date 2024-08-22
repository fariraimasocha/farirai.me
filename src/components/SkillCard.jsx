import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillCard({ icon }) {
    return (
        <div className='rounded-xl border w-3/12'>
            <div className='justify-center mx-auto text-center'>
                <FontAwesomeIcon icon={icon} className='text-5xl py-7' />
            </div>
        </div>

    )
}

export default SkillCard