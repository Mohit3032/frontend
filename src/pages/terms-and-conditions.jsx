import React from "react";
import Head from "next/head";
import styles from '@/styles/policies/terms-and-conditions.module.scss';

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Divya Chemical Industry</title>
      </Head>
      <section className={styles.wrapper}>
        <h1>Terms and Conditions</h1>

        <p>
          Welcome to Divya Chemical Industry. By accessing or using our website at
          <strong> www.divyachemicalindustry.com</strong>, you agree to comply with and be bound by the
          following Terms and Conditions. Please read them carefully before using our services.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website, you confirm your acceptance of these Terms and our Privacy Policy. If you disagree with any part of the terms, you must not use our site.
        </p>

        <h2>2. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Your continued use of the website following changes means you accept those updates.
        </p>

        <h2>3. Products and Services</h2>
        <p>
          Divya Chemical Industry manufactures and supplies industrial chemical products. Product descriptions, availability, and pricing are subject to change without notice.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          All content on this site, including text, images, logos, and graphics, is the property of Divya Chemical Industry and protected by applicable copyright and trademark laws.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          We are not liable for any direct, indirect, incidental, or consequential damages arising out of your use of our website or products. All information is provided &ldquo;as is&ldquo; without warranty of any kind.
        </p>

        <h2>6. External Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the content or practices of any linked sites.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of India. Any disputes arising under these terms will be subject to the exclusive jurisdiction of the courts in Vadodara, Gujarat.
        </p>

        <h2>8. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <ul>
          <li>Email: purchase@divyachemical.com</li>
          <li>Phone: +91 91043 56364</li>
          <li>Address: A/90, Natasha Park-2, Nizampura, Vadodara</li>
        </ul>
      </section>
    </>
  );
};

export default TermsAndConditions;
