
import React from 'react';

function Company({ companyName, project, field, presentation, bgClass }) {
    return (
        <div className={`flex justify-between px-20 border-b py-40 transition hover:${bgClass}`}>
            <div>
                <h1 className='text-8xl font-black'>
                    {companyName}
                </h1>
                <p className='text-2xl font-semibold tracking-widest'>
                    {project}
                </p>
            </div>
            <div className='tracking-widest'>
                <h1 className='text-2xl font-semibold'>
                    {field}
                </h1>
                <p className='text-2xl font-semibold'>
                    {presentation}
                </p>
            </div>
        </div>
    );
}

export default Company;
