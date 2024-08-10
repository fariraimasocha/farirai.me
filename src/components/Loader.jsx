import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <ClimbingBoxLoader color={"#3B82F6"} size={50} />
        </div>
    );
};

export default Loading;
