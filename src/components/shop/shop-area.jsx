"use client";

import { useEffect, useState } from "react";
import NiceSelect from "@/ui/nice-select";
import Link from "next/link";
import Loader from "@/layout/loader";


const slugify = (text) =>
  (text ?? "")
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");

const ShopArea = ({ category, products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const productsPerPage = 12;

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setLoading(true);
      setTimeout(() => {
        setCurrentPage(page);
        setLoading(false);
      }, 500);
    }
  };

  const selectHandler = (selected) => {
    const value = selected.value;
    let sorted = [...products];

    switch (value) {
      case "Price: low to high":
        sorted.sort((a, b) => a.price?.current - b.price?.current);
        break;
      case "Price: high to low":
        sorted.sort((a, b) => b.price?.current - a.price?.current);
        break;
      case "Average rating":
        sorted.sort((a, b) => (b.rating?.stars ?? 0) - (a.rating?.stars ?? 0));
        break;
      case "Latest":
      case "New":
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        sorted = products;
    }

    setFilteredProducts(sorted);
    setCurrentPage(1);
  };

  if (loading) return <Loader />;

  return (
    <div className="shop-area pt-120 pb-130">
      <div className="container">
        {/* Filter and Sort Bar */}
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="tpproduct">
              <span>
                Showing {startIndex + 1}-{Math.min(endIndex, totalProducts)} of {totalProducts} results
              </span>
            </div>
          </div>
          {/* <div className="col-md-6">
            <div className="tpfilter d-flex align-items-center justify-content-end">
              <span>Sort by</span>
              <NiceSelect
                options={[
                  { value: "New", text: "New" },
                  { value: "Popularity", text: "Popularity" },
                  { value: "Average rating", text: "Average rating" },
                  { value: "Latest", text: "Latest" },
                  { value: "Price: low to high", text: "Price: low to high" },
                  { value: "Price: high to low", text: "Price: high to low" },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
              />
            </div>
          </div> */}
        </div>

        {/* Product Grid */}
        <div className="row">
          {currentProducts.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-4 col-md-4">
              <div className="tpshopitem mb-50">
                <div className="tpshopitem__thumb p-relative fix mb-35 wow fadeInUp" data-wow-delay=".6s">
                  <Link href={`/shop/${item.routing_category}/${slugify(item.title)}`} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                     
  <img src={item.image} alt={item.title} />

                    </a>
                  </Link>
                  {item.product_news && (
                    <span className="tpshopitem__product-base">{item.product_news}</span>
                  )}
              <div className="tpshopitem__thumb p-relative fix mb-35 wow fadeInUp" data-wow-delay=".6s">
  <Link href={`/shop/${item.routing_category}/${slugify(item.title)}`} passHref legacyBehavior>
    <a target="_blank" rel="noopener noreferrer">
     
  <img src={item.image} alt={item.title} />

    </a>
  </Link>
  {item.product_news && (
    <span className="tpshopitem__product-base">{item.product_news}</span>
  )}
  {/* Removed eye icon */}
</div>
                </div>
                <div className="tpshopitem__content text-center">
                  <span className="tpshopitem__title mb-5">
                    <Link href={`/shop/${item.routing_category}/${slugify(item.title)}`} passHref legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    </Link>
                  </span>
                  <p>₹{item.price?.current ?? "N/A"}</p>
                  <div className="tpshopitem__review">
                    {item.rating?.stars ? (
                      Array.from({ length: Math.round(item.rating.stars) }).map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))
                    ) : (
                      <span className="text-muted">No ratings</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="row">
          <div className="col-12">
            <div className="basic-pagination text-center mt-15">
              <nav>
                <ul>
                  <li>
                    <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
                      <i className="fa-light fa-arrow-left-long"></i>
                    </button>
                  </li>

                  {currentPage > 2 && (
                    <>
                      <li><button onClick={() => changePage(1)}>1</button></li>
                      {currentPage > 3 && <li><span className="pagination-ellipsis">...</span></li>}
                    </>
                  )}

                  {currentPage > 1 && (
                    <li><button onClick={() => changePage(currentPage - 1)}>{currentPage - 1}</button></li>
                  )}

                  <li><span className="current">{currentPage}</span></li>

                  {currentPage < totalPages && (
                    <li><button onClick={() => changePage(currentPage + 1)}>{currentPage + 1}</button></li>
                  )}

                  {currentPage < totalPages - 1 && (
                    <>
                      {currentPage < totalPages - 2 && <li><span className="pagination-ellipsis">...</span></li>}
                      <li><button onClick={() => changePage(totalPages)}>{totalPages}</button></li>
                    </>
                  )}

                  <li>
                    <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
                      <i className="fa-light fa-arrow-right-long"></i>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopArea;
