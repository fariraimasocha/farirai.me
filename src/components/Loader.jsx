import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <ClimbingBoxLoader color={"#181532"} size={40} />
        </div>
    );
};

export default Loading;
