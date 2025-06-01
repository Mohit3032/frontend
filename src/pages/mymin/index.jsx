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
  const [activeTab, setActiveTab] = useState('contact'); // Set default active tab to 'contact'

  const handleLoginSuccess = () => {
    setLoggedIn(true); 
  };

  // Fetch contact data on component mount
  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const { data } = await axios.get('https://myback-one.vercel.app/contact-info');
        setContactdata(data.data);
      } catch (error) {
        console.error('Failed to fetch Contact details:', error.response?.data?.error || error.message);
      }
    };
    fetchContactData();
  }, []);

  return (
    <div className={styles.adminMain}>
      {/* Show modal if not logged in */}
      {!loggedIn && <Passwordmodal onLoginSuccess={handleLoginSuccess} />}

      {/* Once logged in */}
      {loggedIn && (
        <>
          <div className={styles.sidebar}>
            <h2>Dashboard</h2>
            <div className={styles.lists}>
              <ul>
                <li
                  className={activeTab === 'contact' ? styles.active : ''}
                  onClick={() => setActiveTab('contact')}
                >
                  Contact Us
                </li>
                <li
                  className={activeTab === 'products' ? styles.active : ''}
                  onClick={() => setActiveTab('products')}
                >
                  Update Products
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.content}>
            {/* Conditionally render content based on active tab */}
            {activeTab === 'contact' && (
              <div className={styles.activeSection}>
                <Contactdata contactdata={contactdata} />
              </div>
            )}
            {activeTab === 'products' && <HandleProduct className={styles.activeSection} />}
          </div>
        </>
      )}
    </div>
  );
};

export default Mymin;
