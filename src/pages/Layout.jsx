import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from "../components/HeaderComponent";

const Layout = () => {
  return (
    <div>
      <HeaderComponent/>
      <Outlet/>
  </div>
  )
}

export default Layout