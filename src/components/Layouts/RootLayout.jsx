import React from 'react'
import NavBar from '../NavBar'
import NavHeader from '../NavHeader'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <>
            <NavBar />
            <NavHeader />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout