import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ProductDetailsArea from "./product-details-area";

const ProductDetails = ({ product }) => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <ProductDetailsArea product={product} />
      <FooterFour />
    </>
  );
};

export default ProductDetails;
