// components/seo/index.js
import Head from "next/head";

const SEO = ({
  pageTitle = "Divya Chemical Industry - Industrial & Lab Chemical Suppliers",
  pageDescription = "Divya Chemical Industry offers premium industrial, laboratory, and specialty chemicals with trusted quality, competitive pricing, and fast delivery across India.",
  pageKeywords = "chemical suppliers India, industrial chemicals, laboratory chemicals, specialty chemicals, chemical raw materials, Divya Chemical Industry",
  pageUrl = "https://divyachemicalindustry.com",
pageImage = "https://divyachemicalindustry.com/assets/banner.png",
  pageLang = "en",
}) => (
  <Head>
    <title>{pageTitle}</title>
    <meta httpEquiv="x-ua-compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta charSet="UTF-8" />

    {/* Basic Meta */}
    <meta name="description" content={pageDescription} />
    <meta name="keywords" content={pageKeywords} />
    <meta name="author" content="Divya Chemical Industry" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href={pageUrl} />

    {/* Open Graph (Facebook, LinkedIn) */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:image" content={pageImage} />
    <meta property="og:url" content={pageUrl} />
    <meta property="og:site_name" content="Divya Chemical Industry" />

    {/* Twitter Cards */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={pageDescription} />
    <meta name="twitter:image" content={pageImage} />
    <meta name="twitter:site" content="@divyachemical" />

    {/* Favicon */}
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />


    {/* Structured Data: Schema.org for Google */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Divya Chemical Industry",
          url: "https://divyachemicalindustry.com",
          logo: "https://divyachemicalindustry.com/favicon.ico",
          sameAs: [
            "https://facebook.com/divyachemicalindustry",
            "https://instagram.com/divyachemicalindustry",
            "https://linkedin.com/company/divyachemicalindustry",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91 9825167861",
            contactType: "Customer Service",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        }),
      }}
    />
  </Head>
);

export default SEO;
