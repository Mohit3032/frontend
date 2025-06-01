import Head from "next/head";

const SEO = ({ 
  pageTitle = "Divya Chemical Industry - Industrial & Lab Chemical Suppliers", 
  pageDescription = "Divya Chemical Industry offers premium industrial, laboratory, and specialty chemicals with trusted quality, competitive pricing, and fast delivery across India.",
  pageKeywords = "chemical suppliers India, industrial chemicals, laboratory chemicals, specialty chemicals, chemical raw materials, Divya Chemical Industry",
  pageUrl = "https://divyachemicalindustry.com",
  pageImage = "https://divyachemicalindustry.com/images/banner.jpg", // Replace with real image URL
}) => (
  <Head>
    <title>{pageTitle}</title>
    <meta httpEquiv="x-ua-compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    {/* Essential Meta Tags */}
    <meta name="description" content={pageDescription} />
    <meta name="keywords" content={pageKeywords} />
    <meta name="author" content="Divya Chemical Industry" />
    <meta name="robots" content="index, follow" />

    {/* Open Graph for Facebook/LinkedIn */}
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={pageUrl} />
    <meta property="og:image" content={pageImage} />
    <meta property="og:site_name" content="Divya Chemical Industry" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={pageDescription} />
    <meta name="twitter:image" content={pageImage} />

    {/* Favicon */}
    <link rel="icon" href="/DC.png"   width={120} 
  height={60} />
 


    {/* Canonical URL */}
    <link rel="canonical" href={pageUrl} />
  </Head>
);

export default SEO;
