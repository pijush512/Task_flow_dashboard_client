// import React from 'react'
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//   const token = localStorage.getItem('token');

//   if (token) {
//         return children;
//     }

//   return <Navigate to="/auth/login" replace />;
// }

// export default PrivateRoute


import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // ১. যতক্ষণ AuthProvider চেক করছে ইউজার লগইন কি না, ততক্ষণ একটি লোডার দেখাবে
    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-[#114D43] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // ২. ইউজার লগইন থাকলে চিলড্রেন দেখাবে, না থাকলে লগইন পেজে পাঠাবে
    // এখানে state-এ বর্তমান লোকেশন সেভ করে রাখা যায় যাতে লগইনের পর ইউজার আবার এখানেই ফিরে আসে
    if (user || localStorage.getItem('token')) {
        return children;
    }

    return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default PrivateRoute;