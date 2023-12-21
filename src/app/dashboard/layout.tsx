import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import SideBar from '../components/SideBar'


const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Header/>
    <div className='flex'>
    <SideBar/>
    <div className='p-4'>
    {children}
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default DashboardLayout