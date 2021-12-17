import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './components/CartPage'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import NotificationPage from './components/NotificationPage'
import SettingPage from './components/SettingPage'
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
