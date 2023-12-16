import React from "react";
import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
const Index = () => {
  return ( 
  <React.Fragment> 
      <About />
    <div className="relative">
      <Carousel />
    </div>
      <Services />
      <Contact />
  </React.Fragment> 
  );
};

export default Index;