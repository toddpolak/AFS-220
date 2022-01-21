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
        errMsg: ''
    }
    
    const initMenuState = {
        food: [],
        drinks: []
    }

    const initCartState = {
        items: JSON.parse(localStorage.getItem('items')) || [],
        cartMsg: ''
    }

    const [userState, setUserState] = useState(initState)
    const [menuItems, setMenuItems] = useState(initMenuState)
    const [cartItems, setCartItems] = useState(initCartState)

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

    function login(credentials, state) {
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

    function getDrinks() {
        userAxios.get('/drinks')
        .then(res => {
            setMenuItems(prevState => ({
                ...prevState,
                drinks: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addToCart(item) {
        let existingEntries = JSON.parse(localStorage.getItem('items'))

        if(existingEntries == null) existingEntries = []

        existingEntries.push(item)
        localStorage.setItem('items', JSON.stringify(existingEntries))

        setCartItems(prevState => ({
            ...prevState, 
            items: [...prevState.items, item],
            cartMsg: `Added: ${item.item} to your cart.`
        }))
    }

    function deleteCartItem(item) {
        const existingEntries = JSON.parse(localStorage.getItem('items'))
        const idx = existingEntries.findIndex(curItem => {
            return curItem._id === item._id
        })
        existingEntries.splice(idx, 1)
        localStorage.setItem('items', JSON.stringify(existingEntries))

        const newEntries = JSON.parse(localStorage.getItem('items'))
        setCartItems(prevState => ({
            ...prevState, 
            items: newEntries,
            cartMsg: `Removed: ${item.item} from your cart.`
        }))
    }

    function resetCartMsg() {
        setCartItems(prevState => ({
            ...prevState, 
            cartMsg: ''
        }))
    }

    useEffect(() => {
        getFood()
        getDrinks()
    }, [])

    return (
        <Context.Provider
            value={{
                ...userState,
                ...menuItems,
                ...cartItems,
                signup,
                login,
                logout,
                resetAuthErr,
                addToCart,
                deleteCartItem,
                resetCartMsg
            }}>
            { props.children }
        </Context.Provider>
    )
}
