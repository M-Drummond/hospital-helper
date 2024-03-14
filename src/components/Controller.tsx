import React, { useState } from "react";

const Controller = ({ beds }) => {
  const formClasses = 'flex flex-row gap-4 mb-4'; // Changed variable name to camelCase

  const [formData, setFormData] = useState({
    bedID: "", // Changed Number to an empty string to hold string values
    bedLocation: "" // Changed String to an empty string to hold string values
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    beds.push( formData )
    return beds 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    
    <div>
      <pre>{ JSON.stringify(beds) }</pre>
      <form className={formClasses} onSubmit={handleSubmit}>
        <input
          id="BedID"
          placeholder="ID"
          className="bg-white text-black p-2"
          value={formData.bedID}
          onChange={handleChange}
          name="bedID" // Changed from "ID" to "bedID" to match state key
        />
        <input
          id="BedLocation"
          placeholder="location"
          className="bg-white text-black p-2"
          value={formData.bedLocation}
          onChange={handleChange}
          name="bedLocation" // Changed from "location" to "bedLocation" to match state key
        />
        <button
          type="submit"
          className="p-2 border-double border-4 hover:border-solid border-current"
        >
          Add Bed
        </button>
      </form>
      {/* <form className={formClasses}>
        <input
          id="PatientID"
          placeholder="Patient ID"
          className="bg-white text-black p-2"
        />

        <select className="w-[220px] bg-white text-black">
          <option disabled>Select Bed</option>
          {beds.map((bed) => (
            <option key={bed.id} value={bed.id}>
              {" "}
              {bed.id} / {bed.location}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="p-2 border-double border-4 hover:border-solid border-current"
        >
          Add Patient
        </button>
      </form> */}
    </div>
  );
};

export default Controller;
