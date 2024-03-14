import React, { Component } from 'react';
// import type Bed from '../types/Bed'

function BedCard( { bed } ) {
  return (
    <div className="border border-current p-4">
      <div> BED: { bed.id } </div>
      <div> LOCATION: { bed.location } </div>
      <div> PATIENT: { bed.patient } </div>
    </div>
  );
}

export default BedCard; 