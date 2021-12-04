import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Context = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function Provider(props) {
    const initState = { 
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        cartItems: localStorage.getItem('cartItems') || [],
        errMsg: ''
    }
    
    const initMenuState = {
        food: []
    }

    const [userState, setUserState] = useState(initState)
    const [menuItems, setMenuItems] = useState(initMenuState)

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data

                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))

                setUserState(prevState => ({
                    ...prevState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data

                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))

                setUserState(prevState => ({
                    ...prevState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: ''
        })
    }

    function handleAuthErr(errMsg) {
        setUserState(prevState => ({
            ...prevState, 
            errMsg
        }))
    }

    function resetAuthErr() {
        setUserState(prevState => ({
            ...prevState, 
            errMsg: ''
        }))
    }

    function getFood() {
        userAxios.get('/food')
        .then(res => {
            setMenuItems(prevState => ({
                ...prevState,
                food: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    useEffect(() => {
        getFood()
    }, [])

    return (
        <Context.Provider
            value={{
                ...userState,
                ...menuItems,
                signup,
                login,
                logout,
                resetAuthErr
            }}>
            { props.children }
        </Context.Provider>
    )
}
