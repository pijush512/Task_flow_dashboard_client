import React from 'react'
import { Outlet } from 'react-router-dom'

const DachboardLayout = () => {
  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <aside className="w-64 bg-white border-r hidden lg:block">{/* Sidebar Content */}</aside>
      <main className="flex-1 overflow-auto p-8">
        <Outlet />
      </main>
    </div>
  )
}

export default DachboardLayout
