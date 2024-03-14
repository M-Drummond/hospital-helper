import React, { useState } from "react";
import { initialPatients } from "../data/initialPatients.ts";

const BedCard = ({ bed, assignPatient, removePatient }) => {
  const [patients] = useState(initialPatients); // State should be declared inside the component

  return (
    <div className="border border-current p-4 flex flex-col items-start justify-center">
      Bed {bed.id}:
      {bed.patient ? (
        <div>
          <span>
            Assigned to: {bed.patient.name}{" "}
            <button
              className="p-2 border-solid border-current border block mt-4"
              onClick={() => removePatient(bed)}
            >
              Unassign Patient
            </button>
          </span>
          <div className="notes">
            { patients.notes.map(( note ) => (
               note.content
            ))}
          </div>
        </div>
      ) : (
        <span>
          Unoccupied{" "}
          <select
            className="p-4 text-black bg-white"
            onChange={(e) => assignPatient(bed, e.target.value)}
          >
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
