import React, { useState } from "react";
import type { Note } from "../types/Note";

const Notes = ({ bed, patient, patients, notes, onRemoveNote, onAddNote }) => {

  const [patientNotes, setPatientNotes] = useState(patient.notes); // State for patient notes
1

  const handleAddNote = () => {
    const newNote = prompt("Enter new note:");
    if (newNote) {
      const noteData: Note = {
        content: newNote,
        time: Date.now()
      };
      const updatedNotes = [...patientNotes, noteData]; // Add the new note to the existing notes array
      setPatientNotes(updatedNotes); // Update the state with the new notes array
    }
  };

  const handleRemoveNote = (index: number) => {
    const updatedNotes = patientNotes.filter((_, idx) => idx !== index); // Filter out the note at the specified index
    setPatientNotes(updatedNotes); // Update the state with the filtered notes array
  };

  return (

    
    <>
      
      {patient.notes ? (
        
        <div className="notes w-full ">
          
          <>
          {patientNotes.length >= 1 ? (
            <h3>Notes:</h3>
          ) : null }
          </>
          <ul class=" px-2 pt-2 mt-2 ">
            {patientNotes.map((note : Note, index) => (
              <li className="block w-full mb-4 border-t border-solid border-current  pt-2 " key={index}>
                <div>
                    {note.content}
                </div>
                <button
                  className=""
                  onClick={() => handleRemoveNote(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <button
        className="p-2 border-solid border-current border mt-2"
        onClick={handleAddNote}
      >
        Add Note
      </button>
    </>
  );
};

export default Notes;
