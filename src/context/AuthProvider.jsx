// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const authInfo = {
//     user,
//     setUser,

//   };

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;



import React, { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // অ্যাপ লোড হওয়ার সময় চেক করার জন্য

  // ১. পেজ লোড হওয়ার সময় চেক করবে আগে থেকে লগইন করা আছে কি না
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // ২. লগইন ফাংশন (Login.jsx থেকে এটি কল করবে)
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

  // ৩. লগআউট ফাংশন (Sidebar বা Navbar এ ব্যবহার করবে)
  const logOut = () => {
   localStorage.removeItem("user");
    localStorage.removeItem("token");
    
    // state ক্লিয়ার করো
    setUser(null);

    // চাইলে একটি ছোট সাকসেস মেসেজ দিতে পারো
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