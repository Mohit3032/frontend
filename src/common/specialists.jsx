import Link from "next/link";
import React from "react";

// choose data
const choose = [
  {
    id: 1,
    color: "",
    icon: "flaticon-microscope",
    title: (
      <span style={{ color: "white" }}>
        Premium <br /> Chemicals
      </span>
    ),
    des: (
      <span style={{ color: "white" }}>
        High-grade industrial <br /> chemicals.
      </span>
    ),
  },
  {
    id: 2,
    color: "pink-icon",
    icon: "flaticon-thinking",
    title: (
      <span style={{ color: "white" }}>
        Fast <br /> Delivery
      </span>
    ),
    des: (
      <span style={{ color: "white" }}>
        Reliable & on-time <br /> shipments.
      </span>
    ),
  },
  {
    id: 3,
    color: "green-icon",
    icon: "flaticon-24-hours-1",
    title: (
      <span style={{ color: "white" }}>
        24/7 <br /> Support
      </span>
    ),
    des: (
      <span style={{ color: "white" }}>
        Always here to <br /> assist you.
      </span>
    ),
  },
  {
    id: 4,
    color: "sky-icon",
    icon: "flaticon-team",
    title: (
      <span style={{ color: "white" }}>
        Expert <br /> Team
      </span>
    ),
    des: (
      <span style={{ color: "white" }}>
        Experienced industry <br /> professionals.
      </span>
    ),
  },
];

const Specialists = () => {
  return (
    <>
      <section className="choose-area theme-bg pt-120 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <h3
                  className="tp-section__title title-white mb-85"
                  style={{ color: "white" }}
                >
                  Why Choose Divya Chemical Industry
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {choose.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="tp-choose__item ml-75 mb-100 wow fadeInUp"
                  data-wow-delay=".8s"
                >
        <div className={`tp-choose__icon ${item.color} mb-40 text-center mx-auto`}>
  <i className={item.icon}></i>
</div>


                 <div className="tp-choose__content text-center">
  <h4 className="tp-choose__title mb-20">{item.title}</h4>
  <p>{item.des}</p>
</div>

                </div>
              </div>
            ))}
          </div>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="tp-choose-option" style={{ color: "white" }}>
                <span style={{ color: "white" }}>
                  Your trusted industrial chemical partner.{" "}
                  <Link href="/contact" style={{ color: "white" }}>
                    Contact Us <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
        <br />
          <br />
            <br />
    </>
  );
};

export default Specialists;
