import React from 'react'
import NavModal from './NavModal'
import CompanyCard from './CompanyCard'

function AllWork() {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavModal />
            <div className='bg-blue-300 mt-20 min-h-screen'>
                <div className="flex flex-col md:flex-row md:space-x-5 mb-4 justify-center mx-auto mt-10 text-4xl md:text-7xl py-10 md:py-20 hover:animate-pulse bg-blue-300">
                    <h2 className="font-light text-center md:text-left">ALL</h2>
                    <h2 className="font-light mt-5 md:mt-10 text-center md:text-left">WORK</h2>
                </div>
                <div className='flex space-x-5 px-10'>
                    <CompanyCard
                        field="field"
                        presentation="presentation"
                        imageSrc="images/favicon/favicon.png"
                        companyName="Yirifi.ai"
                        description="Campaign pages" />
                </div>
            </div>

        </div>
    )
}

export default AllWork