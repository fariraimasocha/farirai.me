import React from 'react';
import {
    faReact, faHtml5, faCss3, faNodeJs, faAngular, faLaravel,
    faPython, faPhp, faSass, faJs, faLinux, faLinode, faJava,
    faGitAlt, faDocker, faSwift, faVuejs, faBootstrap, faJenkins,
    faAws, faNpm, faYarn, faFigma, faTrello, faJira, faBitbucket,
    faSlack, faSalesforce, faWordpress, faMagento, faGit, faGithub,
    faAmazonPay, faSymfony, faStripe, faAndroid, faApplePay,
    faBrave, faPaypal, faCloudflare, faCodepen, faBlogger

} from '@fortawesome/free-brands-svg-icons';

import {
    faDatabase, faCode, faCloud, faServer,
    faTasks,
} from '@fortawesome/free-solid-svg-icons';

import SkillCard from './SkillCard';
import { motion } from 'framer-motion';

const skills = [
    { icon: faPython, color: '#3776AB' },
    { icon: faPhp, color: '#777BB4' },
    { icon: faSass, color: '#CC6699' },
    { icon: faJs, color: '#F7DF1E' },
    { icon: faLinux, color: '#FCC624' },
    { icon: faLinode, color: '#00A95C' },
    { icon: faReact, color: '#61DAFB' },
    { icon: faHtml5, color: '#E34F26' },
    { icon: faCss3, color: '#1572B6' },
    { icon: faNodeJs, color: '#68A063' },
    { icon: faAngular, color: '#DD0031' },
    { icon: faLaravel, color: '#FF2D20' },
    { icon: faJava, color: '#007396' },
    { icon: faGitAlt, color: '#F05032' },
    { icon: faDocker, color: '#2496ED' },
    { icon: faSwift, color: '#FA7343' },
    { icon: faVuejs, color: '#42B883' },
    { icon: faBootstrap, color: '#7952B3' },
    { icon: faJenkins, color: '#D24939' },
    { icon: faAws, color: '#FF9900' },
    { icon: faNpm, color: '#CB3837' },
    { icon: faYarn, color: '#2C8EBB' },
    { icon: faFigma, color: '#F24E1E' },
    { icon: faTrello, color: '#0079BF' },
    { icon: faJira, color: '#0052CC' },
    { icon: faBitbucket, color: '#0052CC' },
    { icon: faSlack, color: '#4A154B' },
    { icon: faSalesforce, color: '#00A1E0' },
    { icon: faWordpress, color: '#21759B' },
    { icon: faMagento, color: '#EE672F' },
    { icon: faDatabase, color: '#4DB33D' },
    { icon: faPaypal, color: '#6E5494' },
    { icon: faCloud, color: '#00ADEF' },
    { icon: faServer, color: '#1F8EFA' },
    { icon: faSymfony, color: '#008080' },
    { icon: faGit, color: '#FF4500' },
    { icon: faGithub, color: '#007ACC' },
    { icon: faAmazonPay, color: '#4CAF50' },
    { icon: faCodepen, color: '#F44336' },
    { icon: faStripe, color: '#FFC107' },
    { icon: faCloudflare, color: '#2196F3' },
    { icon: faNodeJs, color: '#68A063' },
    { icon: faReact, color: '#61DAFB' },
    { icon: faAndroid, color: '#DD0031' },
    { icon: faBrave, color: '#007396' },
    { icon: faApplePay, color: '#3776AB' },
    { icon: faBlogger, color: '#3776AB' }
];

const Skills = () => {
    return (
        <div className="py-10 bg-gray-100 px-10">
            <img src="images/lufy.png" alt="" className='w-12 h-14 ml-20' />
            <motion.h2
                whileInView="visible"
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-600 text-center mt-14 mb-20">
                Skills
            </motion.h2>
            <div className='flex flex-wrap justify-center gap-10'>
                {skills.map((skill, index) => (
                    <SkillCard key={index} icon={skill.icon} color={skill.color} />
                ))}
            </div>
        </div>
    );
};

export default Skills;