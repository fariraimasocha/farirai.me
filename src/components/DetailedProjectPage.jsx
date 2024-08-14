// src/components/DetailedProjectPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const DetailedProjectPage = () => {
    const { projectId } = useParams();

    // Mock data or fetch data based on projectId
    const projectDetails = {
        1: {
            title: "Project Alpha",
            description: "This is a detailed description of Project Alpha.",
            imageSrc: "images/project-alpha.jpg",
            additionalInfo: "Additional information about Project Alpha."
        },
        2: {
            title: "Project Beta",
            description: "This is a detailed description of Project Beta.",
            imageSrc: "images/project-beta.jpg",
            additionalInfo: "Additional information about Project Beta."
        }
        // Add more projects as needed
    };

    const project = projectDetails[projectId] || { title: "Project not found", description: "", imageSrc: "", additionalInfo: "" };

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <img className="rounded-lg mb-4" src={project.imageSrc} alt={project.title} />
            <p className="text-lg mb-4">{project.description}</p>
            <div className="text-md text-gray-700">{project.additionalInfo}</div>
        </div>
    );
};

export default DetailedProjectPage;
