import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='mainOuter'>
      <div className="registerInner">
        <div className="right">
            <h1>Register</h1>
            <form action="submit" className="form">
                <input type="text" className="input" placeholder='Username' />
                <input type="text" className="input" placeholder='Fullname'/>
                <input type="email" className="input" placeholder='email'/>
                <input type="password" className="input" placeholder='password'/>
            </form>
            <button className="btn">Register</button>
        </div>
        <div className="left">
            <h1>Welcome to The Daily Buzz</h1>
            <p>Explore the world in seconds </p>

            <span>Get a glance over the spot news updates!</span>
            <Link to='/login'><button className="btn">Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Register
