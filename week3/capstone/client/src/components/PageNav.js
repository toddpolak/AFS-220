import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Food from '../pages/Food'
import Account from '../pages/Account'
import Detail from '../pages/Detail'

export default function PageNav() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/food' element={<Food />} />
            <Route path='/login' element={<Account />} />
            <Route path='/detail' element={<Detail />} />
        </Routes>  
    )
}
