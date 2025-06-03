import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify"; // Only importing 'toast', not ToastContainer
import Loader from "@/layout/loader"; // Adjust path as necessary

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  // Disable scrolling while loader is active
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("***Name is required"),
      email: Yup.string().email("***Invalid email").required("***Email is required"),
      mobile: Yup.string()
        .required("***Mobile number is required")
        .matches(/^[0-9]+$/, "***Must be only digits")
        .min(7, "***Too short"),
      message: Yup.string().required("***Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await axios.post("http://89.116.134.10/api/contacts", values);
        if (response.data.success) {
          toast.success(response.data.message || "Message sent successfully!");
          resetForm();
        } else {
          toast.error(response.data.error || "Failed to send message.");
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

      <div className="contactform__list mb-60">
        <form id="contact-form" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-danger">{formik.errors.name}</div>
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your mail"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="mobile"
                  type="text"
                  placeholder="Enter your number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <div className="text-danger">{formik.errors.mobile}</div>
                )}
              </div>
            </div>

            <div className="col-lg-12">
              <div className="contactform__input mb-30">
                <textarea
                  name="message"
                  placeholder="Type your comment"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <div className="text-danger">{formik.errors.message}</div>
                )}
              </div>
            </div>

            <div className="col-lg-12">
              <div className="contactform__input mb-30-btn" style={{ textAlign: "center" }}>
                <button type="submit" className="tp-btn">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
