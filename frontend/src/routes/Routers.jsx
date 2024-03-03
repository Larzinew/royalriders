import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Drivers from "../pages/Drivers/Drivers";
import DriversDetails from "../pages/Drivers/DriversDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/drivers/:id" element={<DriversDetails />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routers;
