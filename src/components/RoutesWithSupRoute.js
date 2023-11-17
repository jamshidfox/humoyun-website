import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import About from '../pages/About/About';
import Cars from '../pages/Cars/CarsConatiner';

const RoutesWithSupRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/cars" element={<Cars />} />
    </Routes>
  );
};

export default RoutesWithSupRoute;
