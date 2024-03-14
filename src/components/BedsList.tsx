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

      
      
    </div>
  );
};

export default BedsList;
