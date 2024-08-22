import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-darky1">
            <ClimbingBoxLoader color={"#ffecef"} size={40} />
        </div>
    );
};

export default Loading;
