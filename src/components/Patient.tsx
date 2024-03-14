// src/components/Patient.js
import React from "react";

const Patient = ({ patient }) => {
  return (
    <div>
      <strong>Name:</strong> {patient.name}, <strong>ID:</strong> {patient.id}
    </div>
  );
};

export default Patient;
