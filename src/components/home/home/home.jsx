
import React from "react";
import About from "./about";
import Appointment from "./appointment";

import Counter from "../../../common/counter";
import Cta_Area from "./cta-area";
import Feedback from "./feedback";
import Gallery from "./gallery";
import HeroBanner from "./hero-banner";

import Specialists from "../../../common/specialists";


const HomeOne = () => {
  return (
    <>
      <HeroBanner />
      <About />
      <Counter />
      {/* <Gallery /> */}
      <Specialists />
      {/* <Appointment /> */}
      {/* <Feedback /> */}
      {/* <Cta_Area /> */}
    
    </>
  );
};

export default HomeOne;
