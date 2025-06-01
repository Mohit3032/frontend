import Count from "@/common/count";

import Link from "next/link";
import React from "react";


// content
const content = {
  left_img: "assets/img/gallery/gal-thum-05.jpg",
  experience_count: 36,
  experience_count_text: (
    <>
      Years of <br />s
      Experience
    </>
  ),
  title: "About",
  section_title: "Leading Manufacturer of Industrial Chemicals",
  section_sub_title:
    " Delivering reliable, high-quality chemical solutions tailored for industrial applications across diverse sectors.",
  section_des: (
    <>
      At Divya Chemical Industry, we take pride in over three decades of expertise
      in manufacturing and supplying industrial-grade chemicals. Our commitment to quality,
      innovation, and on-time delivery has earned us a strong reputation in the market.
      From textiles to agriculture, engineering to processing industries — we serve it all
      with safe and efficient chemical products.
    </>
  ),
 about_info_list: [
    {
      text: "Bulk Manufacturing Capabilities",
    },
    {
      text: "ISO-Certified Processes",
    },
    {
      text: "Customized Industrial Solutions",
    },
    {
      text: "Safe Handling & Timely Delivery",
    },
  ],
};

const {
  left_img,
  experience_count,
  experience_count_text,
  title,
  section_title,
  section_sub_title,
  section_des,
  about_info_list,
} = content;

const About = () => {
  return (
    <>
      <section id="tp-about-scroll" className="about-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div
                className="about__thumb mb-60 wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="about__img">
                  
  <img src={left_img} alt="about-bg-img" />

                  <div className="about__exprience">
                    <h3 className="counter">
                      <Count add_style={true} number={experience_count} />
                    </h3>
                    <i>{experience_count_text}</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div
                className="tp-about__content pt-125 ml-60 mb-50 wow fadeInRight"
                data-wow-delay=".4s"
              >
                <div className="tp-section">
                  <span className="tp-section__sub-title left-line mb-25">
                    {title}
                  </span>
                  <h3 className="tp-section__title tp-ab-sm-title mb-45">
                    {section_title}
                  </h3>
                  <i>{section_sub_title}</i>
                  <p className=" mr-20 mb-45">{section_des}</p>
                </div>
                <div className="tp-about__info-list mb-55">
                  <ul>
                    {about_info_list.map((list, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i> {list.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tp-about__btn">
                  <Link className="tp-btn" href="/about">
                    Our HIstory
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
