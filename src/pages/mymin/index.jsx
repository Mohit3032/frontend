"use client";

import React, { useEffect, useState } from 'react';
import styles from './mymin.module.scss';
import axios from 'axios';
import Passwordmodal from '@/components/Admin/PasswordModel/Passwordmodal';
import Contactdata from '@/components/Admin/Contactdata/Contactdata';
import HandleProduct from '@/components/Admin/HandleProduct/HandleProduct';

const Mymin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [contactdata, setContactdata] = useState([]);
  const [activeTab, setActiveTab] = useState('contact');
  const [sidebarOpen, setSidebarOpen] = useState(false); // For mobile sidebar toggle

  const handleLoginSuccess = () => {
    setLoggedIn(true); 
  };

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contact-info`);
        setContactdata(data.data);
      } catch (error) {
        console.error('Failed to fetch Contact details:', error.response?.data?.error || error.message);
      }
    };
    fetchContactData();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSidebarOpen(false); // Close sidebar on mobile after click
  };

  return (
    <div className={styles.adminMain}>
      {!loggedIn && <Passwordmodal onLoginSuccess={handleLoginSuccess} />}

      {loggedIn && (
        <>
          {/* Hamburger Button */}
          <button className={styles.hamburger} onClick={() => setSidebarOpen(!sidebarOpen)}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>

          {/* Sidebar */}
          <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : styles.sidebarHidden}`}>
            <h2>Dashboard</h2>
            <div className={styles.lists}>
              <ul>
                <li
                  className={activeTab === 'contact' ? styles.active : ''}
                  onClick={() => handleTabClick('contact')}
                >
                  Contact Us
                </li>
                <li
                  className={activeTab === 'products' ? styles.active : ''}
                  onClick={() => handleTabClick('products')}
                >
                  Update Products
                </li>
              </ul>
            </div>
          </div>

          {/* Content Area */}
          <div className={styles.content}>
            {activeTab === 'contact' && (
              <div className={styles.activeSection}>
                <Contactdata contactdata={contactdata} />
              </div>
            )}
            {activeTab === 'products' && (
              <HandleProduct className={styles.activeSection} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Mymin;
