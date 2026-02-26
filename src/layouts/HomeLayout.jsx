import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const HomeLayout = () => {
  return (
    <div>
      <header><Navbar></Navbar></header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer><Footer></Footer></footer>
    </div>
  )
}

export default HomeLayout
