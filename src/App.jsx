import React, { useState, useEffect } from 'react';
import Loading from '../src/components/Loader'
import Home from '../src//components/Home';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? <Loading /> : <Home />}
    </div>
  );
};

export default App;
