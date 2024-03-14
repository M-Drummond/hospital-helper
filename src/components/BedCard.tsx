import React, { useState } from "react";
import { initialPatients } from "../data/initialPatients.ts";

import type {Bed} from '../types/Bed.ts'
import type {Patient} from '../types/Patient.ts'
import {Note} from '../types/Note.ts'

const BedCard = ({ bed , assignPatient, removePatient }) => {
  const [patients] = useState(initialPatients); // State should be declared inside the component
  const [notes, setNotes] = useState([]); // State for storing notes

  const handleAddNote = () => {
    const newNote = prompt("Enter new note:");
    if (newNote) {
      setNotes([...notes, newNote  ]);
    }
  };

  const handleRemoveNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

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
            <h3>Notes:</h3>
            <ul>
              {notes.map((note, index) => (
                <li key={index}>
                  {note}
                  <button
                    className="p-2 border-solid border-current border ml-2"
                    onClick={() => handleRemoveNote(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="p-2 border-solid border-current border mt-2"
              onClick={handleAddNote}
            >
              Add Note
            </button>
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
