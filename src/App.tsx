import "./App.css";
import React, { useState, useEffect } from 'react';
import Header from "./components/Header.tsx"; // Import the Header component


import BedsList from "./components/BedsList.tsx";
import Controller from "./components/Controller.tsx";


function App(  ) {

  const [beds, setBeds] = useState([
    {
      id: 1,
      location: 'West Hall',
    },
    {
      id: 2,
      location: 'East Hall',
    },
  ]);

  // Retrieve dark mode preference from localStorage or default to false
  const storedDarkMode: boolean = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(storedDarkMode); // Removed inversion of storedDarkMode

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode: boolean = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString()); // Store in localStorage as string
  };

  // Effect to update dark mode state on initial render
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString()); // Store in localStorage as string
  }, [darkMode]);


  return (
    <div
      id="AppFrame"
      className={`${
        darkMode ? "bg-gray-800 text-amber-50" : "bg-amber-50 text-gray-800"
      } font-mono transition-colors min-h-screen overflow-x-hidden`}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>

        <BedsList beds={beds} />        
                
        
      </main>
    </div>
  );
}

export default App;
