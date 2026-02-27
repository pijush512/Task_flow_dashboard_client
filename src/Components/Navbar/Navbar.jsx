import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
const Navbar = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut(); 
        navigate('/auth/login');
    };

    return (
        <nav className="bg-white border-b border-gray-100 py-4 shadow-sm sticky top-0 z-50">
            <div className='flex justify-between items-center w-11/12 mx-auto'>
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-[#114D43] rounded-xl flex items-center justify-center shadow-lg shadow-green-900/10">
                        <span className="text-white font-black text-xl">T</span>
                    </div>
                    <div className="text-xl font-black text-slate-800 tracking-tighter">
                        Task<span className="text-[#114D43]">Flow</span>
                    </div>
                </Link>
                <div className="flex items-center gap-4 md:gap-8">
                    <Link to="/" className="text-slate-500 hover:text-[#114D43] font-semibold text-sm transition-all">
                        Home
                    </Link>

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

