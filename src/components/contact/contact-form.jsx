
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Contact Info
const contact_info = {
  address: (
    <>
      A/90, Natasha Park-2 <br /> Nizampura Road Vadodara -390024
    </>
  ),
  phone_1: "+91 98251 67861",
  phone_2: "+91 91043 56364",
  open: (
    <>
      Monday - Sunday <br />
      09:00 AM - 05:00 PM
    </>
  ),
};

const { address, phone_1, phone_2, open } = contact_info;

const ContactForm = () => {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated && router.isReady && router.query.message) {
      setFormData((prev) => ({
        ...prev,
        message: decodeURIComponent(router.query.message)
      }));
    }
  }, [hydrated, router.isReady, router.query.message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent!");
  };

  return (
    <>
      <section className="contact-area pt-130 pb-115">
        <div className="container">
          <div className="row">
            {/* Left Info */}
            <div className="col-lg-4 col-md-5 col-12 wow fadeInLeft" data-wow-delay=".4s">
              <div className="tpcontact mr-60 mb-60 wow fadeInUp" data-wow-delay=".2s">
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
           
  <img src="/assets/img/icon/contact-01.svg" alt="icon" />

                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Address line</h4>
                    <span><Link href="/contact">{address}</Link></span>
                  </div>
                </div>
              </div>
              <div className="tpcontact mr-60 mb-60 wow fadeInUp" data-wow-delay=".4s">
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                  
  <img src="/assets/img/icon/contact-02.svg" alt="icon" />

                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Phone Number</h4>
                    <span><a href={`tel:${phone_1}`}>{phone_1}</a></span>
                    <span><a href={`tel:${phone_2}`}>{phone_2}</a></span>
                  </div>
                </div>
              </div>
              <div className="tpcontact mr-60 mb-60 wow fadeInUp" data-wow-delay=".6s">
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                 
  <img src="/assets/img/icon/contact-03.svg" alt="icon" />

                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Opening Hours</h4>
                    <span>{open}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="col-lg-8 col-md-7 col-12">
              <div className="contactform wow fadeInRight" data-wow-delay=".4s">
                <h4 className="contactform__title mb-35">Send us a Message :</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 mb-20">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-6 mb-20">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-12 mb-20">
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-lg-12">
              <div className="contactform__input mb-30-btn" style={{ textAlign: "center",marginBottom:"20px" }}>
                <button type="submit" className="tp-btn">
                  Send Message
                </button>
              </div>
            </div>
                  </div>
                </form>

                {/* Map */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tpcontactmap">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d95803.21114326254!2d73.09938337346168!3d22.328944375932995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x395fc9f0544560d1%3A0x168c18a79d33c1d8!2sA-90%20Ground%20Floor%20Natasha%20Park%2C%202%2C%20Nizampura%20Rd%2C%20Vadodara%2C%20Gujarat%20390024!3m2!1d22.3289652!2d73.18178499999999!5e1!3m2!1sen!2sin!4v1746526165308!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                      ></iframe>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
