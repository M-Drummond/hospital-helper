import React, { useState } from "react";
import { initialPatients } from "../data/initialPatients.ts";

import type { Patient } from "../types/Patient.ts";

import Notes from "../components/Notes.tsx";

const BedCard = ({ bed, assignPatient, removePatient, patients }) => {
  // const [patients] = useState(initialPatients); // State should be declared inside the component

  return (
    <div className="border border-current p-4 flex flex-col items-stretch justify-center">
      Bed {bed.id}:
      {bed.patient ? (
        <div>
          <span>
            Assigned to: <span className="name">{bed.patient.name}</span>{" "}
            <button
              className="p-2 border-solid border-current border block my-4"
              onClick={() => removePatient(bed)}
            >
              Unassign Patient
            </button>
          </span>
          <Notes bed={bed} patient={bed.patient} />
        </div>
      ) : (
        <span>
          Unoccupied{" "}
          <select
            className="p-4 text-black bg-white"
            onChange={(e) => assignPatient(bed, e.target.value)}
          >
            <option value="">Assign Patient</option>

            {patients?.map((patient) => (
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
