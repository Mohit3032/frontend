import React from "react";
import ContactUs from "@/components/contact/contact";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Contact Us - Divya Chemical Industry"
        pageDescription="Get in touch with Divya Chemical Industry for inquiries, quotations, or chemical supply solutions. Fast response and reliable support."
        pageKeywords="contact chemical supplier, Divya Chemical Industry contact, industrial chemical inquiries"
        pageUrl="https://divyachemicalindustry.com/contact"
        pageImage = "https://divyachemicalindustry.com/assets/banner.png"

      />
      <ContactUs />
    </Wrapper>
  );
};

export default index;
