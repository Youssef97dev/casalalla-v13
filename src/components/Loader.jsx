"use client";
import { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import About from "./About";
import Activities from "./Activities";
import Contact from "./Contact";
import Footer from "./Footer";
import Events from "./Events";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="relative flex flex-col justify-center items-center">
          <Navbar />
          <Hero />
          <Gallery />
          <About />
          <Events />
          <Activities />
          <Contact />
          <Footer />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <CircleLoader color="#c20022" size={100} />
        </div>
      )}
    </>
  );
};

export default Loader;
