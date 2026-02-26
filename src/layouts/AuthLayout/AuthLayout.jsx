import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

const AuthLayout = () => {
  return (
    <div>
      <header><Navbar></Navbar></header>
      <main><Outlet></Outlet></main>
      <footer><Footer></Footer></footer>
    </div>
  )
}

export default AuthLayout
