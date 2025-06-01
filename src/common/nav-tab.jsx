
import React from "react";


// progress_data
// progress_data
const progress_data = [
  {
    id: 1,
    icon: "flaticon-approval",
    img: "/assets/img/shape/navtabs-01.png",
    title: "Proposal Generation",
    des: (
      <>
        We create detailed proposals <br /> tailored to your trial needs.
      </>
    ),
  },
  {
    id: 2,
    icon: "flaticon-flask",
    img: "/assets/img/shape/navtabs-01.png",
    title: "Clinical Testing",
    des: (
      <>
        Clinical trials are conducted <br />
        following strict compliance protocols.
      </>
    ),
  },
  {
    id: 3,
    icon: "flaticon-report",
    img: "",
    title: "Results & Reporting",
    des: (
      <>
        Final reports are delivered <br />
        with complete transparency and accuracy.
      </>
    ),
  },
];


// tab_content
const tab_content = [
{
  id: 1,
  tab_id: "profile-tab-pane",
  aria_labelledby: "profile-tab",
  header: (
    <>
      Delivering trusted chemical solutions since 1989.<br /> Precision, quality, and innovation define our mission.
    </>
  ),
  title: "Ashish Maheshbhai Chauhan - Chairman & Technical Director",
  des_1: (
    <>
      Ashish Maheshbhai Chauhan leads Divya Chemical Industries with a focus on innovation, modernization, and delivering customer-centric chemical solutions. His technical expertise and strategic vision drive the company’s growth and excellence.
    </>
  ),
  des_2: (
    <>
      Under his leadership, Divya Chemical Industries continues to expand in domestic and international markets while maintaining the highest standards in chemical manufacturing and sustainability.
    </>
  ),
  images: [
    { order: "order-lg-1", img: "/assets/img/tab/ceo.jpeg" },
    { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-02.jpg" },
  ],
},
{
  id: 2,
  tab_id: "contact-tab-pane",
  aria_labelledby: "contact-tab",
  header: (
    <>
      Honoring our roots and growing forward. <br />
      Founded by vision, led by commitment.
    </>
  ),
  title: "The Legacy of Late Shree Maheshbhai P. Chauhan",
  des_1: (
    <>
      Divya Chemical Industries was founded in 1989 by Late Shree Maheshbhai P. Chauhan, originally known as ACM Chemicals. With a clear vision and strong values, he laid the groundwork for one of the most trusted chemical manufacturing companies in India.
    </>
  ),
  des_2: (
    <>
      His legacy lives on through our commitment to innovation, quality, and service. Today, the company thrives under the leadership of the next generation, delivering trusted solutions across industries.
    </>
  ),
  images: [
    { order: "order-lg-1", img: "/assets/img/tab/tab-thumb-01.jpg" },
    { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-02.jpg" },
  ],
}

];
const NavTab = () => {
  return (
    <>
      <section className="nav-area tp-common-area pt-130 pb-80">
        <div className="container">
          <ul className="nav tp-nav-tavs mb-70" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
                tabIndex="-1"
              >
                Our Process
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                Our Legacy
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                Our History
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <span className="nav-info d-flex justify-content-center text-center mb-75">
                Your full service lab for clinical trials. Our process is to
                ensure the generation of <br /> accurate and precise findings
              </span>
              <div className="row">
                {progress_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="navtabs nav-primary p-relative text-center mb-40">
                      <div className="navtabs__icon mb-35" >
                        <i className={item.icon} ></i>
                      </div>
                      <div className="navtabs__content">
                        <h5 className="navtabs__title mb-25 mb-10">
                          {item.title}
                        </h5>
                        <p>{item.des}</p>
                      </div>
                      {item.img && (
                        <div className="navtabs__shape d-none d-lg-block">
                           
  <img src={item?.img} alt="shape" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {tab_content.map((item) => (
              <div
                key={item.id}
                className="tab-pane fade"
                id={`${item.tab_id}`}
                role="tabpanel"
                aria-labelledby={`${item.aria_labelledby}`}
              >
                <span className="nav-info d-flex justify-content-center text-center mb-75">
                  {item.header}
                </span>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12 order-lg-2">
                    <div className="nabmission mb-30">
                      <div className="nabmission__content text-center ml-50 mr-50 pt-20">
                        <h4 className="nabmission__title mb-35">
                          {item.title}
                        </h4>
                        <p className="mb-35">{item.des_1}</p>
                        <p>{item.des_2}</p>
                      </div>
                    </div>
                  </div>

                  {item.images.map((img, i) => (
                    <div
                      key={i}
                      className={`col-xl-3 col-lg-3 col-md-6 ${img.order}`}
                    >
                      <div className="nabthumb mb-30">
                       
  <img src={img.img} alt="tab-thumb" />
                
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NavTab;
