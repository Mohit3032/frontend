import MobileMenus from '@/layout/header/mobile-menus';
import ImagePopup from '@/modals/ImagePopup';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Loader from "@/layout/loader"; 
import { toast } from "react-toastify"; // only toast, not ToastContainer


const images = [
  { img: "/assets/img/blog/blog-in-01.jpg" },
  { img: "/assets/img/blog/blog-in-02.jpg" },
  { img: "/assets/img/blog/blog-in-03.jpg" }
];

const Sidebar = ({ isActive, setIsActive }) => {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  const img = images.map((item) => item.img);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const res = await axios.post('http://localhost:3032/newsletter', values);
        if (res.data.success) {
          toast.success(res.data.message || "Subscribed successfully!");
          resetForm();
        } else {
          toast.error(res.data.error || "Subscription failed.");
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      {loading && <Loader />}

      <div className={`tpsideinfo tp-side-info-area ${isActive ? "tp-sidebar-opened" : ""}`}>
        <button onClick={() => setIsActive(false)} className="tpsideinfo__close">
          <i className="fal fa-times"></i>
        </button>

        <div className="tpsideinfo__logo mb-40">
          <Link href="/">
         
  <img src="/assets/img/logo/DC.png" alt="logo" />

          </Link>
        </div>

        <div className="mobile-menu mean-container d-block d-lg-none">
          <div className="mean-bar">
            <MobileMenus />
          </div>
        </div>

        <div className="tpsideinfo__content mb-60">
          <p className="d-none d-xl-block">
            Our mission is to ensure the generation of accurate and precise findings.
          </p>
          <span>Contact Us</span>
          <a href="#"><i className="fa-solid fa-star"></i>A/90 NATASHA PARK-2, NIZAMPURA VADODARA GUJARAT</a>
          <a href="tel:61383766284"><i className="fa-solid fa-star"></i>+91 98251 67861</a>
          <a href="mailto:divyachemicalindustries@gmail.com"><i className="fa-solid fa-star"></i>divyachemicalindustries@gmail.com</a>
        </div>

        <div className="tpsideinfo__content-inputarea mb-60 d-none d-xl-block">
          <span>Get Update</span>
          <div className="tpsideinfo__content-inputarea-input">
            <form onSubmit={formik.handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter Mail"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <button type="submit" className="tpsideinfo__content-inputarea-input-btn">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
            {formik.touched.email && formik.errors.email && (
              <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</div>
            )}
          </div>
        </div>

        <div className="tpsideinfo__gallery mb-35 d-none d-xl-block">
          <span>Check Instagram Post</span>
          <div className="tpsideinfo__gallery-item">
            {images.map((item, i) => (
              <a key={i} onClick={() => handleImagePopup(i)} className="popup-image" style={{ cursor: "pointer" }}>
                <img src={item.img} alt={`Gallery ${i}`} />
              </a>
            ))}
          </div>
        </div>

        <div className="tpsideinfo__socialicon">
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-skype"></i></a>
        </div>
      </div>

      <div onClick={() => setIsActive(false)} className={`body-overlay ${isActive ? "opened" : ""}`}></div>

      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </>
  );
};

export default Sidebar;
