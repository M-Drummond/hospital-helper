import React, { useState } from "react";
import Controller from "./Controller.tsx"; // Import the Controller component
import BedCard from "./BedCard.tsx";

const BedsList = () => {
  const [beds, setBeds] = useState([]);

  const handleAddBed = (newBed) => {
    setBeds((prevBeds) => [...prevBeds, newBed]); 
  };

  return (
    <div className="container mx-auto">     

      <Controller beds={beds} />
      <div id="BedsList" className="grid grid-cols-4 gap-4">
        {beds.map((bed) => (
          <BedCard bed={bed} />
        ))}
      </div>
    </div>
  );
};

export default BedsList;
