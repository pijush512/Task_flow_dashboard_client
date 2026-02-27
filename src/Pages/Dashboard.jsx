// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//     const [tasks, setTasks] = useState([]); // API থেকে আসা ডেটা এখানে থাকবে
//     const [loading, setLoading] = useState(true); // লোডিং চেক করার জন্য

//     // useEffect(() => {
//     //     // ১. API থেকে ডেটা ফেচ করা
//     //     const fetchTasks = async () => {
//     //         try {
//     //             const response = await axios.get('https://task-api-eight-flax.vercel.app/');
//     //             // ২. সার্ভার থেকে আসা ডেটা স্টেট-এ সেট করা
//     //             console.log("API Response:", response.data);
//     //             setTasks(response.data); 
//     //             setLoading(false);
//     //         } catch (error) {
//     //             console.error("ডেটা আনতে সমস্যা হয়েছে:", error);
//     //             setLoading(false);
//     //         }
//     //     };

//     //     fetchTasks();
//     // }, []);

//     useEffect(() => {
//     const fetchTasks = async () => {
//         try {
//             // ১. সঠিক এন্ডপয়েন্টে কল দিন
//             const response = await axios.get('https://task-api-eight-flax.vercel.app/api/products');
            
//             console.log("Actual Tasks:", response.data);

//             // ২. সার্ভার থেকে আসা ডেটা অ্যারে কিনা চেক করে সেট করুন
//             if (Array.isArray(response.data)) {
//                 setTasks(response.data);
//             } else {
//                 // যদি অবজেক্টের ভেতর থাকে (যেমন: response.data.tasks)
//                 setTasks(response.data.tasks || []);
//             }
//             setLoading(false);
//         } catch (error) {
//             console.error("ডেটা আনতে সমস্যা হয়েছে:", error);
//             setTasks([]); // এরর হলে খালি অ্যারে সেট করুন যাতে ক্রাশ না করে
//             setLoading(false);
//         }
//     };
//     fetchTasks();
// }, []);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
//             </div>
//         );
//     }

//     return (
//         <div className="bg-[#f8fafc] min-h-screen p-6">
//             <div className="max-w-7xl mx-auto">
//                 <header className="mb-8">
//                     <h1 className="text-2xl font-bold text-slate-800">Project Tasks</h1>
//                     <p className="text-slate-500">Total {tasks.length} dynamic tasks fetched from API</p>
//                 </header>

//                 {/* ৩. লুপ চালিয়ে ডাইনামিক ডেটা কার্ডে দেখানো */}
               



//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//     {tasks.map((item) => (
//         <div key={item.id} className="bg-white p-6 rounded-[24px] shadow-sm border border-slate-100 hover:shadow-md transition-all">
//             <div className="flex justify-between items-start mb-4">
//                 {/* Category badge */}
//                 <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-1 rounded-md uppercase">
//                     {item.category}
//                 </span>
//                 <span className="text-slate-300 font-bold text-xs">#{item.id}</span>
//             </div>

//             {/* Name and Price */}
//             <h3 className="text-lg font-bold text-slate-800 mb-1">{item.name}</h3>
//             <p className="text-2xl font-black text-indigo-600 mb-4">${item.price}</p>

//             {/* Sales Stats */}
//             <div className="flex items-center justify-between pt-4 border-t border-slate-50">
//                 <div className="flex flex-col">
//                     <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">Total Sales</span>
//                     <span className="text-sm font-bold text-slate-700">{item.sales} units</span>
//                 </div>
                
//                 {/* Avatar with first letter of Name */}
//                 <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-bold">
//                     {item.name?.charAt(0)}
//                 </div>
//             </div>
//         </div>
//     ))}
// </div>






//             </div>
//         </div>
//     );
// };

// export default Dashboard;





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiTrendingUp, FiBox, FiDollarSign, FiActivity } from 'react-icons/fi'; // npm install react-icons

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://task-api-eight-flax.vercel.app/api/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Fetch error:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return (
        <div className="flex h-screen w-full items-center justify-center bg-[#F8FAFC]">
            <div className="relative flex h-20 w-20">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex h-20 w-20 rounded-full bg-indigo-600"></span>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#F1F5F9] font-sans text-[#1E293B] antialiased">
            <div className="mx-auto max-w-[1440px] px-6 py-10 md:px-12">
                
                {/* Header Section */}
                <header className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
                            Revenue <span className="text-indigo-600">Insights</span>
                        </h1>
                        <p className="mt-2 text-lg font-medium text-slate-500">
                            Welcome back! Here's what's happening with your plans today.
                        </p>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-white p-2 shadow-sm border border-slate-200">
                        <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                            <FiActivity size={24} />
                        </div>
                        <div className="pr-4">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">System Status</p>
                            <p className="text-sm font-bold text-slate-700">Operational</p>
                        </div>
                    </div>
                </header>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {products.map((item) => (
                        <div key={item.id} className="group relative flex flex-col overflow-hidden rounded-[32px] bg-white p-8 border border-transparent shadow-sm transition-all duration-500 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-100">
                            
                            {/* Decorative Background Circle */}
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-50 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-150"></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 transition-transform duration-500 group-hover:rotate-12`}>
                                        <span className="text-xl font-bold">{item.name?.charAt(0)}</span>
                                    </div>
                                    <span className="rounded-full bg-slate-100 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                                        {item.category}
                                    </span>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold tracking-tight text-slate-800 group-hover:text-indigo-600 transition-colors">
                                        {item.name}
                                    </h3>
                                    <div className="mt-2 flex items-baseline gap-1">
                                        <span className="text-3xl font-black text-slate-900">${item.price}</span>
                                        <span className="text-sm font-semibold text-slate-400">/mo</span>
                                    </div>
                                </div>

                                <div className="mt-auto space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-slate-500">
                                            <FiTrendingUp className="text-green-500" />
                                            <span className="text-xs font-bold uppercase tracking-tighter">Sales</span>
                                        </div>
                                        <span className="text-sm font-black text-slate-700">{item.sales}</span>
                                    </div>
                                    
                                    {/* Custom Progress Bar */}
                                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                                        <div 
                                            className="h-full bg-indigo-600 transition-all duration-1000" 
                                            style={{ width: `${(item.sales / 1000) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <button className="mt-8 w-full rounded-2xl bg-slate-900 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-200">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;