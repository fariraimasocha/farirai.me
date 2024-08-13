import React from 'react';

function CompanyCard({ field, presentation, companyName, imageSrc, description, mt }) {
    return (
        <div className={`w-full md:w-6/12 bg-darky1 rounded-3xl text-white flex flex-col relative hover:bg-chel transition hover:text-darky1 ${mt}`}>
            <div className='flex justify-end p-2 md:p-4'>
                <div className='uppercase tracking-widest px-3 md:px-5 py-3 md:py-5 text-sm md:text-base'>
                    <p>{field}</p>
                    <p className='mt-1 md:mt-2'>{presentation}</p>
                </div>
            </div>
            <div className='flex justify-center p-2 md:p-4 py-10 md:py-20'>
                <img src={imageSrc} alt="No Image" className='max-w-full h-auto' />
            </div>
            <div className='flex justify-start p-2 md:p-4 px-3 md:px-5 py-3 md:py-5'>
                <div className='px-4 md:px-6 py-2 md:py-3'>
                    <p
                        className='font-serif bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent text-2xl md:text-4xl font-bold'
                    >
                        {companyName}
                    </p>
                    <p className='mt-2 tracking-wider text-sm md:text-lg'>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default CompanyCard;
