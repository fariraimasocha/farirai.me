import React, { useState, useEffect } from 'react';
import Loading from '../src/components/Loader';
import Home from '../src/components/Home';
import Contact from '../src/components/Contact';
import AllWork from '../src/components/AllWork';
// import AnimatedCursor from "react-animated-cursor";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-darky h-screen'>
      {/* <AnimatedCursor
        innerSize={10}
        outerSize={50}
        color='0, 0, 0'
        outerAlpha={0}
        innerScale={1}
        outerScale={1.5}
        hasBlendMode={true}
        outerStyle={{ border: '2px solid black' }}
      /> */}
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="all-work" element={<AllWork />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
