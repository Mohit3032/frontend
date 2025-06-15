
import React from "react";
import About from "./about";
import Counter from "../../../common/counter";
import HeroBanner from "./hero-banner";

import Specialists from "../../../common/specialists";


const HomeOne = () => {
  return (
    <>
      <HeroBanner />
      <About />
   
      <Specialists />
      <Counter />

         {/* <Gallery /> */}
      {/* <Appointment /> */}
      {/* <Feedback /> */}
      {/* <Cta_Area /> */}
    
    </>
  );
};

export default HomeOne;
