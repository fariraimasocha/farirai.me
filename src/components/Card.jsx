import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, imageSrc, link }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };

    return (
        <div
            className="bg-white border border-gray-200 rounded-lg shadow cursor-pointer"
            onClick={handleClick}
        >
            <img className="rounded-t-lg" src={imageSrc} alt={title} />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                <p className="mb-3 font-normal text-gray-700">{description}</p>
                <button
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    onClick={handleClick}
                >
                    Read more
                </button>
            </div>
        </div>
    );
};

export default Card;
