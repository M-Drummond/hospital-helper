import React, { useState } from "react";

const Patients = ({ patients, onAdd, onRemove }) => {
  const [newPatientName, setNewPatientName] = useState("");

  const handleAddPatient = () => {
    if (newPatientName.trim() !== "") {
      const newPatient = { name: newPatientName, id: Date.now(), notes: [] }; // Create a new patient object
      onAdd(newPatient); // Add the new patient to the list of patients
      setNewPatientName(""); // Clear the input field after adding the patient
    }
  };

  return (
    <div>
      <h2>Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <span className="name"> {patient.name}</span>
            <button className="ml-4" onClick={() => onRemove(patient.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newPatientName}
          onChange={(e) => setNewPatientName(e.target.value)}
          placeholder="Enter patient name"
        />
        <button onClick={handleAddPatient} className="ml-4">
          Add Patient
        </button>
      </div>
    </div>
  );
};

export default Patients;
