import React from 'react'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer className='py-20 bg-footbg text-ech1'>


                <div className='justify-center items-center flex space-x-5 text-2xl font-semibold '>
                    <Link to="/all-work" className='hover:pulse'>All Work</Link>
                    <Link to="/about" className='hover:pulse'>About</Link>
                    <Link to="/contact" className='hover:pulse'>Contact</Link>
                </div>

                <div className='justify-center items-center flex space-x-8 font-semibold py-10'>
                    <a href="https://fariraimasocha.github.io/farirai.me" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} className='text-4xl hover:text-gray-400 transition' />
                    </a>
                    <a href="https://github.com/fariraimasocha" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className='text-4xl hover:text-gray-400 transition' />
                    </a>
                    <a href="https://linkedin.com/in/fariraimasocha" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className='text-4xl hover:text-gray-400 transition' />
                    </a>
                </div>
                <img src="images/lufy.png" alt="" className='w-12 h-14 ml-20' />

            </footer>
        </div>
    )
}

export default Footer
