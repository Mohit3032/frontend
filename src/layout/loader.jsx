import React from 'react';
import styles from './loader.module.css';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Image
        src="/assets/img/logo/DC.png"
        alt="Loading..."
        width={150}
        height={150}
        className={styles.blinkingLogo}
      />
    </div>
  );
};

export default Loader;
