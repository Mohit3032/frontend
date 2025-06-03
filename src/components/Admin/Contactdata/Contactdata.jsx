import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import styles from './Contactdata.module.scss';

const Contactdata = () => {
  const [contactdata, setContactdata] = useState([]); // State to store contact data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  // Fetch data from API
  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get('http://89.116.134.10/api/contact-info'); // Adjust the API URL if needed
        if (response.data.success) {
          setContactdata(response.data.data); // Store the contact data
        } else {
          setError('Failed to fetch contacts.');
        }
      } catch (err) {
        setError('Failed to fetch contacts.');
        console.error('Error fetching contacts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData(); // Call the function to fetch the data
  }, []);

  // If data is still loading or there's an error, show a message
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <table className={`order-table ${styles.tables}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contactdata.map((contact, idx) => (
            <tr key={idx}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.mobile}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contactdata;
