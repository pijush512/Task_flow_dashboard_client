import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { FiMenu, FiX } from 'react-icons/fi'

const DachboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white transition-transform duration-300 transform 
        lg:relative lg:translate-x-0 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="lg:hidden absolute right-4 top-4">
          <button 
            onClick={() => setIsSidebarOpen(false)} 
            className="p-2 text-gray-500 hover:text-red-500 bg-gray-50 rounded-full"
          >
            <FiX size={20} />
          </button>
        </div>

        <Sidebar />
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-100 sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#114D43] rounded-full flex items-center justify-center text-white font-bold">D</div>
            <span className="font-bold text-gray-900 tracking-tight">Donezo</span>
          </div>
          
          <button 
            onClick={() => setIsSidebarOpen(true)} 
            className="p-2 text-gray-600 bg-gray-100 rounded-xl"
          >
            <FiMenu size={24} />
          </button>
        </header>
        <main className="flex-1 overflow-auto p-4 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DachboardLayout;