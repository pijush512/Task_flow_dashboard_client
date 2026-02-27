import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiGrid, FiCheckSquare, FiCalendar, FiBarChart2, FiUsers, FiSettings, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthProvider';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut(); 
        navigate('/auth/login');
    }


    const isActive = (path) => location.pathname === path;

    const menuItems = [
        { name: 'Dashboard', icon: <FiGrid />, path: '/dashboard' },
        { name: 'Tasks', icon: <FiCheckSquare />, path: '#', badge: '12+' },
        { name: 'Calendar', icon: <FiCalendar />, path: '#' },
        { name: 'Analytics', icon: <FiBarChart2 />, path: '#' },
        { name: 'Team', icon: <FiUsers />, path: '#' },
    ];

    return (
        <aside className="w-[280px] bg-white border-r border-gray-100 hidden lg:flex flex-col p-8 h-screen sticky top-0">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-10">
                <div className="w-8 h-8 bg-[#114D43] rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                </div>
                <span className="font-bold text-xl text-gray-900 tracking-tight">Donezo</span>
            </div>

            {/* Menu */}
            <div className="mb-8">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Menu</p>
                <nav className="space-y-1">
                    {menuItems.map((item) => (
                        <Link key={item.name} to={item.path} 
                            className={`flex items-center justify-between p-3 rounded-xl font-semibold transition-all ${
                                isActive(item.path) ? 'bg-[#114D43] text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'
                            }`}>
                            <div className="flex items-center gap-3">
                                <span className="text-lg">{item.icon}</span>
                                <span className="text-sm">{item.name}</span>
                            </div>
                            {item.badge && <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-lg font-bold">{item.badge}</span>}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* General */}
            <div className="flex-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">General</p>
                <nav className="space-y-1">
                    <div className="flex items-center gap-3 p-3 text-gray-500 hover:bg-gray-50 rounded-xl font-semibold cursor-pointer">
                        <FiSettings className="text-lg" /> <span className="text-sm">Settings</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 text-gray-500 hover:bg-gray-50 rounded-xl font-semibold cursor-pointer">
                        <FiHelpCircle className="text-lg" /> <span className="text-sm">Help</span>
                    </div>
                    <button onClick={handleLogOut} className="w-full flex items-center gap-3 p-3 text-gray-500 hover:bg-red-50 hover:text-red-500 rounded-xl font-semibold mt-2 transition-all">
                        <FiLogOut className="text-lg" /> <span className="text-sm">Logout</span>
                    </button>
                </nav>
            </div>

            {/* Bottom Card */}
            <div className="bg-[#0A2D28] p-5 rounded-[24px] relative overflow-hidden">
                <p className="text-white text-sm font-bold leading-snug relative z-10 mb-3">Download our<br/>Mobile App</p>
                <p className="text-gray-400 text-[10px] mb-4 relative z-10">Get easy in another way</p>
                <button className="bg-[#114D43] text-white text-[11px] font-bold py-2 rounded-xl w-full relative z-10 hover:bg-green-800 transition-colors">Download</button>
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            </div>
        </aside>
    );
};

export default Sidebar;




