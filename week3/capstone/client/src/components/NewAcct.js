import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

export default function NewAcct(props) {

  const { token } = useContext(UserContext)

  const {
    handleChange, 
    handleSubmit, 
    btnText, 
    errMsg,
    inputs: {
      firstname,
      lastname,
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
          value={firstname} 
          name="firstname" 
          onChange={handleChange} 
          placeholder="First Name"
          required />
        <input 
          type="text" 
          value={lastname} 
          name="lastname" 
          onChange={handleChange} 
          placeholder="Last Name"
          required />
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
