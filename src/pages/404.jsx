import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <>
      <HeaderTwo />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <div className="error_page">
          <Link href="/">
            <img
              alt="404 Not Found"
              src="/assets/img/404.webp"
              style={{
                maxWidth: "100%",
                width: "100%",
                maxHeight: "500px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Link>
        </div>
      </div>
      <FooterFour />
    </>
  );
};

export default Error;
