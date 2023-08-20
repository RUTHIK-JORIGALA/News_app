import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import "./login.css"
import { NewsContext } from '../../context/NewsContext'
function Login() {
  const newsContext = useContext(NewsContext);
  const {handleLogIn} = newsContext;
  return (
    <div className='loginOuter'>
      <div className="loginInner">
        <div className="left">
            <h1>Welcome to The Daily Buzz</h1>
            <p>Explore the worlds in seconds</p>

            <span>Get a glance over the spot news updates!</span>
            <Link to='/register'><button className="btn">Register</button></Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form action="submit" className="form">
                <input type="text" className="input" placeholder='Username'/>
                <input type="password" className="input" placeholder='password'/>
            </form>
            <button className="btn" onClick={handleLogIn}><Link to='/home' className='link'>Login</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Login
