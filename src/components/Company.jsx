import React from 'react';

function Company({ companyName, project, field, presentation, onHover, onHoverOut }) {
    return (
        <div
            className={`flex justify-between px-20 border-b-2 border-pink py-40 transition`}
            onMouseEnter={onHover}
            onMouseLeave={onHoverOut}
        >
            <div>
                <h1 className='text-8xl font-black hover:text-darky1 transition'>
                    {companyName}
                </h1>
                <p className='text-2xl font-semibold tracking-widest'>
                    {project}
                </p>
            </div>
            <div className='tracking-widest'>
                <h1 className='text-2xl font-semibold'>
                    {field}
                </h1 >
                <p className='text-2xl font-semibold mt-1'>
                    {presentation}
                </p>
            </div>
        </div>
    );
}

export default Company;
