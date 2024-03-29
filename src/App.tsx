import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header.tsx"; // Import the Header component

import type Bed from "./types/Bed.ts";

import BedsList from "./components/BedsList.tsx";
import Patients from "./components/Patients.tsx";
import AddBedForm from "./components/AddBedForm.tsx";

import { initialBeds } from "./data/initialBeds.ts";
import { initialPatients } from "./data/initialPatients.ts";

function App() {
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
  const [patients, setPatients] = useState(initialPatients); // Initialize patients state

  const assignPatient = (bed: Bed, patientId) => {
    const updatedBeds = beds.map((b) =>
      b.id === bed.id
        ? { ...b, patient: patients.find((p) => p.id === parseInt(patientId)) }
        : b
    );
    setBeds(updatedBeds);
  };

  const removePatient = (bed) => {
    const updatedBeds = beds.map((b) =>
      b.id === bed.id ? { ...b, patient: null } : b
    );
    setBeds(updatedBeds);
  };

  const handleAddPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  const handleRemovePatient = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  const addBed = (newBedName) => {
    const newBed = {
      id: Date.now(), // Generate a unique ID for the new bed
      name: newBedName,
    };
    setBeds([...beds, newBed]);
  };


  return (
    <div
      id="AppFrame"
      className={`${
        darkMode ? "bg-gray-800 text-amber-50" : "bg-amber-50 text-gray-800"
      } font-mono transition-colors min-h-screen overflow-x-hidden`}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="px-4 container mx-auto">       
          <BedsList
            beds={beds}
            patients={patients}
            assignPatient={assignPatient}
            removePatient={removePatient}
          />
      
        <AddBedForm onAddBed={addBed} />        

        <Patients
          patients={patients}
          onAdd={handleAddPatient}
          onRemove={handleRemovePatient}
        />
      </main>
    </div>
  );
}

export default App;
