import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Clasess from "../../Pages/Clasess";
import Gallery from "../../Pages/Gallery";
import Teachers from "../../Pages/Teachers";
import Contact from "../../Pages/Contact";
import BlogGrid from "../../Pages/BlogGrid";
import BlogDetail from "../../Pages/BlogDetail";
import Navbar from "../Navbar";
import Futter from "../Futter";

function Root() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/clasess" element={<Clasess />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/bloggrid" element={<BlogGrid />} />

        <Route path="/blogdetail" element={<BlogDetail />} />

        <Route path="/teachers" element={<Teachers />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Futter />
    </div>
  );
}

export default Root;
