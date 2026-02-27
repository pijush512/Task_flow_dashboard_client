import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'

const DachboardLayout = () => {
  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <aside className="w-64 bg-white  hidden lg:block">
        <Sidebar></Sidebar>
      </aside>
      <main className="flex-1 overflow-auto p-8">
        <Outlet />
      </main>
    </div>
  )
}

export default DachboardLayout
