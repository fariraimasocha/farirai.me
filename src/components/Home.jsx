import React from 'react';
import Main from './Main';
import Footer from './Footer';
import NavModal from './NavModal';
import Services from './Services';
import Reviews from './Reviews';

function Home() {
    return (
        <div className='flex flex-col'>
            <nav className='px-4 md:px-10'>
                <NavModal />
            </nav>
            <Main />
            <Services />
            < Reviews />
            <Footer />
        </div>
    );
}

export default Home;
