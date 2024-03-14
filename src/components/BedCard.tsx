import React, { useState } from 'react';
import { initialPatients } from '../data/initialPatients.ts' 

const BedCard = ({ bed, assignPatient, removePatient }) => {
  const [patients] = useState(initialPatients); // State should be declared inside the component

  return (
    <div className="border border-current p-4 flex flex-col items-start justify-center">
      Bed {bed.id}:
      {bed.patient ? (
        <span>
          Assigned to: {bed.patient.name}{" "}
          <button onClick={() => removePatient(bed)}>Remove</button>
        </span>
      ) : (
        <span>
          Unoccupied{" "}
          <select onChange={(e) => assignPatient(bed, e.target.value)}>
            <option value="">Assign Patient</option>
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.name}
              </option>
            ))}
          </select>
        </span>
      )}
    </div>
  );
};

export default BedCard;
