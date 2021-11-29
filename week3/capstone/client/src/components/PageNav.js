import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Account from '../pages/Account'

export default function PageNav() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Account />} />
        </Routes>  
    )
}
