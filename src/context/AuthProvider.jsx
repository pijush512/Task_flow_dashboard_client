import React, { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userData.token);
    setUser(userData);
    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: `Welcome back, ${userData.name || 'User'}!`,
      timer: 2000,
      showConfirmButton: false,
      padding: '2em',
      color: '#114D43',
      background: '#fff',
    });
  };

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    Swal.fire({
      icon: 'info',
      title: 'Logged Out',
      text: 'You have been logged out safely.',
      timer: 2000,
      showConfirmButton: false,
      customClass: {
        popup: 'rounded-[32px]',
      }
    });
  };

  const authInfo = {
    user,
    setUser,
    login,
    logOut,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;