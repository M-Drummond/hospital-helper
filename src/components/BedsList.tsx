import React, { useState } from "react";
import BedCard from "./BedCard.tsx";
import type { Patient } from "../types/Patient.ts";

const BedsList = ( { beds , assignPatient, removePatient , patients  } ) => {
  console.log( patients )
  return (
    <div>
    <h2>Beds:</h2>
    <div className="container mx-auto grid grid-cols-4 gap-4 mb-8">     

          {beds.map((bed, index) => (
            <BedCard
              key={ index }
              bed={bed}
              patients={patients}
              assignPatient={assignPatient}
              removePatient={removePatient}
            />
          ))}      
      
    </div>
    </div>
  );
};

export default BedsList;
