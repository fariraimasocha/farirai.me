import React from 'react';

function CompanyCard({ field, presentation, companyName, imageSrc, description }) {
    return (
        <div className='w-5/12 bg-darky1 rounded-lg text-white flex flex-col'>
            <div className='flex justify-end p-4'>
                <div className='uppercase tracking-widest'>
                    <p>{field}</p>
                    <p>{presentation}</p>
                </div>
            </div>
            <div className='flex justify-center p-4'>
                <img src={imageSrc} alt="No Image" className='max-w-full h-auto' />
            </div>
            <div className='flex justify-start p-4'>
                <div>
                    <p
                        className='bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent text-2xl font-bold'
                    >
                        {companyName}
                    </p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default CompanyCard;
