
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FiSearch, FiBell, FiPlus, FiVideo, FiArrowUpRight, FiMoreHorizontal, FiMail, FiCheckSquare } from 'react-icons/fi';
import { AuthContext } from '../context/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]); // সরাসরি অ্যারে রাখার জন্য
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://task-api-eight-flax.vercel.app/api/products')
            .then(res => {
                // যেহেতু API সরাসরি [ {...}, {...} ] পাঠাচ্ছে
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Fetch Error:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div className="h-screen flex items-center justify-center bg-[#F8FAFC]">
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 border-4 border-[#114D43] border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 font-bold text-[#114D43]">Loading Dynamic Data...</p>
            </div>
        </div>
    );

    return (
        <div className="bg-[#F8FAFC] min-h-screen p-4 md:p-8 font-sans">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="relative flex-1 max-w-md">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search product..." className="w-full bg-white border border-gray-100 rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-1 ring-[#114D43]" />
                </div>
                <div className="flex items-center gap-6">
                    <FiMail className="text-gray-400 cursor-pointer text-xl" />
                    <FiBell className="text-gray-400 cursor-pointer text-xl" />
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="text-sm font-bold text-gray-900 leading-none">
                                {user?.name ||user?.displayName || "Admin User"}
                            </p>
                            <p className="text-[10px] text-gray-400 font-medium mt-1">
                                {user?.role || "Manager"} Panel
                            </p>
                        </div>
                        <img 
                        src={user?.photoURL || user?.avatar || "https://i.pravatar.cc/150?u=tm"} 
                        className="w-10 h-10 rounded-full border border-gray-200 shadow-sm" alt="avatar" />
                    </div>
                </div>
            </header>

            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Product Dashboard</h1>
                <p className="text-gray-400 text-sm font-medium">Real-time data from your product API.</p>
            </div>

            {/* --- Row 1: Stat Cards (Dynamic calculation from API) --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-[#1E6B52] text-white p-7 rounded-[32px] shadow-lg">
                    <div className="flex justify-between items-start mb-6">
                        <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">Total Items</p>
                        <div className="p-1.5 bg-white/20 rounded-full"><FiArrowUpRight /></div>
                    </div>
                    {/* অ্যারের লেন্থ থেকে টোটাল সংখ্যা আসছে */}
                    <h2 className="text-5xl font-bold mb-4 tracking-tighter">{products.length}</h2>
                    <p className="text-[10px] font-bold bg-white/20 inline-block px-2.5 py-1.5 rounded-lg">Items in API</p>
                </div>

                {/* API থেকে আসা sales বা price ব্যবহার করে অন্য কার্ডগুলো */}
                <StatCard label="Total Sales" value={products.reduce((acc, curr) => acc + curr.sales, 0)} change="Global" />
                <StatCard label="Avg Price" value={`$${(products.reduce((acc, curr) => acc + curr.price, 0) / products.length).toFixed(2)}`} change="Market" />
                <StatCard label="Enterprise Only" value={products.filter(p => p.name.includes("Enterprise")).length} change="Priority" noTrend />
            </div>

            {/* --- Lower Content Grid (Bottom Aligned) --- */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">

                {/* Left Side */}
                <div className="lg:col-span-3 flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* <div className="md:col-span-2 bg-white p-8 rounded-[32px] border border-gray-50 shadow-sm">
                            <h3 className="font-bold text-gray-900 uppercase text-[10px] tracking-widest mb-8">Sales Analytics</h3>
                            <div className="flex items-end justify-between h-40 px-2">
                         
                                {products.map((p, i) => (
                                    <div key={i} className="w-10 rounded-full bg-gray-50 relative group">
                                        <div style={{ height: `${(p.sales / 600) * 100}%` }} className={`w-full rounded-full transition-all duration-1000 ${i === 1 ? 'bg-[#114D43]' : 'bg-green-100 group-hover:bg-green-200'}`}></div>
                                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-black text-white text-[8px] px-1 rounded transition-all">{p.sales}</span>
                                    </div>
                                ))}
                            </div>
                        </div> */}

                        

    <div className="md:col-span-2 bg-white p-8 rounded-[40px] border border-gray-50 shadow-sm">
  <h3 className="font-bold text-gray-900 text-lg mb-10">Project Analytics</h3>
  
  {/* বারগুলো দেখার জন্য এই div-এ h-48 বা h-64 থাকা বাধ্যতামূলক */}
  <div className="flex items-end justify-between h-48 px-2 gap-3">
    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => {
      // API ডেটা না থাকলে ডিফল্ট উচ্চতা (যেমন: ৪০, ৬০, ৮০) দিয়ে চেক করছি
      const dataPoint = products[index] || { sales: (index + 2) * 80 }; 
      
      // sales value যদি ০ হয় তবে বার দেখা যাবে না, তাই Math.max ব্যবহার করা হয়েছে
      const heightPercent = Math.max((dataPoint.sales / 600) * 100, 15);
      
      const isSolid = index >= 1 && index <= 3;
      const colors = ['', 'bg-[#1E7154]', 'bg-[#5DBF91]', 'bg-[#0E3B33]'];

      return (
        <div key={index} className="flex flex-col items-center h-full w-full max-w-[60px]">
          {/* এই কন্টেইনারটি বারের জন্য জায়গা তৈরি করে */}
          <div className="relative w-full h-full flex items-end justify-center">
            
            {/* Tuesday 74% Badge */}
            {index === 2 && (
              <div className="absolute -top-10 z-10 flex flex-col items-center">
                <div className="bg-white border border-gray-100 shadow-md px-2 py-0.5 rounded-md text-[10px] font-bold text-[#5DBF91]">74%</div>
                <div className="w-1.5 h-1.5 bg-white border-2 border-[#5DBF91] rounded-full -mt-0.5"></div>
              </div>
            )}

            {/* Actual Bar - w-full নিশ্চিত করে এটি দেখা যাচ্ছে */}
            <div 
              style={{ height: `${heightPercent}%` }}
              className={`w-full rounded-full transition-all duration-700 ${
                isSolid ? colors[index] : 'bg-striped border-2 border-dashed border-gray-200'
              }`}
            ></div>
          </div>
          
          <span className={`mt-4 text-xs font-bold ${index === 2 ? 'text-gray-900' : 'text-gray-300'}`}>
            {day}
          </span>
        </div>
      );
    })}
  </div>
</div>



                        <div className="bg-white p-7 rounded-[32px] border border-gray-50 shadow-sm flex flex-col">
                            <h3 className="font-bold text-gray-900 mb-6 uppercase text-[10px] tracking-widest">Reminders</h3>
                            <div className="bg-[#F8FAFC] p-6 rounded-[28px] flex-1 border border-slate-50 flex flex-col justify-between">
                                <h4 className="font-bold text-[#114D43] text-sm leading-tight">Sync API Data with Store</h4>
                                <button className="bg-[#114D43] text-white w-full py-3 rounded-2xl text-[11px] font-bold mt-4">Refresh Data</button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                        <div className="bg-white p-8 rounded-[32px] border border-gray-50 shadow-sm">
                            <h3 className="font-bold text-gray-900 uppercase text-[10px] tracking-widest mb-8">Team Active Status</h3>
                            <div className="space-y-6">
                                <TeamRow name="Alexandra" role="Product Manager" status="Active" />
                                <TeamRow name="Edwin" role="Developer" status="Busy" color="orange" />
                                <TeamRow name="Isaac" role="QA Engineer" status="Offline" color="red" />
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-[32px] border border-gray-50 shadow-sm flex flex-col items-center justify-center">
                            <h3 className="font-bold text-gray-900 uppercase text-[10px] tracking-widest self-start mb-6">Target Progress</h3>
                            <div className="relative">
                                <svg className="w-32 h-32 transform -rotate-90">
                                    <circle cx="64" cy="64" r="54" stroke="#F1F5F9" strokeWidth="10" fill="transparent" />
                                    <circle cx="64" cy="64" r="54" stroke="#114D43" strokeWidth="10" fill="transparent" strokeDasharray="339" strokeDashoffset="120" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <p className="text-2xl font-black text-gray-900">65%</p>
                                    <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">Target</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Dynamic Project/Plan List */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                    <div className="bg-white p-8 rounded-[32px] border border-gray-50 shadow-sm flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="font-bold text-gray-900 uppercase text-[10px] tracking-widest">Plan List</h3>
                            <button className="p-1.5 bg-gray-50 rounded-xl text-gray-400 border border-gray-100"><FiPlus /></button>
                        </div>
                        <div className="space-y-7 flex-1">
                            {products.map((item) => (
                                <ProjectRow
                                    key={item.id}
                                    name={item.name}
                                    date={`Price: $${item.price}`}
                                    color={item.category === 'subscription' ? '#1E6B52' : '#FACC15'}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#051A18] p-7 rounded-[32px] h-60 shrink-0 shadow-2xl relative overflow-hidden">
                        <p className="text-gray-500 text-[10px] font-bold mb-4 uppercase tracking-[3px]">Total Revenue</p>
                        <h2 className="text-white text-3xl font-black mb-8 tracking-tighter">
                            ${products.reduce((acc, curr) => acc + (curr.price * curr.sales), 0).toLocaleString()}
                        </h2>
                        <div className="flex gap-3">
                            <div className="w-8 h-8 bg-white/10 rounded-full border border-white/20 flex items-center justify-center text-white text-xs">A</div>
                            <div className="w-8 h-8 bg-white/10 rounded-full border border-white/20 flex items-center justify-center text-white text-xs">B</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Components
const StatCard = ({ label, value, change, noTrend }) => (
    <div className="bg-white p-7 rounded-[32px] border border-gray-50 shadow-sm transition-transform hover:scale-[1.02]">
        <div className="flex justify-between items-start mb-6">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
            <div className="p-1.5 bg-gray-50 rounded-full text-gray-300 border border-gray-100"><FiArrowUpRight /></div>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900 tracking-tighter">{value}</h2>
        <div className="text-[10px] font-bold px-3 py-1.5 bg-gray-50 rounded-lg inline-block text-gray-500">
            {noTrend ? change : `↑ ${change} Active`}
        </div>
    </div>
);

const ProjectRow = ({ name, date, color }) => (
    <div className="flex items-center gap-4 group cursor-pointer">
        <div style={{ color: color }} className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-50 shadow-sm transition-all group-hover:bg-[#114D43] group-hover:text-white">
            <FiCheckSquare className="text-lg" />
        </div>
        <div className="overflow-hidden">
            <p className="text-[13px] font-bold text-gray-800 leading-tight truncate">{name}</p>
            <p className="text-[10px] text-gray-400 mt-1 font-medium">{date}</p>
        </div>
    </div>
);

const TeamRow = ({ name, role, status, color }) => (
    <div className="flex items-center justify-between p-1 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer">
        <div className="flex items-center gap-3">
            <img src={`https://ui-avatars.com/api/?name=${name}&background=random`} className="w-9 h-9 rounded-full shadow-sm" alt="team" />
            <div>
                <p className="text-sm font-bold text-gray-800 tracking-tight">{name}</p>
                <p className="text-[9px] text-gray-400 font-medium">{role}</p>
            </div>
        </div>
        <span className={`text-[8px] font-black uppercase px-2 py-1 rounded border ${color === 'orange' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                color === 'red' ? 'bg-red-50 text-red-600 border-red-100' :
                    'bg-green-50 text-[#114D43] border-green-100'
            }`}>{status}</span>
    </div>
);

export default Dashboard;