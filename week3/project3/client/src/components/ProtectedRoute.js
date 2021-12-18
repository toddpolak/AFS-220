import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
    const { path, redirectTo, component: C, token, ...rest } = props

    console.log('redirectTo: ', redirectTo)

    return token ?
        <Outlet path={path} render={() => <C {...rest}/> } /> :
        <Navigate to={redirectTo} />
}
