import React, { useState, useEffect } from 'react';
import styles from './Passwordmodal.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Passwordmodal = ({ onLoginSuccess }) => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [passModalOpen, setPassModalOpen] = useState(true);  // Modal state

  // Handle the login logic
  const handleLogin = () => {
    if (adminId === '123' && password === '123') {
      toast.success('Login successful!');
      setTimeout(() => {
        setPassModalOpen(false);  // Close modal after 1 second
        if (onLoginSuccess) {
          onLoginSuccess();  // Notify parent about login success (optional)
        }
      }, 1000);
    } else {
      toast.error('Invalid credentials. Please try again.');
    }
  };

  // Set the overflow property when modal opens/closes
  useEffect(() => {
    document.body.style.overflow = passModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';  // Reset on unmount
    };
  }, [passModalOpen]);

  // If the modal is not open, don't render it
  if (!passModalOpen) return null;

  return (
    <>
      <div className={styles["custom-modal-overlay"]}>
        <div className={styles["custom-modal"]}>
          <h2>Admin Login</h2>
          <div className={styles["password-form"]}>
            <div>
              <label htmlFor="adminId">Admin ID:</label>
              <input
                type="text"
                id="adminId"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Passwordmodal;
