import React from "react";
import Layout from "@/layout/layout";
import HomeOne from "@/components/home/home/home";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";

const Index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Divya Chemical Industry | Home"
        pageDescription="Discover premium industrial, lab, and specialty chemicals from Divya Chemical Industry. Trusted quality, fast delivery, and competitive prices."
        pageKeywords="industrial chemicals, lab chemicals, Divya Chemical Industry, chemical manufacturers India"
        pageUrl="https://divyachemicalindustry.com"
pageImage = "https://divyachemicalindustry.com/assets/banner.png"


      />
      <Layout>
        <HomeOne />
      </Layout>
    </Wrapper>
  );
};

export default Index;
