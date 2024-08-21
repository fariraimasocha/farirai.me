import React from 'react';
import Main from './Main';
import Projects from './Projects';
import Footer from './Footer';
import NavModal from './NavModal';

function Home() {
    return (
        <div className='flex flex-col'>
            <nav className='px-4 md:px-10'>
                <NavModal />
            </nav>
            <Main />
            {/* <Projects /> */}
            <Footer />
        </div>
    );
}

export default Home;
