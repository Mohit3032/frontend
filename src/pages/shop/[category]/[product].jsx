import { useRouter } from "next/router";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import axios from "axios";
import ProductDetails from "@/components/product-details";

// Helper to safely display text
const getSafeText = (val) => {
  if (typeof val === "string") return val;
  if (typeof val === "object") return JSON.stringify(val);
  return String(val);
};

const ProductPage = ({ productData }) => {
  const router = useRouter();

  console.log("productData:", productData); // Debug log

  if (router.isFallback || !productData) {
    return <p>Loading...</p>;
  }

  return (
    <Wrapper>
      <SEO
        pageTitle={`${getSafeText(productData.title)} - ${getSafeText(productData.details?.brand) || "Product"}`}
      />
      <ProductDetails product={productData} />
    </Wrapper>
  );
};

export async function getServerSideProps(context) {
    const { category, product } = context.params;
  
    try {
      const res = await axios.get(
        `http://89.116.134.10/api/product/${category}/${product}`
      );
  
      const productData = res.data?.success ? res.data.data : null;
  
      return {
        props: {
          productData,
        },
      };
    } catch (error) {
      console.error("Product fetch error:", category, product, error);
      return {
        props: {
          productData: null,
        },
      };
    }
  }
  
export default ProductPage;
