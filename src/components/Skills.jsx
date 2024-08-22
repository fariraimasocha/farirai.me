
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faTailwindcss, faNodeJs } from '@fortawesome/free-brands-svg-icons';


const skills = [
    { name: 'JavaScript', icon: faJs, color: 'text-yellow-500' },
    { name: 'React', icon: faReact, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: faTailwindcss, color: 'text-teal-500' },
    { name: 'Node.js', icon: faNodeJs, color: 'text-green-500' },
];

const Skills = () => {
    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
                        >
                            <i className={`${skill.icon} text-4xl ${skill.color} mb-4`} />
                            <h3 className="text-xl font-medium">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
