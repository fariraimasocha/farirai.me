import React from 'react'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <div>
            <footer className='py-20 bg-footbg text-ech1'>

                <div className='justify-center items-center flex space-x-5 text-2xl font-semibold '>
                    <a href="#" className='hover:pulse'>All Work</a>
                    <a href="#" className='hover:pulse'>About</a>
                    <a href="#" className='hover:pulse'>Contact</a>
                </div>

                <div className='justify-center items-center flex space-x-8 font-semibold py-10'>
                    <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} className='text-4xl hover:text-gray-400 transition' />
                    </a>
                    <a href="https://github.com/fariraimasocha" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className='text-4xl hover:text-gray-400 transition' />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className='text-4xl hover:text-gray-400 transition' />
                    </a>
                </div>

            </footer>
        </div>
    )
}

export default Footer
