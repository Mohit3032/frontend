import AnswerQuestion from "@/common/answer-question";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const setting = {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: { slidesPerView: 3 },
    992: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    576: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  },
};

const product_item_list = [
  {
    id: 1,
    title: "Product Details",
    active: "active",
    li_id: "home-tab-1",
    data_bs_target: "home-1",
    aria_controls: "home-1",
    aria_selected: true,
  },
  {
    id: 2,
    title: "Additional Info",
    active: "",
    li_id: "information-tab",
    data_bs_target: "additional-information",
    aria_controls: "additional-information",
    aria_selected: false,
  },
  {
    id: 3,
    title: "FAQ",
    active: "",
    li_id: "size-chart-tab",
    data_bs_target: "chart",
    aria_controls: "chart",
    aria_selected: false,
  },
];

const ProductDetailsArea = ({ product }) => {
  const [productCount, setProductCount] = useState(1);
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);
  const router = useRouter();

  const addBtn = () => setProductCount((prev) => prev + 1);
  const minusBtn = () => setProductCount((prev) => (prev > 1 ? prev - 1 : 1));

  const handleEnquiry = () => {
    const selectedColor = product.colors?.[selectedColorIndex] || "Default color";
    const message = `Hi, I am interested in buying: ${product.title} in ${selectedColor}.`;
    const encodedMsg = encodeURIComponent(message);
    router.push(`/contact?message=${encodedMsg}`);
  };

  return (
    <section className="shop-area pt-120 pb-70">
      <div className="container">
        <div className="shop-left-right ml-130 mr-130">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="productthumb mb-40">
                
  <img src={product.image} alt="product-thumb" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product mb-40 ml-20">
                <div className="product__details-content mb-40">
                  <h5 className="product-dtitle mb-20">{product.title}</h5>
                  <p>{product.description || "No description available"}</p>

                  <div className="product-dinfo mt-25">
                    <div className="product-rating">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fa-star ${
                            i < (product.rating?.stars || 4) ? "fa-solid" : "fa-regular"
                          }`}
                        ></i>
                      ))}
                    </div>
                    <span className="review-count">
                      ({product.rating?.reviews_count || 4} customer reviews)
                    </span>
                  </div>

                  <h5 className="product-dprice mt-30">
                    ${product.price?.current}{" "}
                    {product.price?.original && <del>/${product.price?.original}</del>}
                  </h5>

                  {product.colors && Array.isArray(product.colors) && product.colors.length > 0 && (
  <>
    <h6 className="product-model-title mt-30 mb-15">Choose Color</h6>
    <div className="product-model-list mb-20">
      {product.colors.map((color, i) => (
        <span
          key={i}
          onClick={() => setSelectedColorIndex(i)}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            backgroundColor: selectedColorIndex === i ? "#8c000a" : "#f0f0f0",
            color: selectedColorIndex === i ? "#fff" : "#000",
            border: selectedColorIndex === i ? "2px solid #8c000a" : "1px solid #ccc",
            marginRight: "10px",
            cursor: "pointer",
            transition: "0.3s ease",
            display: "inline-block"
          }}
        >
          {color}
        </span>
      ))}
    </div>
  </>
)}


                  <div className="pro-quan-area d-sm-flex align-items-center mb-15">
                    <div className="product-quantity-title mr-25">
                      <label>Quantity</label>
                    </div>
                    <div className="tp-product-quantity mt-10 mb-10">
                      <span className="cart-minus" onClick={minusBtn}>
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                      <input className="tp-cart-input" type="text" value={productCount} readOnly />
                      <span className="cart-plus" onClick={addBtn}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>

                  <div className="product-button">
                    <button className="tp-btn mr-20" onClick={handleEnquiry}>
                      Enquiry Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tab Section */}
          <div className="productdetails pt-35 pb-75">
            <div className="row">
              <div className="col-lg-12">
                <div className="product-additional-tab">
                  <div className="pro-details-nav mb-40">
                    <ul className="nav nav-tabs pro-details-nav-btn" id="myTabs" role="tablist">
                      {product_item_list.map((item) => (
                        <li key={item.id} className="nav-item" role="presentation">
                          <button
                            className={`nav-links ${item.active}`}
                            id={item.li_id}
                            data-bs-toggle="tab"
                            data-bs-target={`#${item.data_bs_target}`}
                            type="button"
                            role="tab"
                            aria-controls={item.aria_controls}
                            aria-selected={item.aria_selected}
                          >
                            {item.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tab-content tp-content-tab" id="myTabContent-2">
                    <div
                      className="tab-para tab-pane fade show active"
                      id="home-1"
                      role="tabpanel"
                      aria-labelledby="home-tab-1"
                    >
                      <p className="mb-30">{product.fulldescription || "No details."}</p>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="additional-information"
                      role="tabpanel"
                      aria-labelledby="information-tab"
                    >
                      <div className="product__details-info table-responsive">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <td className="add-info">Weight</td>
                              <td className="add-info-list">{product.details?.weight || "N/A"}</td>
                            </tr>
                            <tr>
                              <td className="add-info">Dimensions</td>
                              <td className="add-info-list">{product.details?.dimensions || "N/A"}</td>
                            </tr>
                            <tr>
                              <td className="add-info">Brand</td>
                              <td className="add-info-list">{product.details?.brand || "N/A"}</td>
                            </tr>
                            <tr>
                              <td className="add-info">Shipping</td>
                              <td className="add-info-list">{product.details?.shipping || "N/A"}</td>
                            </tr>
                            <tr>
                              <td className="add-info">Care Info</td>
                              <td className="add-info-list">{product.details?.care_info || "N/A"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="chart"
                      role="tabpanel"
                      aria-labelledby="size-chart-tab"
                    >
                      <div className="shop-faq">
                        <AnswerQuestion />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {product.relatedProducts && product.relatedProducts.length > 0 && (
            <div className="tpproductitem">
              <div className="row">
                <div className="col-lg-12">
                  <h5 className="product-dtitle mb-50">Related Products</h5>
                </div>
              </div>
              <Swiper
                {...setting}
                modules={[Navigation]}
                className="swiper-container shop-slider-active"
              >
                {product.relatedProducts.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="tpshopitem mb-50">
                      <div className="tpshopitem__thumb p-relative fix mb-35">
                        <Link href={`/shop/${item.category}/${item.slug}`}>
                      
  <img src={item.img} alt="shop-thumb" />
                       
                        </Link>
                        <div className="tpshopitem__thumb-icon">
                          <a href="#"><i className="fal fa-eye"></i></a>
                          <a href="#"><i className="fal fa-shopping-cart"></i></a>
                          <a href="#"><i className="fal fa-heart"></i></a>
                        </div>
                      </div>
                      <div className="tpshopitem__content text-center">
                        <span className="tpshopitem__title mb-5">
                          <Link href={`/shop/${item.category}/${item.slug}`}>
                            {item.name}
                          </Link>
                        </span>
                        <p>${item.price}</p>
                        <div className="tpshopitem__review">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={item.rating > i ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsArea;
