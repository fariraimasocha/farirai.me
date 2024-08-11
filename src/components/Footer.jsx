import React from 'react'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <div>
            <footer className='py-5 bg-gray-800 text-white'>
                <nav className='flex justify-between items-center px-4 md:px-10'>
                    <div className='space-x-4'>
                        <a href="#" className='hover:underline'>All Work</a>
                        <a href="#" className='hover:underline'>About</a>
                        <a href="#" className='hover:underline'>Contact</a>
                    </div>
                    <div id='icons' className='flex space-x-4'>
                        <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGlobe} className='text-2xl hover:text-gray-400 transition' />
                        </a>
                        <a href="https://github.com/fariraimasocha" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className='text-2xl hover:text-gray-400 transition' />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className='text-2xl hover:text-gray-400 transition' />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
