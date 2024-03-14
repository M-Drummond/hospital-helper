import "./App.css";
import React, { useState, useEffect } from 'react';
import Header from "./components/Header.tsx"; // Import the Header component

import BedCard from "./components/BedCard.tsx";
import Patient from "./components/Patient.tsx";

import { initialBeds } from "./data/initialBeds.ts";
import { initialPatients } from "./data/initialPatients.ts";

function App(  ) {

 
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

  const [beds, setBeds] = useState(initialBeds);
  const [patients] = useState(initialPatients);

  const assignPatient = (bed, patientId) => {
    const updatedBeds = beds.map((b) =>
      b.id === bed.id ? { ...b, patient: patients.find((p) => p.id === parseInt(patientId)) } : b
    );
    setBeds(updatedBeds);
  };

  const removePatient = (bed) => {
    const updatedBeds = beds.map((b) =>
      b.id === bed.id ? { ...b, patient: null } : b
    );
    setBeds(updatedBeds);
  };

  return (
    <div
      id="AppFrame"
      className={`${
        darkMode ? "bg-gray-800 text-amber-50" : "bg-amber-50 text-gray-800"
      } font-mono transition-colors min-h-screen overflow-x-hidden`}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <h2>Beds:</h2>
        {beds.map((bed) => (
          <BedCard
            key={bed.id}
            bed={bed}
            patients={patients}
            assignPatient={assignPatient}
            removePatient={removePatient}
          />
        ))}
        <h2>Patients:</h2>
        {patients.map((patient) => (
          <Patient key={patient.id} patient={patient} />
        ))}
      </main>
    </div>
  );
}

export default App;
