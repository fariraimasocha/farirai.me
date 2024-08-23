import React from 'react';
import Main from './Main';
import Footer from './Footer';
import NavModal from './NavModal';
import Services from './Services';
import Reviews from './Reviews';
import Skills from './Skills';

function Home() {
    return (
        <div className='flex flex-col'>
            <nav className='px-4 md:px-10'>
                <NavModal />
            </nav>
            <Main />
            <div id="services"> {/* Add ID here for scrolling */}
                <Services />
            </div>
            <Reviews />
            <Skills />
            <Footer />
        </div>
    );
}

export default Home;