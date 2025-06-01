import React from "react";
import Head from "next/head";
import styles from '@/styles/policies/privacy-policy.module.scss';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Divya Chemical Industry</title>
      </Head>
      <section className={styles.wrapper}>
        <h1>Privacy Policy</h1>

        <p>
          At Divya Chemical Industry, we value your privacy. This policy outlines how we collect, use, and protect your personal information.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, phone number, and company name when you contact us or fill out a form on our website.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          The information we collect is used to:
        </p>
        <ul>
          <li>Respond to your inquiries</li>
          <li>Provide customer support</li>
          <li>Send periodic updates about our services</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share it with trusted partners only for the purposes of operating our website and servicing you.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your information from unauthorized access or disclosure.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.
        </p>

        <h2>7. Your Consent</h2>
        <p>
          By using our website, you consent to our Privacy Policy.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
        </p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, contact us at:</p>
        <ul>
          <li>Email: purchase@divyachemical.com</li>
          <li>Phone: +91 91043 56364</li>
          <li>Address: A/90, Natasha Park-2, Nizampura, Vadodara</li>
        </ul>
      </section>
    </>
  );
};

export default PrivacyPolicy;
