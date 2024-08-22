import React, { useState, useEffect } from 'react';
import Loading from '../src/components/Loader';
import Home from '../src/components/Home';
import Contact from '../src/components/Contact';
import AllWork from '../src/components/AllWork';
import About from './components/About';
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
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="all-work" element={<AllWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
