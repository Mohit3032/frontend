import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <>
      <HeaderTwo />
      <div className="container">
        <div className="error_page">
          <Link href="/">
           
  <img alt=""  src="/assets/img/404.webp"/>

          </Link>
        </div>
      </div>
      <FooterFour />
    </>
  );
};

export default Error;
