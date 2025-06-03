import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./HandleProduct.module.scss";
import Image from "next/image";

const ProductList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://89.116.134.10/api");
        if (response.data.success) {
          const grouped = {};

          response.data.data.forEach((product) => {
            const categoryKey = product.routing_category;

            if (!grouped[categoryKey]) {
              grouped[categoryKey] = {
                id: categoryKey,
                category: categoryKey,
                category_img: "",
                routing_category: categoryKey,
                products: [],
              };
            }

            grouped[categoryKey].products.push(product);
          });

          setCategories(Object.values(grouped));
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Handle product deletion
  const handleDelete = async (categoryId, productId) => {
    try {
      const response = await axios.post("http://89.116.134.10/api/product-delete", {
        categoryId,
        productId,
      });
      if (response.data.success) {
        alert("Product deleted successfully");
        setCategories((prev) =>
          prev.map((cat) =>
            cat.id === categoryId
              ? {
                  ...cat,
                  products: cat.products.filter((p) => p.id !== productId),
                }
              : cat
          )
        );
      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Form validation schema
  const validationSchema = Yup.object({
    file: Yup.mixed().required("File is required"),
    title: Yup.string().required("Product name is required"),
    fulldescription: Yup.string().required("Full description is required"),
    description: Yup.string().required("Product description is required"),
    routing_category: Yup.string().required("Product route is required"),
    price_current: Yup.number().required("Current price is required"),
    price_original: Yup.number().nullable(),
    rating_stars: Yup.number().nullable(),
    rating_count: Yup.number().nullable(),
    colors: Yup.array().of(Yup.string()).required("At least one color is required"),
    quantity: Yup.number().required("Quantity is required"),
    details: Yup.object().shape({
      weight: Yup.string().required("Weight is required"),
      dimensions: Yup.string().required("Dimensions are required"),
      color_options: Yup.array().of(Yup.string()).required("At least one color option is required"),
      sizes: Yup.array().of(Yup.string()).required("At least one size is required"),
      model: Yup.string().required("Model is required"),
      shipping: Yup.string().required("Shipping info is required"),
      care_info: Yup.string().required("Care info is required"),
      brand: Yup.string().required("Brand is required"),
    }),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      file: null,
      title: "",
      fulldescription: "",
      description: "",
      routing_category: "",
      price_current: "",
      price_original: "",
      rating_stars: "",
      rating_count: "",
      colors: [""],
      quantity: 1,
      details: {
        weight: "",
        dimensions: "",
        color_options: [""],
        sizes: [""],
        model: "",
        shipping: "",
        care_info: "",
        brand: "",
      },
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      if (!selectedCategoryId) {
        alert("Please select a category before adding a product.");
        return;
      }

      const formData = new FormData();
      formData.append("categoryId", selectedCategoryId);
      formData.append("image", values.file);
      formData.append("title", values.title);
      formData.append("fulldescription", values.fulldescription);
      formData.append("description", values.description);
      formData.append("routing_category", values.routing_category);
      formData.append("price_current", values.price_current);
      formData.append("price_original", values.price_original);
      formData.append("rating_stars", values.rating_stars);
      formData.append("rating_count", values.rating_count);
      formData.append("quantity", values.quantity);
      formData.append("colors", JSON.stringify(values.colors));
      formData.append("details", JSON.stringify(values.details));

      try {
        const response = await axios.post("http://89.116.134.10/api/product-add", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (response.data.success && response.data.product) {
          alert("Product added successfully");

          const newProduct = response.data.product;
          setCategories((prev) =>
            prev.map((cat) =>
              cat.id === selectedCategoryId
                ? { ...cat, products: [...(cat.products || []), newProduct] }
                : cat
            )
          );

          resetForm();
        } else {
          alert("Failed to add product");
        }
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
  });

  // Handle route generation from title
  const handleTitleChange = (e) => {
    const titleValue = e.target.value;
    formik.setFieldValue("title", titleValue);
    if (!formik.values.routing_category) {
      const route = titleValue.trim().toLowerCase().replace(/\s+/g, "_");
      formik.setFieldValue("routing_category", route);
    }
  };

  return (
    <div className={styles["product-list"]}>
      <h1>Product Categories</h1>

      {/* Form to Add Product */}
      <div className={styles["add-product-form"]}>
        <h4>Add Product</h4>
        <form onSubmit={formik.handleSubmit}>
          <select
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.category}
              </option>
            ))}
          </select>

          <input
            type="file"
            name="file"
            onChange={(e) => formik.setFieldValue("file", e.currentTarget.files[0])}
          />
          {formik.touched.file && formik.errors.file && <div>{formik.errors.file}</div>}

          <input
            type="text"
            placeholder="Product Title"
            name="title"
            value={formik.values.title}
            onChange={handleTitleChange}
          />
          {formik.touched.title && formik.errors.title && <div>{formik.errors.title}</div>}

          <textarea
            placeholder="Full Description"
            name="fulldescription"
            value={formik.values.fulldescription}
            onChange={formik.handleChange}
          />
          {formik.touched.fulldescription && formik.errors.fulldescription && <div>{formik.errors.fulldescription}</div>}

          <textarea
            placeholder="Short Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          {formik.touched.description && formik.errors.description && <div>{formik.errors.description}</div>}

          <input
            type="text"
            placeholder="Route (auto-filled)"
            name="routing_category"
            value={formik.values.routing_category}
            onChange={formik.handleChange}
            readOnly
          />
          {formik.touched.routing_category && formik.errors.routing_category && <div>{formik.errors.routing_category}</div>}

          <input
            type="number"
            placeholder="Current Price"
            name="price_current"
            value={formik.values.price_current}
            onChange={formik.handleChange}
          />
          {formik.touched.price_current && formik.errors.price_current && <div>{formik.errors.price_current}</div>}

          <input
            type="number"
            placeholder="Original Price"
            name="price_original"
            value={formik.values.price_original}
            onChange={formik.handleChange}
          />

          <input
            type="number"
            placeholder="Quantity"
            name="quantity"
            value={formik.values.quantity}
            onChange={formik.handleChange}
          />
          {formik.touched.quantity && formik.errors.quantity && <div>{formik.errors.quantity}</div>}

          <input
            type="text"
            placeholder="Colors (comma separated)"
            value={formik.values.colors.join(", ")}
            onChange={(e) => {
              const colorsArray = e.target.value.split(",").map((c) => c.trim());
              formik.setFieldValue("colors", colorsArray);
            }}
          />
          {formik.touched.colors && formik.errors.colors && <div>{formik.errors.colors}</div>}

          {/* Product Details */}
          <h5>Product Details</h5>

          {[
            { name: "weight", placeholder: "Weight" },
            { name: "dimensions", placeholder: "Dimensions" },
            { name: "model", placeholder: "Model" },
            { name: "shipping", placeholder: "Shipping Info" },
            { name: "care_info", placeholder: "Care Info" },
            { name: "brand", placeholder: "Brand" },
          ].map(({ name, placeholder }) => (
            <React.Fragment key={name}>
              <input
                type="text"
                placeholder={placeholder}
                name={`details.${name}`}
                value={formik.values.details[name]}
                onChange={formik.handleChange}
              />
              {formik.touched.details?.[name] && formik.errors.details?.[name] && (
                <div>{formik.errors.details[name]}</div>
              )}
            </React.Fragment>
          ))}

          <input
            type="text"
            placeholder="Color Options (comma separated)"
            value={formik.values.details.color_options.join(", ")}
            onChange={(e) =>
              formik.setFieldValue(
                "details.color_options",
                e.target.value.split(",").map((opt) => opt.trim())
              )
            }
          />
          {formik.touched.details?.color_options && formik.errors.details?.color_options && (
            <div>{formik.errors.details.color_options}</div>
          )}

          <input
            type="text"
            placeholder="Sizes (comma separated)"
            value={formik.values.details.sizes.join(", ")}
            onChange={(e) =>
              formik.setFieldValue(
                "details.sizes",
                e.target.value.split(",").map((s) => s.trim())
              )
            }
          />
          {formik.touched.details?.sizes && formik.errors.details?.sizes && (
            <div>{formik.errors.details.sizes}</div>
          )}

          <button type="submit">Upload</button>
        </form>
      </div>

      {/* Product Display */}
      {categories.map((category) => (
        <div key={category.id} className={styles["category"]}>
          <h2>{category.category.replace(/_/g, " ")}</h2>

          {category.category_img && (
            
  <img  src={category.category_img} alt={category.category} className={styles["category-img"]} />
         )}

          <div className={styles["products-container"]}>
            {category.products?.length > 0 ? (
              category.products.map((product) => (
                <div key={product.id} className={styles["product-card"]}>
                   
  <img src={product.image} alt={product.title} />

                  <h3>{product.title}</h3>

                  <p><strong>Route:</strong> {category.routing_category}</p>
                  <p><strong>Price:</strong> ₹{product.price?.current ?? "N/A"}</p>
                  {product.price?.original && (
                    <p className={styles["discounted-price"]}><strong>Original:</strong> ₹{product.price.original}</p>
                  )}
                  <p><strong>Description:</strong> {product.description}</p>
                  <p><strong>Full Description:</strong> {product.fulldescription}</p>
                  <p><strong>Stock:</strong> {product.quantity ?? "N/A"}</p>
                  <p><strong>Rating:</strong> {product.rating?.stars ?? "N/A"} ({product.rating?.reviews_count ?? "0"} reviews)</p>
                  <p><strong>Colors:</strong> {product.colors?.join(", ") ?? "N/A"}</p>
                  <p><strong>Variant:</strong> {product.details?.sizes?.join(", ") ?? "N/A"}</p>
                  <p><strong>Brand:</strong> {product.details?.brand ?? "N/A"}</p>

                  <button onClick={() => handleDelete(category.routing_category, product.id)}>Delete</button>
                </div>
              ))
            ) : (
              <p>No products available in this category.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
