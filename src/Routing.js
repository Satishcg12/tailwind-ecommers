import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotificationPage from './pages/NotificationPage'
import SettingPage from './pages/SettingPage'
const routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/notification' element={<NotificationPage/>}/>
                <Route path='/settings' element={<SettingPage/>}/>
            </Routes>
        </div>
    )
}

export default routing
