import React from 'react';
import Hero from "../components/solutions/waste-management/Hero";
import Navsight from '../components/solutions/waste-management/Navsight';
import Understanding from '../components/solutions/waste-management/Understanding';
import Milesight from '../components/solutions/waste-management/Milesight';
import MilesightWasteBin from '../components/solutions/waste-management/MilesightWasteBin';
import Benefits from '../components/solutions/waste-management/Benefits';
import FillLevel from '../components/solutions/waste-management/FillLevel';
import SuccessStories from '../components/solutions/waste-management/SuccessStories';

function WasteManagement() {
  return (
    <div>
      <Hero />
      <Navsight />
      <Understanding />
      <MilesightWasteBin />
      <Milesight />
      <FillLevel />
      <Benefits />
      <SuccessStories />
    </div>
  )
}

export default WasteManagement
