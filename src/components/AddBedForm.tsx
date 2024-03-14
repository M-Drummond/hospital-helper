import React, { useState } from "react";

const AddBedForm = ({ onAddBed }) => {
  const [newBedName, setNewBedName] = useState("");

  const handleChange = (e) => {
    setNewBedName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newBedName.trim()) return;
    onAddBed(newBedName);
    setNewBedName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Bed Name:
        <input type="text" value={newBedName} onChange={handleChange} />
      </label>
      <button type="submit">Add Bed</button>
    </form>
  );
};

export default AddBedForm;
