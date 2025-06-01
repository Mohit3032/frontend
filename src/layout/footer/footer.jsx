import SocialLinks from "@/common/social-links";
import Link from "next/link";
import React from "react";

const footer_content = {
  footer_info: [
    {
      id: 1,
      title: "Useful links",
      cls: "footer-col-2",
      links: [
        { name: "Contact us", link: "/contact-us" },
        { name: "Help & About us", link: "/about" },
        { name: "Shipping & Returns", link: "/shop-details" },
        { name: "Refund Policy", link: "/shop-details" },
        { name: "About us", link: "/about" },
        { name: "Services", link: "/service" },
      ],
    },
    {
      id: 2,
      title: "Contact info",
      cls: "footer-col-3",
      links: [
        { name: "90/A, Nizampura , Vadodara, Gujarat" },
        { name: "+91 91043 56364" },
        { name: "Office Hours: 8AM - 6PM" },
        { name: "Saturday - Thursday (Weekly Off Friday)" },
      ],
    },
  ],
  copy_right_text: (
    <>
      <span style={{ color: "white" }}>
        © {new Date().getFullYear()}{" "}
        <Link href="/" style={{ color: "white" }}>
          divyachemicalindustry
        </Link>
        . <i>All Rights Reserved Copyright</i>
      </span>
    </>
  ),
};

const { footer_info, copy_right_text } = footer_content;

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area theme-bg pt-100 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-1 mb-50 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h4 className="footer-widget__title mb-30">
                    <Link href="index">
                      <img src="/assets/img/logo/DC.png" alt="logo" />
                    </Link>
                  </h4>
                  <p style={{ color: "white" }}>
                    Leading supplier of premium industrial chemicals with
                    trusted quality and expert service.
                  </p>
                  <div className="footer-widget__social">
                    <SocialLinks />
                  </div>
                </div>
              </div>
              {footer_info.map((item) => (
                <div
                  key={item.id}
                  className="col-xl-3 col-lg-4 col-md-6"
                >
                  <div
                    className={`footer-widget ${item.cls} mb-50 wow fadeInUp`}
                    data-wow-delay=".4s"
                  >
                    <h4
                      className="footer-widget__title mb-20"
                      style={{ color: "white" }}
                    >
                      {item.title}
                    </h4>
                    <div className="footer-widget__links">
                      <ul>
                        {item.links.map((link, i) => (
                          <li key={i} style={{ color: "white" }}>
                            {link.link ? (
                              <Link href={link.link} style={{ color: "white" }}>
                                {link.name}
                              </Link>
                            ) : (
                              <span style={{ color: "white" }}>{link.name}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="footer-widget footer-col-4 mb-50 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h4
                    className="footer-widget__title mb-20"
                    style={{ color: "white" }}
                  >
                    Subscribe Newsletter
                  </h4>
                  <p style={{ color: "white" }}>
                    Get updates on new products and offers.
                  </p>
                  <div className="footer-widget__newsletter p-relative">
                    <form>
                      <input
                        type="email"
                        placeholder="Enter Mail"
                        style={{ color: "black  ", backgroundColor: "white" }}
                      />
                      <button
                        className="footer-widget__fw-news-btn"
                        type="submit"
                        style={{ color: "white" }}
                      >
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-area-bottom theme-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright">
                  {copy_right_text}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div
                  className="footer-widget__copyright-info info-direction"
                  style={{ color: "white" }}
                >
                  <ul className="d-flex align-items-center">
                    <li>
                      <Link href="/terms-and-conditions" style={{ color: "white" }}>
                        Terms and conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="privacy-policy" style={{ color: "white" }}>
                        Privacy policy
                      </Link>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
