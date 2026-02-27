// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const navigate = useNavigate();
//     const token = localStorage.getItem('token');

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         navigate('/auth/login');
//     };

//     return (
//         <nav className="bg-white border-b border-gray-100 py-4 shadow-sm">
//             <div className='flex justify-between items-center w-11/12 mx-auto'>
//                 <div className="flex items-center gap-2">
//                     <div className="w-8 h-8 bg-[oklch(39.3%_0.095_152.535)] rounded-lg flex items-center justify-center">
//                         <span className="text-white font-bold text-xl">T</span>
//                     </div>
//                     <Link to="/" className="text-xl font-bold text-slate-800 tracking-tight">TaskFlow</Link>
//                 </div>

//                 <div className="flex items-center gap-6">
//                     <Link to="/" className="text-slate-600 hover:text-indigo-600 font-medium transition">Home</Link>
//                     {token ? (
//                         <>
//                             <Link to="/dashboard" className="text-slate-600 hover:text-indigo-600 font-medium transition">Dashboard</Link>
//                             <button
//                                 onClick={handleLogout}
//                                 className="bg-indigo-500 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
//                             >
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <Link
//                             to="/auth/login"
//                             className="bg-[oklch(39.3%_0.095_152.535)] text-white px-5 py-2 rounded-full font-medium hover:bg-[#0d3b33] transition"
//                         >
//                             Login
//                         </Link>
//                     )}
//                 </div>
//             </div>



//         </nav>
//     );
// };

// export default Navbar;

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider'; // তোমার ফোল্ডার পাথ অনুযায়ী এটি চেক করে নিও

const Navbar = () => {
    const navigate = useNavigate();
    
    // AuthContext থেকে প্রয়োজনীয় ডেটা এবং ফাংশন নেওয়া
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        // Context এর logout ফাংশন কল করা (যা localStorage এবং state দুইটাই ক্লিয়ার করবে)
        logOut(); 
        navigate('/auth/login');
    };

    return (
        <nav className="bg-white border-b border-gray-100 py-4 shadow-sm sticky top-0 z-50">
            <div className='flex justify-between items-center w-11/12 mx-auto'>
                
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-[#114D43] rounded-xl flex items-center justify-center shadow-lg shadow-green-900/10">
                        <span className="text-white font-black text-xl">T</span>
                    </div>
                    <Link to="/" className="text-xl font-black text-slate-800 tracking-tighter">
                        Task<span className="text-[#114D43]">Flow</span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-4 md:gap-8">
                    <Link to="/" className="text-slate-500 hover:text-[#114D43] font-semibold text-sm transition-all">
                        Home
                    </Link>
                    
                    {/* ইউজার লগইন থাকলে ড্যাশবোর্ড এবং লগআউট বাটন দেখাবে */}
                    {user ? (
                        <>
                            <Link to="/dashboard" className="text-slate-500 hover:text-[#114D43] font-semibold text-sm transition-all">
                                Dashboard
                            </Link>
                            <button
                                onClick={handleLogOut}
                                className="bg-red-50 text-red-600 border border-red-100 px-5 py-2 rounded-full font-bold text-xs hover:bg-red-600 hover:text-white transition-all active:scale-95"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        /* ইউজার লগইন না থাকলে লগইন বাটন দেখাবে */
                        <Link
                            to="/auth/login"
                            className="bg-[#114D43] text-white px-6 py-2.5 rounded-full font-bold text-xs hover:bg-[#0d3b33] transition-all shadow-md active:scale-95"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

