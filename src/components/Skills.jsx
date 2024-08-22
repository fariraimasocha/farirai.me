
import React from 'react';
import { faReact, faHtml5, faCss3, faNodeJs, faAngular, faLaravel, faPython, faPhp, faSass, faJs, faLinux, faLinode } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <div className="py-10 bg-gray-100 px-10 ">
            <div className='flex space-x-5'>
                < SkillCard icon={faReact} />
                < SkillCard icon={faHtml5} />
                < SkillCard icon={faCss3} />
                < SkillCard icon={faNodeJs} />
            </div>
            <div className='flex space-x-5 mt-5'>
                < SkillCard icon={faAngular} />
                < SkillCard icon={faLaravel} />
                < SkillCard icon={faPython} />
                < SkillCard icon={faPhp} />
            </div>
            <div className='flex space-x-5 mt-5'>
                < SkillCard icon={faSass} />
                < SkillCard icon={faJs} />
                < SkillCard icon={faLinux} />
                < SkillCard icon={faLinode} />
            </div>

        </div>
    );
};

export default Skills;
