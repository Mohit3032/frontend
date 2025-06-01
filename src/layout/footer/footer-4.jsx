import Link from "next/link";
import React from "react";

const FooterFour = ({ style_2 = false }) => {
  return (
    <>
      <footer>
        <div
          className={`footer-area ${
            style_2 ? "pt-105" : "tp-footer-white-content theme-bg pt-95"
          }`}
        >
          <div className="tp-footer-top pb-25">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-1 mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="tp-footer-widget__content mb-95 text-white">
                      <i>FEEL FREE TO CONTACT US</i>
                      <h4 className="tp-footer-widget__contact mb-20">
                        <Link href="tel:+91 9104356364" className="text-white">+91 9104356364</Link>
                      </h4>
                      <Link href="mailto:  purchase@divyachemicalindustry.com" className="text-white">  purchase@divyachemicalindustry.com</Link>
                    </div>
                    <div className="tp-footer-widget__sub-sec text-white">
                      <span className="tp-footer-widget__sub-title mb-5">About Us</span>
                      <p>
                        Divya Chemical Industry is a manufacturer of industrial chemicals, providing high-quality solutions for various industrial sectors.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="tp-footer-widget__title mb-15 text-white">Useful Links</span>
                    <div className="tp-footer-widget__links mb-35">
                      <ul>
                        <li><Link href="/contact" className="text-white">Contact Us</Link></li>
                        <li><Link href="/about" className="text-white">About Us</Link></li>
                        <li><Link href="/services-details" className="text-white">Services</Link></li>
                        <li><Link href="/privacy-policy" className="text-white">Privacy Policy</Link></li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__sub-sec">
                      <span className="tp-footer-widget__sub-title mb-10 text-white">Opening Hours</span>
                      <div className="tp-footer-widget__list text-white">
                        <ul>
                          <li>Mon – Fri: 9AM - 6PM</li>
                          <li>Saturday: 10AM - 2PM</li>
                          <li>Sunday: Closed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-2 col-lg-2 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-3 mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <span className="tp-footer-widget__title mb-15 text-white">Support</span>
                    <div className="tp-footer-widget__links text-white">
                      <ul>
                        <li><Link href="#" className="text-white">Orders</Link></li>
                        <li><Link href="#" className="text-white">FAQs</Link></li>
                        <li><Link href="#" className="text-white">Privacy</Link></li>
                        <li><Link href="#" className="text-white">Terms</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-4 mb-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <span className="tp-footer-widget__title mb-15 text-white">Contact Info</span>
                    <div className="tp-footer-widget__links mb-120 text-white">
                      <ul>
                        <li>A/90, Natasha park-2, Nizampura, Vadodara</li>
                        <li><Link href="+91 9104356364 " className="text-white">+91 9104356364 </Link></li>
                        <li><Link href="mailto:purchase@divyachemicalindustry.com" className="text-white">purchase@divyachemicalindustry.com</Link></li>
                        <li>Mon - Fri: 9AM - 6PM</li>
                        <li>Sunday: Closed</li> 
                      </ul>
                    </div>
                    <div className="tp-footer-widget__social fw-social">
                      <Link href="#"><i className="fa-brands fa-facebook-f text-white"></i></Link>
                      <Link href="#"><i className="fa-brands fa-twitter text-white"></i></Link>
                      <Link href="#"><i className="fa-brands fa-instagram text-white"></i></Link>
                      <Link href="#"><i className="fa-brands fa-youtube text-white"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-area-bottom fw-border">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright copyright-white text-white">
                    <span>
                      © {new Date().getFullYear()} <Link href="/" className="text-white">Divya Chemical Industry</Link>. All rights reserved.
                    </span>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright-info info-direction">
                    <ul className="d-flex align-items-center text-white">
                      <li><Link href="/terms-and-conditions" className="text-white">Terms & Conditions</Link></li>
                      <li><Link href="/privacy-policy" className="text-white">Privacy Policy</Link></li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;
