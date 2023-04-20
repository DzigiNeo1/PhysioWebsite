import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Services from "./ServicesToggle/Services";
import AnimatedCursor from "./AnimatedCursor";
const Comp = () => {
  return (
    <>
      <AnimatedCursor />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Comp;
