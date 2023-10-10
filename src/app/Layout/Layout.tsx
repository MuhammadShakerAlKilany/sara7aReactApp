import React from 'react'
import {Outlet} from "react-router-dom"
import Header from './Header/Header'
import Footer from "./Footer/Footer"
export default function Layout() {
  return (
  <main className='bg-secondary'>
<Header/>
    <div className="App  container">
  <Outlet />
    </div>
    <Footer />
  </main>
  )
}
