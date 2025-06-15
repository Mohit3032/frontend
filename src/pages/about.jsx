import React from "react";
import About from "@/components/about/about";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="About Us - Divya Chemical Industry"
        pageDescription="Learn more about Divya Chemical Industry, a trusted supplier of industrial and lab chemicals in India. Our mission is quality and customer satisfaction."
        pageKeywords="about chemical company, Divya Chemical Industry, chemical supplier India"
        pageUrl="https://divyachemicalindustry.com/about"
       pageImage = "https://divyachemicalindustry.com/assets/banner.png"

      />
      <About />
    </Wrapper>
  );
};

export default index;
