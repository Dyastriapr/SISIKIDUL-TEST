import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import { Module } from "../../pages/Module";
import Nav from "../../components/navbar/Nav";
import Footer from "../../components/navbar/Footer";
import Gallery from "../../pages/Galery";
import About from "../../pages/About/Index";
import { Error } from "../../pages/Error";

const Routing = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="module" element={<Module />} />
        <Route path="galeri" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      
    </Router>
  );
};

export default Routing;
