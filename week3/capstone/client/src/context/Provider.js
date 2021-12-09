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
        cartId: localStorage.getItem('cartId') || '',
        cartItems: [],
        //cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
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
                getUserCart()
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
                getUserCart()
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('cartId')
        //localStorage.removeItem('cartItems')
        setUserState({
            user: {},
            token: '',
            cartId: '',
            cartItems: []
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

    function getUserCart() {
        userAxios.get('/api/cart')
            .then(res => {
                localStorage.setItem('cartId', res.data._id)

                setUserState(prevState => ({
                    ...prevState,
                    cartId: res.data._id
                }))
                getCartItems(res.data._id)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getCartItems(id) {
        userAxios.get(`/api/cart/items/${id}`)
            .then(res => {
                //localStorage.setItem('cartItems', JSON.stringify(res.data))

                setUserState(prevState => ({
                    ...prevState,
                    cartItems: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addToCart(item) {
        const cartId = localStorage.getItem('cartId')

        userAxios.post(`/api/cart/add/${cartId}`, item)
            .then(res => {

                //localStorage.setItem('cartItems', JSON.stringify(res.data))

                setUserState(prevState => ({
                    ...prevState,
                    cartItems: [...prevState.cartItems, res.data]
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
                resetAuthErr,
                addToCart
            }}>
            { props.children }
        </Context.Provider>
    )
}
