
import React from 'react';
import NavModal from './NavModal';
import Footer from './Footer';
import Card from './Card';


function AllWork() {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavModal />
            <div className='bg-white py-20 min-h-screen'>
                <div className="flex flex-col md:flex-row md:space-x-5 mb-4 text-darky1 justify-center mx-auto text-4xl md:text-7xl hover:animate-pulse">
                    <h2 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600 text-center mt-14">ALL WORK</h2>
                </div>
                <div className='px-4 md:px-16 py-10'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Card
                            title="Contactease Website"
                            description="A comprehensive platform that connects users with vetted service professionals for a wide range of needs. Whether you require plumbing services, electrical repairs, or any other assistance, Contactease ensures that reliable professionals are just a click away, making it easy to find and hire the right expert from anywhere."
                            imageSrc="images/ease.png"
                            link="https://contractease.co.zw/"
                        />
                        <Card
                            title="Livestock Antitheft and Tracking System"
                            description="An innovative solution designed to prevent livestock theft and track animal movements in remote areas. Integrating IoT, AI, and mobile technologies, this system provides real-time alerts and location tracking, ensuring the safety of livestock across various locations."
                            imageSrc="images/lats.png"
                            link="https://www.herald.co.zw/missing-dads-brahman-bull-motivates-uz-student-to-develop-livestock-app/"
                        />
                        <Card
                            title="Empaya Insurance Website"
                            description="A modern insurance platform offering a wide range of coverage options tailored to your needs. Empaya makes it easy to explore and compare policies, manage claims, and receive personalized support, all from the convenience of your home. Whether you're looking for health, auto, or property insurance, Empaya provides a seamless and user-friendly experience."
                            imageSrc="images/emphaya.png"
                            link="https://empaya.co.zw/"
                        />
                        <Card
                            title="Chatsphere Chatbot"
                            description="Supercharge your Customer Service with Custom web chatbots. Say goodbye to long wait times and frustrating interactions. Our chatbots provide 24/7 assistance tailored to your customers."
                            imageSrc="images/chatsphere.png"
                            link="http://shantel.shop"
                        />
                        <Card
                            title="Genie AI"
                            description="
                            Effortlessly create engaging LinkedIn posts that showcase your unique style. With just a single click, our AI-powered tool generates content tailored to your voice, helping you stand out and make a lasting impression."
                            imageSrc="images/genie.png"
                            link="#"
                        />

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AllWork;
