import React from "react";
import Navbar from "./layouts/Navbar";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Testimonial from "./layouts/Testimonial";
import Contact from "./layouts/Contact";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
