import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/auth/login');
    };

    return (
        <nav className="bg-white border-b border-gray-100 py-4 px-8 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">T</span>
                </div>
                <Link to="/" className="text-xl font-bold text-slate-800 tracking-tight">TaskFlow</Link>
            </div>

            <div className="flex items-center gap-6">
                <Link to="/" className="text-slate-600 hover:text-indigo-600 font-medium transition">Home</Link>
                {token ? (
                    <>
                        <Link to="/dashboard" className="text-slate-600 hover:text-indigo-600 font-medium transition">Dashboard</Link>
                        <button 
                            onClick={handleLogout}
                            className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <Link 
                        to="/auth/login" 
                        className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
                    >
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;