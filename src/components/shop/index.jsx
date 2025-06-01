import React from "react";
import ShopArea from "./shop-area";
import ShopBanner from "./shop-banner";
import HeaderTwo from "@/layout/header/header-two";
import FooterFour from "@/layout/footer/footer-4";

const Shop = ({ category, products }) => {
  return (
    <>
      <HeaderTwo />
      <ShopBanner category={category} />
      <ShopArea category={category} products={products} />
      <FooterFour />
    </>
  );
};

export default Shop;
