import React, { useState, useContext } from 'react'
import NewAcct from './NewAcct'
import Login from './Login'
import { useNavigate, useLocation, Navigate, useParams } from 'react-router-dom'
import { Context } from '../context/Provider'

const initLoginInputs = { username: '', password: '' }
const initNewAcctInputs = { firstname: '', lastname: '', username: '', password: ''}

export default function Auth(props) {

    const [loginInputs, setLoginInputs] = useState(initLoginInputs)
    const [newAcctInputs, setNewAcctInputs] = useState(initNewAcctInputs)
    const [toggle, setToggle] = useState(false)
    const { signup, login, errMsg, resetAuthErr } = useContext(Context)

    const location = useLocation()
    // const navigate = useNavigate()
    // const params = useParams()

    console.log('location: ', location)
    //console.log('props: ', props)
    // console.log('navigate: ', navigate)
    // console.log('params: ', params)

    function handleChangeLogin(e){
        const {name, value} = e.target
        setLoginInputs(prevInputs => ({
          ...prevInputs,
          [name]: value
        }))
    }

    function handleChangeNewAcct(e){
        const {name, value} = e.target
        setNewAcctInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleLogin(e){
        e.preventDefault()
        login(loginInputs)
    }
    
    function handleSignup(e){
        e.preventDefault()
        signup(newAcctInputs)
    }

    function toggleForm() {
        setToggle(prev => !prev)
        resetAuthErr()
    }

    return (
        <>
            { !toggle ?
                    <>
                        <h1>Login</h1>
                        <p className='link' onClick={toggleForm}>Need an account?</p>
                        <Login
                            handleChange={handleChangeLogin}
                            handleSubmit={handleLogin}
                            inputs={loginInputs}
                            btnText="Login"
                            errMsg={errMsg} />
                    </>
                :
                    <>
                        <h1>New Account</h1>
                        <p className='link' onClick={toggleForm}>Already have an account?</p>
                        <NewAcct
                            handleChange={handleChangeNewAcct}
                            handleSubmit={handleSignup}
                            inputs={newAcctInputs}
                            btnText="Create Account"
                            errMsg={errMsg} />
                    </>
            }   
        </>
    )
}
