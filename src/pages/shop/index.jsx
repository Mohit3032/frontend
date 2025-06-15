import SEO from "@/components/seo";
import Shop from "@/components/shop";
import Wrapper from "@/layout/wrapper";
import axios from "axios";

const ShopPage = ({ products }) => {
  return (
    <Wrapper>
         <SEO
        pageTitle="Shop All Products - Divya Chemical Industry"
        pageDescription="Get in touch with Divya Chemical Industry for inquiries, quotations, or chemical supply solutions. Fast response and reliable support."
        pageKeywords="contact chemical supplier, Divya Chemical Industry contact, industrial chemical inquiries"
        pageUrl="https://divyachemicalindustry.com/contact"
        pageImage = "https://divyachemicalindustry.com/assets/banner.png"

      />
      <Shop products={products} />
    </Wrapper>
  );
};

export async function getServerSideProps() {
  try {
const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);

    const data = res.data?.success ? res.data.data : [];

    // Flatten all products from all categories
    const products = Array.isArray(data[0]?.products)
      ? data.flatMap((cat) => cat.products)
      : data;

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching all shop products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}

export default ShopPage;
