import React from 'react';
import { faReact, faHtml5, faCss3, faNodeJs, faAngular, faLaravel, faPython, faPhp, faSass, faJs, faLinux, faLinode } from '@fortawesome/free-brands-svg-icons';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion'

const Skills = () => {
    return (
        <div className="py-10 bg-gray-100 px-10">
            <img src="images/lufy.png" alt="" className='w-12 h-14 ml-20' />
            <motion.h2
                whileInView="visible"
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-600 text-center mt-14 mb-20">Skills</motion.h2>
            <div className='flex flex-wrap justify-center gap-5'>
                <SkillCard icon={faReact} color='#61DAFB' />
                <SkillCard icon={faHtml5} color='#E34F26' />
                <SkillCard icon={faCss3} color='#1572B6' />
                <SkillCard icon={faNodeJs} color='#68A063' />
                <SkillCard icon={faAngular} color='#DD0031' />
                <SkillCard icon={faLaravel} color='#FF2D20' />
                <SkillCard icon={faPython} color='#3776AB' />
                <SkillCard icon={faPhp} color='#777BB4' />
                <SkillCard icon={faSass} color='#CC6699' />
                <SkillCard icon={faJs} color='#F7DF1E' />
                <SkillCard icon={faLinux} color='#FCC624' />
                <SkillCard icon={faLinode} color='#00A95C' />
            </div>
        </div>
    );
};

export default Skills;
