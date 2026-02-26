import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('user1@example.com');
    const [password, setPassword] = useState('password123');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://task-api-eight-flax.vercel.app/api/login', {
                email,
                password
            });
            
            if (res.data.token) {
                // ১. টোকেন লোকাল স্টোরেজে রাখা (যাতে পেজ রিফ্রেশ করলে লগআউট না হয়ে যায়)
                localStorage.setItem('token', res.data.token);
                // ২. কন্টেক্সট আপডেট করা
                setUser(res.data);
                // ৩. ড্যাশবোর্ডে পাঠানো
                navigate('/dashboard');
            }
        } catch (error) {
            alert("Login Failed!" ,error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleLogin} className="p-10 shadow-xl rounded-2xl bg-white border">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <input 
                    type="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 mb-4 w-full rounded" 
                />
                <input 
                    type="password" value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 mb-4 w-full rounded" 
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
            </form>
        </div>
    );
};

export default Login;
