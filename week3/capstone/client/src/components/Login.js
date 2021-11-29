import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

export default function Login(props) {

  const { token } = useContext(UserContext)

  const {
      handleChange, 
      handleSubmit, 
      btnText, 
      errMsg,
      inputs: {
        username, 
        password
      } 
    } = props

    return (
      <div className='auth-container'>
        {token && (<Navigate to='/' replace={true} />)}
        <form onSubmit={handleSubmit}>
          <label className='err-msg'>{errMsg}</label>
            <input 
              type="text" 
              value={username} 
              name="username" 
              onChange={handleChange} 
              placeholder="Username"
              required />
            <input 
              type="text" 
              value={password} 
              name="password" 
              onChange={handleChange} 
              placeholder="Password"
              required />
            <button>{btnText}</button>
        </form>
      </div>
    )
}
