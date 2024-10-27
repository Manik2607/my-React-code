import React, { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState("Hello dear one, learning React...?");

  useEffect(() => {
    console.log('useEffect hook called');

    const timer = setTimeout(() => {
      setMessage("Great... This is time to learn about HOOKS");
    }, 2000);

    // Cleanup function to clear timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to ensure it runs only once

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
