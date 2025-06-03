import SEO from "@/components/seo";
import ShopArea from "@/components/shop";
import Wrapper from "@/layout/wrapper";
import axios from "axios";

const formatCategory = (slug) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

const ShopPage = ({ category, products }) => {
  return (
    <Wrapper>
      <SEO pageTitle={`${formatCategory(category)} Products`} />
      <ShopArea category={category} products={products} />
    </Wrapper>
  );
};

export async function getServerSideProps(context) {
  const { category } = context.params;

  try {
    const res = await axios.get(`http://89.116.134.10/api?category=${category}`);
    const products = res.data?.success ? res.data.data : [];

    const sanitizedProducts = products.map((product) => ({
      ...product,
      image: product.image ?? null,
      price: product.price ?? null,
      rating: product.rating ?? null,
      product_news: product.product_news ?? null,
    }));

    return {
      props: {
        category, // Make sure this is passed correctly
        products: sanitizedProducts,
      },
    };
  } catch (error) {
    console.error("Category fetch error:", category, error);
    return {
      props: {
        category,
        products: [],
      },
    };
  }
}



export default ShopPage;
