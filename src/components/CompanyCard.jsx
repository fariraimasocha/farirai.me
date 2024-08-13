import React from 'react';

function CompanyCard({ field, presentation, companyName, imageSrc, description }) {
    return (
        <div className='w-6/12 bg-darky1 rounded-3xl text-white flex flex-col mt-16'>
            <div className='flex justify-end p-4'>
                <div className='uppercase tracking-widest px-5 py-5'>
                    <p>{field}</p>
                    <p className='mt-2'>{presentation}</p>
                </div>
            </div>
            <div className='flex justify-center p-4'>
                <img src={imageSrc} alt="No Image" className='max-w-full h-auto' />
            </div>
            <div className='flex justify-start p-4 px-5 py-5'>
                <div className='px-6 py-3'>
                    <p
                        className='font-serif bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent text-4xl font-bold'
                    >
                        {companyName}
                    </p>
                    <p className='mt-2 tracking-wider'>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default CompanyCard;
