import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <ClipLoader color={"#3B82F6"} size={50} />
        </div>
    );
};

export default Loading;
