import React, { useState, useEffect } from 'react';
import styles from './Passwordmodal.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Passwordmodal = ({ onLoginSuccess }) => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [passModalOpen, setPassModalOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload on submit

    // Prevent multiple submissions
    if (isSubmitting) return;

    setIsSubmitting(true);

    if (adminId === '123' && password === '123') {
      toast.success('Login successful!');
      setTimeout(() => {
        setPassModalOpen(false);
        setIsSubmitting(false);
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      }, 1000);
    } else {
      toast.error('Invalid credentials. Please try again.');
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = passModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [passModalOpen]);

  if (!passModalOpen) return null;

  return (
    <>
      <div className={styles["custom-modal-overlay"]}>
        <div className={styles["custom-modal"]}>
          <h2>Admin Login</h2>
          <form className={styles["password-form"]} onSubmit={handleLogin}>
            <div>
              <label htmlFor="adminId">Admin ID:</label>
              <input
                type="text"
                id="adminId"
                autoComplete="username"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                disabled={isSubmitting}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isSubmitting}
                required
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Passwordmodal;
