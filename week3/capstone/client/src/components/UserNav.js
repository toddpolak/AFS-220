import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Provider'

export default function UserNav() {
    const { token, user, logout } = useContext(Context)

    return (
        <>
            {token ? 
                <>
                    <div className='welcome'>
                        Welcome {`${user.firstname}!`}
                    </div>
                    <div className='auth-display'>
                        <span>
                            <label className='link' onClick={logout}>Logout</label>
                        </span>
                    </div>
                </>
                :
                <Link to='/login'>LOGIN</Link>
            }
        </>
    )
}
