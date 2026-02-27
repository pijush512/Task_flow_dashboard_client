
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight, FiEye, FiEyeOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const Login = () => {
    // const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('user1@example.com');
    const [password, setPassword] = useState('password123');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     try {
    //         const res = await axios.post('https://task-api-eight-flax.vercel.app/api/login', {
    //             email, password
    //         });
    //         if (res.data.token) {
    //             localStorage.setItem('token', res.data.token);
    //             setUser(res.data);
    //             navigate('/dashboard');
    //         }
    //     } catch (error) {
    //         alert("Login Failed!", error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };


    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post('https://task-api-eight-flax.vercel.app/api/login', {
                email, password
            });

            // যদি রেসপন্সে টোকেন থাকে
            if (res.data.token) {
                // login ফাংশনটি কল করো যা localStorage এবং Context স্টেট দুইটাই আপডেট করবে
                login(res.data);
                navigate('/dashboard');
            }
        } catch (error) {
            // সুন্দর এরর মেসেজ (চাইলে এখানে alert এর বদলে toast ব্যবহার করতে পারো)
            console.error("Login Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid email or password! Please check your credentials.',
                confirmButtonColor: '#114D43', // তোমার থিম কালার
                padding: '2rem',
                customClass: {
                    popup: 'rounded-[32px]',
                    confirmButton: 'rounded-xl px-10'
                }
            });
        }
        finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 font-sans">
            {/* মেইন কার্ডের ম্যাক্সিমাম উইডথ কমিয়ে ৩২০-৩৮০ পিক্সেলের মধ্যে আনা হয়েছে */}
            <div className="w-full max-w-[380px] bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/40 border border-gray-50">

                {/* Compact Logo */}
                <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-[#114D43] rounded-xl flex items-center justify-center shadow-lg shadow-green-900/10 rotate-6">
                        <span className="text-white text-2xl font-black -rotate-6">T</span>
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">Login</h2>
                    <p className="text-gray-400 text-[13px] mt-1 font-medium">Access your analytics dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email Input - Height reduced for compactness */}
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email</label>
                        <div className="relative">
                            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-1 ring-[#114D43]/20 focus:bg-white transition-all font-semibold text-gray-700 placeholder:text-gray-300"
                                placeholder="Email address"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center ml-1">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Password</label>
                            <span className="text-[10px] font-bold text-[#114D43] cursor-pointer hover:underline">Forgot?</span>
                        </div>
                        <div className="relative">
                            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-11 pr-11 text-sm focus:outline-none focus:ring-1 ring-[#114D43]/20 focus:bg-white transition-all font-semibold text-gray-700 placeholder:text-gray-300"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#114D43]"
                            >
                                {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                            </button>
                        </div>
                    </div>

                    {/* Login Button - More compact padding */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3.5 mt-2 rounded-xl font-bold text-[14px] shadow-lg shadow-green-900/10 flex items-center justify-center gap-2 transition-all active:scale-[0.97] group ${loading ? 'bg-[#114D43]/70 cursor-not-allowed' : 'bg-[#114D43] text-white hover:bg-[#0d3b33]'
                            }`}
                    >
                        {loading ? (
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            <>
                                Log In
                                <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                {/* Compact Demo Access */}
                <div className="mt-6 pt-6 border-t border-gray-50 text-center">
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-300 mb-2">Test Credentials</p>
                    <div className="bg-[#F8FAFC] px-3 py-2 rounded-lg border border-gray-100 inline-block">
                        <code className="text-[#114D43] font-bold text-[11px]">user1@example.com / password123</code>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;