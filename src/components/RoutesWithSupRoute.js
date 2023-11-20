import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import About from '../pages/About/About';
import Cars from '../pages/Cars/CarsConatiner';
import Admin from '../pages/Admin';
import Dashboard from '../pages/AdminDashboard/Dashboard';
import AddNewCar from '../pages/NewCarAdd';

const RoutesWithSupRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/add/new-car" element={<AddNewCar />} />
    </Routes>
  );
};

export default RoutesWithSupRoute;
